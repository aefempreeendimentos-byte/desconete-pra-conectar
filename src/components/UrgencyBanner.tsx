import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

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
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-coral to-coral-dark text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 animate-pulse" />
          <span className="font-semibold text-sm sm:text-base">
            OFERTA ESPECIAL por tempo limitado!
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <div className="flex items-center gap-1 font-mono font-bold text-lg">
            <span className="bg-white/20 rounded px-2 py-0.5">
              {formatNumber(timeLeft.hours)}
            </span>
            <span>:</span>
            <span className="bg-white/20 rounded px-2 py-0.5">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span>:</span>
            <span className="bg-white/20 rounded px-2 py-0.5">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
        </div>

        <a
          href="https://pay.kiwify.com.br/O4vtZMO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-coral-dark font-bold text-sm px-4 py-1.5 rounded-full hover:bg-cream transition-colors"
        >
          GARANTIR AGORA
        </a>
      </div>
    </div>
  );
};
