import React from "react";
import styled from "styled-components";
import { navbarLinks } from "../../constants/links";
import List from "../List";

export default function NavBar() {
  return (
    <StyledNavBar>
      <List items={navbarLinks} />
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
