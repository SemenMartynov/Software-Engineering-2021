import { FormEvent, useEffect, useState } from 'react';
import { InputForm } from '../components/InputForm';
import WeatherBlock from '../components/WeatherBlock';

function Main() {
  const [request, setRequest] = useState('Hanoi');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setRequest(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }, []);
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const q = encodeURI(target.search.value);
    setRequest(q);
  }
  return (
    <div className='mainScreen'>
      <InputForm onSubmit={onSubmit} />
      <div className='weatherResult'>
        <WeatherBlock q={request} isFull />
      </div>
    </div>
  );
}

export { Main };
