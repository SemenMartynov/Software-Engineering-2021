import { makeAutoObservable } from "mobx";

export enum TemperatureKeys {
  C = "C",
  F = "F",
  K = "K",
}

class TemperatureStore {
  currentKey: TemperatureKeys = TemperatureKeys.C;
  currentValue: number = 0;
  convertC: number = 0;
  convertF: number = 0;
  convertK: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTemperature(key: TemperatureKeys, value: number) {
    this.currentKey = key;
    this.currentValue = value;
    switch (key) {
      case TemperatureKeys.C:
        this.convertC++;
        break;
      case TemperatureKeys.F:
        this.convertF++;
        break;
      case TemperatureKeys.K:
        this.convertK++;
        break;
    }
  }

  get numberOfConverts() {
    return this.convertC + this.convertF + this.convertK;
  }
}

const store = new TemperatureStore();

export default store;
