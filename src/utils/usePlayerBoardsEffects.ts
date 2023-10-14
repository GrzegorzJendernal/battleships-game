import { useEffect } from "react";
import { enemyIsShooting } from "./enemyIsShooting";
import { allShipsAreSunk } from "./shipsHelpers";

const usePlayerBoardEffects = (
  turn: boolean,
  state: GameState,
  boardState: Board,
  shipsState: Ship[],
  enemyShotAgain: boolean,
  setEnemyShotAgain: React.Dispatch<React.SetStateAction<boolean>>,
  setState: React.Dispatch<React.SetStateAction<GameState>>,
  handleShot: (row: number, col: number) => void,
  reset: () => void,
) => {

  useEffect(() => {
    if (state === "preparation") {
      reset()
    }
  }, [state]);

  useEffect(() => {
    if (!turn && state === "game") {
      setTimeout(() => {
        enemyIsShooting(boardState, handleShot);
      }, 500);
    }
  }, [turn, state]);

  useEffect(() => {
    if (enemyShotAgain) {
      setEnemyShotAgain(false);
      setTimeout(() => {
        enemyIsShooting(boardState, handleShot);
      }, 500);
    }
  }, [enemyShotAgain, handleShot]);

  useEffect(() => {
    if (allShipsAreSunk(shipsState)) {
      setState("enemyWin");
    }
  }, [shipsState]);
};

export default usePlayerBoardEffects;
