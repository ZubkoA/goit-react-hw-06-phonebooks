import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({ id: nanoid(), ...payload });
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
    },

    updateContact: (state, { payload }) => {
      state.contacts.map(contact =>
        contact.id === payload.id ? { ...contact, ...payload } : payload
      );
    },
  },
});

export const contactReducer = contacts.reducer;
export const { createContact, deleteContact, updateContact } = contacts.actions;
