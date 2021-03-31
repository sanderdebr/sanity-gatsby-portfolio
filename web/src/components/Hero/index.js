import React from "react";
import styled from "styled-components";
import HeroBlock from "./HeroBlock";

export default function Hero({ title }) {
  return (
    <StyledHero>
      <ImageWrapper>
        <Title>{title}</Title>
        <HeroImage></HeroImage>
      </ImageWrapper>
      <HeroBlocksWrapper>
        <HeroBlocks>
          <HeroBlock
            title="Growth & Business Strategy"
            text="Compassion, social return on investment via a global, indicating
                scalable thought provoking by correlation indicating scalable,
                compelling growth."
          />
          <HeroBlock
            title="Branding & Digital"
            text="Compassion, social return on investment via a global, indicating scalable thought provoking by correlation indicating

            "
          />
          <HeroBlock
            title="Print, Pre-Processing & Editorial
            "
            text="Compassion, social return on investment via a global, indicating scalable thought provoking by correlation indicating scalable, compelling growth.

            "
          />
        </HeroBlocks>
      </HeroBlocksWrapper>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

const HeroImage = styled.div`
  z-index: 0;
  position: absolute;
  top: 35vh;
  width: 100%;
  height: 47.5vh;
  background-image: url("https://source.unsplash.com/1600x900/?building");
  background-repeat: no-repeat;
`;

const Title = styled.div`
  z-index: 1;
  position: absolute;
  top: 20vh;
  padding: 0 ${(props) => props.theme.containerSpacing};
  max-width: 1250px;
  width: 100%;
  font-size: 3.2rem;
  line-height: 4.1rem;
  font-weight: lighter;
  color: white;
`;

const HeroBlocksWrapper = styled.div`
  position: relative;
  margin-top: -8rem;
  padding: 0 ${(props) => props.theme.containerSpacing};
`;

const HeroBlocks = styled.div`
  display: flex;
  padding: 0 ${(props) => props.theme.containerSpacing};
`;
