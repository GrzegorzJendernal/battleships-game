import { useState } from "react";
import { Container } from "../components/Container/Container";
import EnemyBoard from "../components/EnemyBoard/EnemyBoard";
import PlayerBoard from "../components/PlayerBoard/PlayerBoard";
import { GlobalStyle } from "./GlobalStyle";
import StartScreen from "../components/StartScreen/StartScreen";

const App = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  return (
    <>
      <GlobalStyle />
      <div>Tu będzie zajebiaszcza gra w statki</div>
      <Container>
        {gameState === "start" && <StartScreen setState={setGameState}/>}
        <PlayerBoard state={gameState} setState={setGameState}/>
        {gameState === "game" && <EnemyBoard />}
      </Container>
    </>
  );
};

export default App;
