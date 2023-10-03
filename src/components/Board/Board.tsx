import React from "react";
import { BoardContainer, Cell } from "./board.styled";

const Board = () => {
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <BoardContainer>
      {/* Etykiety kolumn */}
      <Cell></Cell> {/* Pusty górny lewy róg */}
      {columns.map((column, columnIndex) => (
        <Cell key={columnIndex}>
          {column}
        </Cell>
      ))}
      {/* Plansza gry */}
      {rows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <Cell>{row}</Cell>
          {columns.map((column, columnIndex) => (
            <Cell key={columnIndex} id={`${column}${row}`}>
              
            </Cell>
          ))}
        </React.Fragment>
      ))}
    </BoardContainer>
  );
};

export default Board;
