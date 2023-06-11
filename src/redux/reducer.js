import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactReducer';

export const reducer = combineReducers({
  contacts: contactReducer,
});
