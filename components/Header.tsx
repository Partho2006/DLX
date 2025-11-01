"use client"

import { SignIn, useUser, UserButton, SignInButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constants/Links'
import { Heart, Search, ShoppingBag, User  } from "lucide-react";


const Header = () => {
  const { user, isSignedIn  } = useUser()

  return (
    <div className='flex bg-white justify-between items-center my-6 mx-12 gap-6'>
      {/* 1st */}
      <Link href="https://blackberrys.com/">
        <img
          src="https://blackberrys.com/cdn/shop/files/LOGOheaderenew_1.png?v=1723786138&width=270"
          width={150}
          height={60}
          alt="Logo"
        />
      </Link>

      {/* 2nd: Nav Links */}
      <div className="flex gap-16 items-center">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <span className="relative text-sm text-black cursor-pointer group">
              <div className="pb-4">{link.name}</div>
              <span
                className="
            absolute left-0 -bottom-1 h-0.5 w-0 bg-black 
            transition-all duration-300 group-hover:w-full
          "
              ></span>
            </span>
          </Link>
        ))}
      </div>

      {/* 3rd: Icons */}
      <div className="flex items-center gap-8 pb-4">
        <Search className="w-6 h-6 cursor-pointer" />

        <div className="flex items-center gap-4">
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />

          <div className="relative">
            {isSignedIn ? (
              // Logged-in state: click icon to open Clerk profile dropdown
              <UserButton
                appearance={{
                  elements: {
                    rootBox: "cursor-pointer",
                  },
                }}
              >
                <User className="w-5 h-5 cursor-pointer" />
              </UserButton>
            ) : (
              // Logged-out state: click icon opens sign-in modal
              <SignInButton mode="modal">
                <User className="w-5 h-5 cursor-pointer" />
              </SignInButton>
            )}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Header
