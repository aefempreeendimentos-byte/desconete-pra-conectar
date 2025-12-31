const ProblemSection = () => {
  const problems = [
    {
      icon: "😤",
      title: "Birras ao desligar a TV",
      description: "Seu filho faz escândalo toda vez que você pede para parar?"
    },
    {
      icon: "😞",
      title: "Culpa constante",
      description: "Você se sente péssimo por deixar nas telas, mas não aguenta mais brigar?"
    },
    {
      icon: "😰",
      title: "Perda de controle",
      description: "Parece que as telas dominaram a rotina da casa?"
    },
    {
      icon: "💔",
      title: "Conexão perdida",
      description: "Sente que está perdendo momentos importantes com seus filhos?"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-coral-light text-coral-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            Você se identifica?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você não está sozinho nessa batalha
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Todo dia a mesma história: "só mais um vídeo", "só mais cinco minutos"... 
            E quando você tenta impor limites, vem a birra, o choro, a gritaria. 
            E depois? A culpa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl mb-4 block">{problem.icon}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-coral-light via-background to-sage-light p-8 md:p-12 rounded-3xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              "O problema <strong>não é falta de autoridade</strong>. 
              É falta de <strong className="text-primary">método</strong>."
            </p>
            <p className="mt-4 text-muted-foreground">
              E a boa notícia é: existe um caminho mais leve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
