import childPlaying from "@/assets/child-playing.jpg";

const TransformationSection = () => {
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
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              A Transformação
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Imagine sua rotina{" "}
              <span className="text-gradient">assim...</span>
            </h2>

            <div className="space-y-4">
              {transformations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
                >
                  <div className="flex-1">
                    <p className="text-muted-foreground line-through text-sm">{item.before}</p>
                    <p className="text-foreground font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
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
            <div className="absolute -bottom-6 left-0 right-0 mx-auto max-w-sm bg-card p-6 rounded-2xl shadow-card z-20">
              <p className="text-foreground font-medium italic text-center">
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
