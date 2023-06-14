import React, { useState } from 'react'
import Title from '../components/Title'
import ContactList from './ContactList'
import { getContacts } from './db'
import SearchFilter from './SearchFilter'

export default function PhoneBookApp() {
    let dbContacts = getContacts()
    const [showContacts, setShowContacts] = useState(false)
    const [sortAZ, setSortAZ] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')

    const toggleContacts = () => {
        showContacts ? setShowContacts(false): setShowContacts(true)
    }

    const toggleSortAZ = () => {
        sortAZ ? setSortAZ(false) : setSortAZ(true)
    }
    const sortedContacts = sortAZ
    ? dbContacts.sort((a, b) => a.first_name.localeCompare(b.first_name))
    : dbContacts.sort((a, b) => b.first_name.localeCompare(a.first_name));


    const filterContacts = sortedContacts.filter((contact) => contact.first_name.toLowerCase().includes(searchQuery.toLowerCase()))
  return (
    <>
    <Title text={"Phone Book"}/>
    <main className="bg-dark text-light p-1">
        <SearchFilter handleToggleContacts={toggleContacts} handleSortContacts={toggleSortAZ} handleSearchChange={setSearchQuery}/>
        <div style={{height:600, overflow:"auto"}}>
            <h2 className="subtitle text-center">Display contacts</h2>
            {showContacts && <ContactList contacts={filterContacts}/>}
        </div>
    </main>
   </>
  )
}
