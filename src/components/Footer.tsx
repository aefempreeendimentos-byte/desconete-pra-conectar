const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-2xl font-bold text-background mb-4">
            Desconecte pra Conectar
          </p>
          <p className="text-background/60 mb-6">
            Menos Tela, Mais Família
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <a 
              href="https://pay.kiwify.com.br/O4vtZMO" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors underline"
            >
              Comprar Agora
            </a>
            <span className="text-background/40">•</span>
            <a 
              href="#conteudo" 
              className="text-background/80 hover:text-background transition-colors"
            >
              Conteúdo
            </a>
          </div>

          <div className="pt-6 border-t border-background/10">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Desconecte pra Conectar. Todos os direitos reservados.
            </p>
            <p className="text-xs text-background/40 mt-2">
              Este produto é comercializado com apoio da Kiwify.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
