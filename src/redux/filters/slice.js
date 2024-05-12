import { INITIAL_STATE } from '../contacts/slice';
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    }
  }
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;

