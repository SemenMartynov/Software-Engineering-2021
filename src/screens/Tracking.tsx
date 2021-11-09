import { observer } from 'mobx-react';
import store from '../store';
import WeatherBlock from '../components/WeatherBlock';

function NonObservedTracking() {
  if (!store.locations.length) {
    return <div>Add something to tracking list</div>;
  }
  return (
    <div>
      {store.locations.map((location) => (
        <WeatherBlock q={location} />
      ))}
    </div>
  );
}

const Tracking = observer(NonObservedTracking);

export { Tracking };
