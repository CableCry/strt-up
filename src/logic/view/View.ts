// Game View

import { gameModel } from "../index";

export const gameView = {
  updateMoneyDisplay(): void {
    const moneyTotalElement = document.getElementById("moneyTotal");
    const moneyPerSecondElement = document.getElementById("moneyPerSecond");
    const existDaysElement = document.getElementById("existDays")
    const existYearsElement = document.getElementById("existYears")


    if (moneyTotalElement) {
      moneyTotalElement.innerHTML = gameModel.data.money.total.toString();
    }
    if (moneyPerSecondElement) {
      moneyPerSecondElement.innerHTML = gameModel.data.money.perSecond.toString();
    }
    if (existDaysElement) {
      existDaysElement.innerHTML = gameModel.data.date.days.toString();
    }
    if (existYearsElement) {
      existYearsElement.innerHTML = gameModel.data.date.years.toString();
    }
  }
};