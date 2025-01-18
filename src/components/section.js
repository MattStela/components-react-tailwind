"use client";

import Link from "next/link";

export default function Section({
  firstColor = "#DAA520",
  secondColor = "#000000",
  href,
  text,
}) {
  return (
    <div className="h-16 w-full relative flex items-center justify-center">
      <style jsx>{`
        .inner-div {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .inner-div {
          background: linear-gradient(
            90deg,
            ${secondColor} 0%,
            ${firstColor} 50%,
            ${secondColor} 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="inner-div">
        <Link
          href={href}
          className="text-black text-base font-bold hover:text-gray-300"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}
