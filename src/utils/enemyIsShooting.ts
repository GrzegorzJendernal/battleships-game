import { getRandomCoordinate } from "./boardHelplers";

export const enemyIsShooting = (
  boardState: Board,
  handleShot: (row: number, col: number) => void,
) => {
  const newBoard = [...boardState];
  const numRows = newBoard.length;
  const numCols = newBoard[0].length;
  let targetRow = -1;
  let targetCol = -1;

  newBoard.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell.status === "hit" && targetRow === -1 && targetCol === -1) {
        const neighbors = [
          { row: rowIndex - 1, col: colIndex },
          { row: rowIndex + 1, col: colIndex },
          { row: rowIndex, col: colIndex - 1 },
          { row: rowIndex, col: colIndex + 1 },
        ];

        neighbors.forEach((neighbor) => {
          const { row: nRow, col: nCol } = neighbor;
          if (nRow >= 0 && nRow < numRows && nCol >= 0 && nCol < numCols) {
            const neighborCell = newBoard[nRow][nCol];
            if (neighborCell.status === "empty" || neighborCell.status === "occupied") {
              targetRow = nRow;
              targetCol = nCol;
            }
          }
        });
      }
    });
  });

  if (targetRow !== -1 && targetCol !== -1) {
    handleShot(targetRow, targetCol);
  } else {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const randomRow = getRandomCoordinate(numRows);
      const randomCol = getRandomCoordinate(numCols);
      const cell = newBoard[randomRow][randomCol];

      if (cell.status === "empty" || cell.status === "occupied") {
        handleShot(randomRow, randomCol);
        break;
      }
    }
  }
};