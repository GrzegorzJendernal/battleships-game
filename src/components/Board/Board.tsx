import { BoardContainer } from "./board.styled";
import { Cell } from "./Cell/Cell";
import { columns, rows } from "../../utils/labels";
import { useBoardState } from "../../utils/useBoardState";
import React from "react";
import ShipList from "./ShipList/ShipList";

const Board = () => {
  const { boardState, shipsState, handleShot } = useBoardState();

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
                $occupied={cell.status === "occupied"}
                $hit={cell.status === "hit"}
                onClick={() => handleShot(rowIndex, columnIndex)}
              >
                {cell.status === "miss" ? "*" : ""}
              </Cell>
            ))}
          </React.Fragment>
        ))}
      </BoardContainer>
      <ShipList shipsState={shipsState} />
    </>
  );
};

export default Board;
