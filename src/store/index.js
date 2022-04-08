import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./user";
import projectsReducer from "./projectsSlice";
import position from "./position";

const store = configureStore({
  reducer: {
    user: usersReducer,
    projects: projectsReducer,
    position: position
  }
});

export default store;
