import React from 'react'

const Home = () => {
  return (
    <div>
       <div className='bg-black h-screen justify-center flex items-center'>
       <div>
        <h1 class='text-emerald-400 font-bold text-2xl underline hover:text-cyan-500'><a href="#about">ABOUT</a></h1>
        <h1 class='text-white text-5xl font-bold text-center'>
          MD <span class='text-emerald-300'>Jalaluddin</span> Master
        </h1>
        </div>
       <div class='mb-4 flex flex-col items-center'> <h3 class='text-amber-50 '>Scroll Down</h3></div>

       </div>
       <div class='bg-emerald-700 h-screen'>
        <h1 id='about' class='text-emerald-50 flex justify-center font-extrabold text-3xl  hover:text-black'>ABOUT</h1>
        <div className='text-center flex flex-col justify-end'>
          <h3 className='font-bold text-9xl text-blue-100 flex justify-start'>
            Hey , Iam a BCA Student From RCUB University 
          </h3>
          <h1 className='font-bold text-9xl text-shadow-neutral-900 flex justify-end '>Software Developer </h1>
        </div>

       </div>
    </div>
  )
}

export default Home