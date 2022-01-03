import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
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
  1: "white",
  2: "red",
  3: "blue",
};

const House = styled.div<{ settlementIndex: number; player: number }>`
  height: 20px;
  width: 20px;
  background-color: ${(p) => playerMap[p.player]};
  position: absolute;
  ${(p) => settlementIndexMap[p.settlementIndex]}
  border: thin solid black;
`;

export const Settlement: FunctionComponent<{
  settlementIndex: number;
  node: `${number}-${number}-${number}`;
}> = ({ settlementIndex, node }) => {
  const nodes = useSelector((state: State) => state.settlements);
  const settlement = nodes.find((x) => x.position === node);
  if (settlement === undefined) return null;
  return <House settlementIndex={settlementIndex} player={settlement.player} />;
};
