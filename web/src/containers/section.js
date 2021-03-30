import React from "react";
import styled from "styled-components";

export default function Section({ children, title = "" }) {
  return <StyledSection id={title}>{children}</StyledSection>;
}

const StyledSection = styled.section`
  width: 100%;
`;
