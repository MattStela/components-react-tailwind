import Image from "next/image";

export default function FooterEx1() {
  return (
    <div className=" text-sm h-20 bg-[#2c3643] w-full flex justify-center items-center">
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
  );
}
