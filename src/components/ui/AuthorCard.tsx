import React from 'react'

const Authorcard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>


        <img className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-black'src="../my.jpg" alt='Author image'/>
      
      <div>
        <h3 className='text-xl font-bold'>Muskan Ahmed</h3>
        <p className='text-slate-500'>
            
            {""}
            Applied Chemist|It Expert|Web Developer{""}
            </p>
      </div>
    </div>




    <p className='mt-4 text-black leading-relaxed'>
        Appied Chemist with a passion for turning scientific discoveries into a real-world solutions.
        
    </p>
    <div className='mt-4 flex space-x-3'>
        <a href='https://www.facebook.com/shiza1334?mibextid=ZbWKwL' className='px-4 py-2 text-white
        //  bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300'>
Facebook
        </a>
        <a href='https://github.com/MuskanAhmed225' className='px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300'>
GitHub
        </a>
        <a href='https://github.com/MuskanAhmed225' className='px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300'>
Linkedin
        </a>
        <a href='https://www.instagram.com' className='px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300'>
Instagram
        </a>
    </div>

    </div>
    
  )
}

export default Authorcard