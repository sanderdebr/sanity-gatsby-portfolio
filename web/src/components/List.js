import React from "react";
import styled from "styled-components";

export default function List({ items }) {
  return (
    <StyledList>
      {items.map((item, i) => (
        <a href={item.link} key={i}>
          <StyledListItem>{item.title}</StyledListItem>
        </a>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  padding: 0 ${(props) => props.theme.spacing};
  margin: 0;
  color: white;
  font-size: 1.2rem;
`;
