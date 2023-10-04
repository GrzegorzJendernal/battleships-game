import { StyledCell } from "./cell.styled"

const Cell = ({children, id, coordinate}: CellProps) => {
  console.log(id, coordinate);

  return (
    <StyledCell id={id}>{children}</StyledCell>
  );
};

export default Cell;