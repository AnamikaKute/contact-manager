import { useEffect, useState } from "react";
import "./ContactList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ContactList() {
  const navigate = useNavigate()
  // function handleCancel   =()=>{
  //   navigate('/')
  // }
  const [contactList, setContactList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  function handleSearchText(event) {
    setSearchText(event.target.value)
  }

  useEffect(() => {
    axios.get("http://localhost:3001/contacts")
      .then((response) => {
        // console.log("API response:", response.data);
        setContactList(response.data);
        setFilteredList(response.data)
      })
      .catch((error) => {
        console.log("Error fetching contacts:", error);
      });
  }, []);
  function handleSearchChange() {
  const filteredList = contactList.filter((singleContact) => {
    // convert to lowercase for case-insensitive search
    const nameLower = singleContact.name.toLowerCase();
    const searchLower = searchText.toLowerCase();

    if (nameLower.includes(searchLower)) {
      // {if name contains the typed text}
      return singleContact;
    } else if (singleContact.contactList?.some((num) => num.includes(searchText))) {
      //{ if any number contains the typed text}
      return singleContact;
    }
    else
    {
      return null; 
      // {if it does not found any match it would return null}
    }
  });

  setFilteredList(filteredList);
}

  return (
    <div className="contactListOuterBox">
      <div className="searchBox">
        <input type="text" placeholder="Search contact" value={searchText} onChange={handleSearchText} />
        <button onClick={handleSearchChange}>Search</button>
      </div>
      <div className="contactDetailsSection">
        {filteredList.map((singleContact) => {
          // console.log("Rendering contact:", singleContact);
          return (
            <div className="contactCards">
              <div className="contactCard">
                <div>{"Name: " + singleContact.name}</div>
                {singleContact.contactList?.map((singleNumber, index) => (
                  <div>{"Number " + (index + 1) + ": " + singleNumber}</div>
                ))}
              </div>
            </div>
          );
        })}

      </div>


    </div >

  );
}

