import { Logo } from "@/components/ui/logo";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground mb-4">
              Transformando desafios contábeis em oportunidades de crescimento para empresas angolanas.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contabilidade Mensal</a></li>
              <li><a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors duration-300">Consultoria Fiscal</a></li>
              <li><a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors duration-300">Constituição de Empresas</a></li>
              <li><a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors duration-300">Assessoria Jurídica</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#planos" className="text-muted-foreground hover:text-primary transition-colors duration-300">Planos</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors duration-300">FAQ</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Mail className="w-4 h-4" />
                </span>
                <a 
                  href="mailto:geral.jlconsultoria@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  geral.jlconsultoria@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Phone className="w-4 h-4" />
                </span>
                <a 
                  href="https://wa.me/244922378820" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +244 922 378 820
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} JL Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/Jlconsultoriaeservicos/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/jlvisaomoderna/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://ao.linkedin.com/in/jl-consultoria-e-servi%C3%A7os-923a382b7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
