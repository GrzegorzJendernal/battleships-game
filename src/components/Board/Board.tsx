import { BoardContainer } from "./board.styled";
import { Cell } from "./Cell/Cell";
import { columns, rows } from "../../utils/labels";
import React from "react";

const Board = ({ boardState, handleClick, setTurn, player }: BoardProps) => {
  const onCellClick = (row: number, col: number) => {
    !!handleClick && handleClick(row, col);
    !!setTurn && setTurn(false);
  };

  return (
    <>
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
                $occupied={player && cell.status === "occupied"}
                $hit={cell.status === "hit"}
                $sunk={cell.status === "sunk"}
                onClick={() => onCellClick(rowIndex, columnIndex)}
              >
              {cell.status === "miss" ? "*" : ""} 
              </Cell>
            ))}
          </React.Fragment>
        ))}
      </BoardContainer>
    </>
  );
};

export default Board;
