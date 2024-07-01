// GameModel

interface GameData {
  action: {
    click: number;
  };
  money: {
    total: number;
    perSecond: number;
  };
  multipliers: {
    scale: number;
    multi: number;
  };
  date: {
    days: number
    years: number
    total: number
  };
}

export interface GameModel {
  data: GameData;
  addMoney: () => void;
  moneyPerSecond: (tempVal: number) => void;
  addMultipliers: (value: number, multi: boolean) => void;
  addDate: () => void;
}

export const gameModel: GameModel = {
  data: {
    action: {
      click: 0.01
    },
    money: {
      total: 0,
      perSecond: 0
    },
    multipliers: {
      scale: 0,
      multi: 0
    },
    date: {
      days: 1,
      years: 0,
      total: 1
    }
  },

  addMoney() {
    const tempVal = this.data.money.total;
    if (this.data.multipliers.multi > 0){
      this.data.money.total = parseFloat((this.data.money.total + (this.data.action.click + this.data.multipliers.scale) * this.data.multipliers.multi).toFixed(2));
    } else {
      this.data.money.total = parseFloat((this.data.money.total + (this.data.action.click + this.data.multipliers.scale)).toFixed(2));
    }
    this.moneyPerSecond(tempVal);
  },
  moneyPerSecond(tempVal) {
    if (this.data.money.total - tempVal > 0) {
      this.data.money.perSecond = parseFloat(((this.data.money.total - tempVal)).toFixed(2));
    } else {
      this.data.money.perSecond = 0;
    }
  },
  addMultipliers(value, multi) {
    if (!multi) {
      this.data.multipliers.scale += value;
    } else {
      this.data.multipliers.multi += value;
    }
  },
  addDate() {
    this.data.date.total += 1

    if (this.data.date.days === 365) {
      this.data.date.days = 0
      this.data.date.years += 1
    } else {
      this.data.date.days += 1
    }
  }
};