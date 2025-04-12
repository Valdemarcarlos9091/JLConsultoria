import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const clientLogos = Array(6).fill(null).map((_, i) => `Cliente Corporativo ${i + 1}`);
  
  const testimonials = [
    {
      text: "A JL Consultoria transformou completamente a contabilidade da nossa empresa. Economizamos tempo e recursos significativos com o planejamento tributário estratégico que eles implementaram.",
      initials: "MB",
      name: "Manuel Barbosa",
      position: "Diretor Executivo, Empresa de Tecnologia"
    },
    {
      text: "Desde que contratamos a JL Consultoria para nossos serviços contábeis, temos experimentado uma melhoria significativa em nossa gestão financeira. Eles são profissionais, eficientes e proativos.",
      initials: "IS",
      name: "Isabel Santos",
      position: "Gerente Financeira, Comércio Varejista"
    }
  ];

  return (
    <section id="clientes" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            CLIENTES QUE <span className="neon-text">CONFIAM</span> EM NÓS
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            O que nossos clientes dizem sobre os serviços da JL Consultoria
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-xl p-6 flex items-center justify-center h-32"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="text-muted-foreground text-lg font-bold">
                {logo}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-xl p-8 neon-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-start mb-6">
                <div className="text-primary text-4xl mr-4">
                  <Quote className="w-8 h-8" />
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
