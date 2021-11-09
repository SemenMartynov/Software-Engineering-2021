import { useEffect, useState } from 'react';
import { defaultWheather } from '../utils/constants';
import { responseInterface } from '../utils/interfaces';
import { Spinner } from './Spinner';
import store from '../store';
import { observer } from 'mobx-react';

interface WeatherBlockProp {
  q: string;
}

function WeatherBlock(prop: WeatherBlockProp) {
  const { q } = prop;
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(defaultWheather);
  const wheather: responseInterface = data;
  const inStore = store.locations.includes(wheather.location.name);
  const action = inStore
    ? () => store.removeLocation(wheather.location.name)
    : () => store.addLocation(wheather.location.name);
  useEffect(() => {
    setIsloading(true);
    try {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=e4d5d226917a42e3a55142805210511&q=${q}&aqi=no`
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response);
          setIsloading(false);
        })
        .catch((error) => {
          setIsloading(false);
        });
    } catch (error) {
      setIsloading(false);
    }
  }, [q]);

  if (isLoading) {
    return <Spinner />;
  }
  if (wheather.error) {
    return <div className='error'>{wheather.error.message}</div>;
  }

  return (
    <div>
      <h2>{`${wheather.location.country} - ${wheather.location.name}`}</h2>
      <p>Last update: {wheather.current.last_updated}</p>
      <p>Temperature: {wheather.current.temp_c}&#8451;</p>
      <p>Temperature feels like: {wheather.current.feelslike_c}&#8451;</p>
      <p>Condition: {wheather.current.condition.text}</p>
      <p>Wind speed: {wheather.current.wind_kph}kph</p>
      <p>Wind direction: {wheather.current.wind_dir}</p>
      <p>Percentage of cloud: {wheather.current.cloud}%</p>
      <p>Percentage of humidity: {wheather.current.humidity}%</p>
      <p>Pressure in millibars : {wheather.current.pressure_mb}mb</p>
      <p>
        Precipitation amount in millimeters : {wheather.current.precip_mm}mm
      </p>
      <button onClick={() => action()}>
        {!inStore
          ? 'Track wheather at this location'
          : 'Remove tracking weather at this location'}
      </button>
    </div>
  );
}

export default observer(WeatherBlock);
