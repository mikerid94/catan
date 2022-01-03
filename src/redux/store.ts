import { Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { hexagonsReducer, HexagonsState } from "./hexagons/hexagons.slice";
import { configureStore } from "@reduxjs/toolkit";
import {
  settlementsReducer,
  SettlementState,
} from "./settlements/settlements.slice";

export interface State {
  hexagons: HexagonsState;
  settlements: SettlementState;
}

// create a makeStore function
const makeStore = (context: Context) => {
  return configureStore({
    reducer: { hexagons: hexagonsReducer, settlements: settlementsReducer },
    devTools: true,
  });
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
