"use client"; // Marca o componente como utilizável no lado do cliente

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaCog, FaPhone } from "react-icons/fa"; // Importa ícones do Font Awesome

export default function HeaderEx3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura do menu

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full h-20 flex justify-between items-center px-6 shadow-lg">
      {/* Logo e Título */}
      <div className="flex items-center space-x-4">
        <svg
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm-2.618 4.486a3.5 3.5 0 01-4.764 0 1 1 0 10-1.472 1.328 5.5 5.5 0 007.708 0 1 1 0 10-1.472-1.328z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-white text-2xl font-bold animate-pulse">
          Meu Menu
        </h1>{" "}
        {/* Texto animado */}
      </div>
      {/* Links de Navegação para Dispositivos Médios e Grandes */}
      <div className="hidden md:flex space-x-8">
        <Link
          href="/home"
          className="group text-white hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <FaHome className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
        </Link>
        <Link
          href="/about"
          className="group text-white hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <FaInfoCircle className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
        </Link>
        <Link
          href="/services"
          className="group text-white hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <FaCog className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
        </Link>
        <Link
          href="/contact"
          className="group text-white hover:text-gray-300 transition duration-300 ease-in-out"
        >
          <FaPhone className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
        </Link>
      </div>
      {/* Botão de Menu para Dispositivos Pequenos */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
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
      {/* Menu Dropdown para Dispositivos Pequenos */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 bg-gray-800 rounded-lg shadow-lg p-4 md:hidden">
          <Link
            href="/home"
            className="block text-white hover:text-gray-300 mb-2"
          >
            <FaHome className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-gray-300 mb-2"
          >
            <FaInfoCircle className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-gray-300 mb-2"
          >
            <FaCog className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gray-300"
          >
            <FaPhone className="w-6 h-6 group-hover:scale-110 transition duration-300 ease-in-out" />
          </Link>
        </div>
      )}
    </nav>
  );
}
