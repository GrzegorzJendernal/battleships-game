const Result = ({state}: {state: GameState}) => (
  <div>
{state === "playerWin" ? "You win" : "You lose"}
  </div>
);

export default Result