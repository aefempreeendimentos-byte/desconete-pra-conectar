import { Button } from "@/components/ui/button";
import productMockup from "@/assets/product-mockup.webp";
import { CheckCircle, Sparkles, Users, Target } from "lucide-react";

const SolutionSection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  const benefits = [
    {
      icon: Target,
      title: "Não é sobre proibir",
      description: "É sobre criar equilíbrio de forma possível e sustentável."
    },
    {
      icon: Sparkles,
      title: "Funciona no dia a dia",
      description: "Inclusive nos dias difíceis, nas férias e fins de semana."
    },
    {
      icon: Users,
      title: "Sem culpa, sem julgamento",
      description: "Um método gentil que respeita você e sua família."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src={productMockup}
                alt="Guia Desconecte pra Conectar"
                className="w-full max-w-lg mx-auto lg:max-w-none rounded-3xl shadow-elevated"
              />
              
              {/* Badge overlay */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                📚 Acesso Imediato
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage-light rounded-full blur-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-coral-light rounded-full blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
              <CheckCircle className="w-4 h-4" />
              A SOLUÇÃO QUE FUNCIONA
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Desconecte pra Conectar:{" "}
              <span className="text-gradient">Menos Tela, Mais Família</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Um guia prático e acolhedor, criado para <strong className="text-foreground">pais reais</strong>, 
              com rotinas reais, que não têm tempo nem energia para métodos complicados.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-card p-4 rounded-xl shadow-soft">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="hero" size="xl" onClick={handleBuyClick} className="group shadow-glow">
                QUERO ESSE MÉTODO POR R$37
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                ✓ Acesso imediato • ✓ Garantia 7 dias • ✓ Bônus exclusivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
