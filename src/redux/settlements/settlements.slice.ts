import { createSlice } from "@reduxjs/toolkit";
import { Settlement } from "../../pages/Home/Hexagon/Settlement";

interface Settlement {
  position: string;
  player: number;
  type: "settlement" | "city";
}
export type SettlementState = Settlement[];
const initialState: SettlementState = [
  { position: "11-12-18", player: 1, type: "settlement" },
  { position: "20-21-27", player: 1, type: "settlement" },
  { position: "8-13-14", player: 2, type: "settlement" },
  { position: "25-26-31", player: 2, type: "settlement" },
  { position: "24-25-30", player: 3, type: "settlement" },
  { position: "26-27-32", player: 3, type: "settlement" },
];

export const SettlementsSlice = createSlice({
  name: "Hexagons",
  initialState,
  reducers: {},
});

export const settlementsReducer = SettlementsSlice.reducer;
