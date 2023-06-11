import Header from './Header';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AddContacts from './AddContacts/AddContacts';
// import { nanoid } from 'nanoid';
import css from './App.module.css';

import React from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const addContact = (name, number) => {
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : setContacts(prev => [
          ...prev,
          {
            name,
            number,
          },
        ]);
  };
  // const findFilter = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  return (
    <div className={css.container}>
      <Header title="Phonebook" />
      <AddContacts addContact={addContact} />
      <Filter value={filter} onChange={handleChange} />
      <Header titleContacts="Contacts" />
      <ContactList />
    </div>
  );
};

export default App;
