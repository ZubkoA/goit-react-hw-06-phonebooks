import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterValue: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const filterReducer = filter.reducer;
export const { filterValue } = filter.actions;
