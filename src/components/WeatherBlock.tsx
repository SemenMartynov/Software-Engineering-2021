import { useEffect, useState } from 'react';
import { API_KEY, defaultWheather } from '../utils/constants';
import { responseInterface } from '../utils/interfaces';
import { Spinner } from './Spinner';
import store from '../store';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';

interface WeatherBlockProp {
  q: string;
  isFull: boolean;
}

function WeatherBlock(prop: WeatherBlockProp) {
  const { q, isFull } = prop;
  const [full, setFull] = useState(isFull);
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(defaultWheather);
  const wheather: responseInterface = data;
  const inStore = store.locations.includes(wheather.location?.name);
  const action = inStore
    ? () => store.removeLocation(wheather.location.name)
    : () => store.addLocation(wheather.location.name);
  useEffect(() => {
    if (q) {
      setIsloading(true);
      try {
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${q}&aqi=no`
        )
          .then((response) => response.json())
          .then((response) => {
            setData(response);
            setIsloading(false);
          });
      } catch (error) {
        setIsloading(false);
      }
    }
  }, [q]);

  if (isLoading) {
    return (
      <div className='center'>
        <div className={classNames('weatherBlock', { isFull: full })}>
          <Spinner />
        </div>
      </div>
    );
  }
  if (wheather.error) {
    return <div className='error'>{wheather.error.message}</div>;
  }

  return (
    <div className='weatherForm'>
      <div className='buttonBlock'>
        <button onClick={() => action()} className='weatherButton'>
          {!inStore ? (
            <AiOutlineEye className='watherIcon' aria-label='track this city' />
          ) : (
            <AiOutlineEyeInvisible
              className='watherIcon'
              aria-label='stop tracking this city'
            />
          )}
        </button>
        <button onClick={() => setFull(!full)} className='weatherButton'>
          {!full ? (
            <AiOutlineArrowDown
              className='watherIcon'
              aria-label='show full info'
            />
          ) : (
            <AiOutlineArrowUp
              className='watherIcon'
              aria-label='hide full info'
            />
          )}
        </button>
      </div>
      <div className={classNames('weatherBlock', { isFull: full })}>
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
      </div>
    </div>
  );
}

export default observer(WeatherBlock);
