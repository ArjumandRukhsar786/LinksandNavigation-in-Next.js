import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black h-12'>
        <div className='text-yellow-400 flex justify-between items-center'>
            <h1 className='text-2xl m-2'>Portfolio</h1>
            <ul className='flex gap-4 mr-8'>
                 <Link className='hover:text-white' href={"/"}>Home</Link>
                 <Link className='hover:text-white' href={"/about"}>About</Link>
                 <Link className='hover:text-white' href={"/contact"}>Contact</Link>
                 <Link className='hover:text-white' href={"/footer"}>Footer</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar








