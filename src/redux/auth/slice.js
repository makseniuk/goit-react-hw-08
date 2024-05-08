import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

export const AUTH_INITIAL_STATE={
    user: {
        name: null,
        email: null,
    },
    token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
}

const handleRejected = (state) => {
  state.isLoading = false;
  state.isError = true;
}

const handlePending = (state) => {
  state.isLoading = true;
  state.isError = false;
}

const slice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
    extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      
      .addCase(register.rejected, handleRejected)
      .addCase(login.rejected, handleRejected)
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;})
        
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
           
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false; 
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
        
    .addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
      state.isLoading = true;
    }) 
  },

  
);

export const authReducer = slice.reducer;