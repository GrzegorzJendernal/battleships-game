import { useBoardState } from "../../utils/useBoardState";
import Board from "../Board/Board";
import ShipList from "../ShipList/ShipList";

const PlayerBoard = ({
  state,
  setState,
}: {
  state: GameState;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
}) => {
  const { boardState, shipsState, handleShot, handleShipPlacement } = useBoardState();

  if (state === "preparation")
    return (
      <>
        <Board boardState={boardState} shipsState={shipsState} handleClick={handleShipPlacement} />
        <ShipList gameState={state} shipsState={shipsState} />
      </>
    );
  if (state === "game") return <Board boardState={boardState} shipsState={shipsState} handleClick={handleShot} />;
};

export default PlayerBoard;
