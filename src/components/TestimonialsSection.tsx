import { Star, Quote, CheckCircle, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Camila Rodrigues",
    location: "São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Meus filhos passavam horas no tablet e eu me sentia péssima por isso. Com o método, conseguimos reduzir de 5 para 1 hora por dia, sem brigas! Eles nem reclamam mais.",
    highlight: "de 5 para 1 hora por dia",
    verified: true,
  },
  {
    name: "Roberto Santos",
    location: "Rio de Janeiro, RJ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Achei que seria impossível tirar o celular do meu filho de 8 anos. O guia me mostrou que o problema era a falta de alternativas. Agora ele brinca, lê e até pede para jogar tabuleiro!",
    highlight: "até pede para jogar tabuleiro",
    verified: true,
  },
  {
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "O melhor foi aprender a fazer isso SEM CULPA. Eu me sentia a pior mãe do mundo. Hoje sei que equilíbrio é possível e minha relação com meus filhos melhorou muito.",
    highlight: "SEM CULPA",
    verified: true,
  },
  {
    name: "Juliana Costa",
    location: "Curitiba, PR",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Tentei tirar as telas de uma vez e foi um desastre. O método gradual do guia funcionou perfeitamente. Em 3 semanas, a rotina da casa mudou completamente.",
    highlight: "Em 3 semanas",
    verified: true,
  },
  {
    name: "Marcos Oliveira",
    location: "Porto Alegre, RS",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Comprei para ajudar minha esposa e acabei aprendendo muito também. As dicas são práticas e realistas. Não é aquele papo radical de 'proíba tudo'. Funciona de verdade!",
    highlight: "Funciona de verdade",
    verified: true,
  },
  {
    name: "Amanda Ferreira",
    location: "Salvador, BA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Chorei quando minha filha desligou a TV sozinha para brincar comigo. Parece milagre, mas é método! O guia ensina a criar conexão real com os filhos.",
    highlight: "desligou a TV sozinha",
    verified: true,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const handleBuyClick = () => {
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
  };

  return (
    <section className="py-16 sm:py-20 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <MessageCircle className="w-4 h-4" />
            RESULTADOS COMPROVADOS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja o Que Pais <span className="text-gradient">Como Você</span> Dizem
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Mais de <strong className="text-foreground">2.500 famílias</strong> já transformaram sua rotina com nosso método
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-12 bg-card p-4 sm:p-6 rounded-2xl shadow-card">
          <div className="text-center">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">2.500+</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Famílias</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">4.9</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Nota média</p>
          </div>
          <div className="text-center">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">98%</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Satisfação</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-none shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              {testimonial.verified && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span className="font-medium">Verificado</span>
                </div>
              )}
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 border-2 border-primary/20">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
                {testimonial.highlight && (
                  <p className="mt-3 text-sm font-semibold text-primary bg-primary/10 inline-block px-3 py-1 rounded-full">
                    ✨ {testimonial.highlight}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center space-y-4 sm:space-y-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-sage/20 text-sage-dark px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <span className="font-bold text-xl sm:text-2xl">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-foreground text-sm sm:text-base ml-1 sm:ml-2">
              +2.500 avaliações
            </span>
          </div>

          <div>
            <Button variant="hero" size="lg" onClick={handleBuyClick} className="group shadow-glow w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 h-auto">
              QUERO TRANSFORMAR MINHA FAMÍLIA
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
              💳 Pagamento único de R$37 • Acesso vitalício
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
