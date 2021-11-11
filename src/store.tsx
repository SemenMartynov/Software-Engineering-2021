import { makeAutoObservable } from "mobx";

export enum TemperatureKeys {
  C = "C",
  F = "F",
}

class TemperatureStore {
  currentKey: TemperatureKeys = TemperatureKeys.C;
  currentValue: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTemperature(key: TemperatureKeys, value: number) {
    this.currentKey = key;
    this.currentValue = value;
  }
}

const store = new TemperatureStore();

export default store;
