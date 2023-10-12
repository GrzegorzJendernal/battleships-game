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
) => {
  useEffect(() => {
    if (!turn && state === "game") {
      enemyIsShooting(boardState, handleShot);
    }
  }, [turn, state]);

  useEffect(() => {
    if (enemyShotAgain) {
      setTimeout(() => {
        enemyIsShooting(boardState, handleShot);
        setEnemyShotAgain(false);
      }, 1000);
      // Resetuj zmienną po drugim strzale
    }
  }, [enemyShotAgain]);

  useEffect(() => {
    if (allShipsAreSunk(shipsState)) {
      setState("enemyWin");
    }
  }, [shipsState]);
};

export default usePlayerBoardEffects;
