const BonusSection = () => {
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

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-sage-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-lg">🎁</span>
            Bônus Exclusivos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Leve muito mais do que <span className="text-gradient">um guia</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Materiais extras que sozinhos já valem o investimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group relative bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {bonus.value}
              </div>
              <span className="text-4xl mb-4 block">{bonus.icon}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-foreground font-medium">
            Total em bônus: <span className="line-through text-muted-foreground">R$ 101+</span>{" "}
            <span className="text-primary font-bold">GRÁTIS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
