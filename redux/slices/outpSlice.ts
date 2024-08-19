import { createSlice } from "@reduxjs/toolkit";
import { TextAction, TextsState } from "../../lib/declarations/providerLocal";
export const outpSlice = createSlice({
  name: "outputs",
  initialState: {},
  reducers: {
    set: (s: TextsState, a: TextAction): void => {
      s[a.payload.k] = {
        v: a.payload.v,
        // ref: a.payload.ref,
      };
    },
    remove: (s: TextsState, a: TextAction): void => {
      delete s[a.payload.k];
    },
  },
});
export const { set, remove } = outpSlice.actions;
export default outpSlice.reducer;
