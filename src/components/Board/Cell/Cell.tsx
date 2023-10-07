import { styled } from "styled-components";

export const Cell = styled.div<CellProps>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $hit, $sunk }) => {
    switch (true) {
      case $hit:
        return `#ccc`;
      case $sunk:
        return `#ff0a0a`;
      default:
        return `#fff`;
    }
  }};
  border: 1px solid ${({ $occupied }) => ($occupied ? `#ff0000` : `#ccc`)};
  font-size: 1rem;
  font-weight: bold;
`;
