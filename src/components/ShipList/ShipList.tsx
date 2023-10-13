import { selectShip, rotateShip } from "../../utils/shipsHelpers";
import { List, ListItem, ShipName } from "./shipList.styled";

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
      <List>
        {ships.map((ship) => (
          <ListItem key={ship.id} $selected={ship.selected} $placed={gameState === "preparation" && ship.placed} $hit={!ship.sunk && ship.hits > 0} $sunk={ship.sunk}>
            <ShipName>{ship.name}</ShipName> {gameState === "game" && `${ship.hits > 0 ? "hit" : "in full strength"}`}{" "}
            {gameState === "preparation" && setShips && (
              <>
                <button onClick={() => selectShip(setShips, ships, ship.id)} disabled={ship.placed}>
                  select ship
                </button>
                {ship.length > 1 && <button onClick={() => rotateShip(setShips, ships, ship.id)} disabled={ship.placed}>
                  rotate {ship.orientation === "horizontal" ? "verically" : "horizontally"}
                </button>}
              </>
            )}{" "}
            {ship.sunk ? "& sunk" : ""}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ShipList;
