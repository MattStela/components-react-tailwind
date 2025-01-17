"use client";

import Link from "next/link";

export default function Section({firstColor, secondColor, href, text}) {
  return (
    <div className="h-10 w-full relative flex items-center justify-center">
      <style jsx>{`
        .inner-div1,
        .inner-div2 {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .inner-div1 {
          clip-path: polygon(20% 0, 25% 0, 5% 100%, 0% 100%);
          background-color: ${firstColor};
          left: 2%;
        }
        .inner-div2 {
          clip-path: polygon(32% 0, 100% 0, 100% 100%, 12% 100%);
          background-color: ${secondColor};
          right: 2%;
        }
      `}</style>
      <div className="inner-div1 flex justify-center items-center">---</div>
      <div className="inner-div2 flex justify-center items-center">
        <Link href={href} className="text-sm font-bold hover:text-gray-400">{text}</Link>
      </div>
    </div>
  );
}
