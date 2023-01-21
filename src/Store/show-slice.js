import { createSlice } from "@reduxjs/toolkit";

const initialState = {compose: true, sent: false, received: false};

const showSlice = createSlice({
  name: 'show',
  initialState: initialState,
  reducers: {
    compose(state) {
      state.compose = true;
      state.sent = false;
      state.received = false;
    },
    sent(state) {
      state.compose = false;
      state.sent = true;
      state.received = false;
    },
    received(state) {
      state.compose = false;
      state.sent = false;
      state.received = true;
    }
  }
})

export const showActions = showSlice.actions;
export default showSlice.reducer;