import { useState, useEffect } from "react";
import { CheckCircle, CreditCard, X } from "lucide-react";

const names = [
  "Maria S.", "João P.", "Ana C.", "Carlos M.", "Fernanda L.",
  "Roberto A.", "Juliana F.", "Pedro H.", "Camila R.", "Lucas T.",
  "Amanda B.", "Gabriel S.", "Patricia M.", "Ricardo D.", "Beatriz N.",
  "Thiago V.", "Larissa K.", "Marcelo G.", "Carolina O.", "Bruno F.",
];

const cities = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG",
  "Curitiba, PR", "Porto Alegre, RS", "Salvador, BA",
  "Brasília, DF", "Fortaleza, CE", "Recife, PE", "Campinas, SP",
];

const paymentMethods = ["PIX", "Cartão"];

export const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: "",
    city: "",
    method: "",
    time: "",
  });

  const generateNotification = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const method = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
    const minutes = Math.floor(Math.random() * 10) + 1;
    const time = minutes === 1 ? "há 1 minuto" : `há ${minutes} minutos`;

    setNotification({ name, city, method, time });
    setIsVisible(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    // First notification after 8 seconds
    const initialTimeout = setTimeout(() => {
      generateNotification();
    }, 8000);

    // Then every 25-40 seconds
    const interval = setInterval(() => {
      generateNotification();
    }, Math.random() * 15000 + 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-up">
      <div className="bg-card border border-border shadow-elevated rounded-2xl p-4 max-w-xs relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-3 pr-6">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-accent" />
          </div>
          
          <div>
            <p className="font-semibold text-foreground text-sm">
              {notification.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {notification.city}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                <CreditCard className="w-3 h-3" />
                {notification.method}
              </span>
              <span className="text-xs text-muted-foreground">
                {notification.time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
