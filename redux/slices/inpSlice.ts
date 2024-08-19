import { createSlice } from "@reduxjs/toolkit";
import { TextInpAction, TextInpsState } from "../../lib/declarations/providerLocal";
export const inpSlice = createSlice({
  name: "inputs",
  initialState: {},
  reducers: {
    set: (s: TextInpsState, a: TextInpAction): void => {
      s[a.payload.k] = {
        v: a.payload.v,
        // ref: a.payload.ref,
      };
    },
    remove: (s: TextInpsState, a: TextInpAction): void => {
      delete s[a.payload.k];
    },
  },
});
export const { set, remove } = inpSlice.actions;
export default inpSlice.reducer;
