import React from "react";
import {
  CreditCard,
  BarChart3,
  Users,
  PiggyBank,
  Tag,
  Sparkles,
} from "lucide-react";

export default function Purpose() {

  return (
    <section className="w-full max-w-6xl px-6 py-16 flex flex-col items-center text-center">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-6">
          O que é, e por que criei o YAFM?
        </h2>
        <p className="text-lg text-slate-300 font-light text-justify">
          O YAFM significa <em>Yet Another Financial Manager</em>, ou, traduzindo de forma sincera: <span className="font-bold">Só mais um gerenciador financeiro qualquer</span>. Criei ele para resolver meu próprio problema: controlar meus gastos sabendo para qual cartão cada dívida foi e se aquele gasto foi feito pra alguém da minha família. Tudo isso de forma ágil, privada e sem precisar cadastrar nenhum dado sensível.
        </p>
      </div>
    </section>
  );

  
}
