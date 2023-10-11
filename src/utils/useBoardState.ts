import { useEffect, useState } from "react";
import { canPlaceShip, createEmptyBoard, getRandomCoordinate, isAdjacentCellSunk } from "./boardHelplers";
import { ships, playerShips } from "./ships";
import { columns, rows } from "./labels";

export const useBoardState = (player?: boolean) => {
  const [boardState, setBoardState] = useState(createEmptyBoard());
  const [isRandom, setIsRandom] = useState(!player ? true : false);
  const [shipsState, setShipsState] = useState(!player ? ships : playerShips);

  const reset = () => {
    setBoardState(createEmptyBoard());
    setShipsState(playerShips);
  };

  const placeShipsRandomly = () => {
    const newBoard = createEmptyBoard();
    const ships = [...shipsState];

    ships.forEach((ship) => {
      let isPlaced = false;
      while (!isPlaced) {
        const startRow = getRandomCoordinate(rows.length);
        const startCol = getRandomCoordinate(columns.length);
        const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

        if (canPlaceShip(newBoard, ship, startRow, startCol, orientation, "occupied")) {
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
    setIsRandom(false);
  };

  useEffect(() => {
    if (isRandom) {
      placeShipsRandomly();
    }
  }, [isRandom]);

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

  const boardWithMisses = (board: Board) => {
    const newBoard: Board = board.map((row, rowIndex) =>
      row.map((cell, columnIndex) => {
        if (cell.status === "empty" && isAdjacentCellSunk(board, rowIndex, columnIndex)) {
          return { ...cell, status: "miss" };
        }
        return cell;
      }),
    );

    return newBoard;
  };

  const handleShot = (row: number, col: number) => {
    const cell = boardState[row][col];

    if (cell.status === "empty") {
      const newBoard = [...boardState];
      newBoard[row][col] = { status: "miss" };
      setBoardState(newBoard);
    } else if (cell.ship && cell.status === "occupied") {
      const updatedShips = [...shipsState];
      const hitShip = updatedShips.find((ship) => ship.id === (cell.ship as Ship).id);

      if (hitShip) {
        hitShip.hits++;
        if (hitShip.hits === hitShip.length) {
          hitShip.sunk = true;
          const boardWithSunkShip: Board = markSunkShipCells(boardState, hitShip);
          setBoardState(boardWithMisses(boardWithSunkShip));
        } else {
          const newBoard = [...boardState];
          newBoard[row][col] = { ship: hitShip, status: "hit" };
          setBoardState(newBoard);
        }
        setShipsState(updatedShips);
      }
    }
  };

  const handleShipPlacement = (row: number, col: number) => {
    const selectedShip = shipsState.find((ship) => ship.selected);
    if (!selectedShip) return;

    const orientation = selectedShip.orientation;

    if (canPlaceShip(boardState, selectedShip, row, col, orientation, "occupied")) {
      const newBoard = [...boardState];

      Array.from({ length: selectedShip.length }).forEach((_, index) => {
        if (orientation === "horizontal") {
          newBoard[row][col + index] = { status: "occupied", ship: selectedShip };
        } else {
          newBoard[row + index][col] = { status: "occupied", ship: selectedShip };
        }
      });

      setBoardState(newBoard);

      const updatedShips = shipsState.map((ship) =>
        ship.id === selectedShip.id ? { ...ship, placed: true, selected: false } : ship,
      );
      setShipsState(updatedShips);
    }
  };

  return { boardState, shipsState, handleShot, handleShipPlacement, reset, setIsRandom };
};
