import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, CreditCard, Gift, CheckCircle, Flame, AlertTriangle } from "lucide-react";

const CTASection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-coral-light/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-light/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Urgency header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              ⚠️ OFERTA EXPIRA EM BREVE
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Chega de Brigar{" "}
              <span className="text-gradient">Por Causa do Celular</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se às <strong className="text-foreground">+2.500 famílias</strong> que já descobriram como ter 
              uma rotina mais leve e conectada
            </p>
          </div>

          {/* Main pricing card */}
          <div className="bg-card p-6 md:p-10 rounded-3xl shadow-elevated max-w-2xl mx-auto mb-8 relative overflow-hidden border-2 border-primary/20">
            {/* Ribbon */}
            <div className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground px-6 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-bold flex items-center gap-2">
              <Flame className="w-4 h-4" />
              62% OFF
            </div>
            
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                🎯 Desconecte pra Conectar
              </h3>
              <p className="text-muted-foreground">Guia Completo + 4 Bônus Exclusivos</p>
            </div>

            {/* What's included */}
            <div className="bg-muted/50 p-4 rounded-2xl mb-6">
              <p className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Gift className="w-5 h-5 text-primary" />
                Tudo que você recebe:
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  "Guia Completo (6 módulos)",
                  "Manual de Emergência",
                  "Acordo Familiar",
                  "Checklist Diário",
                  "Carta de Acolhimento",
                  "Acesso Vitalício"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-xl text-muted-foreground line-through">de R$ 97</span>
                <span className="bg-destructive/10 text-destructive px-2 py-1 rounded text-sm font-bold">
                  -62%
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-lg text-muted-foreground">por apenas</span>
                <span className="font-display text-6xl font-bold text-primary">R$ 37</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                ou em até 12x de R$ 3,70
              </p>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleBuyClick}
              className="w-full group shadow-glow text-xl py-8"
            >
              <span className="flex flex-col items-center">
                <span className="flex items-center gap-2">
                  QUERO TRANSFORMAR MINHA ROTINA
                  <svg 
                    className="w-6 h-6 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="text-sm opacity-90 mt-1">Acesso imediato após pagamento</span>
              </span>
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-accent" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="w-5 h-5 text-accent" />
                <span>PIX ou cartão</span>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="max-w-xl mx-auto">
            <div className="flex items-start gap-4 bg-sage-light p-6 rounded-2xl border-2 border-accent/30">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">
                  Garantia Incondicional de 7 Dias
                </p>
                <p className="text-muted-foreground mt-1">
                  Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. 
                  Sem perguntas, sem burocracia. <strong className="text-foreground">O risco é zero.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Final urgency */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              ⏰ <strong className="text-destructive">Atenção:</strong> O preço pode subir a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
