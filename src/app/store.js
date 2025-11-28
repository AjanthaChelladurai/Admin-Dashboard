
import { configureStore } from "@reduxjs/toolkit";
import chartPopupReducer from "../features/chartPopup/chartPopupSlice";

export const store = configureStore({
  reducer: {
    popup: chartPopupReducer,
  },
});
