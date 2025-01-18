import FooterEx1 from "@/components/footer_ex1";
import FooterEx2 from "@/components/footer_ex2";
import FooterEx3 from "@/components/footer_ex3";
import FooterEx4 from "@/components/footer_ex4";
import Advertise from "@/components/advertise";

export const metadata = {
  title: "Footers",
};

export default function Footers() {
  return (
    <div className="min-h-screen text-gray-500 text-sm w-full flex flex-col space-y-10 justify-center items-center">
      <Advertise />

      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>um footer simples sem muito detalhe</p>
        <FooterEx1 />
      </div>
      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>
          Footer_ex2: um footer um pouco mais desenvolvido com ícones do React
          icons
        </p>
        <FooterEx2 />
      </div>
      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>Footer_ex3: o mais padrão da área, usando outros ícones</p>
        <FooterEx3 />
      </div>
      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>
          Footer_ex4: Aqui estou usando mais recursos do tailwind e do React
          icons{" "}
        </p>
        <FooterEx4 />
      </div>
    </div>
  );
}
