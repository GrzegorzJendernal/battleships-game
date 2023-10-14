import { css, styled } from "styled-components";

export const ListBox = styled.div<{ $game: boolean }>`
  display: flex;
  justify-content: center;

  ${({ $game }) =>
    !!$game &&
    css`
      @media (max-width: 920px) {
        align-items: end;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li<ShipListStyledProps>`
  display: grid;
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

  ${({ $game }) =>
    $game
      ? css`
          grid-template-columns: 170px auto;
          justify-self: center;

          @media (max-width: 767px) {
            font-size: 0.6rem;
            grid-template-columns: auto 50px;
          }
        `
      : css`
          grid-template-columns: 170px 1fr 150px;

          @media (max-width: 767px) {
            font-size: 0.6rem;
            grid-template-columns: 100px 1fr 100px;
          }
        `}
`;

export const ShipName = styled.span<{ $game: boolean }>`
  font-weight: 700;
  text-transform: uppercase;

  ${({ $game }) =>
    !!$game &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `}
`;

export const ShipNumber = styled.span`
  display: none;

  @media (max-width: 767px) {
    display: inline;
    font-weight: 700;
  }
`;
