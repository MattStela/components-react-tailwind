import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="space-y-1 py-4 flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <Image
          src="/neo_logo.png"
          width={25}
          height={25}
          alt="neo_next logo"
          priority
          style={{width:"auto", height:"auto"}}
        />
      </div>

      <div className="text-[10px] font-bold flex flex-row justify-center items-center">
        <p className="text-[#FEF9BF]">made by</p>&nbsp;
        <Link
          className="hover:text-[#FEF9BF] text-[#5D718C]"
          href="https://www.linkedin.com/in/malvetela/"
        >
          Matts
        </Link>
      </div>
    </div>
  );
}
