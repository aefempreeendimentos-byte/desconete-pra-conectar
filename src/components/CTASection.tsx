import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-coral-light/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Comece Hoje
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Dê o primeiro passo para uma{" "}
            <span className="text-gradient">rotina mais leve</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Este não é um método radical. É um guia possível para famílias reais.
            Você não precisa ser perfeito. Você só precisa começar.
          </p>

          {/* Pricing card */}
          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-elevated max-w-lg mx-auto mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-2 rounded-bl-2xl text-sm font-semibold">
              Oferta Especial
            </div>
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Desconecte pra Conectar
            </h3>
            <p className="text-muted-foreground mb-6">Guia Completo + 4 Bônus Exclusivos</p>

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-2xl text-muted-foreground line-through">R$ 97</span>
              <span className="font-display text-5xl font-bold text-primary">R$ 37</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Pagamento único • Acesso imediato • Garantia de 7 dias
            </p>

            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleBuyClick}
              className="w-full group"
            >
              Quero Transformar Minha Rotina
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Compra segura
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Acesso imediato
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="inline-flex items-center gap-3 bg-sage-light px-6 py-4 rounded-2xl">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Garantia de 7 dias</p>
              <p className="text-sm text-muted-foreground">Se não gostar, devolvemos 100% do seu dinheiro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
