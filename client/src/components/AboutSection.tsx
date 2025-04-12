import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { 
  slideInFromLeft, 
  slideInFromRight, 
  floatingAnimation, 
  pulseEffect, 
  neonGlowEffect, 
  rotateIn 
} from "@/lib/animations";
import aboutImage from "../assets/about-image.png";

// Componente para texto animado letra por letra
const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.03,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="sobre" className="py-20 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Decoração de fundo animada */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary/10"
        initial={{ scale: 0.8, opacity: 0.2 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
            variants={slideInFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={rotateIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              SOBRE A <motion.span 
                className="neon-text"
                initial="initial"
                animate="animate"
                variants={neonGlowEffect}
              >JL CONSULTORIA</motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A JL Consultoria é uma empresa angolana especializada em soluções contábeis, fiscais e financeiras para empresas de todos os portes. Com uma equipe altamente qualificada, oferecemos serviços personalizados que atendem às necessidades específicas de cada cliente.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Nossa missão é fornecer soluções contábeis e financeiras de excelência, contribuindo para o crescimento sustentável dos nossos clientes no mercado angolano.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-background p-6 rounded-xl text-center relative overflow-hidden neon-border-hover"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <h3 className="text-primary font-bold mb-2">
                  <AnimatedText text="Missão" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Oferecer soluções contábeis e fiscais que impulsionem o crescimento dos nossos clientes.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-background p-6 rounded-xl text-center relative overflow-hidden neon-border-hover"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                }}
              >
                <h3 className="text-primary font-bold mb-2">
                  <AnimatedText text="Visão" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ser referência em consultoria contábil e financeira em Angola.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-background p-6 rounded-xl text-center relative overflow-hidden neon-border-hover"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                }}
              >
                <h3 className="text-primary font-bold mb-2">
                  <AnimatedText text="Valores" />
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ética, excelência, inovação, compromisso e responsabilidade.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            variants={slideInFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-xl blur-xl"
              variants={pulseEffect}
              initial="initial"
              animate="animate"
            />
            <motion.img 
              src={aboutImage}
              alt="Diretor JL Consultoria" 
              className="rounded-xl shadow-xl w-full h-auto relative z-10" 
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
            />
            <motion.div 
              className="absolute inset-0 border-2 border-primary/40 rounded-xl z-20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
