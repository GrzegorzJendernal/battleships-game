import { useEffect } from "react";
import { useBoardState } from "../../utils/useBoardState";
import Board from "../Board/Board";
import ShipList from "../ShipList/ShipList";
import { allShipsAreSunk } from "../../utils/shipsHelpers";
import { Box } from "../Box/Box";

const EnemyBoard = ({ state, setState, turn, setTurn }: EnemyBoardProps) => {
  const { boardState, shipsState, handleShot } = useBoardState(setTurn);

  useEffect(() => {
    if (allShipsAreSunk(shipsState)) {
      setState("playerWin");
    }
  }, [shipsState]);

  return (
    <Box>
      <Board boardState={boardState} shipsState={shipsState} handleClick={turn ? handleShot : undefined} turn={turn} />
      <ShipList gameState={state} ships={shipsState} />
    </Box>
  );
};

export default EnemyBoard;
