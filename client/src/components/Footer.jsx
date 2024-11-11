import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img width={150} src={assets.logo} alt="logo" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-800 max-sm:hidden'>Copyright @RahulGoswami | All right reserved</p>
        <div className='flex gap-1 cursor-pointer'>
            <img  width={40} src={assets.google_plus_icon} alt="google_plus_icon" />
            <img  width={40} src={assets.facebook_icon} alt="facebook_icon" />
            <img  width={40} src={assets.twitter_icon} alt="twitter_icon" />
        </div>
    </div>
  )
}

export default Footer