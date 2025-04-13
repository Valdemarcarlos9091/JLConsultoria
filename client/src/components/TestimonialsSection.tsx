import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Importando as imagens dos clientes
import kombateSeguroLogo from "../assets/clients/kombate-seguro.png";
import smLogo from "../assets/clients/sm-logo.png";
import mLogo from "../assets/clients/m-logo.png";
import espacoAplausosLogo from "../assets/clients/espaco-aplausos.png";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const clientLogos = [
    { name: "Kombate Seguro", logo: kombateSeguroLogo },
    { name: "SM", logo: smLogo },
    { name: "M Movimento", logo: mLogo },
    { name: "Espaço Aplausos", logo: espacoAplausosLogo },
  ];
  
  const testimonials = [
    {
      text: "A JL Consultoria transformou completamente a contabilidade da nossa empresa. Economizamos tempo e recursos significativos com o planejamento tributário estratégico que eles implementaram.",
      initials: "KS",
      name: "Kombate Seguro",
      position: "Empresa de Segurança Privada"
    },
    {
      text: "Desde que contratamos a JL Consultoria para nossos serviços contábeis, temos experimentado uma melhoria significativa em nossa gestão financeira. Eles são profissionais, eficientes e proativos.",
      initials: "EA",
      name: "Espaço Aplausos",
      position: "Largo Culturar do Sequele"
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
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              className="client-logo-container flex items-center justify-center h-20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-full object-contain filter brightness-100 max-w-[180px]" 
                title={client.name}
              />
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
