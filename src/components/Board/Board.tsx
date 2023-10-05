import { BoardContainer } from "./board.styled";
import Cell from "./Cell/Cell";
import { columns, rows } from "../../utils/labels";
import { useBoardState } from "../../utils/useBoardState";
import React from "react";



const Board = () => {
  const boardState = useBoardState();

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
              occupied={cell !== undefined}
            ></Cell>
          ))}
        </React.Fragment>
      ))}
    </BoardContainer>
  );
};

export default Board;
