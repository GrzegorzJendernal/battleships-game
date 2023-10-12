import { useEffect } from "react";
import { useBoardState } from "../../utils/useBoardState";
import Board from "../Board/Board";
import ShipList from "../ShipList/ShipList";
import { allShipsAreSunk } from "../../utils/shipsHelpers";

const EnemyBoard = ({
  state,
  setState,
  setTurn,
}: EnemyBoardProps) => {
  const { boardState, shipsState, handleShot } = useBoardState(setTurn);

  useEffect(() => {
    if (allShipsAreSunk(shipsState)) {
      setState("playerWin");
    }
  }, [shipsState]);

  return (
    <>
      <Board boardState={boardState} shipsState={shipsState} handleClick={handleShot}/>
      <ShipList gameState={state} ships={shipsState} />
    </>
  );
};

export default EnemyBoard;
