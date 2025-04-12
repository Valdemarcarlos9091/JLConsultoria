import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determina se deve mostrar ou esconder o header baseado na direção do scroll
      if (currentScrollPos > 70) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        setVisible(true);
      }
      
      setScrolled(currentScrollPos > 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const phoneNumber = "+244 900 000 000"; // Número de telefone da empresa
  
  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#planos", label: "Planos" },
    { href: "#clientes", label: "Clientes" },
    { href: "#sobre", label: "Sobre" },
    { href: "#faq", label: "FAQ" },
    { 
      href: `tel:${phoneNumber.replace(/\s/g, '')}`, 
      label: "Ligar Agora", 
      isButton: true,
      icon: <PhoneCall size={16} className="animate-pulse" />
    },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background ${
        scrolled ? 'bg-opacity-95 backdrop-blur-sm shadow-lg' : 'bg-opacity-80'
      } transition-all duration-300`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo className="h-10" />
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`
                ${link.isButton 
                  ? "bg-primary hover:bg-primary/90 text-black px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2" 
                  : `text-white hover:text-primary transition-all duration-300 relative group ${
                      activeSection === link.href.substring(1) ? "text-primary" : ""
                    }`
                }
              `}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={!link.isButton ? { scale: 1.05 } : undefined}
            >
              {link.label}
              {!link.isButton && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  initial={{ width: activeSection === link.href.substring(1) ? '100%' : '0%' }}
                  animate={{ width: activeSection === link.href.substring(1) ? '100%' : '0%' }}
                />
              )}
            </motion.a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-secondary overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`text-white hover:text-primary transition-colors duration-300 ${
                    activeSection === link.href.substring(1) ? "text-primary" : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decoração sutil de neon no topo */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/30"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: scrolled ? 1 : 0,
          opacity: scrolled ? 0.5 : 0
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.header>
  );
};

export default Header;
