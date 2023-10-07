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
              newBoard[startRow][startCol + i] = { status: "occupied", ship };
            } else {
              newBoard[startRow + i][startCol] = { status: "occupied", ship };
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

    if (cell.status === "empty") {
      // Pudło
      const newBoard = [...boardState]; // Tworzymy nową kopię planszy
      newBoard[row][col] = { status: "miss" }; // Aktualizujemy komórkę jako "miss"
      setBoardState(newBoard); // Ustawiamy nową planszę
      // Tutaj możesz zaktualizować odpowiednie statystyki i stan statków
    } else if (cell.ship && cell.status === "occupied") {
      // Trafienie
      const updatedShips = [...shipsState];
      const hitShip = updatedShips.find((ship) => ship.id === (cell.ship as Ship).id);
      if (hitShip) {
        hitShip.hits ++;
        if (hitShip.hits === hitShip.length) {hitShip.sunk = true};
        setShipsState(updatedShips);

        const newBoard = [...boardState]; 
        newBoard[row][col] = { status: "hit" }; 
        setBoardState(newBoard);
      };
    };
    // Tutaj możesz zaktualizować stan statków w stanie komponentu
    // np. setShipsState(newShipsState)
  };

  return { boardState, shipsState, handleShot };
};
