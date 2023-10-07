import { StyledCell } from "./cell.styled"

const Cell = ({children, id, $occupied, $hit, onClick}: CellProps) => {

  return (
    <StyledCell id={id} $occupied={$occupied} $hit={$hit} onClick={onClick}>{children}</StyledCell>
  );
};

export default Cell;