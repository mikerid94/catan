import { createSlice } from "@reduxjs/toolkit";

interface Settlement {
  position: string;
  player: number;
  type: "settlement" | "city";
}
const initialState: Settlement[] = [
  { position: "8-13-14", player: 1, type: "settlement" },
];

export const SettlementsSlice = createSlice({
  name: "Hexagons",
  initialState,
  reducers: {},
});

export const settlementsReducer = SettlementsSlice.reducer;
