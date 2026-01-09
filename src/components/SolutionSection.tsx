import { Button } from "@/components/ui/button";
import productMockup from "@/assets/product-mockup.png";

const SolutionSection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src={productMockup}
                alt="Guia Desconecte pra Conectar"
                className="w-full rounded-3xl shadow-elevated"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage-light rounded-full blur-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-coral-light rounded-full blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <span className="inline-block bg-sage-light text-sage-dark px-4 py-2 rounded-full text-sm font-medium">
              A Solução
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
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Não é sobre proibir</h4>
                  <p className="text-muted-foreground">É sobre criar equilíbrio de forma possível e sustentável.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Funciona no dia a dia</h4>
                  <p className="text-muted-foreground">Inclusive nos dias difíceis, nas férias e fins de semana.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sem culpa, sem julgamento</h4>
                  <p className="text-muted-foreground">Um método gentil que respeita você e sua família.</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="xl" onClick={handleBuyClick} className="group">
              Quero Esse Método
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
      </div>
    </section>
  );
};

export default SolutionSection;
