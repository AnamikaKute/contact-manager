import { useEffect, useState } from "react";
import "./ContactList.css";
import axios from "axios";

export default function ContactListName() {
  const [contactlist, setContactList] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/contacts")
    .then((response)=>{
      setContactList(response.data)
    }),[]
  })
//   function handleCancel(){
// Navigate('/')
//   }
   

  return (
    <div className="contactListOuterBox">
      <div className="searchBox">
        <input placeholder="Search contact" />
        <button>Search</button>
      </div>

      <div className="contactCards">
        
        <div className="innerCard">
          <div> {"Name" + ":" + singleContact.name}</div>
          {contactlist.map((singleNumber,index)=>{
            <div>{"Number" +(index+1)+":" +singleNumber} </div>
          })}
        </div>
        


      </div>
    </div>
  );
}
