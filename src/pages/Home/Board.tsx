import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Hexagone = styled.div`
  width: 100px;
  margin: 4px;
  height: 115.47px;
  display: inline-block;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background-color: burlywood;
  margin-bottom: -24px;
`;

export const Board: FC = () => {
  return (
    <Container>
      <Row>
        <Hexagone />
        <Hexagone />
        <Hexagone />
      </Row>
      <Row>
        <Hexagone />
        <Hexagone />
        <Hexagone />
        <Hexagone />
      </Row>
      <Row>
        <Hexagone />
        <Hexagone />
        <Hexagone />
        <Hexagone />
        <Hexagone />
      </Row>
      <Row>
        <Hexagone />
        <Hexagone />
        <Hexagone />
        <Hexagone />
      </Row>
      <Row>
        <Hexagone />
        <Hexagone />
        <Hexagone />
      </Row>
    </Container>
  );
};
