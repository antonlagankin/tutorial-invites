import { useContext, useEffect, useState } from "react"
import { Contact } from "./Contact"
import { ContactsListContext } from "../context/ContactsListContext"

export function ContactsList() {
    const {filteredContacts} = useContext(ContactsListContext)
    return (
        <div className='center-list'>
            {filteredContacts.map(contact => <Contact user={contact}/>)}
        </div>
    )
}