import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactReducer';
import { filterReducer } from './filter/filterReducer';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
