interface Ship {
  name: string;
  id: number;
  length: number;
  hit: boolean;
  sunk: boolean;
  orientation: "horizontal" | "vertical";
}

type Board = (Ship | undefined)[][];



interface CellProps {
  $occupied?: boolean;
  $hit?: boolean;
  $sunk?: boolean;
  children?: string;
  id?: string;
  onClick?: () => void;
}