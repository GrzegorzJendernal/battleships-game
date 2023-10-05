import { useEffect, useState } from "react";
import { canPlaceShip, createEmptyBoard } from "./boardHelplers";
import { ships } from "./ships";
import { columns, rows } from "./labels";

export const useBoardState = () => {
  const [boardState, setBoardState] = useState(createEmptyBoard());
  const [isInitialized, setIsInitialized] = useState(false);
  const getRandomCoordinate = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const placeShipsRandomly = () => {
    const newBoard = createEmptyBoard();

    for (const ship of ships) {
      let isPlaced = false;
      while (!isPlaced) {
        const startRow = getRandomCoordinate(rows.length);
        const startCol = getRandomCoordinate(columns.length);
        const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

        if (canPlaceShip(newBoard, ship, startRow, startCol, orientation)) {
          isPlaced = true;

          for (let i = 0; i < ship.length; i++) {
            if (orientation === "horizontal") {
              newBoard[startRow][startCol + i] = ship;
            } else {
              newBoard[startRow + i][startCol] = ship;
            }
          }
        }
      }
    }

    setBoardState(newBoard);
    setIsInitialized(true);
  };

  useEffect(() => {
    if (!isInitialized) {
      placeShipsRandomly();
    }
  }, [isInitialized]);

  return boardState;
};
