import React from "react";
import Header from "@/components/landing/header";
import Purpose from "@/components/landing/purpose";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-linear-to-tl from-slate-900 to-emerald-950 font-sans text-white min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full justify-center">
        <Purpose />
      </main>
    </div>
  );
}