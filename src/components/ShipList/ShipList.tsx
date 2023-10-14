import { selectShip, rotateShip } from "../../utils/shipsHelpers";
import { List, ListBox, ListItem, ShipName, ShipNumber } from "./shipList.styled";

const ShipList = ({
  ships,
  gameState,
  setShips,
}: {
  ships: Ship[];
  gameState: GameState;
  setShips?: React.Dispatch<React.SetStateAction<Ship[]>>;
}) => (
  <ListBox $game={gameState === "game"}>
    <List>
      {ships.map((ship) => (
        <ListItem
          key={ship.id}
          $selected={ship.selected}
          $placed={gameState === "preparation" && ship.placed}
          $hit={!ship.sunk && ship.hits > 0}
          $sunk={ship.sunk}
          $game={gameState === "game"}
        >
          <ShipName $game={gameState === "game"}>{ship.name}</ShipName>
          {gameState === "game" && <ShipNumber>{ship.length}</ShipNumber>}{" "}
          {gameState === "game" && `${ship.hits > 0 ? "hit" : "whole"}`}{" "}
          {gameState === "preparation" && setShips && (
            <>
              <button onClick={() => selectShip(setShips, ships, ship.id)} disabled={ship.placed}>
                select ship
              </button>
              {ship.length > 1 && (
                <button onClick={() => rotateShip(setShips, ships, ship.id)} disabled={ship.placed}>
                  rotate {ship.orientation === "horizontal" ? "verically" : "horizontally"}
                </button>
              )}
            </>
          )}{" "}
          {ship.sunk ? "& sunk" : ""}
        </ListItem>
      ))}
    </List>
  </ListBox>
);

export default ShipList;
