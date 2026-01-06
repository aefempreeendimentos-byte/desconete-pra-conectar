import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Camila Rodrigues",
    location: "São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Minha filha não comia legumes de jeito nenhum. Depois de aplicar as técnicas do guia, em 3 semanas ela já estava experimentando novos alimentos. Valeu cada centavo!",
  },
  {
    name: "Roberto Santos",
    location: "Rio de Janeiro, RJ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Como pai solo, as refeições eram uma guerra. O método é simples e prático. Meu filho de 4 anos agora come frutas e verduras sem reclamar!",
  },
  {
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Já tinha tentado de tudo com minha filha. O guia me ensinou que o problema não era ela, era a forma como eu oferecia os alimentos. Transformador!",
  },
  {
    name: "Juliana Costa",
    location: "Curitiba, PR",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As receitas são deliciosas e fáceis de fazer. Meus gêmeos adoraram! Finalmente consigo preparar uma refeição que toda a família come junto.",
  },
  {
    name: "Marcos Oliveira",
    location: "Porto Alegre, RS",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Minha esposa comprou e ficamos impressionados. As dicas são baseadas em ciência e funcionam de verdade. Nosso pequeno come de tudo agora.",
  },
  {
    name: "Amanda Ferreira",
    location: "Salvador, BA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Chorei de emoção quando meu filho pediu salada pela primeira vez. Depois de anos de luta, finalmente encontrei um método que funciona!",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-coral/10 text-coral px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Histórias Reais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
            O Que Dizem os Pais
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Milhares de famílias já transformaram a alimentação dos seus filhos
            com nosso método comprovado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 border-2 border-coral/20">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-coral/10 text-coral font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-navy">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-navy/60">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-navy/80 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage-dark px-6 py-3 rounded-full">
            <span className="font-bold text-2xl">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-navy/70 ml-2">
              Baseado em +2.500 avaliações
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
