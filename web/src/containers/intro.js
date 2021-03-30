import React from "react";
import styled from "styled-components";
import Icon from "../components/icon/Icon";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

export default function Intro() {
  return (
    <>
      <Top>
        <SideBox>
          <Logo />
        </SideBox>
        <Wrapper maxSpace justifyRight>
          <NavBar />
        </Wrapper>
        <SideBox>
          <ContactBlock>
            hello@blocks.io <br /> +1 420 420 6969
          </ContactBlock>
        </SideBox>
      </Top>
      <Main>
        <SideBox column>
          <SideWays>Scroll</SideWays>
          <Icon type="arrow" fill="white" marginTop />
        </SideBox>
        <Hero>
          <Wrapper>Main content</Wrapper>
        </Hero>
        <SideBox>
          <SideWays left>Socials</SideWays>
        </SideBox>
      </Main>
    </>
  );
}

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

const ContactBlock = styled.div`
  color: white;
  font-size: 1.4rem;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing};

  flex-direction: ${props => (props.column ? "column" : "row")};
`;

const SideWays = styled.div`
  color: white;
  transform: ${props => (props.left ? "rotate(90deg)" : "rotate(-90deg)")};
`;

const Hero = styled.div`
  background: indigo;
  padding: 20rem 0;
`;

const Wrapper = styled.div`
  width: ${props => props.theme.containerWidth};
  padding: 0 ${props => props.theme.containerSpacing};

  display: flex;
  flex-basis: ${props => props.takeSpace && "100%"};
  justify-content: ${props => (props.justifyRight ? "flex-end" : "center")};
`;
