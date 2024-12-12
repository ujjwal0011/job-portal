import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice.js";
import userReducer from "./slices/userSlice.js";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    user: userReducer,
  },
});

export default store;
