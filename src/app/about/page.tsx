"use client"
import React from 'react'
import{useRouter} from "next/navigation";

const About = () => {
  const route = useRouter()
  return (
    <>
    <div className='w-full h-screen bg-slate-400'>
      <h1 className='p-5 text-red-600 text-center text-4xl'>Hey Everyone! This is my About Section!</h1>
    

    <div className='flex flex-row  space-x-4 justify-center'>
      <button className='p-4 bg-amber-500 text-white w-48 m-4 rounded-full hover:bg-pink-300 transition duration-300'
      onClick={()=>route.push('/')}>
        Go to Home</button>
    </div>
    </div>
    </>
  )
}

export default About