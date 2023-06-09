import React, { useEffect, useRef, useState } from 'react'
import Title from '../components/Title'
import ContactsData from "./Data.json"
import Contact from './Contact'

export default function FilterContactsApp() {


    const [searchContact, setSearchContact] = useState('')



    let inputSearch = useRef(null)
    useEffect(() => {
        inputSearch.current.focus()
    })
  return (
    <div className='text-center'>
        <Title text={"Filter Contacts App"}/>
        <input type="text" placeholder='Search by first name' className='mb-2' style={{padding: ".3rem .5rem"}} ref={inputSearch} onChange={(e) => setSearchContact(e.target.value)}/>
        <section className='d-flex' style={{gap:15,maxWidth:1600, margin:"auto", flexWrap: "wrap"}}>
            {ContactsData.filter((contact) => {
                if(searchContact === ""){
                    return contact
                } else if(contact.first_name.toLocaleLowerCase().includes(searchContact.toLocaleLowerCase())){
                    return contact
                }
            }).map((contact) => <Contact key={contact.id} contact={contact} cardColor={'card-danger'} textColor={"text-dark"}/> )}
        </section>
    </div>
  )
}
