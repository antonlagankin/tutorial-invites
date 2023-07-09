import { useContext, useEffect, useState } from "react"
import { ContactsListContext } from "../context/ContactsListContext"
import { IUser, usersList } from '../data/users-list';
import { ContactsList } from "./ContactsList";
import searchIcon from '../img/search-interface-symbol.png'
import successButton from '../img/check.png'

export function ContactsForm() {
    const {onDataLoaded, selectedContactsCount, onInvitationSent, onFilterConditionSet, availableContacts} = useContext(ContactsListContext)
    const [filterCondition, setFilterCondition] = useState('')
    const [isSending, setIsSending] = useState(false)

    const [selectedContacts, setSelectedContacts] = useState<IUser[]>([])
  
    useEffect(() => {
      onDataLoaded(usersList)    
    }, [])

    function onFilterConditionChangeHandler(condition: string) {
        setFilterCondition(condition)
        onFilterConditionSet(condition)
    }

    function onSendHandler() {
        const selectedContacts = availableContacts.filter(
            contact => contact.isSelected
        )
        console.debug(`send invites ${selectedContacts.length}`)
        setIsSending(true)
        setSelectedContacts(selectedContacts)
    }

    function onBackHandler() {
        setSelectedContacts([])
        setIsSending(false)
        availableContacts.forEach(contact => contact.isSelected = false)
        onInvitationSent()
    }

    return (
        <div className='container'>
            {!isSending && <span>
                <div className="filter-container">
                    <span><img src={searchIcon} height="32x" width="32px"/></span>
                    <input className="filter-input" placeholder='Find user...' onChange={(x) => onFilterConditionChangeHandler(x.target.value)} value={filterCondition}/>
                </div>
                
                <ContactsList/>

                <button 
                        type='button' 
                        className="button" 
                        disabled = {selectedContactsCount <= 0} onClick={onSendHandler}>
                            Send invites
                </button>
            </span>}
            {isSending &&
                <span className="center-list">
                    <img src={successButton} width='50%' height='50%'/>
                    <h1 className="success-label">Success!!!</h1>
                    <h2 className="info-label">You have successfully sent {selectedContacts.length} invite{selectedContacts.length > 1 && 's'}.</h2>

                    <button 
                        type='button' 
                        className="button disabled-button" 
                        onClick={onBackHandler}>
                            Back
                </button>
                </span>
            }
        </div>
    )
}