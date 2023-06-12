import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactReducer';
import css from './ListElement.module.css';

const ListElement = ({ number, name, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={css.contacts__text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.contacts__btn}
        onClick={() => dispatch(deleteContact({ id }))}
      >
        Delete
      </button>
    </>
  );
};

export default ListElement;
