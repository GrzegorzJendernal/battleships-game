import { useState } from "react";
import { Container } from "../components/Container/Container";
import EnemyBoard from "../components/EnemyBoard/EnemyBoard";
import PlayerBoard from "../components/PlayerBoard/PlayerBoard";
import { GlobalStyle } from "./GlobalStyle";
import StartScreen from "../components/StartScreen/StartScreen";
import { Header } from "../components/Header/Header";
import { Wrapper } from "../components/Wrapper/Wrapper";

const App = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [playerTurn, setPlayerTurn] = useState(true);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>BattleShips Game</Header>
      {(gameState === "start" || gameState === "playerWin" || gameState === "enemyWin") && (
          <StartScreen state={gameState} setState={setGameState} />
        )}
      <Container>
        <PlayerBoard state={gameState} setState={setGameState} turn={playerTurn} setTurn={setPlayerTurn} />
        {gameState === "game" && (
          <EnemyBoard state={gameState} setState={setGameState} turn={playerTurn} setTurn={setPlayerTurn} />
        )}
      </Container>
    </Wrapper>
  );
};

export default App;
