interface Ship {
  name: string;
  id: number;
  length: number;
  hits: 0;
  sunk: boolean;
  orientation: "horizontal" | "vertical";
}

type CellState = {
  ship?: Ship; // Jeśli komórka zawiera statek, to przypisujemy obiekt statku
  status: "empty" | "occupied" | "miss" | "hit" | "sunk"; // Status komórki: pusta, pudło, trafienie
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