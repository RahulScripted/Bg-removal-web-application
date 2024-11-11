import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        {/* Title */}
        <h1 className='text-center text-xl  md:text-2xl lg:text-3xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
            Steps to remove background <br className='max-md:hidden' />
            image in seconds
        </h1>
        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

            {/* Card1 */}
            <div  className='flex items-center gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 cursor-pointer'>
                <img className='max-w-9' src={assets.upload_icon} alt="upload_btn_icon" />
                <div>
                    <p className='text-xl font-medium'>Upload image</p>
                    <p className='text-sm text-neutral-700 mt-1'>Click the Upload Your Image button <br className='max-md:hidden' /> to select and upload an image.</p>
                </div>
            </div>

            {/* Card2 */}
            <div  className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 cursor-pointer'>
                <img className='max-w-9' src={assets.remove_bg_icon} alt="remove_bg_icon" />
                <div>
                    <p className='text-md md:text-xl font-medium'>Remove background</p>
                    <p className='text-sm text-neutral-700 mt-1'>After the image is uploaded, our tool will <br className='max-md:hidden' /> remove the background.</p>
                </div>
            </div>

            {/* Card3 */}
            <div  className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 cursor-pointer'>
                <img className='max-w-9' src={assets.download_icon} alt="download_icon" />
                <div>
                    <p className='text-md md:text-xl font-medium'>Download image</p>
                    <p className='text-sm text-neutral-700 mt-1'>Once the background removal is complete, <br className='max-md:hidden' /> click Download button.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps