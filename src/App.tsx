import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import searchIcon from './img/search-interface-symbol.png'
import { IUser, usersList } from './data/users-list';
import { ContactsList } from './components/ContactsList';
import { ContactsListContext } from './context/ContactsListContext';
import { ContactsForm } from './components/ContactsForm';

export default function App() {

  const {onDataLoaded, selectedContactsCount} = useContext(ContactsListContext)
  
  useEffect(() => {
    onDataLoaded(usersList)    
  }, [])

  return (
    <ContactsForm/>
  )
}
