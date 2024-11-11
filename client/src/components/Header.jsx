import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 gap-x-10 px-4 mt-5 lg:px-32 sm:mt-20'> 

        {/* Left Side */}
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
                Remove the <br className='max-md:hidden' /> 
                <span className='bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' /> images for free.
            </h1>
            <p className='my-6 text-[15px] text-gray-500'>Our tool simplifies background removal, providing a clear, high-quality output for all your creative needs. <br className='max-sm:hidden' /> Experience efficient, professional results every time</p>
            <div>
                <input type="file" name="" id="upload1" hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-pink-500 to-orange-400 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                    <img className='w-5' src={assets.upload_btn_icon} alt="upload_btn_icon" />
                    <p className='text-white text-sm'>Upload Your Image</p>
                </label>
            </div>
        </div>


        {/* Right Side */}
        <div className='w-full max-w-md'>
            <video className='rounded-md' src={assets.header_video} autoPlay muted loop></video>
        </div>

    </div>
  )
}

export default Header