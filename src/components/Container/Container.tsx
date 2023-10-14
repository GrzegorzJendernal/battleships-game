import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;