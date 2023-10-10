const ShipList = ({ shipsState, gameState }: { shipsState: Ship[]; gameState: GameState }) => {
  return (
    <div>
      <h2>Lista Statków</h2>
      <ul>
        {shipsState.map((ship) => (
          <li key={ship.id}>
            {ship.name} - {gameState === "game" && `${ship.hits > 0 ? "Trafiony" : "Nietrafiony"}`}{" "}
            {gameState === "preparation" && <>
            <button onClick={() => (ship.selected = true)}>select ship</button>
            <button onClick={() => (ship.orientation === "vertical" ? ship.orientation = "horizontal" : ship.orientation = "vertical")}>rotate</button>
            </>
            }{" "}
            {ship.sunk ? "Zatopiony" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
