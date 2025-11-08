"use client"

import { SignIn, useUser, UserButton, SignInButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Heart, Search, ShoppingBag, User  } from "lucide-react";


const Header = () => {
  const { user, isSignedIn  } = useUser()

  return (
    <div className='flex bg-white justify-between items-center px-12 py-4 sticky top-0 z-50 w-full border-b'>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="/Logo.png"
          width={130}
          height={40}
          alt="Logo"
          className="object-contain"
        />
      </Link>

      {/* Nav Links */}
      <div className="flex gap-16 items-center h-full">
        {[
          { label: "ALL", href: "/" },
          { label: "COLLECTIONS", href: "/collections" },
          { label: "WINTERWEAR", href: "/winter-wear" },
          { label: "NEW ARRIVALS", href: "/new-arrivals" },
        ].map((item) => (
          <Link key={item.label} href={item.href} className="relative text-sm text-black cursor-pointer group h-full flex items-center">
            <span className="pb-1">{item.label}</span>
            <span
              className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-8">
        <Search className="w-6 h-6 cursor-pointer" />

        <div className="flex items-center gap-4">
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />

          <div className="relative">
            {isSignedIn ? (
              <UserButton appearance={{ elements: { rootBox: "cursor-pointer" } }}>
                <User className="w-5 h-5 cursor-pointer" />
              </UserButton>
            ) : (
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

export default Header;
