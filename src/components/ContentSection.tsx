const ContentSection = () => {
  const modules = [
    {
      number: "01",
      title: "Entendendo o Problema Sem Culpa",
      description: "Por que o excesso de telas virou um desafio comum e como sair da culpa para entrar na estratégia.",
      color: "coral"
    },
    {
      number: "02",
      title: "O Mapa da Rotina Familiar",
      description: "Como mapear os momentos de maior uso de telas e criar uma estrutura clara e realista.",
      color: "sage"
    },
    {
      number: "03",
      title: "Os Primeiros Acordos de Tela",
      description: "Limites claros, previsíveis e possíveis. Com frases prontas e combinados que funcionam.",
      color: "coral"
    },
    {
      number: "04",
      title: "Quando o Acordo é Quebrado",
      description: "O que fazer quando a criança testa os limites. Firmeza, calma e consistência.",
      color: "sage"
    },
    {
      number: "05",
      title: "Reduzindo a Tela Gradualmente",
      description: "Estratégias para diminuir o tempo de tela aos poucos, com trocas inteligentes.",
      color: "coral"
    },
    {
      number: "06",
      title: "Férias, Fins de Semana e Viagens",
      description: "Como manter o equilíbrio nos momentos mais desafiadores da rotina familiar.",
      color: "sage"
    }
  ];

  return (
    <section id="conteudo" className="py-20 lg:py-28 bg-cream-dark scroll-mt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            O Que Você Vai Aprender
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Um método completo e <span className="text-gradient">passo a passo</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            6 módulos práticos para você aplicar hoje mesmo na sua rotina
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                module.color === "coral" 
                  ? "bg-gradient-to-br from-coral-light to-background hover:shadow-lg" 
                  : "bg-gradient-to-br from-sage-light to-background hover:shadow-lg"
              }`}
            >
              <span className={`font-display text-5xl font-bold ${
                module.color === "coral" ? "text-primary/20" : "text-accent/20"
              }`}>
                {module.number}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                {module.title}
              </h3>
              <p className="text-muted-foreground">{module.description}</p>
            </div>
          ))}
        </div>

        {/* Extra topics */}
        <div className="mt-12 bg-card p-8 rounded-3xl shadow-card">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            E também inclui:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Lidando com birras",
              "Alternativas práticas",
              "Envolvendo a família",
              "Mantendo consistência"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
