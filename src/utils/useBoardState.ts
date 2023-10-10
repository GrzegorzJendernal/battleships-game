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

    ships.forEach((ship) => {
      let isPlaced = false;
      while (!isPlaced) {
        const startRow = getRandomCoordinate(rows.length);
        const startCol = getRandomCoordinate(columns.length);
        const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

        if (canPlaceShip(newBoard, ship, startRow, startCol, orientation)) {
          isPlaced = true;

          Array.from({ length: ship.length }).forEach((_, index) => {
            if (orientation === "horizontal") {
              newBoard[startRow][startCol + index] = { status: "occupied", ship };
            } else {
              newBoard[startRow + index][startCol] = { status: "occupied", ship };
            }
          });
        }
      }
    });

    setBoardState(newBoard);
    setIsInitialized(true);
  };

  useEffect(() => {
    if (!isInitialized) {
      placeShipsRandomly();
    }
  }, [isInitialized]);

  const markSunkShipCells = (board: Board, ship: Ship) => {
    const newBoard: Board = board.map((row) =>
      row.map((cell) => {
        if (cell.ship && cell.ship.id === ship.id) {
          return { ...cell, status: "sunk" };
        }

        return cell;
      }),
    );

    return newBoard;
  };

  const handleShot = (row: number, col: number) => {
    const cell = boardState[row][col];
    const newBoard = [...boardState];
    setBoardState(newBoard);
    if (cell.status === "empty") {
      newBoard[row][col] = { status: "miss" };
    } else if (cell.ship && cell.status === "occupied") {
      const updatedShips = [...shipsState];
      const hitShip = updatedShips.find((ship) => ship.id === (cell.ship as Ship).id);
      if (hitShip) {
        hitShip.hits++;
        if (hitShip.hits === hitShip.length) {
          hitShip.sunk = true;
          setBoardState(markSunkShipCells(boardState, hitShip));
        } else {
          const newBoard = [...boardState];
          newBoard[row][col] = { ship: hitShip, status: "hit" };
          setBoardState(newBoard);
          setShipsState(updatedShips);
        }
        setShipsState(updatedShips);
      }
    }
  };

  return { boardState, shipsState, handleShot };
};
