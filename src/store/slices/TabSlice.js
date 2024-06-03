import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabSec: 0,
};

export const TabSlice = createSlice({
  name: "Tabs",
  initialState,
  reducers: {
    TabSecton: (state, action) => {
      state.tabSec = action.payload;
    },
  },
});

export const { TabSecton } = TabSlice.actions;

export default TabSlice.reducer;
