import { FormEvent, useState } from 'react';
import { InputForm } from '../components/InputForm';
import WeatherBlock from '../components/WeatherBlock';

function Main() {
  const [request, setRequest] = useState('Hanoi');
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
