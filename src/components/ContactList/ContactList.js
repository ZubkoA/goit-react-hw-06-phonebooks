import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListElement from '../ListElement/ListElement';
import { contactSelector } from '../../redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(contactSelector);
  const findFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const contact = findFilter();
  return (
    <ul className={css.contacts}>
      {contact.map(({ name, id, number }) => (
        <li className={css.contacts__item} key={id}>
          <ListElement name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
export default ContactList;
