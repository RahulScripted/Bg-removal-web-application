import React from 'react'
import { assets } from '../assets/assets'

function Upload() {
  return (
    <div className='pb-16'>
        {/* Title */}
        <h1 className='text-center text-xl  md:text-2xl lg:text-3xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16'>See The Magic. Try Now</h1>

        {/* Button */}
        <div className='text-center mb-24'>
            <input type="file" name="" id="upload2" hidden />
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-pink-500 to-orange-400 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload2">
                <img className='w-5' src={assets.upload_btn_icon} alt="upload_btn_icon" />
                <p className='text-white text-sm'>Upload Your Image</p>
            </label>
        </div>
    </div>
  )
}

export default Upload