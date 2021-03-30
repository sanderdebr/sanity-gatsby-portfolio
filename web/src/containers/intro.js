import React from "react";
import styled from "styled-components";

export default function Intro() {
  return (
    <>
      <Top>
        <Left>
          <Logo>Remake</Logo>
        </Left>
        <Right>
          <NavBar>Nav items</NavBar>
          <ContactBlock>contact</ContactBlock>
        </Right>
      </Top>
      <Main>
        <HeroSideBox>
          <SideWaysSpan>Scroll</SideWaysSpan>
        </HeroSideBox>
        <Hero>Main content</Hero>
        <HeroSideBox>
          <SideWaysSpan left>Socials</SideWaysSpan>
        </HeroSideBox>
      </Main>
    </>
  );
}

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: pink;
  padding: ${props => props.theme.spacing};
`;

const Left = styled.div`
  background: purple;
`;

const Logo = styled.div``;

const Right = styled.div`
  display: flex;
  background: yellow;
`;

const NavBar = styled.nav``;

const ContactBlock = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeroSideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing};
  background: aqua;
`;

const SideWaysSpan = styled.span`
  transform: ${props => (props.left ? "rotate(90deg)" : "rotate(-90deg)")};
`;

const Hero = styled.div`
  flex-basis: ${props => props.theme.containerWidth};
  background: indigo;
  padding: 20rem;
`;
