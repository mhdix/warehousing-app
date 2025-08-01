import React from 'react'
import Input from './Form/Input';

const Filter = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 gap-20 w-full px-4'>
        <Input className="w-full" label="search" />
        <Input className="w-full" label="sort" />
    </div>
  );
}

export default Filter