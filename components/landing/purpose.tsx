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
  const pillars = [
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
      title: "Sem complicação",
      description: "Lançar um gasto ou receita não deve levar mais do que 3 segundos. Interface direta ao ponto, sem menus infinitos.",
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-teal-400" />,
      title: "Minhas metas",
      description: "Guardar dinheiro para uma viagem ou um upgrade no setup sem precisar de planilhas complexas. Defino a meta e acompanho.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
      title: "Gráficos simples",
      description: "Visualizações práticas para responder rápido à clássica pergunta de fim de mês: 'com o que eu gastei tanto dessa vez?'.",
    },
    {
      icon: <Tag className="w-6 h-6 text-teal-400" />,
      title: "Tags do meu jeito",
      description: "Criação livre de tags e categorias. Sem regras engessadas ou termos contábeis difíceis.",
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Divisão de contas",
      description: "Uma forma descomplicada de organizar quem pagou o quê em casa ou na viagem de fim de semana.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-teal-400" />,
      title: "Automação real",
      description: "Lembretes e rotinas que eu realmente uso no dia a dia para não esquecer de pagar os boletos recorrentes.",
    },
  ];

  return (
    <section className="w-full max-w-6xl px-6 py-20 flex flex-col items-center text-center">
      <div className="mb-16 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-6">
          Por que eu fiz o YAFM?
        </h2>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          O YAFM significa <em>Yet Another Financial Manager</em> — ou, traduzindo de forma sincera, <strong>"Só mais um gerenciador financeiro qualquer"</strong>. Criei ele para resolver meu próprio problema: controlar meus gastos e saber para qual cartão cada dívida foi, de forma ágil, privada e sem precisar cadastrar nenhum dado sensível.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300 group"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/10 mb-5 group-hover:scale-110 transition-transform duration-300">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {pillar.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
