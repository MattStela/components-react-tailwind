"use client";
import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'; // Importa os ícones de setinhas

export default function HeaderEx4() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(null); // Estado para controlar a visibilidade dos submenus
  const dropdownRef = useRef(null);

  const drop = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setIsSubMenuOpen(isSubMenuOpen === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsSubMenuOpen(null); // Fecha todos os submenus
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-20 flex items-center justify-center bg-gradient-to-r from-blue-800 to-red-800 relative">
      <button onClick={drop} className="text-white px-4 py-2 hover:text-base font-bold flex items-center">
        Menu Suspenso <FaChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div ref={dropdownRef} className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <div>
              <button
                onClick={() => toggleSubMenu(1)}
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              >
                Opção 1 <FaChevronRight />
              </button>
              {isSubMenuOpen === 1 && (
                <div className="pl-4 bg-gray-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Opção 1-1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Opção 1-2
                  </a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => toggleSubMenu(2)}
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              >
                Opção 2 <FaChevronRight />
              </button>
              {isSubMenuOpen === 2 && (
                <div className="pl-4 bg-gray-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Opção 2-1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Opção 2-2
                  </a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => toggleSubMenu(3)}
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              >
                Opção 3 <FaChevronRight />
              </button>
              {isSubMenuOpen === 3 && (
                <div className="pl-4 bg-gray-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Opção 3-1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Opção 3-2
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
