import { Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { hexagonsReducer, HexagonsState } from "./hexagons.slice";
import { configureStore } from "@reduxjs/toolkit";

export interface State {
  hexagons: HexagonsState;
}

// create a makeStore function
const makeStore = (context: Context) => {
  return configureStore({
    reducer: { hexagons: hexagonsReducer },
    devTools: true,
  });
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
