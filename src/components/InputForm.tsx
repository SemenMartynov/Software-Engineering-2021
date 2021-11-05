import { FormEventHandler, useState } from 'react';

interface InputFormProp {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

function InputForm(prop: InputFormProp) {
  const [query, setQuery] = useState('');
  const { onSubmit } = prop;
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        value={query}
        onChange={onChange}
        id='search'
        type='search'
      ></input>
      <button type={'submit'}>Search</button>
    </form>
  );
}

export { InputForm };
