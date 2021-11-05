import { FormEvent } from 'react';
import { InputForm } from '../components/InputForm';

function Main() {
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };

    fetch(
      'https://api.weatherapi.com/v1/current.json?key=e4d5d226917a42e3a55142805210511&q=London&aqi=no'
    )
      .then((response) => response.json())
      .then((response) => console.log(response));

    console.log(target.search.value);
  }
  return (
    <div>
      <InputForm onSubmit={onSubmit} />
    </div>
  );
}

export { Main };
