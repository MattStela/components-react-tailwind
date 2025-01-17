"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderEx2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 w-[98%] rounded-3xl h-20 flex justify-between items-center m-4 px-6">
      <div className="flex items-center space-x-4">
        <Image src="/neo_logo.png" width={50} height={50} alt="Logo" className="rounded-full" />
        <h1 className="text-white text-2xl font-bold">Meu Menu</h1>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="/home" className="text-gray-300 hover:text-white">Home</Link>
        <Link href="/about" className="text-gray-300 hover:text-white">Sobre</Link>
        <Link href="/services" className="text-gray-300 hover:text-white">Serviços</Link>
        <Link href="/contact" className="text-gray-300 hover:text-white">Contato</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 right-0 bg-gray-800 rounded-lg shadow-lg p-4 md:hidden">
          <Link href="/home" className="block text-gray-300 hover:text-white mb-2">Home</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white mb-2">Sobre</Link>
          <Link href="/services" className="block text-gray-300 hover:text-white mb-2">Serviços</Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white">Contato</Link>
        </div>
      )}
    </nav>
  );
}
