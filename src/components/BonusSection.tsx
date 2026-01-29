import { Gift, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const BonusSection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  const bonuses = [
    {
      icon: "🆘",
      title: "Manual de Emergência para Momentos de Crise",
      description: "O que fazer quando a criança chora, grita, implora ou quando você cede. Estratégias práticas para os momentos mais difíceis.",
      value: "R$ 47"
    },
    {
      icon: "📝",
      title: "Acordo Familiar de Uso de Telas",
      description: "Documento para imprimir e assinar em família. Gera compromisso emocional real entre pais e filhos.",
      value: "R$ 27"
    },
    {
      icon: "✅",
      title: "Checklist Diário: Uso Consciente de Telas",
      description: "Para acompanhar o progresso da família sem culpa. Visual e prático para o dia a dia.",
      value: "R$ 27"
    },
    {
      icon: "💌",
      title: "Carta ao Pai e à Mãe Cansados",
      description: "Apoio emocional para os dias difíceis. Porque você também merece acolhimento nessa jornada.",
      value: "Inestimável"
    }
  ];

  const totalValue = 101;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-sage-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Gift className="w-4 h-4" />
            🎁 BÔNUS EXCLUSIVOS - APENAS HOJE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Leve Muito Mais do Que <span className="text-gradient">Um Guia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Materiais extras que sozinhos já valem mais que o investimento total
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group relative bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="absolute -top-3 -right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Flame className="w-3 h-3" />
                {bonus.value}
              </div>
              <span className="text-4xl mb-4 block">{bonus.icon}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="inline-block bg-card px-8 py-4 rounded-2xl shadow-card">
            <p className="text-lg text-foreground">
              Total em bônus: <span className="line-through text-muted-foreground">R$ {totalValue}+</span>{" "}
              <span className="text-primary font-bold text-2xl">GRÁTIS</span>
            </p>
          </div>

          <div>
            <Button variant="hero" size="lg" onClick={handleBuyClick} className="group shadow-glow w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 h-auto">
              QUERO O GUIA + TODOS OS BÔNUS
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              Tudo isso por apenas <strong className="text-primary">R$37</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
