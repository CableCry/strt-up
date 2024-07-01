// Game Controller

import { gameModel, gameView } from "../index";

export const gameController = {
  init(): void {
    this.setupEventListeners();
    this.startGameLoop();
  },

  setupEventListeners(): void {
    const clickMeButton = document.getElementById("clickMe");
    if (clickMeButton) {
      clickMeButton.addEventListener("click", () => {
        gameModel.addMoney();
        gameView.updateMoneyDisplay();
      });
    }
  },

  startGameLoop(): void {
    setInterval(() => {
      gameView.updateMoneyDisplay();
    }, 1000 / 20);

    setInterval(() => {
      gameModel.addMoney();
    }, 1000);
  }
};