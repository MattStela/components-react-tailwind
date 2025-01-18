"use client";

import Section from "@/components/section";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col space-y-4 items-center justify-center">
      <Section firstColor="#FEF9BF" href="/headers" text="Headers" />
      <Section firstColor="#FEF9BF" href="/footers" text="Footers" />
      <Section href="/cards" text="Cards" />
    </div>
  );
}
