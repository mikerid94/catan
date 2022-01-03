import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    toggleSettlement: (state, action: PayloadAction<string>) => {
      const node = action.payload;
      const settlement = state.find((x) => x.position === node);
      const settlementIndex = state.findIndex((x) => x.position === node);
      if (settlement === undefined) {
        state.push({
          position: node,
          player: 1,
          type: "settlement",
        });
      }
      if (settlement?.type === "settlement") {
        state.splice(settlementIndex, 1, { ...settlement, type: "city" });
      } else {
        if (settlement?.player === 1) {
          state.splice(settlementIndex, 1, {
            ...settlement,
            player: 2,
            type: "settlement",
          });
        }
        if (settlement?.player === 2) {
          state.splice(settlementIndex, 1, {
            ...settlement,
            player: 3,
            type: "settlement",
          });
        }
        if (settlement?.player === 3) {
          state.splice(settlementIndex, 1);
        }
      }
    },
  },
});

export const { toggleSettlement } = SettlementsSlice.actions;

export const settlementsReducer = SettlementsSlice.reducer;
