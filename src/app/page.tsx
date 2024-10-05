'use client'

import { useRouter } from 'next/navigation'
import React from 'react';

export default function Home() {
  const route = useRouter()
  return (
    <>
       <div className="w-full h-screen bg-yellow-200">
     <h1 className="text-blue-700 text-center text-5xl font-bold">Hi I am a Web <span className="text-red-700">Developer</span> </h1>
       

      <button className='p-2 bg-fuchsia-500 text-gray-50 rounded-full ml-96 mt-44 text-2xl' onClick={()=>route.push('/about')}>go to About</button>
      <button className='p-2 bg-blue-600 text-gray-50 rounded-full ml-24 mt-44 text-2xl' onClick={()=>route.push('/contact')}>go to Contact</button>
      <button className='p-2 bg-cyan-500 text-gray-50 rounded-full ml-24 mt-44 text-2xl' onClick={()=>route.push('/footer')}>go to Footer</button>
      </div>

    
    </>
  )
};