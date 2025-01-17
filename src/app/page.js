"use client";

import Section from "@/components/section";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col space-y-4  items-center justify-center">
      <Section
        firstColor={"#FEF9BF"}
        secondColor={"rgb(44, 54, 67)"}
        href="/headers"
        text="Headers"
      />
      <Section
        firstColor={"#FEF9BF"}
        secondColor={"rgb(54, 64, 77)"}
        href="/footers"
        text="Footers"
      />
      <Section
        firstColor={"#FEF9BF"}
        secondColor={"rgb(64, 74, 87)"}
        href="/footers"
        text="Ainda não sei, to vendo"
      />
    </div>
  );
}
