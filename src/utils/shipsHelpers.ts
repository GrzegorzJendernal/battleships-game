export const selectShip = (setShips: React.Dispatch<React.SetStateAction<Ship[]>>, ships: Ship[], shipId: number) => {
  const newShips = [...ships];
  ships.forEach((ship) => (ship.id === shipId ? (ship.selected = true) : (ship.selected = false)));
  setShips(newShips);
};

export const rotateShip = (setShips: React.Dispatch<React.SetStateAction<Ship[]>>, ships: Ship[], shipId: number) => {
  const updatedShips = [...ships];
  const selectedShip = updatedShips.find((ship) => ship.id === shipId);
  if (!selectedShip) return;
  if (!selectedShip.selected) return;

  if (selectedShip.selected && selectedShip.orientation === "horizontal") {
    selectedShip.orientation = "vertical";
  } else {
    selectedShip.orientation = "horizontal";
  }
  setShips(updatedShips);
};
