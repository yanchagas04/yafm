import { CreditCard, BarChart3, Users, Sparkles, Tag } from "lucide-react";

const pillars = [
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
      title: "Sem complicação",
      description: "Lançar um gasto não deve levar mais do que 30 segundos. Interface direta ao ponto, sem menus infinitos.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
      title: "Fácil de ver",
      description: "Visualizações práticas para responder a temida pergunta: Quanto e com o que eu gastei esse mês?",
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Com quem eu gastei?",
      description: "Quem nunca comprou nada porque o pai/mãe pediu? Pra isso, há uma forma simples de dizer pra quem eu fiz uma compra.",
    },
  ];

  const avaibleSoon = [
    {
      icon: <Sparkles className="w-6 h-6 text-teal-400" />,
      title: "Automação real",
      description: "A ideia aqui será enviar lembretes no e-mail para não esquecer de pagar a fatura do cartão.",
    },
    {
      icon: <Tag className="w-6 h-6 text-teal-400" />,
      title: "Deixa comigo",
      description: "Criação livre de tag pra categorizar o gasto, sem padrões e termos vagos (limitado a 5 tags).",
    },
  ]

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    soon: boolean;
}

function Card(props: CardProps) {
    return (
        <div
          className={`flex flex-col md:w-sm items-start text-left p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300 group ${props.soon ? 'md:blur-xs md:hover:blur-none md:focus:blur-none md:animate-pulse' : ''}` }
        >
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/10 mb-5 group-hover:scale-110 transition-transform duration-300">
            {props.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
            {props.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {props.description}
          </p>
        </div>
    )
}

export default function Cards() {
    return (
        <section className="w-full max-w-4/5 px-6 py-16 flex flex-col items-center">
            <div className="flex-wrap flex gap-8 w-full justify-center">
                {pillars.map((pillar, index) => (
                    <Card
                    key={index}
                    icon={pillar.icon}
                    title={pillar.title}
                    description={pillar.description}
                    soon={false}
                    />
                ))}
                {avaibleSoon.map((soon, index) => (
                    <Card
                    key={index}
                    icon={soon.icon}
                    title={soon.title}
                    description={soon.description}
                    soon={true}
                    />
                ))}
                </div>
        </section>
    )
  }