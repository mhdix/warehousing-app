import React from 'react'

const Label = ({children, id}) => {
  return (
    <label className="indent-1.5 text-gray-300" htmlFor={id}>
      {children}
    </label>
  );
}

export default Label