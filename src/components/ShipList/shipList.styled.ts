import { css, styled } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li<ShipListStyledProps>`
  display: grid;
  grid-template-columns: 170px 1fr 150px;
  grid-gap: 5px;
  margin-bottom: 5px;
  color: ${({ $hit, $sunk, $selected, $placed }) => {
    switch (true) {
      case $hit:
        return `#eda70f`;
      case $sunk:
        return `#ff0a0a`;
      case $selected:
        return `#478df7`;
      case $placed:
        return `#868686`;
      default:
        return `#000000`;
    }
  }};
  ${({ $sunk }) =>
    !!$sunk &&
    css`
      text-decoration: line-through;
    `}

    @media (max-width: 767px) {
    font-size: 0.6rem;
    grid-template-columns: 100px 1fr 100px;
  }
`;

export const ShipName = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`;
