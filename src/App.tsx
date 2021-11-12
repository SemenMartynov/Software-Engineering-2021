import Stats from "./Stats";
import { observer } from "mobx-react";
import { useState } from "react";
import "./App.css";
import store, { TemperatureKeys } from "./store";

function App() {
  const [state, setState] = useState({
    key: TemperatureKeys.C,
    value: "0",
  });
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
      <header>
        <h1>Temperature Convertion Service</h1>
      </header>
      <main>
        <div>
          <label htmlFor="Celcium">
            Celcium
            <input
              type="number"
              id="Celcium"
              value={
                state.key === TemperatureKeys.C
                  ? state.value
                  : transformTemperature(TemperatureKeys.C, store.currentValue)
              }
              onChange={(e) => {
                setState({ key: TemperatureKeys.C, value: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (!isNaN(+state.value)) {
                    store.setTemperature(state.key, +state.value);
                  }
                }
              }}
            ></input>
          </label>
          <label htmlFor="Farenheit">
            Farenheit
            <input
              type="number"
              id="Farenheit"
              value={
                state.key === TemperatureKeys.F
                  ? state.value
                  : transformTemperature(TemperatureKeys.F, store.currentValue)
              }
              onChange={(e) => {
                setState({ key: TemperatureKeys.F, value: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (!isNaN(+state.value)) {
                    store.setTemperature(state.key, +state.value);
                  }
                }
              }}
            ></input>
          </label>
          <label htmlFor="Kelvin">
            Kelvin
            <input
              type="number"
              id="Kelvin"
              value={
                state.key === TemperatureKeys.K
                  ? state.value
                  : transformTemperature(TemperatureKeys.K, store.currentValue)
              }
              onChange={(e) => {
                setState({ key: TemperatureKeys.K, value: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (!isNaN(+state.value)) {
                    store.setTemperature(state.key, +state.value);
                  }
                }
              }}
            ></input>
          </label>
        </div>
        <Stats />
      </main>
    </div>
  );
}

export default observer(App);
