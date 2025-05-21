import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className = 'flex justify-between items-center my-10 px-6'>
        <div className="logo font-bold text-xl">Clerk Template</div>
        <ul className='flex gap-4 '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>layout</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Contact us</li>
            
        </ul>
    <div className="flex space-x-4">
    <SignedOut>
        <SignInButton>
            <button className='bg-green-700 text-white px-3 py-2 rounded-md cursor-pointer'>Sign In</button>
        </SignInButton>

        <SignUpButton>
            <button className='bg-white text-black px-3 py-2 rounded-md cursor-pointer'>Sign Up</button>
        </SignUpButton>
        
  </SignedOut>

  <SignedIn>
    <UserButton />
  </SignedIn>
</div>
      
    </div>
  )
}

export default Navbar
