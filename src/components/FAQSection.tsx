import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Esse método funciona para qualquer idade?",
    answer: "O guia foi desenvolvido especialmente para famílias com crianças entre 2 e 10 anos, mas os princípios podem ser adaptados para outras faixas etárias. O importante é que quanto antes você começar, mais fácil será estabelecer uma relação saudável com as telas."
  },
  {
    question: "E se meu filho tiver birras muito intensas?",
    answer: "O guia inclui um capítulo completo sobre como lidar com resistência, birras e choro. Além disso, você recebe o bônus 'Manual de Emergência para Momentos de Crise' com estratégias práticas para esses momentos difíceis."
  },
  {
    question: "Preciso tirar todas as telas da vida do meu filho?",
    answer: "Não! O método não é sobre proibição total. É sobre criar equilíbrio e consciência. Você vai aprender a estabelecer limites saudáveis, definir momentos apropriados e transformar o uso de telas em algo mais consciente e menos conflituoso."
  },
  {
    question: "Em quanto tempo vou ver resultados?",
    answer: "Muitas famílias relatam mudanças já na primeira semana de aplicação do método. Porém, cada criança é única e o processo de adaptação pode variar. O importante é a consistência e paciência — e o guia te prepara para isso."
  },
  {
    question: "E se meu parceiro(a) não concordar com o método?",
    answer: "O guia inclui orientações sobre como alinhar a família toda. O 'Acordo Familiar de Uso de Telas' é uma ferramenta que ajuda a criar consenso entre os adultos e compromisso com as crianças."
  },
  {
    question: "O produto é digital ou físico?",
    answer: "O produto é 100% digital. Após a compra, você recebe acesso imediato por e-mail para baixar o guia em PDF e todos os bônus. Pode ler no celular, tablet, computador ou imprimir se preferir."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo sentir que o guia não é para você, basta solicitar o reembolso e devolvemos 100% do seu investimento, sem perguntas."
  },
  {
    question: "Como funciona o acesso após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para download de todo o material. O acesso é vitalício — você pode baixar quantas vezes quiser."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sage font-semibold text-sm uppercase tracking-wider">
            Tire suas dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Respondemos as dúvidas mais comuns de pais como você
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-cream/50 rounded-xl border-none px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <a 
            href="mailto:contato@desconectepraconectar.com.br" 
            className="text-coral hover:text-coral/80 font-medium underline underline-offset-4"
          >
            contato@desconectepraconectar.com.br
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
