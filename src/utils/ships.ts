export let ships: Ship[] = [];

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

const newShips: Ship[] = shipTypes.flatMap((shipType) => {
  const { name, length } = shipType;
  const count = shipCounts[name];

  return Array.from({ length: count }, () => ({
    name,
    id: shipId++,
    length,
    hit: false,
    sunk: false,
    orientation: "horizontal",
  }));
});

// Przypisujemy nową tablicę do zmiennej ships
ships = newShips;
