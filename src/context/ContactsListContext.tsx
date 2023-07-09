import { useState, createContext, useDebugValue } from "react";
import { IUser } from "../data/users-list"
import { IContact } from "../components/Contact";

interface IContactsListContext {
    availableContacts: IUser[],
    filteredContacts: IUser[],
    onContactAdded: (contact: IUser, isAdded: boolean) => void,
    onDataLoaded: (contactsList: IUser[]) => void,
    onInvitationSent: () => void,
    selectedContactsCount: number,
    onFilterConditionSet: (filterCondition: string) => void
}

export const ContactsListContext = createContext<IContactsListContext>({
    availableContacts: [],
    filteredContacts: [],
    onContactAdded: (contact: IUser, isAdded: boolean) => {},
    onDataLoaded: (contactsList: IUser[]) => {},
    onInvitationSent: () => {},
    selectedContactsCount: 0,
    onFilterConditionSet: (filterCondition: string) => {}
})

export const ContactsListState = ({children} : {children : React.ReactNode}) => {
    const [selectedContactsCount, setSelectedContactsCount] = useState<number>(0)
    const [availableContacts, setAvailableContacts] = useState<IUser[]>([])
    const [filteredContacts, setFilteredContacts] = useState<IUser[]>([])
    const [filterCondition, setFilterCondition] = useState<string>('')

    const onContactAdded = (contact: IUser, isAdded: boolean) => {
        if (isAdded) {
            setSelectedContactsCount(selectedContactsCount + 1)
        }
        else {
            setSelectedContactsCount(selectedContactsCount - 1)
        }
    }

    const onInvitationSent = () => {
        setSelectedContactsCount(0)
        availableContacts.forEach(contact => contact.isSelected = false)
        setAvailableContacts(availableContacts)
        setSelectedContactsCount(0)
    }

    const onDataLoaded = (contactsList: IUser[]) => {
        setAvailableContacts(contactsList)
        setFilteredContacts(contactsList)
    }

    const onFilterConditionSet = (filterCondition: string) => {
        setFilterCondition(filterCondition)

        console.debug(filterCondition)
        const filteredList = availableContacts.filter(contact => contact.name.toLowerCase().startsWith(filterCondition.toLowerCase()))
      
        console.debug(JSON.stringify(filteredList))

        setFilteredContacts(
            filteredList
        )
    }

    return (
        <ContactsListContext.Provider value={{filteredContacts, availableContacts, onContactAdded, onDataLoaded, selectedContactsCount, onFilterConditionSet, onInvitationSent}}>
            {children}
        </ContactsListContext.Provider>
    )

}