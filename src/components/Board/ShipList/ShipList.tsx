const ShipList = ({ shipsState }: { shipsState: Ship[] }) => {
  return (
    <div>
      <h2>Lista Statków</h2>
      <ul>
        {shipsState.map((ship) => (
          <li key={ship.id}>
            {ship.name} - {ship.hits > 0 ? "Trafiony" : "Nietrafiony"}{" "}
            {ship.sunk ? "Zatopiony" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;