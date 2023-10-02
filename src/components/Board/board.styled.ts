import { styled } from "styled-components";

export const BoardContainer = styled.div`
display: grid;
grid-template-columns: auto repeat(10, 40px); /* 10 kolumn */
grid-template-rows: auto repeat(10, 40px); /* 10 wierszy */
gap: 2px; /* Odstępy między komórkami */
width: max-content;
margin: 20px auto;
border: 2px solid #333;
`;

export const Cell = styled.div`
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
