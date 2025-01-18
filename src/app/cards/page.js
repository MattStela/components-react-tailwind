import Advertise from "@/components/advertise";
import CardEx1 from "@/components/card_ex1";
import CardEx2 from "@/components/card_ex2";
import CardEx3 from "@/components/card_ex3";
import CardEx4 from "@/components/card_ex4";

export const metadata = {
  title: "cards",
};

export default function Cards() {
  return (
    <div className="min-h-screen text-gray-500 text-sm w-full flex flex-col space-y-10 justify-center items-center">
      <Advertise />
      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>Card_ex1: um card padrão sem muito detalhe</p>
        <CardEx1 />
      </div>
      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>Card_ex2: nesse eu uso mais dos recursos do React Icons e do Tailwind</p>
        <CardEx2 />
      </div>
      
      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>Card_ex3: um card mais elegante</p>
        <CardEx3 />
      </div>
      <div className="flex space-y-4 flex-col items-center justify-center w-full">
        <p>Card_ex4: um login feito no estilo premium</p>
        <CardEx4 />
      </div>
      
    </div>
  );
}
