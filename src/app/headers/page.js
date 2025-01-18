import HeaderEx1 from "@/components/header_ex1";
import HeaderEx2 from "@/components/header_ex2";
import HeaderEx3 from "@/components/header_ex3";
import HeaderEx4 from "@/components/header_ex4";
import Advertise from "@/components/advertise";

export const metadata = {
  title: "headers",
};

export default function Headers() {
  return (
    <div className="text-sm font-sans w-full flex flex-col justify-center items-center">
      <Advertise />

      <div className="flex flex-col justfy-center items-center my-10 w-full space-y-3 text-center">
        <p className="w-[70%]">
          header_ex1: header simples com dropdown e responsivo
        </p>
        <HeaderEx1 />
      </div>
      <div className="flex flex-col justfy-center items-center my-10 w-full space-y-3 text-center">
        <p className="w-[70%]">
          header_ex2: um menu com hamburguer icon que ativa um dropdown em
          dispositivos menores, mas mantém o menu a direita em dispositivos
          maiores
        </p>
        <HeaderEx2 />
      </div>
      <div className="flex flex-col justfy-center items-center my-10 w-full space-y-3 text-center">
        <p className="w-[70%]">
          header_ex3: Usando recursos mais avançados do Tailwind e{" "}
          <a
            className="text-gray-500 hover:text-blue-500"
            href="https://react-icons.github.io/react-icons/"
          >
            React Icons
          </a>
        </p>
        <HeaderEx3 />
      </div>
      <div className="flex flex-col justfy-center items-center my-10 w-full space-y-3 text-center">
        <p className="w-[70%]">
          header_ex4: menu com subitems (também usei react icons)
        </p>
        <HeaderEx4 />
      </div>
    </div>
  );
}
