import React, { useEffect, useState } from "react";
import { BoardContainer } from "./board.styled";
import Cell from "./Cell/Cell";
import { columns, rows } from "../../utils/labels";

function createEmptyBoard() {
  return rows.map(() => columns.map(() => undefined));
}


const Board = () => {
  const [boardState, setBoardState] = useState(createEmptyBoard());

  useEffect(() => {
    const placeShipsRandomly = () => {
      // Tworzymy nową planszę w oparciu o aktualny stan
      const newBoard = createEmptyBoard();

      // Umieszczamy statki na nowej planszy
      // Tutaj możesz dostosować logikę rozmieszczania statków

      setBoardState(newBoard);
    };

    // Wywołaj funkcję rozmieszczania statków na planszy
    placeShipsRandomly();
  }, []);

  return (
    <BoardContainer>
      {/* Etykiety kolumn */}
      <Cell></Cell> {/* Pusty górny lewy róg */}
      {columns.map((column, columnIndex) => (
        <Cell key={columnIndex}>{column}</Cell>
      ))}
      {/* Plansza gry */}
      {boardState.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <Cell>{rows[rowIndex]}</Cell>
          {row.map((cell, columnIndex) => (
            <Cell
              key={columnIndex}
              id={`${columns[columnIndex]}${rows[rowIndex]}`}
              coordinate={+`${columnIndex}${rowIndex}`}
            >
              {cell}
            </Cell>
          ))}
        </React.Fragment>
      ))}
    </BoardContainer>
  );
};

export default Board;