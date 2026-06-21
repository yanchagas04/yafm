# YAFM — _Yet Another Financial Manager_

> Só mais um gerenciador financeiro qualquer. Feito para resolver um problema real, de forma ágil e sem burocracia.

---

## O que é?

O **YAFM** é um gerenciador de gastos pessoais criado para responder de forma simples as perguntas que todo mundo tem no fim do mês:

- _Quanto eu gastei?_
- _Com o quê eu gastei?_
- _Em qual cartão foi essa compra?_
- _Fiz esse gasto pra alguém da minha família?_

Sem precisar cadastrar dados bancários, sem integrações complexas — só você e seus lançamentos.

---

## Funcionalidades

### ✅ Disponíveis no Lançamento

| Funcionalidade          | Descrição                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| **Sem complicação**     | Lançar um gasto não deve levar mais do que 30 segundos. Interface direta ao ponto, sem menus infinitos. |
| **Fácil de ver**        | Visualizações práticas para responder a temida pergunta: _Quanto e com o que eu gastei esse mês?_       |
| **Com quem eu gastei?** | Uma forma simples de dizer pra quem você fez uma compra — ideal pra quando o pai/mãe pede algo.         |

### 🚧 Em breve

| Funcionalidade   | Descrição                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| **Me lembre**    | Lembretes por e-mail para não esquecer de pagar a fatura do cartão, junto de um relatório mensal de gastos. |
| **Deixa comigo** | Criação livre de tags para categorizar gastos, sem padrões vagos (limitado a 5 tags).                       |

---

## Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Linguagem:** TypeScript
- **UI:** React 19 + [Lucide React](https://lucide.dev/)
- **Estilos:** Tailwind CSS v4
- **Package manager:** pnpm

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+ e pnpm instalados.

```bash
# Clone o repositório
git clone https://github.com/yanchagas04/yafm.git
cd yafm

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## Estrutura do projeto

```
yafm/
├── app/
│   ├── globals.css       
│   ├── layout.tsx        
│   └── page.tsx          
├── components/
│   └── landing/
│       ├── cards.tsx     
│       ├── header.tsx    
│       └── purpose.tsx   
└── public/               # Arquivos estáticos
```

---

## Licença

Distribuído sob a licença GPL. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
