import { useBoardState } from "../../utils/useBoardState";
import Board from "../Board/Board";

const EnemyBoard = () => {
  const { boardState, shipsState, handleShot } = useBoardState();
  return <Board boardState={boardState} shipsState={shipsState} handleClick={handleShot} />;
};

export default EnemyBoard;
