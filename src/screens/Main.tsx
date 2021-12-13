import { observer } from 'mobx-react';
import { FormEvent, useEffect, useState } from 'react';
import { InputForm } from '../components/InputForm';
import WeatherBlock from '../components/WeatherBlock';
import store from '../store';

function Main() {
  const [request, setRequest] = useState(store.lastSearch);
  useEffect(() => {
    if (!store.wasSearch) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setRequest(`${position.coords.latitude},${position.coords.longitude}`);
        store.wasSearch = true;
        store.lastSearch = `${position.coords.latitude},${position.coords.longitude}`;
      });
    }
  }, []);
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const q = encodeURI(target.search.value);
    setRequest(q);
    store.lastSearch = q;
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

export default observer(Main);
