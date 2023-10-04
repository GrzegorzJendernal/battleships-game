import React from "react";
import { BoardContainer } from "./board.styled";
import Cell from "./Cell/Cell";
import { columns, rows } from "../../utils/labels";

const Board = () => {


  return (
    <BoardContainer>
      {/* Etykiety kolumn */}
      <Cell></Cell> {/* Pusty górny lewy róg */}
      {columns.map((column, columnIndex) => (
        <Cell key={columnIndex}>{column}</Cell>
      ))}
      {/* Plansza gry */}
      {rows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <Cell>{row}</Cell>
          {columns.map((column, columnIndex) => (
            <Cell
              key={columnIndex}
              id={`${column}${row}`}
              coordinate={+`${columnIndex}${rowIndex}`}
            >{`${+columnIndex}${+rowIndex}`}</Cell>
          ))}
        </React.Fragment>
      ))}
    </BoardContainer>
  );
};

export default Board;
