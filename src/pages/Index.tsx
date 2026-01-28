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

const Index = () => {
  return (
    <main className="min-h-screen pt-14 sm:pt-12">
      <UrgencyBanner />
      <SocialProofNotification />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <ContentSection />
      <BonusSection />
      <TransformationSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
