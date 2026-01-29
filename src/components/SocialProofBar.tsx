import { Star, ShieldCheck, Users, Clock, CreditCard } from "lucide-react";

const SocialProofBar = () => {
  return (
    <section className="bg-foreground text-background py-3 sm:py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="font-semibold">+2.500 famílias</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span>Garantia 7 dias</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <span>Acesso imediato</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-accent" />
            <span>Pagamento seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
