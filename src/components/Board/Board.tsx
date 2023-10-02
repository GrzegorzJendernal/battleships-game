import React from "react";
import { BoardContainer, Cell } from "./board.styled";

const Board = () => {
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <BoardContainer>
      {/* Etykiety kolumn */}
      <Cell className="cell"></Cell> {/* Pusty górny lewy róg */}
      {columns.map((column, columnIndex) => (
        <Cell key={columnIndex} className="cell column-label">
          {column}
        </Cell>
      ))}
      {/* Plansza gry */}
      {rows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <Cell className="cell row-label">{row}</Cell>
          {columns.map((column, columnIndex) => (
            <Cell key={columnIndex} className="cell">
              
            </Cell>
          ))}
        </React.Fragment>
      ))}
    </BoardContainer>
  );
};

export default Board;
