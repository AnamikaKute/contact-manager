import { useState } from "react";
import "./ContactList.css";
import axios from "axios";

export default function ContactListName() {
  const [contactlist, setContactlist] = useState([
    { name: "Ram", contactNumber: [23456788900987, 34567889989] },
    { name: "Lakshman", contactNumber: [67890544444, 78905432222] },
    { name: "Gita", contactNumber: [456789021, 678905432] },
    { name: "Sita", contactNumber: [5667895432187, 76543112233] },
  ]);
  
   

  return (
    <div className="contactListOuterBox">
      <div className="searchBox">
        <input placeholder="Search contact..." />
        <button>Search</button>
      </div>

      <div className="contactCards">
        {contactlist.map((singleContact, index) => (
          <div className="contactCard" key={index}>
            <div>Name: {singleContact.name}</div>
            <div>
              Contact Number:
              {singleContact.contactNumber.map((num, i) => (
                <div key={i}>{num}</div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
