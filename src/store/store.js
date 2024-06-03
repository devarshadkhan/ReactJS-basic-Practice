import { configureStore } from "@reduxjs/toolkit";
import TabSlice from "./slices/TabSlice";

const store = configureStore({
  reducer: {
    TabSlice: TabSlice,
  },
});

export default store;
