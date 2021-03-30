import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Icon from "../components/icon/Icon";
import List from "../components/List";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import { socialLinks } from "../constants/links";

export default function Intro() {
  return (
    <>
      <Top>
        <Logo />
        <Wrapper maxSpace justifyRight>
          <NavBar />
        </Wrapper>
        <Box textRight>
          <ContactBlock>
            hello@blocks.io <br /> +1 420 420 6969
          </ContactBlock>
        </Box>
      </Top>
      <Main>
        <SideBox column>
          <SideWays>Scroll</SideWays>
          <Icon type="arrow" fill="white" marginTop />
        </SideBox>
        <Wrapper>
          <Hero />
        </Wrapper>
        <SideBox>
          <SideWays left>
            <List items={socialLinks} />
          </SideWays>
        </SideBox>
      </Main>
    </>
  );
}

const Box = styled.div`
  display: flex;
  text-align: ${props => (props.textRight ? "right" : "left")};
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  padding: 0 ${props => props.theme.spacing};
  height: 10vh;
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
  width: 160px;
  background: aqua;

  flex-direction: ${props => (props.column ? "column" : "row")};
`;

const SideWays = styled.div`
  color: white;
  transform: ${props => (props.left ? "rotate(90deg)" : "rotate(-90deg)")};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 ${props => props.theme.containerSpacing};

  display: flex;
  flex-basis: ${props => props.takeSpace && "100%"};
  justify-content: ${props => (props.justifyRight ? "flex-end" : "center")};

  @media (min-width: ${props => props.theme.breakpoints.screenLG}) {
    width: ${props => props.theme.breakpoints.screenLG};
  }

  @media (min-width: ${props => props.theme.breakpoints.screenXL}) {
    width: ${props => props.theme.breakpoints.screenXL};
  }
`;
