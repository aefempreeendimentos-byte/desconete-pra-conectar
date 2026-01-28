import { Button } from "@/components/ui/button";
import { AlertTriangle, X } from "lucide-react";

const ProblemSection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  const problems = [
    {
      icon: "😤",
      title: "Birras explosivas",
      description: "Escândalos toda vez que você pede para desligar a TV ou o celular"
    },
    {
      icon: "😞",
      title: "Culpa constante",
      description: "Você se sente péssimo por deixar nas telas, mas não aguenta mais brigar"
    },
    {
      icon: "😰",
      title: "Perda total de controle",
      description: "As telas dominaram a rotina da casa e você não sabe mais o que fazer"
    },
    {
      icon: "💔",
      title: "Conexão perdida",
      description: "Sente que está perdendo momentos importantes com seus filhos"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold mb-6">
            <AlertTriangle className="w-4 h-4" />
            VOCÊ SE IDENTIFICA?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Rotina Está <span className="text-gradient">Insustentável?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Todo dia a mesma história: "só mais um vídeo", "só mais cinco minutos"... 
            E quando você tenta impor limites, vem a birra, o choro, a gritaria. 
            <strong className="text-foreground"> E depois? A culpa.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-l-4 border-destructive/50"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{problem.icon}</span>
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-coral-light via-background to-sage-light p-8 md:p-10 rounded-3xl text-center">
          <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-4">
            "O problema <strong>não é falta de autoridade</strong>. 
            É falta de <strong className="text-primary">método</strong>."
          </p>
          <p className="text-lg font-semibold text-primary mb-6">
            E a boa notícia é: existe um caminho mais leve. ↓
          </p>
          <Button variant="hero" size="lg" onClick={handleBuyClick} className="group">
            Quero Conhecer o Método
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
