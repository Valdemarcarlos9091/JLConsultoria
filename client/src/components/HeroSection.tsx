import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { floatingAnimation, neonGlowEffect } from "@/lib/animations";
import heroImage from "../assets/hero-image.png";

// Animação de texto digitado com efeito de máquina de escrever
const TypedText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: delay + i * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      id="inicio" 
      ref={ref}
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-background relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background via-secondary/20 to-background opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Círculos decorativos animados */}
      <motion.div 
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0.9, 1],
          opacity: [0, 0.2, 0.15, 0.2],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0.8, 1],
          opacity: [0, 0.3, 0.2, 0.3],
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Transformamos sua{" "}
              <motion.span 
                className="neon-text relative inline-block"
                variants={neonGlowEffect}
                initial="initial"
                animate="animate"
              >
                <TypedText text="contabilidade" delay={0.8} />
              </motion.span>{" "}
              em estratégia de{" "}
              <motion.span 
                className="neon-text relative inline-block"
                variants={neonGlowEffect}
                initial="initial"
                animate="animate"
              >
                <TypedText text="crescimento" delay={1.5} />
              </motion.span>
              
              {/* Efeito de linha destacando o texto */}
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-primary/40 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "60%" } : { width: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
              />
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              A JL Consultoria oferece soluções personalizadas de contabilidade, fiscal e financeira para empresas angolanas que buscam excelência e resultados.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="cta-button group relative overflow-hidden">
                  <a href="#contato">
                    Solicitar Orçamento
                    <motion.span 
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300">
                  <a href="#servicos">Conheça Nossos Serviços</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Efeito de resplandecência ao redor da imagem */}
            <motion.div
              className="absolute -inset-1 rounded-xl bg-primary/20 blur-xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            
            <motion.img 
              src={heroImage}
              alt="JL Consultoria" 
              className="max-w-full h-auto rounded-xl shadow-2xl z-10 relative"
              initial={{ y: 20 }}
              variants={floatingAnimation}
              animate="animate"
            />
            
            {/* Decoração de contorno */}
            <motion.div 
              className="absolute -inset-2 border-2 border-primary/30 rounded-xl z-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
