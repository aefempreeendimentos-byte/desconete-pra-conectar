import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ContentSection from "@/components/ContentSection";
import BonusSection from "@/components/BonusSection";
import TransformationSection from "@/components/TransformationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SocialProofNotification } from "@/components/SocialProofNotification";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="min-h-screen pt-14 sm:pt-12">
      <UrgencyBanner />
      <SocialProofNotification />
      <ExitIntentPopup />
      <HeroSection />
      <ScrollReveal animation="fade-up">
        <SocialProofBar />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <ProblemSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <SolutionSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <ContentSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <BonusSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <TransformationSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal animation="zoom-in" delay={100}>
        <CTASection />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;
