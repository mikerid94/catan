import { createSlice } from "@reduxjs/toolkit";

export interface Hexagon {
  resource: "empty" | "wheat" | "lumber" | "clay" | "rock" | "sheep" | "desert";
  diceRoll: 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | undefined;
  nodes: `${number}-${number}-${number}`[];
}

export interface HexagonsState {
  [index: number]: undefined | Hexagon;
}

const initialState: HexagonsState = {
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined,
  5: undefined,
  6: {
    resource: "rock",
    diceRoll: 10,
    nodes: ["1-2-6", "2-6-7", "6-7-12", "6-11-12", "5-6-11", "1-5-6"],
  },
  7: {
    resource: "sheep",
    diceRoll: 2,
    nodes: ["2-3-7", "3-7-8", "7-8-13", "7-12-13", "6-7-12", "2-6-7"],
  },
  8: {
    resource: "lumber",
    diceRoll: 9,
    nodes: ["3-4-8", "4-8-9", "8-9-14", "8-13-14", "7-8-13", "3-7-8"],
  },
  9: undefined,
  10: undefined,
  11: {
    resource: "wheat",
    diceRoll: 12,
    nodes: ["5-6-11", "6-11-12", "11-12-18", "11-17-18", "10-11-17", "5-10-11"],
  },
  12: {
    resource: "clay",
    diceRoll: 6,
    nodes: ["6-7-12", "7-12-13", "12-13-19", "12-18-19", "11-12-18", "6-11-12"],
  },
  13: {
    resource: "sheep",
    diceRoll: 4,
    nodes: ["7-8-13", "8-13-14", "13-14-20", "13-19-20", "12-13-19", "7-12-13"],
  },
  14: {
    resource: "clay",
    diceRoll: 10,
    nodes: ["8-9-14", "9-14-15", "14-15-21", "14-20-21", "13-14-20", "8-13-14"],
  },
  15: undefined,
  16: undefined,
  17: {
    resource: "wheat",
    diceRoll: 9,
    nodes: [
      "10-11-17",
      "11-17-18",
      "17-18-24",
      "17-23-24",
      "16-17-23",
      "10-11-17",
    ],
  },
  18: {
    resource: "lumber",
    diceRoll: 11,
    nodes: [
      "11-12-18",
      "12-18-19",
      "18-19-25",
      "18-24-25",
      "17-18-24",
      "11-17-18",
    ],
  },
  19: {
    resource: "desert",
    diceRoll: undefined,
    nodes: [
      "12-13-19",
      "13-19-20",
      "19-20-26",
      "19-25-26",
      "18-19-25",
      "12-18-19",
    ],
  },
  20: {
    resource: "lumber",
    diceRoll: 3,
    nodes: [
      "13-14-20",
      "14-20-21",
      "20-21-27",
      "20-26-27",
      "19-20-26",
      "13-19-20",
    ],
  },
  21: {
    resource: "rock",
    diceRoll: 8,
    nodes: [
      "14-15-21",
      "15-21-22",
      "21-22-28",
      "21-27-28",
      "20-21-27",
      "14-20-21",
    ],
  },
  22: undefined,
  23: undefined,
  24: {
    resource: "lumber",
    diceRoll: 8,
    nodes: [
      "17-18-24",
      "18-24-25",
      "24-25-30",
      "24-29-30",
      "23-24-29",
      "17-23-24",
    ],
  },
  25: {
    resource: "rock",
    diceRoll: 3,
    nodes: [
      "18-19-25",
      "19-25-26",
      "25-26-31",
      "25-30-31",
      "24-25-30",
      "18-24-25",
    ],
  },
  26: {
    resource: "wheat",
    diceRoll: 4,
    nodes: [
      "19-20-26",
      "20-26-27",
      "26-27-32",
      "26-31-32",
      "25-26-31",
      "19-25-26",
    ],
  },
  27: {
    resource: "sheep",
    diceRoll: 5,
    nodes: [
      "20-21-27",
      "21-27-28",
      "27-28-33",
      "27-32-33",
      "26-27-32",
      "20-26-27",
    ],
  },
  28: undefined,
  29: undefined,
  30: {
    resource: "clay",
    diceRoll: 5,
    nodes: [
      "24-25-30",
      "25-30-31",
      "30-31-35",
      "30-34-35",
      "29-30-34",
      "24-29-30",
    ],
  },
  31: {
    resource: "wheat",
    diceRoll: 6,
    nodes: [
      "25-26-31",
      "26-31-32",
      "31-32-36",
      "31-35-36",
      "30-31-35",
      "25-30-31",
    ],
  },
  32: {
    resource: "sheep",
    diceRoll: 11,
    nodes: [
      "26-27-32",
      "27-32-33",
      "32-33-37",
      "32-36-37",
      "31-32-36",
      "26-31-32",
    ],
  },
  33: undefined,
  34: undefined,
  35: undefined,
  36: undefined,
  37: undefined,
};

export const HexagonsSlice = createSlice({
  name: "Hexagons",
  initialState,
  reducers: {},
});

export const hexagonsReducer = HexagonsSlice.reducer;
