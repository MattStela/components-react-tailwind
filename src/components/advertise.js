import Link from "next/link";

export default function Advertise() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-400 w-[100%] text-center">
        todos os componentes se encontram na pasta "components" deste projeto
        que está no&nbsp;
        <Link
          className="text-blue-500 hover:text-white"
          href="https://github.com/MattStela/components-react-tailwind/tree/master/src/components"
        >
          Github
        </Link>
        
      </h1>
    </div>
  );
}
