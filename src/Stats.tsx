import { observer } from "mobx-react";
import store from "./store";

function Stats() {
  return (
    <div>
      <h2>Statistic</h2>
      <p>Total convertions: {store.numberOfConverts}</p>
      <p>From Celcium to another: {store.convertC}</p>
      <p>From Farenheit to another: {store.convertF}</p>
      <p>From Kelvin to another: {store.convertK}</p>
    </div>
  );
}
export default observer(Stats);
