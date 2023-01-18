import { createSlice } from "@reduxjs/toolkit";

const initialState = {mailData: []}
const mailSlice = createSlice({
    name: 'mail',
    initialState: initialState,
    reducers: {
        add (state, action) {
            state.mailData = [action.payload, ...state.mailData];
        },
        
    }
})
export const mailActions = mailSlice.actions

export default mailSlice.reducer