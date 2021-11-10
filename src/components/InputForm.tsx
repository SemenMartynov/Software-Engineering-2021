import { FormEventHandler, useState } from 'react';
import { FcSearch } from 'react-icons/fc';

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
    <form onSubmit={onSubmit} className='searchForm'>
      <input
        className='searchInput'
        value={query}
        onChange={onChange}
        id='search'
        type='search'
        placeholder='enter city name, for example Thai Binh'
      ></input>
      <label htmlFor='search'>
        <button type='submit' className='searchButton'>
          <FcSearch className='searchIcon' />
        </button>
      </label>
    </form>
  );
}

export { InputForm };
