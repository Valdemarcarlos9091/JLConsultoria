import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="sobre" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              SOBRE A <span className="neon-text">JL CONSULTORIA</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              A JL Consultoria é uma empresa angolana especializada em soluções contábeis, fiscais e financeiras para empresas de todos os portes. Com uma equipe altamente qualificada, oferecemos serviços personalizados que atendem às necessidades específicas de cada cliente.
            </p>
            <p className="text-muted-foreground mb-6">
              Nossa missão é fornecer soluções contábeis e financeiras de excelência, contribuindo para o crescimento sustentável dos nossos clientes no mercado angolano.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-background p-6 rounded-xl text-center">
                <h3 className="text-primary font-bold mb-2">Missão</h3>
                <p className="text-muted-foreground text-sm">
                  Oferecer soluções contábeis e fiscais que impulsionem o crescimento dos nossos clientes.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl text-center">
                <h3 className="text-primary font-bold mb-2">Visão</h3>
                <p className="text-muted-foreground text-sm">
                  Ser referência em consultoria contábil e financeira em Angola.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl text-center">
                <h3 className="text-primary font-bold mb-2">Valores</h3>
                <p className="text-muted-foreground text-sm">
                  Ética, excelência, inovação, compromisso e responsabilidade.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1539786774582-0608a0e6c216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Equipe JL Consultoria" 
              className="rounded-xl shadow-xl w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
