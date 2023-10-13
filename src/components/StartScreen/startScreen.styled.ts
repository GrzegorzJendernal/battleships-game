import { styled } from "styled-components";
import welcome from "../../assets/welcome.jpg";

export const WelcomeImage = styled.div`
  background-image: url(${welcome});
  background-size: 100%;
  max-width: 1024px;
  width: 80vw;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
`;

export const Button = styled.button`
  margin-top: 5%;
  color: #ffffff;
  background-color: teal;
  padding: 10px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.5rem;
  width: 90%;

  &:hover {
    background-color: hsl(180, 100%, 35%);
    transition: 1s;
    transform: scale(1.1);
  }

  &:active {
    outline: solid 2px #000000;
  }
`;
