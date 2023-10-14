import { useState } from "react";
import { useBoardState } from "../../utils/useBoardState";
import Board from "../Board/Board";
import ShipList from "../ShipList/ShipList";
import usePlayerBoardEffects from "../../utils/usePlayerBoardsEffects";
import { Buttons } from "./playerBoard.styled";
import { Box } from "../Box/Box";

const PlayerBoard = ({ state, setState, turn, setTurn }: PlayerBoardProps) => {
  const player = true;
  const [enemyShotAgain, setEnemyShotAgain] = useState(false);
  const { boardState, shipsState, setShipsState, handleShipPlacement, reset, setIsRandom, handleShot } = useBoardState(
    setTurn,
    player,
    setEnemyShotAgain,
  );
  usePlayerBoardEffects(turn, state, boardState, shipsState, enemyShotAgain, setEnemyShotAgain, setState, handleShot);

  if (state === "preparation")
    return (
      <div>
        <Board boardState={boardState} shipsState={shipsState} handleClick={handleShipPlacement} player={player} />
        <Buttons>
          <button onClick={() => reset()}>Clear Board</button>
          <button onClick={() => setIsRandom(true)}>Place ships randomly</button>
          <button onClick={() => setState("game")} disabled={shipsState.every((ship) => !ship.placed)}>
            START GAME
          </button>
        </Buttons>
        <ShipList gameState={state} ships={shipsState} setShips={setShipsState} />
      </div>
    );
  if (state === "game")
    return (
      <Box>
        <Board boardState={boardState} shipsState={shipsState} player={player} turn={turn} />
        <ShipList gameState={state} ships={shipsState} />
      </Box>
    );
};

export default PlayerBoard;
