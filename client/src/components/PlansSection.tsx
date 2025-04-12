import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Medal, Trophy, Crown, LifeBuoy, MessageSquareText } from "lucide-react";

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
      highlighted: true
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
      highlighted: false
    }
  ];

  // Plano Socorro para micro empresas
  const socorroPlano = {
    name: "Plano Socorro",
    price: "75.000 KZS",
    icon: <LifeBuoy className="w-8 h-8" />,
    features: [
      "Para micro empresas com rendimento limitado",
      "Contabilidade básica organizada",
      "Conformidade com exigências legais mínimas",
      "Suporte essencial para operações fiscais"
    ],
    highlighted: false,
    special: true
  };

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
        
        {/* Plano Socorro */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-background rounded-xl p-8 flex flex-col md:flex-row items-center border border-primary/30 relative overflow-hidden">
            {/* Efeito de brilho no fundo */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-primary/5"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(0, 255, 163, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(0, 255, 163, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(0, 255, 163, 0.1) 0%, rgba(0, 0, 0, 0) 50%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="text-primary text-4xl mb-6 md:mb-0 md:mr-8 flex justify-center">
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {socorroPlano.icon}
              </motion.div>
            </div>
            
            <div className="md:flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-bold mb-2 md:mb-0">{socorroPlano.name}</h3>
                <div className="text-2xl font-bold text-primary">{socorroPlano.price} <span className="text-sm text-muted-foreground">/ Mensal</span></div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Para micro empresas que não têm muito rendimento porém desejam manter a sua contabilidade organizada exigida por lei.
              </p>
              
              <ul className="space-y-2 mb-6">
                {socorroPlano.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild className="w-full md:w-auto bg-primary/80 hover:bg-primary text-black">
                <a href="#contato">Solicitar Plano Socorro</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Botão para planos personalizados */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              variant="outline" 
              className="group border-primary/50 hover:border-primary text-primary hover:bg-primary/10 px-6 py-6 text-lg flex items-center gap-2"
            >
              <a href="#contato">
                <MessageSquareText className="mr-2 group-hover:animate-pulse" />
                <span>Precisa de um plano personalizado?</span>
                <span className="ml-1 group-hover:underline group-hover:text-white transition-all duration-300">
                  Entre em contato
                </span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
