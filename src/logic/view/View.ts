// Game View

import { gameModel } from "../index";

export const gameView = {
  updateMoneyDisplay(): void {
    const moneyTotalElement = document.getElementById("moneyTotal");
    const moneyPerSecondElement = document.getElementById("moneyPerSecond");

    if (moneyTotalElement) {
      moneyTotalElement.innerHTML = gameModel.data.money.total.toString();
    }
    if (moneyPerSecondElement) {
      moneyPerSecondElement.innerHTML = gameModel.data.money.perSecond.toString();
    }
  }
};