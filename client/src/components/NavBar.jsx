import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

function NavBar() {

  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()

  return (
    <div className='flex items-center justify-between mx-4 py-5 lg:mx-44'>
        {/* Logo */}
        <Link to="/">
            <img className='w-32 sm:w-44' src={assets.logo} alt="logo" />
        </Link>

        {/* Nav Links */}
        <div className='flex items-center gap-6'>
          <Link to="/Result" className='text-gray-700 hover:text-black transition'>Result</Link>
          <Link to="/buy" className='text-gray-700 hover:text-black transition'>Buy</Link>

          {
            isSignedIn ? (
              <UserButton />
            ) : (
              <button 
                onClick={() => openSignIn({})} 
                className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'
              >
                Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="arrow_icon" />
              </button>
            )
          }
        </div>
    </div>
  )
}

export default NavBar