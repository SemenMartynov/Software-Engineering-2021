import { observer } from "mobx-react";
import React, { useState } from "react";
import "./App.css";
import store, { TemperatureKeys } from "./store";

function App() {
  function transformTemperature(key: TemperatureKeys, value: number) {
    switch (key) {
      case TemperatureKeys.C:
        if (store.currentKey === TemperatureKeys.C) {
          return value;
        }
        return ((value - 32) / 1.8).toFixed(3);
      case TemperatureKeys.F:
        if (store.currentKey === TemperatureKeys.F) {
          return value;
        }
        return (value * 1.8 + 32).toFixed(3);
    }
  }
  return (
    <div className="App">
      <label htmlFor="Celcium">
        Celcium
        <input
          type="text"
          id="Celcium"
          value={transformTemperature(TemperatureKeys.C, store.currentValue)}
          onChange={(e) => {
            console.log(store.currentKey);
            store.setTemperature(TemperatureKeys.C, +e.target.value);
          }}
        ></input>
      </label>
      <label htmlFor="Farenheit">
        Farenheit
        <input
          type="text"
          id="Farenheit"
          value={transformTemperature(TemperatureKeys.F, store.currentValue)}
          onChange={(e) => {
            console.log(store.currentKey);
            store.setTemperature(TemperatureKeys.F, +e.target.value);
          }}
        ></input>
      </label>
    </div>
  );
}

export default observer(App);
