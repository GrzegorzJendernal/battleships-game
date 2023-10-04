interface Ship {
  name: string;
  id: number;
  length: number;
  hit: boolean;
  sunk: boolean;
  orientation: "horizontal" | "vertical";
}

export const singleMastedShip: Ship = {
  name: "single-masted ship",
  id: 1,
  length: 1,
  hit: false,
  sunk: false,
  orientation: "horizontal",
};
export const twoMastedShip: Ship = {
  name: "two-masted ship",
  id: 1,
  length: 2,
  hit: false,
  sunk: false,
  orientation: "horizontal",
};
export const threeMastedShip: Ship = {
  name: "three-masted ship",
  id: 1,
  length: 3,
  hit: false,
  sunk: false,
  orientation: "horizontal",
};
export const fourMastedShip: Ship = {
  name: "four-masted ship",
  id: 1,
  length: 4,
  hit: false,
  sunk: false,
  orientation: "horizontal",
};
