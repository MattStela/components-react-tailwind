"use client";

import Link from "next/link";

export default function Section({ firstColor = '#DAA520', secondColor = '#000000', href, text }) {
  return (
    <div className="h-16 w-full relative flex items-center justify-center">
      <style jsx>{`
        .inner-div1,
        .inner-div2,
        .inner-div3 {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .inner-div1,
        .inner-div2 {
          width: 20%;
          background-color: ${secondColor};
        }
        .inner-div1 {
          left: 0;
        }
        .inner-div2 {
          right: 0;
        }
        .inner-div3 {
    

          background: linear-gradient(90deg, ${secondColor} 0%, ${firstColor} 50%, ${secondColor} 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
      `}</style>
      <div className="inner-div1"></div>
      <div className="inner-div2"></div>
      <div className="inner-div3">
        <Link href={href} className="text-black text-base font-bold hover:text-gray-300">
          {text}
        </Link>
      </div>
    </div>
  );
}
