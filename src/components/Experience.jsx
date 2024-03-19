import React from 'react'
import html from '../assets/zebrance.png'

function Experience() {
  return (
    <div className="px-7 md:px-10 my-20" id='experience'>
        <h1 className="text-3xl md:text-5xl my-5 text-blue-400 font-semibold">
            Experiences :
        </h1>
        <p className="text-white my-2 md:w-2/3 leading-[2]">
            These are the technologies I've worked with
        </p>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center'>
            <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/html.svg" className='h-28' alt="Html" />
                </div>
                <p className='mt-4 font-semibold text-white'>HTML</p>
            </div>
            <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/css.svg" className='h-28' alt="Css" />
                </div>
                <p className='mt-4 font-semibold text-white'>CSS</p>
            </div>
            <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/javascript.svg" className='h-28' alt="Javascript" />
                </div>
                <p className='mt-4 font-semibold text-white'>Javascript</p>
            </div>
            <div className='shadow-md shadow-purple-800 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/bootstrap.svg" alt="Bootstrap" />
                </div>
                <p className='mt-4 font-semibold text-white'>Bootstrap</p>
            </div>
            <div className='shadow-md shadow-sky-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/tailwind.svg" alt="Tailwind" />
                </div>
                <p className='mt-4 font-semibold text-white'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-blue-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/react.svg" alt="React" />
                </div>
                <p className='mt-4 font-semibold text-white'>React</p>
            </div>
            <div className='shadow-md shadow-green-700 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/vue.svg" alt="Vue" />
                </div>
                <p className='mt-4 font-semibold text-white'>Vue</p>
            </div>
            <div className='shadow-md shadow-red-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/php.svg" alt="Php" />
                </div>
                <p className='mt-4 font-semibold text-white'>PHP</p>
            </div>
            <div className='shadow-md shadow-red-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/laravel.svg" alt="Laravel" />
                </div>
                <p className='mt-4 font-semibold text-white'>Laravel</p>
            </div>
            <div className='shadow-md shadow-gray-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/symfony.svg" alt="Symfony" />
                </div>
                <p className='mt-4 font-semibold text-white'>Symfony</p>
            </div>
            <div className='shadow-md shadow-blue-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/mysql.svg" alt="MySQL" />
                </div>
                <p className='mt-4 font-semibold text-white'>MySQL</p>
            </div>
            <div className='shadow-md shadow-gray-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                <div class="w-28 h-28 mx-auto mt-4 flex items-center justify-center">
                    <img src="/assets/logo/github.svg" className='bg-white rounded-full' alt="GitHub" />
                </div>
                <p className='mt-4 font-semibold text-white'>GitHub</p>
            </div>
        </div>
    </div>
  )
}

export default Experience