import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='h-16 bg-[rgb(151,100,151)]'>
      <div className='text-400 flex justify-between items-center'>
        <h1 className='text-xl m-4 cursor-pointer'>Watch.com</h1>
        <ul className='flex gap-4'>
          <li><Link className='hover:text-purple-300' href="/">Home</Link></li>
          <li><Link className='hover:text-green-400' href="/about" target="_blank">About</Link></li> 
          <li><Link className='hover:text-orange-400' href="/contact" target="_blank">Contact</Link></li>
          <li><Link className='hover:text-blue-300' href="/service" target="_blank">Service</Link></li> 
          <li><Link className='hover:text-yellow-400' href="/service" target="_blank">Service/Web-Dev</Link></li>
        </ul>
      </div>      
    </div>
  )
}

export default Navbar;

