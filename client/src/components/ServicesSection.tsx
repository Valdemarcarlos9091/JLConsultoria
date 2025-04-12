import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
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

const getIcon = (iconName: string) => {
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
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="servicos" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="neon-text">SERVIÇOS</span> DE EXCELÊNCIA
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A JL CONSULTORIA estrutura a contabilidade da sua empresa com soluções personalizadas.
            Descubra todos os serviços que oferecemos para melhorar o desempenho da sua empresa.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card bg-secondary rounded-xl p-6 h-full neon-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary text-3xl mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
