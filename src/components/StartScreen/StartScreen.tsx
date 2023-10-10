import { Button, WelcomeImage } from "./startScreen.styled";

const StartScreen = ({ setState }: { setState: React.Dispatch<React.SetStateAction<GameState>> }) => {
  return (
    <WelcomeImage>
      <Button onClick={() => setState("preparation")}>Start Game</Button>
    </WelcomeImage>
  );
};

export default StartScreen;
