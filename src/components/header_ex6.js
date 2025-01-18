"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderEx6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full text-gray-300">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="pl-4 text-3xl font-bold">
          <Image
            src="/neo_logo.png"
            width={50}
            height={50}
            alt="neo_next logo"
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Links de Navegação para Telas Médias e Maiores */}
        <div className="hidden md:flex space-x-8">
          <Link href="/home" className="relative group text-lg font-semibold">
            Home
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative group text-lg font-semibold">
            About
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/services"
            className="relative group text-lg font-semibold"
          >
            Services
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="relative group text-lg font-semibold"
          >
            Contact
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-400 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Ícone de Hambúrguer para Telas Pequenas */}
        <div className="md:hidden flex items-center justify-center w-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu para Telas Pequenas */}
      {isMenuOpen && (
        <div className="md:hidden text-white px-4 pt-4 pb-2 space-y-2">
          <Link href="/home" className="block text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="block text-gray-300 hover:text-white">
            About
          </Link>
          <Link
            href="/services"
            className="block text-gray-300 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-gray-300 hover:text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
