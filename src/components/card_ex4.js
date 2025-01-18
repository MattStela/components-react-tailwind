import { FaCrown, FaGem } from 'react-icons/fa';

export default function CardEx4() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-black via-gray-800 to-black p-6 mx-auto">
      
      {/* Cabeçalho do Card */}
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center space-x-3">
          <FaCrown className="text-yellow-500" />
          <h2 className="text-yellow-400 text-2xl font-extrabold">Login</h2>
        </div>
        <FaGem className="text-yellow-500" />
      </div>
      
      {/* Conteúdo do Card */}
      <div className="px-6 py-4 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg">
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
            <input 
              type="password" 
              id="password" 
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-black text-yellow-500 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
