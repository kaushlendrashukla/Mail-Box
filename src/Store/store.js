import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth-slice';
import showReducer from './show-slice';
import mailReducer from './mail-slice';

const store = configureStore({
  reducer: {auth: authReducer, show: showReducer, mail: mailReducer}
})

export default store;