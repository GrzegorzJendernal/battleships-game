interface Ship {
  name: string;
  id: number;
  length: number;
  hits: 0;
  sunk: boolean;
  orientation: "horizontal" | "vertical";
  selected: boolean;
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

interface BoardProps {
  boardState: Board;
  shipsState: Ship[];
  handleClick: (row: number, col: number) => void;
}

type GameState = "start" | "preparation" | "game" | "result";