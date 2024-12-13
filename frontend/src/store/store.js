import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice.js";
import userReducer from "./slices/userSlice.js";
import applicationReducer from "./slices/applicationSlice.js";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    user: userReducer,
    applications: applicationReducer,
  },
});

export default store;
