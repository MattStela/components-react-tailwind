import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function FooterEx2() {
  return (
    <div className="p-4 text-sm h-20 bg-[#2c3643] w-full flex justify-between items-center">
      <div className="h-full flex flex-row items-center justify-center w-full">
        <Image
          className="hover:cursor-pointer"
          src="/neo_logo.png"
          width={50}
          height={50}
          alt="neo_next logo"
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
      </div>
      <div className="h-full flex flex-row items-center justify-center space-x-10 w-full">
        <FaGithub className="h-8 w-8" />
        <FaLinkedin className="h-8 w-8" />
      </div>
    </div>
  );
}
