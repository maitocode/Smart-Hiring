import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./user";

const store = configureStore({
  reducer: {
    user: usersReducer
  }
});

export default store;
