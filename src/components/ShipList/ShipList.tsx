import { selectShip, rotateShip } from "../../utils/shipsHelpers";

const ShipList = ({
  ships,
  gameState,
  setShips,
}: {
  ships: Ship[];
  gameState: GameState;
  setShips?: React.Dispatch<React.SetStateAction<Ship[]>>;
}) => {
  return (
    <div>
      <h2>Lista Statków</h2>
      <ul>
        {ships.map((ship) => (
          <li key={ship.id}>
            {ship.name} - {gameState === "game" && `${ship.hits > 0 ? "Trafiony" : "Nietrafiony"}`}{" "}
            {gameState === "preparation" && setShips && (
              <>
                <button onClick={() => selectShip(setShips, ships, ship.id)} disabled={ship.placed}>
                  select ship
                </button>
                {ship.length > 1 && <button onClick={() => rotateShip(setShips, ships, ship.id)}>
                  rotate {ship.orientation === "horizontal" ? "verically" : "horizontally"}
                </button>}
              </>
            )}{" "}
            {ship.sunk ? "Zatopiony" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
