import { styled } from "styled-components";

export const Cell = styled.div<CellProps>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $occupied, $hit, $sunk }) => {
    switch (true) {
      case $occupied:
        return `#478df7`
      case $hit:
        return `#eda70f`;
      case $sunk:
        return `#ff0a0a`;
      default:
        return `#fff`;
    }
  }};
  border: 1px solid #ccc;
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;
