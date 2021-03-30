import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledNavBar>
      <StyledList>
        <a href="#">
          <StyledListItem>Home</StyledListItem>
        </a>
        <a href="#">
          <StyledListItem>Works</StyledListItem>
        </a>
        <a href="#">
          <StyledListItem>Blog</StyledListItem>
        </a>
        <a href="#">
          <StyledListItem>Pages</StyledListItem>
        </a>
        <a href="#">
          <StyledListItem>Features</StyledListItem>
        </a>
      </StyledList>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  padding: 0 ${props => props.theme.spacing};
  margin: 0;
  color: white;
  font-size: 1.2rem;
`;
