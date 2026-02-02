import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Gift, Clock, ShieldCheck, Zap } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        const dismissed = sessionStorage.getItem('exitPopupDismissed');
        if (!dismissed) {
          setIsOpen(true);
          setHasTriggered(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleBuyClick = () => {
    // Meta Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Desconecte pra Conectar',
        content_category: 'Ebook',
        value: 37.00,
        currency: 'BRL'
      });
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Desconecte pra Conectar',
        content_ids: ['desconecte-pra-conectar'],
        content_type: 'product',
        value: 37.00,
        currency: 'BRL',
        num_items: 1
      });
    }
    window.open("https://pay.kiwify.com.br/O4vtZMO", "_blank");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-0 bg-transparent">
        <div className="relative bg-gradient-to-br from-background via-coral-light/30 to-sage-light/30 rounded-2xl border-2 border-primary/20 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Urgency badge */}
          <div className="bg-destructive text-destructive-foreground text-center py-2 px-4">
            <p className="text-sm font-bold flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              ESPERE! Você está prestes a perder esta oferta
            </p>
          </div>

          <div className="p-6 sm:p-8 text-center">
            <DialogHeader className="space-y-3">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Última Chance!<br />
                <span className="text-gradient">62% de Desconto</span>
              </DialogTitle>
            </DialogHeader>

            <p className="text-foreground/90 mt-4 mb-6 text-sm sm:text-base">
              Não deixe a oportunidade escapar! O Guia Desconecte Para Conectar pode transformar a rotina da sua família <strong className="text-primary font-bold">por menos de R$1 por dia</strong>.
            </p>

            {/* Price comparison */}
            <div className="bg-card rounded-xl p-4 mb-6 border border-border">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm text-foreground/70 line-through">De R$97</p>
                  <p className="text-3xl font-bold text-primary">R$37</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">Acesso vitalício</p>
                  <p className="text-xs text-foreground/80">+ 4 bônus exclusivos</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-foreground/80 mb-6">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="font-medium">Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-medium">Acesso imediato</span>
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              onClick={handleBuyClick}
              className="w-full text-base sm:text-lg py-5 sm:py-6 shadow-glow animate-pulse-soft"
            >
              SIM! QUERO APROVEITAR AGORA
            </Button>

            <button
              onClick={handleClose}
              className="mt-4 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Não, prefiro perder esta oferta
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
