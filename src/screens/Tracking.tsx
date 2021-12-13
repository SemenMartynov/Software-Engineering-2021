import { observer } from 'mobx-react';
import store from '../store';
import WeatherBlock from '../components/WeatherBlock';

function Tracking() {
  if (!store.locations.length) {
    return <div className='center'>Add something to tracking list</div>;
  }
  return (
    <div className='trackingList center'>
      {store.locations.map((location) => (
        <WeatherBlock q={location} isFull={false} key={location} />
      ))}
    </div>
  );
}

export default observer(Tracking);
