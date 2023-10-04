interface Ship {
  name: string;
  length: number;
  hit: boolean;
  sunk: boolean;
}

export const singleMastedShip: Ship = {name: "single-masted ship", length: 1, hit: false, sunk: false};
export const twoMastedShip: Ship = {name: "two-masted ship", length: 2, hit: false, sunk: false};
export const threeMastedShip: Ship = {name: "three-masted ship", length: 3, hit: false, sunk: false};
export const fourMastedShip: Ship = {name: "four-masted ship", length: 4, hit: false, sunk: false};