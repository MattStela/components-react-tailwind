import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function FooterEx4() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-8 w-full flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-6">
        <Image
          className="hover:cursor-pointer animate-bounce"
          src="/neo_logo.png"
          width={50}
          height={50}
          alt="neo_next logo"
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
      </div>
      <div className="flex space-x-8">
        <FaGithub className="w-8 h-8 hover:text-gray-300 transition-transform transform hover:scale-110 cursor-pointer" />
        <FaTwitter className="w-8 h-8 hover:text-gray-300 transition-transform transform hover:scale-110 cursor-pointer" />
        <FaLinkedin className="w-8 h-8 hover:text-gray-300 transition-transform transform hover:scale-110 cursor-pointer" />
        <FaEnvelope className="w-8 h-8 hover:text-gray-300 transition-transform transform hover:scale-110 cursor-pointer" />
        <FaPhone className="w-8 h-8 hover:text-gray-300 transition-transform transform hover:scale-110 cursor-pointer" />
      </div>
      <div className="flex space-x-8">
        <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
        <a href="#" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Services</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
      </div>
      <div className="text-center text-sm">
        <p>© 2023 Neo Next. All rights reserved.</p>
        <p className="hover:text-gray-300 transition-colors">Designed with ❤️ by Neo Next Team</p>
      </div>
    </div>
  );
}
