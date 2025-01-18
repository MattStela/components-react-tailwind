import { FaStar, FaRegStar, FaHeart } from 'react-icons/fa';

export default function CardEx2() {
  return (
    // Contêiner principal do card com classes de Tailwind CSS para estilo e responsividade
    <div className="space-y-4 flex flex-col justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-lg bg-gray-800 p-6">

      {/* Cabeçalho do Card */}
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <h2 className="text-white text-2xl font-bold">Card Decente</h2>
        </div>
        <FaHeart className="text-red-400" />
      </div>
      
      {/* Conteúdo do Card */}
      <div className="bg-gray-700 rounded-2xl p-6 w-full text-center">
        <p className="text-gray-300 text-base mb-4">
          Este é um card decente que inclui um cabeçalho com ícones, uma descrição no centro e botões de ação no rodapé. Ele é totalmente responsivo e estilizado com Tailwind CSS e React Icons.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">Ação 1</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">Ação 2</button>
        </div>
      </div>
      
      {/* Rodapé do Card */}
      <div className="flex justify-between items-center w-full mt-4">
        <FaRegStar className="text-white" />
        <span className="text-gray-400 text-sm">Feito com ❤️ <s className='text-gray-600'>e muita vontade</s> </span>
        <FaRegStar className="text-white" />
      </div>
    </div>
  );
}
