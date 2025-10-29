import { useEffect, useState } from 'react'
import './Contact.css'
import axios from 'axios'
export default function Contact() {
    const [name, setName] = useState()
    const [contactnumber1, setContactNumber1] = useState()
    const [contactnumber2, setContactNumber2] = useState()
    const [contactnumber3, setContactNumber3] = useState()
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
    // useEffect(()=>{

    // })

    function handleOnSaveClick() {
        console.log(name, contactnumber1, contactnumber2, contactnumber3);
        axios.post("http://localhost:3001/contacts", {
            name: name,
            contactNumber1: contactnumber1,
            contactnumber2: contactnumber2,
            contactnumber3: contactnumber3
        })
            .then((response) => {
                console.log("Contact saved succesfully:", response.data);
            });




    }
    return (
        <div className='mostOuterBody'>
            <div className='inputfieldSection'>
                <div><label>Name</label></div>
                <div>  <input type='text' value={name} onChange={handleNameChange} /></div>
                <div> <label>Contact Number1</label></div>
                <div>  <input type='number' value={contactnumber1} onChange={handleContactNumber1Change} /></div>
                <div><label>Contact Number2 </label></div>
                <div>  <input type='number' value={contactnumber2} onChange={handleContactNumber2Change} /></div>
                <div><label>Contact Number3</label></div>
                <div>  <input type='number' value={contactnumber3} onChange={handleContactNumber3Change} /></div>
                <div className='buttonSection'>
                    <div><button className='contactScreenButtons' onClick={handleOnSaveClick}>Save</button></div>
                    <div><button className='contactScreenButtons'>Cancel</button></div>

                </div>
            </div>
        </div>
    )
}