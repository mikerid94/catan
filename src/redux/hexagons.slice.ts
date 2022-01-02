import { createSlice } from "@reduxjs/toolkit";

export interface HexagonsState {
  [index: number]: any;
}

const initialState: HexagonsState = {
  1: {},
};

export const HexagonsSlice = createSlice({
  name: "Hexagons",
  initialState,
  reducers: {},
});

export const hexagonsReducer = HexagonsSlice.reducer;
