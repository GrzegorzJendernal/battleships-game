import { Button, Image } from "./startScreen.styled";

const StartScreen = ({
  state,
  setState,
}: {
  state: GameState;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
}) => {
  return (
    <>
      {state === "playerWin" && <h2>Congratulations! You win!</h2>}
      {state === "enemyWin" && <h2>You lost. 😟 Do you want to try again?</h2>}
      <Image $state={state}>
        <Button onClick={() => setState("preparation")}>Start Game</Button>
      </Image>
    </>
  );
};

export default StartScreen;
