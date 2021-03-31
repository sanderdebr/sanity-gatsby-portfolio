import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import GlobalStyles from "../styles/GlobalStyles";

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme.dark}>
        <StyledMain>{children}</StyledMain>
        <footer>
          <div>
            © {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.sanity.io">Sanity</a> &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </ThemeProvider>
    </>
  );
}

const StyledMain = styled.main`
  width: 100%;
  background: green;
  display: flex;
  justify-content: center;
`;

export default Layout;
