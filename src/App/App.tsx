import { useState } from "react";
import { Container } from "../components/Container/Container";
import EnemyBoard from "../components/EnemyBoard/EnemyBoard";
import PlayerBoard from "../components/PlayerBoard/PlayerBoard";
import { GlobalStyle } from "./GlobalStyle";
import StartScreen from "../components/StartScreen/StartScreen";
import Result from "../components/Result/Result";

const App = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [playerTurn, setPlayerTurn] = useState(true);
  
  return (
    <>
      <GlobalStyle />
      <div>Tu będzie zajebiaszcza gra w statki</div>
      <Container>
        {gameState === "start" && <StartScreen setState={setGameState}/>}
        <PlayerBoard state={gameState} setState={setGameState} turn={playerTurn} setTurn={setPlayerTurn}/>
        {gameState === "game" && <EnemyBoard state={gameState} setState={setGameState} setTurn={setPlayerTurn}/>}
        {gameState === "enemyWin" && <Result state={gameState}/>}
        {gameState === "playerWin" && <Result state={gameState}/>}
      </Container>
    </>
  );
};

export default App;
