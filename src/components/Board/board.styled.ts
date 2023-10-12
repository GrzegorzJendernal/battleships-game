import { styled } from "styled-components";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: auto repeat(10, 40px); /* 10 kolumn */
  grid-template-rows: auto repeat(10, 40px); /* 10 wierszy */
  width: max-content;
  margin: 20px auto;
  border: 2px solid #333;
`;
