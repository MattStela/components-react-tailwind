"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderEx5() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/neo_logo.png"
            width={50}
            height={50}
            alt="neo_next logo"
            className="hover:cursor-pointer"
          />
          <h1 className="text-2xl font-bold">Meu Menu</h1>
        </div>
        
        {/* Links de Navegação */}
        <div className="hidden md:flex space-x-6">
          <Link href="/home" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">Sobre</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Serviços</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contato</Link>
        </div>
        
        {/* Botão de Login */}
        <div className="relative">
          <button 
            onClick={() => setIsLoginOpen(!isLoginOpen)} 
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Login
          </button>
          {isLoginOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-10">
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Botão de Menu para Dispositivos Móveis */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Menu para Dispositivos Móveis */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 pt-4 pb-2 space-y-2">
          <Link href="/home" className="block text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white">Sobre</Link>
          <Link href="/services" className="block text-gray-300 hover:text-white">Serviços</Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white">Contato</Link>
        </div>
      )}
    </header>
  );
}
