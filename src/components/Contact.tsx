import { useContext, useState } from "react"
import { IUser } from "../data/users-list"
import { ContactsListContext } from "../context/ContactsListContext"

export interface IContact {
    user: IUser
}

export function Contact({user}: IContact) {
    const [userSelected, setUserSelected] = useState(user.isSelected)

    const contactsListContext = useContext(ContactsListContext)

    return (<div className="w-full flex px-10 py-4" key={user.id}>
        <div className="relative mx-auto rounded-full overflow-hidden">
            <img src={user.image} height="64x" width="64px"/>
        </div>
        <span className='w-4/6 text-left mx-4'>
            <div className="text-xl font-extrabold text-gray-700">{user.name}</div>
            <div className="text-gray-400">{user.email}</div>
        </span>
        <button className='w-1/6 flex items-center justify-center text-gray-400 text-5xl' 
            onClick={() => {
                user.isSelected = !userSelected
                setUserSelected(!userSelected)
                contactsListContext.onContactAdded(user, !userSelected)
            }}>
            {userSelected ? '-' : '+'}
        </button>
    </div>)
}