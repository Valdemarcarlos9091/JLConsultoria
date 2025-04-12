import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const results = [
    { 
      value: 30, 
      prefix: "+",
      suffix: "",
      label: "Clientes ativos" 
    },
    { 
      value: 500, 
      prefix: "+",
      suffix: "",
      label: "Milhões Kz economizados" 
    },
    { 
      value: 100, 
      prefix: "",
      suffix: "%",
      label: "Satisfação dos clientes" 
    },
    { 
      value: 400, 
      prefix: "+",
      suffix: "",
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
              <h3 className="text-4xl font-bold mb-2 text-white">
                {isInView && (
                  <>
                    {result.prefix}
                    <CountUp 
                      end={result.value} 
                      duration={2.5}
                      separator="."
                      delay={0.5 + index * 0.1}
                    />
                    {result.suffix}
                  </>
                )}
              </h3>
              <p className="text-muted-foreground">{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
