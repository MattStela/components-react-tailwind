import { FaCrown, FaGem, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

export default function CardEx3() {
  return (
    // Contêiner principal do card com classes de Tailwind CSS para estilo e responsividade
    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-black via-gray-800 to-black p-6 transform transition-transform hover:scale-105 duration-500">
      
      {/* Cabeçalho do Card */}
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center space-x-3">
          <FaCrown className="text-yellow-500" />
          <h2 className="text-yellow-400 text-2xl font-extrabold">Luxury Card</h2>
        </div>
        <FaGem className="text-yellow-500" />
      </div>
      
      {/* Imagem do Card */}
      <div className="w-full h-[200] flex items-center justify-center mb-4">
        <Image
          src="/neo_logo.png"
          width={400}
          height={225}
          alt="Card image"
          className="w-[150] rounded-lg"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="px-6 py-4 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg">
        <p className="text-black text-base mb-4">
          Este é um card com gradiente que prioriza as cores ouro e preto. Ele inclui ícones elegantes, gradientes vibrantes e uma imagem central destacada.
        </p>
      </div>

      {/* Rodapé do Card */}
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors flex items-center">
          More <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
