import { createSlice } from '@reduxjs/toolkit';

const initialState = { mailData: [], firstTime: true, unreadMessageCount: 0 };

const mailSlice = createSlice({
  name: 'mail',
  initialState: initialState,
  reducers: {
    firstTime(state, action) {
      state.firstTime = action.payload;
    },
    replace(state, action) {
      state.mailData = action.payload.mailData;
      state.firstTime = false;
      state.unreadMessageCount = action.payload.unreadMessageCount;
    },
    add(state, action) {
      state.mailData = [action.payload, ...state.mailData];
    },
    remove(state, action) {
      state.mailData = state.mailData.filter(mail => mail.id !== action.payload.id);
    },
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;