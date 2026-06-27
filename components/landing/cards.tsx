import { CreditCard, BarChart3, Users, Lightbulb, Tag, Shield, ArrowUpDown } from "lucide-react";

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
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Dados locais e seguros",
    description: "Seus dados financeiros são guardados de forma segura e local, garantindo total privacidade e controle sobre as suas informações.",
  },
];

const avaibleSoon = [
  {
    icon: <Lightbulb className="w-6 h-6 text-teal-400" />,
    title: "Me lembre",
    description: "Envio de lembretes no e-mail para não esquecer de pagar a fatura do cartão junto de um relatório mensal de gastos.",
  },
  {
    icon: <Tag className="w-6 h-6 text-teal-400" />,
    title: "Deixa comigo",
    description: "Criação livre de tag pra categorizar o gasto, sem padrões e termos vagos (limitado a 5 tags).",
  },
  {
    icon: <ArrowUpDown className="w-6 h-6 text-teal-400" />,
    title: "Importar e Exportar",
    description: "Exporte seus relatórios completos a qualquer momento ou importe registros de outras plataformas com facilidade.",
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
      className={`flex flex-col md:w-sm items-start text-left p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 md:backdrop-blur-md hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300 group ${props.soon ? 'blur-none md:blur-xs md:hover:blur-none md:focus:blur-none md:animate-pulse' : ''}`}
    >
      <div className="flex w-full justify-between items-start">
        <div className="flex w-fit p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/10 mb-5 group-hover:scale-110 transition-transform duration-300">
          {props.icon}
        </div>
        {props.soon && (
          <span className="px-2.5 py-1 text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full select-none">
            Em breve
          </span>
        )}
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
    <section className="w-full max-w-6xl p-6 flex flex-col  items-center">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-6 tracking-tight">
          Recursos Já Disponíveis
        </h3>
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
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-4">
        <h3 className="text-xl md:text-2xl font-bold text-teal-400 mb-6 tracking-tight">
          Em Breve na Plataforma
        </h3>
        <div className="flex-wrap flex gap-8 w-full justify-center">
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
      </div>
    </section>
  )
}