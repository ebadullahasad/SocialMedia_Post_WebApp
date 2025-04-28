import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./DarkModeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;