import { styled } from "styled-components";

export const StyledCell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-weight: bold;

  /* Dodatkowe style dla etykiet kolumn i wierszy */
  &.column-label,
  &.row-label {
    background-color: #eee;
  }
`;