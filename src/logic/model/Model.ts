// GameModel

interface GameData {
  action: {
    click: number;
  };
  money: {
    total: number;
    perSecond: number;
  };
}

export interface GameModel {
  data: GameData;
  addMoney: () => void;
  moneyPerSecond: (tempVal: number) => void;
}

export const gameModel: GameModel = {
  data: {
    action: {
      click: 0.01
    },
    money: {
      total: 0,
      perSecond: 0
    }
  },
  addMoney() {
    const tempVal = this.data.money.total;
    this.data.money.total = parseFloat((this.data.money.total + this.data.action.click).toFixed(2));
    this.moneyPerSecond(tempVal);
  },
  moneyPerSecond(tempVal: number) {
    if (this.data.money.total - tempVal > 0) {
      this.data.money.perSecond = parseFloat(((this.data.money.total - tempVal) * 50).toFixed(2));
    } else {
      this.data.money.perSecond = 0;
    }
  }
};