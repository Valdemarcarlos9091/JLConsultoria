import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { 
  Users, 
  DollarSign, 
  Star, 
  FileText 
} from "lucide-react";

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const results = [
    { 
      icon: <Users className="w-8 h-8" />, 
      value: "+30", 
      label: "Clientes ativos" 
    },
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      value: "+500", 
      label: "Milhões Kz economizados" 
    },
    { 
      icon: <Star className="w-8 h-8" />, 
      value: "100%", 
      label: "Satisfação dos clientes" 
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      value: "+400", 
      label: "Casos de planejamento fiscal" 
    }
  ];

  return (
    <section className="py-16 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-8 text-center neon-border transform transition hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary text-4xl mb-4 flex justify-center">
                {result.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">{result.value}</h3>
              <p className="text-muted-foreground">{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
