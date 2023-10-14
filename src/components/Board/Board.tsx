import { BoardContainer, Title } from "./board.styled";
import { Cell } from "./Cell/Cell";
import { columns, rows } from "../../utils/labels";
import React from "react";

const Board = ({ boardState, handleClick, setTurn, player, turn }: BoardProps) => {
  const onCellClick = (row: number, col: number) => {
    !!handleClick && handleClick(row, col);
    !!setTurn && setTurn(false);
  };

  return (
    <div>
    <Title>{!player ? "Enemy" : "Player"} Board</Title>
      <BoardContainer $playerTurn={!player && turn}>
        <Cell></Cell> 
        {columns.map((column, columnIndex) => (
          <Cell key={columnIndex}>{column}</Cell>
        ))}
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
              {cell.status === "miss" ? "•" : `${cell.status === "hit" || cell.status === "sunk" ? "X" : ""}`} 
              </Cell>
            ))}
          </React.Fragment>
        ))}
      </BoardContainer>
    </div>
  );
};

export default Board;
