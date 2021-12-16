import React from 'react';
import { FaSpinner } from 'react-icons/fa';

function Spinner({ size }: { size?: number }) {
  return (
    <div className='elementSpinner' aria-label='loading'>
      <FaSpinner className='Spinner' size={`${size || 5}rem`} />
    </div>
  );
}

export { Spinner };
