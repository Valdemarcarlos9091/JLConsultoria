import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Medal, Trophy, Crown } from "lucide-react";

const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "Bronze Plan",
      price: "100.000 KZS",
      icon: <Medal className="w-8 h-8" />,
      features: [
        "Contabilidade mensal",
        "Avaliação fiscal mensal",
        "Encerramento de contas",
        "20% de desconto em relatórios anuais"
      ],
      highlighted: false
    },
    {
      name: "Gold Plan",
      price: "300.000 KZS",
      icon: <Trophy className="w-8 h-8" />,
      features: [
        "Contabilidade mensal",
        "Avaliação fiscal mensal",
        "Relatório técnico anual",
        "Encerramento de contas",
        "Registro no INSS",
        "30% de desconto em relatórios anuais"
      ],
      highlighted: false
    },
    {
      name: "Platinum Plan",
      price: "500.000 KZS",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "Contabilidade mensal",
        "Avaliação fiscal anual",
        "Relatório técnico anual",
        "Gestão de RH",
        "Registro e vinculação no INSS",
        "50% de desconto em relatórios anuais"
      ],
      highlighted: true
    }
  ];

  return (
    <section id="planos" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="neon-text">PLANOS</span> PARA SUA EMPRESA
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Escolha o plano que melhor se adapta às necessidades da sua empresa e comece a transformar sua gestão contábil.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`plan-card bg-background rounded-xl p-8 flex flex-col h-full relative ${
                plan.highlighted ? "highlighted-plan transform transition hover:scale-105" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-black py-1 px-4 rounded-bl-lg rounded-tr-lg font-semibold">
                  Recomendado
                </div>
              )}
              
              <div className="mb-6 text-center">
                <div className="text-primary text-4xl mb-2 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-muted-foreground">Mensal</p>
              </div>
              
              <div className="flex-grow mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <Check className="w-4 h-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button asChild className={plan.highlighted ? "cta-button" : "bg-secondary border border-primary text-primary hover:bg-primary hover:text-black"}>
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
