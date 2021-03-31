import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <StyledHero>
      <Title>
        A design driven agency with a knack for details. Ideally agile, data
        driven collaborations cultivate human-centered, socially inclusive
        solutions. We’re turning our creative challenges into solutions for a
        better sustainable earth. Checkout{" "}
      </Title>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  background-image: url("https://source.unsplash.com/1600x900/?nature,water");
  background-position-y: 325px;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
`;

const Title = styled.div`
  padding: 0 ${(props) => props.theme.containerSpacing};
  padding-top: 12rem;
  max-width: 1300px;
  width: 100%;
  font-size: 3.3rem;
  line-height: 4.3rem;
  font-weight: lighter;
  color: white;
`;
