import { useState } from "react";
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
  const player = true;
  const { boardState, shipsState, handleShot, handleShipPlacement, reset, setIsRandom } = useBoardState(player);
  const [playerShips, setPlayerShips] = useState(shipsState);
  
  if (state === "preparation")
    return (
      <>
        <Board boardState={boardState} shipsState={playerShips} handleClick={handleShipPlacement} />
        <button onClick={() => reset()}>Clear Board</button>
        <button onClick={() => setIsRandom(true)}>Place ships randomly</button>
        <button onClick={() => setState("game")}>Start game</button>
        <ShipList gameState={state} ships={playerShips} setShips={setPlayerShips}/>
      </>
    );
  if (state === "game") return <Board boardState={boardState} shipsState={shipsState} handleClick={handleShot} />;
};

export default PlayerBoard;
