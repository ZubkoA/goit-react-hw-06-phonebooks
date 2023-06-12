import React from 'react';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/contactReducer';
import css from './AddContacts.module.css';

const AddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contact = useSelector(state => state.contacts.contacts);
  console.log(contact);
  const state = useSelector(state => state.contacts);
  console.log(state);

  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    contact.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(createContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.container__form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>

      <input
        type="text"
        name="name"
        id={nameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor={numberId}>Number </label>
      <input
        type="tel"
        name="number"
        id={numberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={number}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default AddContacts;
