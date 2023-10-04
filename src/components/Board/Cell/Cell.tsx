import { StyledCell } from "./cell.styled"

const Cell = ({children, id, coordinate}: {children?: string, id?: string, coordinate?: number}) => {
  console.log(id, coordinate);

  return (
    <StyledCell id={id}>{children}</StyledCell>
  );
};

export default Cell;