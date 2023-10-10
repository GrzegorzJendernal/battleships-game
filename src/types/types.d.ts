interface Ship {
  name: string;
  id: number;
  length: number;
  hits: 0;
  sunk: boolean;
  orientation: "horizontal" | "vertical";
}

type Status = "empty" | "occupied" | "miss" | "hit" | "sunk";

type CellState = {
  ship?: Ship; 
  status: Status;
};

type Board = CellState[][];

interface CellProps {
  $occupied?: boolean;
  $hit?: boolean;
  $sunk?: boolean;
  children?: string;
  id?: string;
  onClick?: () => void;
}
