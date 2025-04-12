import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ContactFormData } from "@/types/contact";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(9, { message: "Telefone deve ter pelo menos 9 dígitos" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos",
  }),
});

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      acceptTerms: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  // Função para enviar mensagem via WhatsApp
  const sendWhatsAppMessage = (data: ContactFormData) => {
    const whatsappNumber = "244922378820"; // Número de WhatsApp da empresa
    const message = encodeURIComponent(`*Contato via site JL Consultoria*\n\n*Nome:* ${data.name}\n*Email:* ${data.email}\n*Telefone:* ${data.phone}\n\n*Mensagem:*\n${data.message}`);
    
    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Exibe uma mensagem de sucesso
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Complete o envio no aplicativo do WhatsApp",
      variant: "default",
    });
    
    // Reseta o formulário
    form.reset();
  };

  // Função que trata o envio do formulário
  function onSubmit(data: ContactFormData) {
    // Envia via WhatsApp diretamente ao invés de usar a API
    sendWhatsAppMessage(data);
    
    // Armazena a mensagem no banco de dados também (opcional)
    mutation.mutate(data);
  }

  return (
    <section id="contato" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            FALE <span className="neon-text">CONOSCO</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Entre em contato para uma análise personalizada para sua empresa
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-background rounded-xl p-8 neon-border">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu nome" 
                          {...field} 
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="seu.email@exemplo.com" 
                          {...field} 
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+244 9XX XXX XXX" 
                          {...field} 
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Como podemos ajudar sua empresa?" 
                          rows={4} 
                          {...field} 
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="mb-6 flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                          className="text-primary border-primary"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-muted-foreground text-sm font-normal">
                          Concordo com a política de privacidade e autorizo o contato da JL Consultoria
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="cta-button w-full group" disabled={mutation.isPending}>
                  {mutation.isPending ? (
                    "Enviando..."
                  ) : (
                    <>
                      <span className="flex items-center justify-center gap-2">
                        Enviar via WhatsApp
                        <Send size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem
                </p>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background rounded-xl p-8 h-full neon-border flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="text-primary text-xl mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">Rua comandante kwenha Maculusso, Luanda, Angola</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:geral.jlconsultoria@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      geral.jlconsultoria@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/244922378820" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      +244 922 378 820
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4 mb-8">
                <a 
                  href="https://www.facebook.com/Jlconsultoriaeservicos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/jlvisaomoderna/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://ao.linkedin.com/in/jl-consultoria-e-servi%C3%A7os-923a382b7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-primary text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              
              <div className="flex-grow bg-secondary rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31534.81431209637!2d13.214873075541944!3d-8.83893971236772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda%2C%20Angola!5e0!3m2!1sen!2sus!4v1644333769427!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ minHeight: "200px", border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Localização JL Consultoria"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
