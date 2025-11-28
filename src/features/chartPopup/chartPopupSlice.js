import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  chartType: "",
};

const chartPopupSlice = createSlice({
  name: "chartPopup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.chartType = action.payload;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.chartType = "";
    },
  },
});

export const { openPopup, closePopup } = chartPopupSlice.actions;
export default chartPopupSlice.reducer;
