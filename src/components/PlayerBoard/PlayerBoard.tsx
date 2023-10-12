import { useState } from "react";
import { useBoardState } from "../../utils/useBoardState";
import Board from "../Board/Board";
import ShipList from "../ShipList/ShipList";
import usePlayerBoardEffects from "../../utils/usePlayerBoardsEffects";

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
      <>
        <Board boardState={boardState} shipsState={shipsState} handleClick={handleShipPlacement} player={player} />
        <button onClick={() => reset()}>Clear Board</button>
        <button onClick={() => setIsRandom(true)}>Place ships randomly</button>
        <button onClick={() => setState("game")}>Start game</button>
        <ShipList gameState={state} ships={shipsState} setShips={setShipsState} />
      </>
    );
  if (state === "game")
    return (
      <>
        <Board boardState={boardState} shipsState={shipsState} player={player} />
        <ShipList gameState={state} ships={shipsState} />
      </>
    );
};

export default PlayerBoard;
