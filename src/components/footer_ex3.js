import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function FooterEx3() {
  return (
    <div className="h-[120px] bg-[#2c3643] w-full flex flex-col justify-center items-center p-4">
      <div className="flex justify-center items-center space-x-4 mb-2">
        <FaGithub className="text-white w-6 h-6 hover:text-gray-400 cursor-pointer" />
        <FaTwitter className="text-white w-6 h-6 hover:text-gray-400 cursor-pointer" />
        <FaLinkedin className="text-white w-6 h-6 hover:text-gray-400 cursor-pointer" />
      </div>
      <div className="text-gray-400 text-xs">
        © 2023 Neo Next. All rights reserved.
      </div>
    </div>
  );
}
