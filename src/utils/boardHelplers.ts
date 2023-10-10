import { columns, rows } from "./labels";

export const createEmptyBoard = (): Board => {
  return rows.map(() => columns.map(() => ({ status: "empty" })));
};

const checkCellStatus = (status: Status, board: Board, row: number, col: number) => {
  const numRows = board.length;
  const numCols = board[0].length;

  if (row < 0 || col < 0 || row >= numRows || col >= numCols) {
    return false;
  }

  return board[row][col].status === status;
};

const checkDiagonalCellStatus = (status: Status, board: Board, row: number, col: number) => {
  return (
    checkCellStatus(status, board, row - 1, col - 1) ||
    checkCellStatus(status, board, row - 1, col + 1) ||
    checkCellStatus(status, board, row + 1, col - 1) ||
    checkCellStatus(status, board, row + 1, col + 1)
  );
};

export const canPlaceShip = (
  board: Board,
  ship: Ship,
  startRow: number,
  startCol: number,
  orientation: "horizontal" | "vertical",
  status: "occupied",
): boolean => {
  const numRows = board.length;
  const numCols = board[0].length;
  const { length } = ship;

  if (orientation === "horizontal") {
    if (startCol + length > numCols) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      if (checkCellStatus(status, board, startRow, startCol + i)) {
        return false;
      }

      if (
        checkCellStatus(status, board, startRow - 1, startCol + i) ||
        checkCellStatus(status, board, startRow + 1, startCol + i) ||
        checkCellStatus(status, board, startRow, startCol + i - 1) ||
        checkCellStatus(status, board, startRow, startCol + i + 1) ||
        checkDiagonalCellStatus(status, board, startRow, startCol + i)
      ) {
        return false;
      }
    }
  } else {
    if (startRow + length > numRows) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      if (checkCellStatus(status, board, startRow + i, startCol)) {
        return false;
      }

      if (
        checkCellStatus(status, board, startRow + i - 1, startCol) ||
        checkCellStatus(status, board, startRow + i + 1, startCol) ||
        checkCellStatus(status, board, startRow + i, startCol - 1) ||
        checkCellStatus(status, board, startRow + i, startCol + 1) ||
        checkDiagonalCellStatus(status, board, startRow + i, startCol)
      ) {
        return false;
      }
    }
  }

  return true;
};

export const isAdjacentCellSunk = (board: Board, row: number, col: number) => {
  if (
    checkCellStatus("sunk", board, row, col - 1) ||
    checkCellStatus("sunk", board, row, col + 1) ||
    checkCellStatus("sunk", board, row + 1, col) ||
    checkCellStatus("sunk", board, row - 1, col) ||
    checkDiagonalCellStatus("sunk", board, row, col)
  ) {
    return true;
  }
  return false;
};
