import childPlaying from "@/assets/child-playing.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const TransformationSection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  const transformations = [
    {
      before: "Brigas diárias por causa da tela",
      after: "Rotina mais leve e previsível"
    },
    {
      before: "Culpa por usar tela demais",
      after: "Clareza do que fazer em cada situação"
    },
    {
      before: "Sensação de perda de controle",
      after: "Segurança para dizer 'não' sem peso"
    },
    {
      before: "Filhos viciados e irritados",
      after: "Crianças mais criativas e presentes"
    },
    {
      before: "Momentos perdidos com a família",
      after: "Mais conexão e qualidade no tempo juntos"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            ANTES E DEPOIS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Imagine sua Rotina <span className="text-gradient">Assim...</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-4">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
              >
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-destructive/70 text-sm line-through flex-1">
                    {item.before}
                  </span>
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-semibold flex-1 text-right">
                    {item.after}
                  </span>
                </div>
              </div>
            ))}

            <div className="pt-6 text-center lg:text-left">
              <Button variant="hero" size="xl" onClick={handleBuyClick} className="group shadow-glow">
                EU QUERO ESSA TRANSFORMAÇÃO
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
                Por apenas R$37 • Acesso vitalício
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={childPlaying}
                alt="Criança feliz brincando sem telas"
                className="w-full max-w-md mx-auto rounded-3xl shadow-elevated"
              />
            </div>
            
            {/* Quote card */}
            <div className="absolute -bottom-6 left-0 right-0 mx-auto max-w-sm bg-card p-5 rounded-2xl shadow-card z-20 border-l-4 border-accent">
              <p className="text-foreground font-medium italic text-sm">
                "Imagine conseguir desligar a tela sem briga. Imagine ter clareza do que fazer, mesmo nos dias difíceis."
              </p>
            </div>

            {/* Decorations */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-coral-light rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-12 -left-6 w-24 h-24 bg-sage-light rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
