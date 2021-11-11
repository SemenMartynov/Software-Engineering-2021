import { observer } from "mobx-react";
import { useState } from "react";
import "./App.css";
import store, { TemperatureKeys } from "./store";

function App() {
  const [isValid, setIsValid] = useState<boolean>(true);
  function transformTemperature(key: TemperatureKeys, value: number) {
    switch (key) {
      case TemperatureKeys.C:
        if (store.currentKey === TemperatureKeys.C) {
          return value;
        }
        if (store.currentKey === TemperatureKeys.F) {
          return ((value - 32) / 1.8).toFixed(3);
        }
        return (value - 273.15).toFixed(3);
      case TemperatureKeys.F:
        if (store.currentKey === TemperatureKeys.F) {
          return value;
        }
        if (store.currentKey === TemperatureKeys.C) {
          return (value * 1.8 + 32).toFixed(3);
        }
        return (value * 1.8 - 241.15).toFixed(3);
      case TemperatureKeys.K:
        if (store.currentKey === TemperatureKeys.K) {
          return value;
        }
        if (store.currentKey === TemperatureKeys.F) {
          ((value - 32) / 1.8 + 273.15).toFixed(3);
        }
        return (value + 273.15).toFixed(3);
    }
  }
  return (
    <div className="App">
      <label htmlFor="Celcium">
        Celcium
        <input
          type="number"
          id="Celcium"
          value={transformTemperature(TemperatureKeys.C, store.currentValue)}
          onChange={(e) => {
            store.setTemperature(TemperatureKeys.C, +e.target.value);
          }}
        ></input>
      </label>
      <label htmlFor="Farenheit">
        Farenheit
        <input
          type="number"
          id="Farenheit"
          value={transformTemperature(TemperatureKeys.F, store.currentValue)}
          onChange={(e) => {
            store.setTemperature(TemperatureKeys.F, +e.target.value);
          }}
        ></input>
      </label>
      <label htmlFor="Kelvin">
        Kelvin
        <input
          type="number"
          id="Kelvin"
          value={transformTemperature(TemperatureKeys.K, store.currentValue)}
          onChange={(e) => {
            store.setTemperature(TemperatureKeys.K, +e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
}

export default observer(App);
