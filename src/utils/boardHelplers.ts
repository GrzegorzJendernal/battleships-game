import { columns, rows } from "./labels";

export const createEmptyBoard = (): Board => {
  return rows.map(() => columns.map(() => ({ status: "empty" })));
};

const isCellOccupied = (board: Board, row: number, col: number) => {
  const numRows = board.length;
  const numCols = board[0].length;

  if (row < 0 || col < 0 || row >= numRows || col >= numCols) {
    return false;
  }

  return board[row][col].status === "occupied";
};

const isDiagonalCellOccupied = (board: Board, row: number, col: number) => {
  return (
    isCellOccupied(board, row - 1, col - 1) ||
    isCellOccupied(board, row - 1, col + 1) ||
    isCellOccupied(board, row + 1, col - 1) ||
    isCellOccupied(board, row + 1, col + 1)
  );
};

export const canPlaceShip = (
  board: Board,
  ship: Ship,
  startRow: number,
  startCol: number,
  orientation: "horizontal" | "vertical",
): boolean => {
  const numRows = board.length;
  const numCols = board[0].length;
  const { length } = ship;

  if (orientation === "horizontal") {
    if (startCol + length > numCols) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      if (isCellOccupied(board, startRow, startCol + i)) {
        return false;
      }

      if (
        isCellOccupied(board, startRow - 1, startCol + i) ||
        isCellOccupied(board, startRow + 1, startCol + i) ||
        isCellOccupied(board, startRow, startCol + i - 1) ||
        isCellOccupied(board, startRow, startCol + i + 1) ||
        isDiagonalCellOccupied(board, startRow, startCol + i)
      ) {
        return false;
      }
    }
  } else {
    if (startRow + length > numRows) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      if (isCellOccupied(board, startRow + i, startCol)) {
        return false;
      }

      if (
        isCellOccupied(board, startRow + i - 1, startCol) ||
        isCellOccupied(board, startRow + i + 1, startCol) ||
        isCellOccupied(board, startRow + i, startCol - 1) ||
        isCellOccupied(board, startRow + i, startCol + 1) ||
        isDiagonalCellOccupied(board, startRow + i, startCol)
      ) {
        return false;
      }
    }
  }

  return true;
};
