import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";
import { ShieldCheck, Clock, Zap, Users, Star, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-coral-light/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-sage-light/50 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 px-4 py-2 rounded-full animate-pulse">
              <Zap className="w-4 h-4 text-destructive" />
              <span className="text-sm font-bold text-destructive uppercase">
                ⚡ Oferta por tempo limitado
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Seu Filho{" "}
              <span className="text-gradient">Viciado em Telas?</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Descubra o método que <strong className="text-foreground">+2.500 famílias</strong> já usam para reduzir 
              o tempo de tela <span className="underline decoration-primary decoration-2">sem brigas, sem culpa e sem trauma</span>.
            </p>

            {/* Pain points */}
            <div className="bg-card/80 p-4 rounded-2xl border border-border">
              <p className="font-semibold text-foreground mb-3">Você está cansado de:</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  "Birras toda vez que desliga a TV",
                  "Se sentir culpado por usar telas",
                  "Brigar diariamente por celular",
                  "Ver seu filho irritado e viciado"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-destructive">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleBuyClick}
                className="w-full sm:w-auto group shadow-glow animate-pulse-soft"
              >
                <span className="flex flex-col items-center sm:flex-row sm:gap-2">
                  <span>QUERO RESOLVER ISSO AGORA</span>
                  <span className="text-sm opacity-90">por apenas R$37</span>
                </span>
              </Button>

              {/* Trust badges inline */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Download instantâneo</span>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-accent-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="font-bold text-foreground ml-1">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">+2.500</span> famílias transformadas
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <img
                src={heroFamily}
                alt="Família feliz lendo juntos sem telas"
                className="w-full rounded-3xl shadow-elevated"
              />
              
              {/* Stats overlay */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-3 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <div>
                    <p className="font-bold text-lg">-80%</p>
                    <p className="text-xs">tempo de tela</p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">+2.500</p>
                    <p className="text-sm text-muted-foreground">famílias felizes</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-sage/20 rounded-3xl -rotate-3 scale-105 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
