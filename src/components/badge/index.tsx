import React from "react";
import { Container, Title } from "./styles";
import { BadgeOptions } from "./types";

const Badge = ({ title }: BadgeOptions): JSX.Element => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default Badge;
