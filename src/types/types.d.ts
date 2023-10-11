interface Ship {
  name: string;
  id: number;
  length: number;
  hits: 0;
  sunk: boolean;
  orientation: "horizontal" | "vertical";
  selected: boolean;
  placed: boolean;
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
  handleClick?: (row: number, col: number) => void;
  setTurn?: React.Dispatch<React.SetStateAction<boolean>>;
  player?: boolean;
}

type GameState = "start" | "preparation" | "game" | "enemyWin" | "playerWin";

interface EnemyBoardProps {
  state: GameState;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
  setTurn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PlayerBoardProps {
  state: GameState;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
  turn: boolean;
  setTurn: React.Dispatch<React.SetStateAction<boolean>>;
}
