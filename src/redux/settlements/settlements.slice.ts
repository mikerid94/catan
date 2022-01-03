import { createSlice } from "@reduxjs/toolkit";

interface Settlement {
  position: string;
  player: number;
  type: "settlment" | "city";
}
const initialState: Settlement[] = [];

export const SettlementsSlice = createSlice({
  name: "Hexagons",
  initialState,
  reducers: {},
});

export const settlementsReducer = SettlementsSlice.reducer;
