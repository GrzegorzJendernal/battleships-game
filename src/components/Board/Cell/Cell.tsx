import { StyledCell } from "./cell.styled"

const Cell = ({children, id, coordinate, occupied}: CellProps) => {
  console.log(id, coordinate);

  return (
    <StyledCell id={id} occupied={occupied}>{children}</StyledCell>
  );
};

export default Cell;