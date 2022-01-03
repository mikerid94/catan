import { FC } from "react";
import { Board } from "./Board";
import { DiceRoll } from "./DiceRoll";

export const Home: FC = () => {
  return (
    <>
      <Board />
      <DiceRoll />
    </>
  );
};
