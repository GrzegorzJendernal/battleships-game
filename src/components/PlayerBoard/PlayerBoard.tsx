import { useState, useEffect } from "react";
import { useBoardState } from "../../utils/useBoardState";
import Board from "../Board/Board";
import ShipList from "../ShipList/ShipList";
import { enemyIsShooting } from "../../utils/enemyIsShooting";
import { allShipsAreSunk } from "../../utils/shipsHelpers";

const PlayerBoard = ({
  state,
  setState,
  turn,
  setTurn,
}: PlayerBoardProps) => {
  const player = true;
  const { boardState, shipsState, handleShipPlacement, reset, setIsRandom, handleShot } = useBoardState(player);
  const [playerShips, setPlayerShips] = useState(shipsState);

  useEffect(() => {
    if (!turn && state === "game") {
      enemyIsShooting(boardState, handleShot, setTurn);
    }
  }, [turn, state]);

  useEffect(() => {
    if (allShipsAreSunk(shipsState)) {
      setState("playerWin");
    }
  }, [shipsState]);

  if (state === "preparation")
    return (
      <>
        <Board boardState={boardState} shipsState={playerShips} handleClick={handleShipPlacement} player={player}/>
        <button onClick={() => reset()}>Clear Board</button>
        <button onClick={() => setIsRandom(true)}>Place ships randomly</button>
        <button onClick={() => setState("game")}>Start game</button>
        <ShipList gameState={state} ships={playerShips} setShips={setPlayerShips} />
      </>
    );
  if (state === "game")
    return (
      <>
        <Board boardState={boardState} shipsState={shipsState} player={player}/>
        <ShipList gameState={state} ships={playerShips} />
      </>
    );
};

export default PlayerBoard;
