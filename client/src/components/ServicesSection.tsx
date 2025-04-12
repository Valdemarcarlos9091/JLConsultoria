import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/services";
import { 
  Building, 
  FileSpreadsheet, 
  Users, 
  Scale, 
  GraduationCap, 
  Calculator, 
  BarChart,
  FileText,
  HandshakeIcon,
  CreditCard
} from "lucide-react";
import { pulseEffect, floatingAnimation, neonGlowEffect } from "@/lib/animations";

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  
  return (
    <motion.div
      className="relative"
      initial="initial"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => {
        controls.start({
          opacity: 1,
          scale: 1.5,
          transition: { duration: 0.3 }
        });
      }}
      onHoverEnd={() => {
        controls.start({
          opacity: 0,
          scale: 0,
          transition: { duration: 0.3 }
        });
      }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-primary/20 rounded-full blur-lg z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
      />
    </motion.div>
  );
};

const getIcon = (iconName: string) => {
  const icon = (() => {
    switch (iconName) {
      case "building": return <Building className="w-8 h-8" />;
      case "id-card": return <CreditCard className="w-8 h-8" />;
      case "gavel": return <Scale className="w-8 h-8" />;
      case "users-cog": return <Users className="w-8 h-8" />;
      case "handshake": return <HandshakeIcon className="w-8 h-8" />;
      case "graduation-cap": return <GraduationCap className="w-8 h-8" />;
      case "calculator": return <Calculator className="w-8 h-8" />;
      case "chart-line": return <BarChart className="w-8 h-8" />;
      case "file-invoice-dollar": return <FileText className="w-8 h-8" />;
      case "chart-bar": return <BarChart className="w-8 h-8" />;
      default: return <Building className="w-8 h-8" />;
    }
  })();

  return (
    <IconWrapper>
      <motion.div 
        className="relative z-10"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      >
        {icon}
      </motion.div>
    </IconWrapper>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      delay: index * 0.15,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 255, 163, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Decoração de partículas para o fundo
  const particles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <section id="servicos" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Partículas decorativas */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="neon-text relative"
                variants={neonGlowEffect}
                initial="initial"
                animate="animate"
              >
                SERVIÇOS
              </motion.span> DE EXCELÊNCIA
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primary/40 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "40%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A JL CONSULTORIA estrutura a contabilidade da sua empresa com soluções personalizadas.
            Descubra todos os serviços que oferecemos para melhorar o desempenho da sua empresa.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card bg-secondary rounded-xl p-6 h-full neon-border relative overflow-hidden group"
              custom={index}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Elemento decorativo de fundo */}
              <motion.div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 z-0"
                variants={pulseEffect}
                initial="initial"
                animate="animate"
              />
              
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.div 
                  className="text-primary text-3xl mb-4 transform transition-transform group-hover:scale-110 duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {getIcon(service.icon)}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                >
                  {service.title}
                </motion.h3>
                
                <motion.ul 
                  className="space-y-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.2 + index * 0.1
                      }
                    }
                  }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.3 }
                        }
                      }}
                    >
                      <motion.span 
                        className="text-primary mr-2 mt-1"
                        whileHover={{ scale: 1.3, rotate: 5 }}
                      >
                        <Check className="w-4 h-4" />
                      </motion.span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              {/* Borda neon em hover */}
              <motion.div 
                className="absolute inset-0 border border-primary/0 rounded-xl z-0 pointer-events-none"
                animate={{ 
                  borderColor: ["rgba(0,255,163,0)", "rgba(0,255,163,0)"],
                  boxShadow: [
                    "0 0 0px rgba(0,255,163,0)", 
                    "0 0 0px rgba(0,255,163,0)"
                  ]
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  borderColor: ["rgba(0,255,163,0.3)", "rgba(0,255,163,0.7)", "rgba(0,255,163,0.3)"],
                  boxShadow: [
                    "0 0 5px rgba(0,255,163,0.3)", 
                    "0 0 10px rgba(0,255,163,0.5)", 
                    "0 0 5px rgba(0,255,163,0.3)"
                  ],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
