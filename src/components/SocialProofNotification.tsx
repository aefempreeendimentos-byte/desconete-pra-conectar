import { useState, useEffect } from "react";
import { CheckCircle, CreditCard } from "lucide-react";

const purchases = [
  { name: "Maria S.", city: "São Paulo, SP", method: "PIX" },
  { name: "João P.", city: "Rio de Janeiro, RJ", method: "Cartão de Crédito" },
  { name: "Ana C.", city: "Belo Horizonte, MG", method: "PIX" },
  { name: "Pedro L.", city: "Curitiba, PR", method: "Cartão de Crédito" },
  { name: "Fernanda M.", city: "Salvador, BA", method: "PIX" },
  { name: "Carlos R.", city: "Brasília, DF", method: "Cartão de Crédito" },
  { name: "Juliana A.", city: "Porto Alegre, RS", method: "PIX" },
  { name: "Ricardo F.", city: "Fortaleza, CE", method: "Cartão de Crédito" },
  { name: "Camila D.", city: "Recife, PE", method: "PIX" },
  { name: "Bruno G.", city: "Manaus, AM", method: "Cartão de Crédito" },
  { name: "Patrícia H.", city: "Goiânia, GO", method: "PIX" },
  { name: "Lucas T.", city: "Florianópolis, SC", method: "Cartão de Crédito" },
  { name: "Beatriz N.", city: "Campinas, SP", method: "PIX" },
  { name: "Marcelo V.", city: "Vitória, ES", method: "Cartão de Crédito" },
  { name: "Renata B.", city: "Natal, RN", method: "PIX" },
];

export const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(purchases[0]);

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then show every 8-15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const timeAgo = Math.floor(Math.random() * 5) + 1;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl border border-sage/20 p-4 max-w-xs flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-sage-dark flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            {currentPurchase.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {currentPurchase.city}
          </p>
          <p className="text-xs text-sage-dark font-medium mt-1 flex items-center gap-1">
            {currentPurchase.method === "PIX" ? (
              <span className="inline-block w-4 h-4 bg-[#32BCAD] rounded text-white text-[8px] font-bold flex items-center justify-center">
                PIX
              </span>
            ) : (
              <CreditCard className="w-3 h-3" />
            )}
            Comprou via {currentPurchase.method}
          </p>
          <p className="text-[10px] text-muted-foreground mt-1">
            há {timeAgo} minuto{timeAgo > 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};
