import { FC } from "react";
import { Board } from "./Board";

export const Home: FC = () => {
  return (
    <>
      <Board />
      <label>
        Enter Dice Roll:
        <input type="number" />
      </label>
    </>
  );
};
