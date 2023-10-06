import { StyledCell } from "./cell.styled"

const Cell = ({children, id, coordinate, occupied, miss, hit}: CellProps) => {
  console.log(id, coordinate);

  return (
    <StyledCell id={id} occupied={occupied} miss={miss} hit={hit}>{children}</StyledCell>
  );
};

export default Cell;