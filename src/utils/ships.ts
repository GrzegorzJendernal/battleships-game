export let ships: Ship[] = [];
export let playerShips: Ship[] = [];

const shipTypes = [
  { name: "single-masted ship", length: 1 },
  { name: "two-masted ship", length: 2 },
  { name: "three-masted ship", length: 3 },
  { name: "four-masted ship", length: 4 },
];

const shipCounts: Record<string, number> = {
  "single-masted ship": 4,
  "two-masted ship": 3,
  "three-masted ship": 2,
  "four-masted ship": 1,
};

let shipId = 1;
let playerShipId = 11;

const newShips: Ship[] = shipTypes.flatMap((shipType) => {
  const { name, length } = shipType;
  const count = shipCounts[name];

  return Array.from({ length: count }, () => ({
    name,
    id: shipId++,
    length,
    hits: 0,
    sunk: false,
    orientation: "horizontal",
    selected: false,
    placed: false,
  }));
});

const newPlayerShips: Ship[] = shipTypes.flatMap((shipType) => {
  const { name, length } = shipType;
  const count = shipCounts[name];

  return Array.from({ length: count }, () => ({
    name,
    id: playerShipId++,
    length,
    hits: 0,
    sunk: false,
    orientation: "horizontal",
    selected: false,
    placed: false,
  }));
});

ships = newShips;
playerShips = newPlayerShips;
