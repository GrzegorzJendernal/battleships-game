interface Ship {
  name: string;
  id: number;
  length: number;
  hit: boolean;
  sunk: boolean;
  orientation: "horizontal" | "vertical";
}

type CellState = {
  ship?: Ship; // Jeśli komórka zawiera statek, to przypisujemy obiekt statku
  status: "empty" | "occupied" | "miss" | "hit"; // Status komórki: pusta, pudło, trafienie
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