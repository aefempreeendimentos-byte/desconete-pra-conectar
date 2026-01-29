import { useState, useEffect } from "react";
import { Clock, AlertTriangle, Flame } from "lucide-react";

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 23,
    seconds: 47,
  });

  const [salesCount] = useState(Math.floor(Math.random() * 15) + 85); // 85-99

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-destructive via-coral-dark to-destructive text-primary-foreground py-2 sm:py-2.5 px-2 sm:px-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-center">
        <div className="flex items-center gap-1.5 sm:gap-2 animate-pulse">
          <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-bold text-xs sm:text-sm md:text-base uppercase tracking-wide">
            🔥 Preço sobe em:
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <div className="flex items-center gap-0.5 sm:gap-1 font-mono font-black text-base sm:text-lg md:text-xl">
            <span className="bg-primary-foreground/20 rounded px-1.5 sm:px-2.5 py-0.5 sm:py-1 min-w-[28px] sm:min-w-[40px]">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="animate-pulse">:</span>
            <span className="bg-primary-foreground/20 rounded px-1.5 sm:px-2.5 py-0.5 sm:py-1 min-w-[28px] sm:min-w-[40px]">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="animate-pulse">:</span>
            <span className="bg-primary-foreground/20 rounded px-1.5 sm:px-2.5 py-0.5 sm:py-1 min-w-[28px] sm:min-w-[40px]">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>{salesCount} pessoas comprando agora</span>
        </div>

        <a
          href="https://pay.kiwify.com.br/O4vtZMO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-foreground text-coral-dark font-black text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-full hover:scale-105 transition-transform shadow-lg animate-pulse"
        >
          R$37 →
        </a>
      </div>
    </div>
  );
};
