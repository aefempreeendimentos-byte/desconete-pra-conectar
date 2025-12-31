import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ContentSection from "@/components/ContentSection";
import BonusSection from "@/components/BonusSection";
import TransformationSection from "@/components/TransformationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ContentSection />
      <BonusSection />
      <TransformationSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
