import { createStore, AnyAction, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";

export interface State {
  tick: string;
}

// create your reducer
const reducer = (state: State = { tick: "init" }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case "TICK":
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context: Context) => {
  const reduxDevTools =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    undefined;
  return createStore(reducer, reduxDevTools);
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
