import { css, styled } from "styled-components";

export const BoardContainer = styled.div<BoardContainerProps>`
  display: grid;
  grid-template-columns: auto repeat(10, 40px);
  grid-template-rows: auto repeat(10, 40px);
  width: max-content;
  margin: 20px auto;
  border: 2px solid #333;

  ${({ $playerTurn }) =>
    !$playerTurn &&
    css`
      filter: brightness(90%);
    `}

  @media (max-width: 767px) {
    grid-template-columns: auto repeat(10, 20px);
    grid-template-rows: auto repeat(10, 20px);
  }
`;

export const Title = styled.h2`
  text-align: center;
`;
