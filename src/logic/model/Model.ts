  interface Action {
    click: number;
  }
  
  interface Money {
    total: number;
    perSecond: number;
  }
  
  interface NeuralNetwork {
    layers: number[];
    maxNeuronsToShow: number;
  }
  
  interface GameData {
    action: Action;
    money: Money;
    neuralNetwork: NeuralNetwork;
  }
  
  interface GameModel {
    data: GameData;
    addMoney: () => void;
    moneyPerSecond: (tempVal: number) => void;
    addNeuron: (layerIndex: number) => void;
    addHiddenLayer: () => void;
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
      neuralNetwork: {
        layers: [1, 1, 1],
        maxNeuronsToShow: 5,
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
    },
    addNeuron(layerIndex: number) {
      if (layerIndex >= 0 && layerIndex < this.data.neuralNetwork.layers.length) {
        this.data.neuralNetwork.layers[layerIndex]++;
      }
    },
    addHiddenLayer() {
      this.data.neuralNetwork.layers.splice(this.data.neuralNetwork.layers.length - 1, 0, 1);
    },
  };