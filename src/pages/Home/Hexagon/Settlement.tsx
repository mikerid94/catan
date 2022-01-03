import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { toggleSettlement } from "../../../redux/settlements/settlements.slice";
import { State } from "../../../redux/store";

const settlementIndexMap: { [index: number]: FlattenSimpleInterpolation } = {
  0: css`
    top: -6px;
    left: 45px;
  `,
  1: css`
    top: 9px;
    left: 99px;
  `,
  2: css`
    top: 90px;
    left: 99px;
  `,
  3: css`
    top: 105px;
    left: 45px;
  `,
  4: css`
    top: 90px;
    left: -9px;
  `,
  5: css`
    top: 9px;
    left: -9px;
  `,
};

const playerMap: { [index: number]: string } = {
  0: "none",
  1: "white",
  2: "red",
  3: "blue",
};

const House = styled.div<{
  settlementIndex: number;
  player: number;
  type: "settlement" | "city" | undefined;
}>`
  height: 20px;
  width: 20px;
  background-color: ${(p) => playerMap[p.player]};
  position: absolute;
  ${(p) => settlementIndexMap[p.settlementIndex]}
  ${(p) => p.player !== 0 && `border: thin solid black;`}
  cursor: pointer;
  ${(p) => p.type === "settlement" && `border-radius: 100%`}
`;

export const Settlement: FunctionComponent<{
  settlementIndex: number;
  node: `${number}-${number}-${number}`;
}> = ({ settlementIndex, node }) => {
  const dispatch = useDispatch();
  const nodes = useSelector((state: State) => state.settlements);
  const settlement = nodes.find((x) => x.position === node);
  return (
    <House
      onClick={() => {
        dispatch(toggleSettlement(node));
      }}
      settlementIndex={settlementIndex}
      player={settlement?.player ?? 0}
      type={settlement?.type}
    />
  );
};
