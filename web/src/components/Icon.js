import React from "react";
import styled from "styled-components";

export default function Icon({ type, fill, marginTop }) {
  let icon;

  switch (type) {
    case "arrow":
      icon = ArrowIcon(fill);
  }

  return <StyledIcon marginTop={marginTop}>{icon}</StyledIcon>;
}

const StyledIcon = styled.div`
  margin-top: ${(props) => props.marginTop && "1.5rem"};
`;

const ArrowIcon = (fill) => (
  <svg
    fill="none"
    width="12"
    height="36"
    viewBox="0 0 12 36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.4375 0V34.1016L1.35938 29.9531L0.515625 30.8672L5.57812 36H6.42188L11.4844 30.8672L10.6406 30.0234L6.5625 34.1016V0H5.4375Z"
      fill={fill}
    ></path>
  </svg>
);
