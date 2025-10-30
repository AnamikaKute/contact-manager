import { useEffect, useState } from 'react'
import './Contact.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
export default function Contact() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [contactNumber1, setContactNumber1] = useState("")
    const [contactNumber2, setContactNumber2] = useState("")
    const [contactNumber3, setContactNumber3] = useState("")

    const navigateToContactList = () => {
        // navigate('/contactlist')
    }
    const navigateToHandleCancel = () => {
        navigate('/')
    }
    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleContactNumber1Change(event) {
        setContactNumber1(event.target.value)
    } function handleContactNumber2Change(event) {
        setContactNumber2(event.target.value)
    } function handleContactNumber3Change(event) {
        setContactNumber3(event.target.value)
    }


    function handleOnSaveClick() {
        console.log(name, contactNumber1, contactNumber2, contactNumber3);
        let contactObj = { name: name, contactList: [contactNumber1, contactNumber2, contactNumber3] };

        axios.post("http://localhost:3001/contacts",contactObj) 
            // name: name,
            // contactNumber1: contactNumber1,
            // contactNumber2: contactNumber2,
            // contactNumber3: contactNumber3
            .then((response) => {
                navigate('/contactlist');

                console.log("Contact saved succesfully:", response.data);
            });
       

    }
    return (
        <div className='mostOuterBody'>
            <div className='inputfieldSection'>
                <div><label>Name</label></div>
                <div>  <input type='text' value={name} onChange={handleNameChange} /></div>
                <div> <label>Contact Number1</label></div>
                <div>  <input type='number' value={contactNumber1} onChange={handleContactNumber1Change} /></div>
                <div><label>Contact Number2 </label></div>
                <div>  <input type='number' value={contactNumber2} onChange={handleContactNumber2Change} /></div>
                <div><label>Contact Number3</label></div>
                <div>  <input type='number' value={contactNumber3} onChange={handleContactNumber3Change} /></div>
                <div className='buttonSection'>
                    <div><button className='contactScreenButtons' onClick={handleOnSaveClick} >Save</button></div>
                    <div><button className='contactScreenButtons' onClick={navigateToHandleCancel}>Cancel</button></div>

                </div>
            </div>
        </div>
    )
}