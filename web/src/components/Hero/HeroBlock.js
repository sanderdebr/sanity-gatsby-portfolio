import React from "react";
import styled from "styled-components";

export default function HeroBlock({ title, text }) {
  return (
    <StyledHeroBlock>
      <HeroBlockContent>
        <HeroBlockTitle>{title}</HeroBlockTitle>
        <HeroBlockText>{text}</HeroBlockText>
      </HeroBlockContent>
      <HeroBlockButton>Read more</HeroBlockButton>
    </StyledHeroBlock>
  );
}

const StyledHeroBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 33.33%;
  border: 1px solid white;
  color: white;
  background: black;
`;

const HeroBlockContent = styled.div`
  flex-basis: 100%;
  padding: ${(props) => props.theme.spacing};
`;

const HeroBlockTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 225px;
  padding-top: ${(props) => props.theme.spacing};
  font-size: 2.5rem;
  line-height: 3.3rem;
  font-weight: lighter;
`;

const HeroBlockText = styled.p`
  padding: 0;
  margin: 0;
  line-height: 1.8rem;
  font-size: 1.2rem;
`;

const HeroBlockButton = styled.div`
  padding: 1.7rem ${(props) => props.theme.spacing};
  border-top: 1px solid white;
`;
