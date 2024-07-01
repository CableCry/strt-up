// Game Controller

import { gameModel, gameView } from "../index";

export const gameController = {
  init(): void {
    this.setupEventListeners();
    this.startGameLoop();
  },

  setupEventListeners(): void {
    const trainButton = document.getElementById("train");
    const buyScaleButton = document.getElementById("scale")
    const buyMultiButton = document.getElementById("multi")
    if (trainButton) {
      trainButton.addEventListener("click", () => {
        gameModel.addMoney();
        gameView.updateMoneyDisplay();
      });
    } 

    if (buyScaleButton) {
      buyScaleButton.addEventListener("click", () => {
        gameModel.addMultipliers(0.01, false);
      });
    }

    if (buyMultiButton) {
      buyMultiButton.addEventListener("click", () => {
        gameModel.addMultipliers(2, true);
      });
    }
  },

  startGameLoop(): void {
    setInterval(() => {
      gameView.updateMoneyDisplay();
    }, 1000 / 20);

    setInterval(() => {
      gameModel.addMoney();
      gameModel.addDate();
    }, 1000);

  }
};