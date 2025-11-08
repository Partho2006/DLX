"use client"

import React, { useState, useRef, useEffect } from "react"
import { SignInButton, useUser, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Heart, Search, ShoppingBag, User } from "lucide-react"

const Header = () => {
  const { isSignedIn } = useUser()
  const [showOverlay, setShowOverlay] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  // close overlay on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        setShowOverlay(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <div className="flex bg-white justify-between items-center px-12 py-4 sticky top-0 z-50 w-full border-b">
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
        <div className="flex gap-16 items-center h-full relative">
          {/* ALL with overlay trigger */}
          <div
            className="relative text-sm text-black cursor-pointer group h-full flex items-center"
            onClick={() => setShowOverlay(!showOverlay)}
            onMouseEnter={() => setShowOverlay(true)}
          >
            <span className="pb-1">ALL</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>

            {showOverlay && (
              <div
                ref={overlayRef}
                className="absolute top-full left-1/2 -translate-x-1/4 mt-5 bg-white rounded-xl shadow-lg border w-200 h-100 p-4 z-50 grid grid-cols-1 md:grid-cols-2 gap-8"
                onMouseEnter={() => setShowOverlay(true)}
                onMouseLeave={() => setShowOverlay(false)}
              >
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">All Categories</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="hover:text-black cursor-pointer">T-Shirts</li>
                    <li className="hover:text-black cursor-pointer">Shirts</li>
                    <li className="hover:text-black cursor-pointer">Jeans</li>
                  </ul>
                </div>

                <div className="relative h-[370px] w-full overflow-hidden rounded-xl group">
                  <img src="/SHIRT.png" className="w-full h-full object-cover" />
                  <span className="absolute bottom-6 right-6 text-black font-semibold text-3xl">
                    SHIRTS
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="relative text-sm text-black cursor-pointer group h-full flex items-center">
            <span className="pb-1">COLLECTIONS</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </div>

          <Link
            href="/winterwear"
            className="relative text-sm text-black cursor-pointer group h-full flex items-center"
          >
            <span className="pb-1">WINTERWEAR</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/new-arrival"
            className="relative text-sm text-black cursor-pointer group h-full flex items-center"
          >
            <span className="pb-1">NEW ARRIVALS</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-8">
          <Search className="w-6 h-6 cursor-pointer" />
          <div className="flex items-center gap-4">
            <Heart className="w-5 h-5 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 cursor-pointer" />
            {isSignedIn ? (
              <UserButton appearance={{ elements: { rootBox: "cursor-pointer" } }} />
            ) : (
              <SignInButton mode="modal">
                <User className="w-5 h-5 cursor-pointer" />
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
