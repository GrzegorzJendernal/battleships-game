import { useEffect, useState } from "react";
import { canPlaceShip, createEmptyBoard } from "./boardHelplers";
import { ships } from "./ships";
import { columns, rows } from "./labels";


export const useBoardState = () => {
  const [boardState, setBoardState] = useState(createEmptyBoard());
  const [isInitialized, setIsInitialized] = useState(false);
  const [shipsState, setShipsState] = useState(ships);


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

  const handleShot = (row: number, col: number) => {
    const cell = boardState[row][col];
  
    if (cell === undefined) {
      // Pudło
     
    } else {
      // Trafienie
      const hitShip = shipsState.find((ship) => ship.id === cell.id);
      if (hitShip) {
        hitShip.hit = true;
        // Tutaj możesz zaktualizować planszę, aby oznaczyć pole jako trafione, np. boardState[row][col] = "hit"
        // Sprawdź, czy statek został zatopiony, i jeśli tak, to zaktualizuj jego stan, np. hitShip.sunk = true
      }
    }
    // Tutaj możesz zaktualizować planszę i stan statków w stanie komponentu
    // np. setBoardState(newBoard) i setShipsState(newShipsState)
  };

  return { boardState, shipsState, handleShot, };
};
