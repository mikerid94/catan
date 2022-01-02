import { FC } from "react";
import styled from "styled-components";
import { Hexagon } from "./Hexagon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Board: FC = () => {
  return (
    <Container>
      <Row>
        <Hexagon position={6} />
        <Hexagon position={7} />
        <Hexagon position={8} />
      </Row>
      <Row>
        <Hexagon position={11} />
        <Hexagon position={12} />
        <Hexagon position={13} />
        <Hexagon position={14} />
      </Row>
      <Row>
        <Hexagon position={17} />
        <Hexagon position={18} />
        <Hexagon position={19} />
        <Hexagon position={20} />
        <Hexagon position={21} />
      </Row>
      <Row>
        <Hexagon position={24} />
        <Hexagon position={25} />
        <Hexagon position={26} />
        <Hexagon position={27} />
      </Row>
      <Row>
        <Hexagon position={30} />
        <Hexagon position={31} />
        <Hexagon position={32} />
      </Row>
    </Container>
  );
};
