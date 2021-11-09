import { FormEvent, useState } from 'react';
import { InputForm } from '../components/InputForm';
import WeatherBlock from '../components/WeatherBlock';

function Main() {
  const [request, setRequest] = useState('London');
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const q = encodeURI(target.search.value);
    setRequest(q);
  }
  return (
    <div>
      <InputForm onSubmit={onSubmit} />
      <WeatherBlock q={request} />
    </div>
  );
}

export { Main };
