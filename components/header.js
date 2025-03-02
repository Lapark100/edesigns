"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto container py-4 px-4 md:px-0 flex justify-between items-center">
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <Link href="/" className="text-3xl font-semibold">
            Erikaluxedesign
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-16 text-[15px] font-[400] tracking-wide">
          <Link href="/about" className="hover:text-[#e59400] transition">
            About Us
          </Link>
          <Link href="/" className="hover:text-[#e59400] transition">
            Board Of Directors
          </Link>
          <Link href="/" className="hover:text-[#e59400] transition">
            Contact Us
          </Link>
        </div>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex space-x-4 text-[14px]">
          <button className="h-[40px] w-[152px] uppercase font-semibold border border-[#e59400] text-black hover:bg-[#304561] hover:text-white transition-colors duration-300 rounded-full">
            Login
          </button>
          <button className="h-[40px] w-[152px] uppercase font-semibold border border-[#e59400] bg-[#e59400] text-black hover:bg-[#304561] hover:text-white transition-colors duration-300 rounded-full">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
              Board Of Directors
            </Link>
            <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <button
              className="h-[40px] w-[152px] uppercase font-semibold border border-[#e59400] text-black hover:bg-[#304561] hover:text-white transition-colors duration-300 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Login
            </button>
            <button
              className="h-[40px] w-[152px] uppercase font-semibold border border-[#e59400] bg-[#e59400] text-black hover:bg-[#304561] hover:text-white transition-colors duration-300 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
