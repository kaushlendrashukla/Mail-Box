import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoggedIn: localStorage.getItem('idToken') ? true : false}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem('idToken')
    },
    login(state) {
      state.isLoggedIn = true;
    }
  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;