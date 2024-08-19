import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inpSlice from "./slices/inpSlice";
import outpSlice from "./slices/outpSlice";
const operationsStore = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {
    inpSlice: {},
    outpSlice: {},
  },
  reducer: combineReducers({
    inpSlice,
    outpSlice,
  }),
  //enhancers: [],
  //middleware: () => undefined,
});
export default operationsStore;
