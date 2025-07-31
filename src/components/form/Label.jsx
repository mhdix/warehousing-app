import React from 'react'

const Label = ({children, id}) => {
  return (
    <label className=" text-gray-300 mb-2 indent-1.5" htmlFor={id}>
      {children}
    </label>
  );
}

export default Label