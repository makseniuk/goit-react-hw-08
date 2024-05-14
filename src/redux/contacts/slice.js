import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, logOutAsync } from "./operations";
import toast from "react-hot-toast";

export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: ""
  },
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null; 
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true; 
};

const slice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(logOutAsync.pending, handlePending) 

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        toast('You add a new contact!', {
          style: {
            borderRadius: '10px',
            background: 'rgb(144, 26, 228)',
            color: '#fff',
          }
        });
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        toast(`You deleted ${action.payload.name}!`, {
          style: {
            borderRadius: '10px',
            background: 'rgb(144, 26, 228)',
            color: '#fff',
          }
        });
      })
      .addCase(logOutAsync.fulfilled, () => INITIAL_STATE.contacts) 

      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOutAsync.rejected, handleRejected); 
  },
});

export const contactsReducer = slice.reducer;