import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      id="inicio" 
      ref={ref}
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background to-secondary opacity-70"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transformamos sua <span className="neon-text">contabilidade</span> em estratégia de <span className="neon-text">crescimento</span>
            </h1>
            <p className="text-muted-foreground text-xl mb-8">
              A JL Consultoria oferece soluções personalizadas de contabilidade, fiscal e financeira para empresas angolanas que buscam excelência e resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="cta-button">
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
                <a href="#servicos">Conheça Nossos Serviços</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Consultoria Empresarial" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
