import { createSlice } from "@reduxjs/toolkit";

export type HandState = ("wheat" | "lumber" | "clay" | "rock" | "sheep")[];
const initialState: HandState = ["wheat"];

export const HandSlice = createSlice({
  name: "Hand",
  initialState,
  reducers: {},
});

export const handReducer = HandSlice.reducer;
