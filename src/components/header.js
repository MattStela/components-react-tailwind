import Image from "next/image";

export default function Header() {
  return (
    <div className="space-y-4 py-4 flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <p className="text-[#FEF9BF] font-bold">Neo</p>
        <a href="/#">
          <Image
            src="/neo_logo.png"
            width={100}
            height={100}
            alt="neo_next logo"
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </a>
        <p className="text-[#FEF9BF] font-bold">Next</p>
      </div>

      <div className="text-xs font-bold flex flex-row justify-center items-center">
        <p className="text-[#FEF9BF]">componentes para Next.js</p>&nbsp;
        <p className="text-[#5D718C]">com Tailwind</p>
      </div>
    </div>
  );
}
