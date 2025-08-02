import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="text-white flex justify-center border-b py-4 ">
      {/* <NavLink className='hover:bg-white/20 p-2 px-4 rounded-md' to={"/list"}>List</NavLink> */}
      <NavLink className='hover:bg-white/20 p-2 px-4 rounded-md' to={"/"}>Home</NavLink>
    </div>
  );
}

export default Navbar