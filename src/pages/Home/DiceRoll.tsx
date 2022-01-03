import { FC, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Hexagon } from "../../redux/hexagons/hexagons.slice";
import { State } from "../../redux/store";

const CAP_PLAYER_NUMBER = 3;
const DICE_SCORES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Die = styled.div`
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`;

const Dice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DiceRoll: FC = () => {
  const [diceRoll, setDiceRoll] = useState<number>();

  const resourcesGained = useSelector((state: State) => {
    let resources: Array<Hexagon["resource"]> = [];
    const capsSettlements = state.settlements.filter(
      (settlement) => settlement.player === CAP_PLAYER_NUMBER
    );
    const hexagons = state.hexagons;
    capsSettlements.forEach((settlement) => {
      settlement.position.split("-").forEach((item) => {
        const position = Number(item);
        if (hexagons[position]?.diceRoll === diceRoll) {
          const resource = hexagons[position]?.resource;
          resource && resources.push(resource);
        }
      });
    });
    return resources;
  });

  const gainedString = resourcesGained.length
    ? resourcesGained.join(", ")
    : "none";

  return (
    <Container>
      Player {CAP_PLAYER_NUMBER} roll:
      <Dice>
        {DICE_SCORES.map((score) => {
          return (
            <Die key={score} onClick={() => setDiceRoll(score)}>
              {score}
            </Die>
          );
        })}
      </Dice>
      <div>Resources gained: {gainedString}</div>
    </Container>
  );
};
