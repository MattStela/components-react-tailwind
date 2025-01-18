import Image from "next/image";

// Define o componente CardEx1
export default function CardEx1() {
  return (
    // Contêiner principal do card com classes de Tailwind CSS para estilo e responsividade
    <div className="space-y-4 flex flex-col justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-lg bg-gray-900 p-4">
      
      {/* Imagem do card usando o componente Image do Next.js */}
      <Image
        className="w-[250] sm:w-[350]" // Largura da imagem ajustada para diferentes tamanhos de tela
        src="/neo_logo.png" // Caminho da imagem
        width={400} // Largura original da imagem
        height={225} // Altura original da imagem
        alt="Card image" // Texto alternativo para acessibilidade
      />

      {/* Contêiner para o conteúdo do card */}
      <div className="bg-gray-800 rounded-3xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6">
        {/* Título do card */}
        <div className="text-gray-400 font-bold text-lg sm:text-xl md:text-2xl mb-2">Card Title</div>
        {/* Descrição do card */}
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          This is a description of the card. It gives a brief overview of the content within the card.
        </p>
      </div>

      {/* Contêiner para as tags do card */}
      <div className="flex flex-wrap justify-center">
        {/* Tag 1 */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
          #tag1
        </span>
        {/* Tag 2 */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
          #tag2
        </span>
        {/* Tag 3 */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
          #tag3
        </span>
      </div>
    </div>
  );
}
