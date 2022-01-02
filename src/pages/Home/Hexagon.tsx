import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../redux/store";
import { Hexagon as HexagonType } from "../../redux/hexagons/hexagons.slice";

const colorMap: { [key in HexagonType["resource"]]: string } = {
  empty: "black",
  desert: "burlywood",
  wheat: "yellow",
  lumber: "green",
  clay: "orange",
  rock: "grey",
  sheep: "lightgreen",
};

const Wrapper = styled.div<{ resource: HexagonType["resource"] }>`
  width: 100px;
  margin: 4px;
  height: 115.47px;
  display: inline-block;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background-color: ${(p) => colorMap[p.resource]};
  margin-bottom: -24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DiceNumber = styled.div`
  text-shadow: 0px 0px 5px #ffffff;
`;
interface HexagonProps {
  position: number;
}
export const Hexagon: FunctionComponent<HexagonProps> = ({ position }) => {
  const hexagon = useSelector((state: State) => state.hexagons[position]);
  const resource = hexagon?.resource ?? "empty";
  const diceRoll = hexagon?.diceRoll;
  return (
    <Wrapper resource={resource}>
      <DiceNumber>{diceRoll}</DiceNumber>
    </Wrapper>
  );
};
