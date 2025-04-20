
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EnglishInterviewSection from "@/components/EnglishInterviewSection";
import CaseExamplesSection from "@/components/CaseExamplesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ExpertsSection from "@/components/ExpertsSection";
import TariffsSection from "@/components/TariffsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedScroll from "@/components/AnimatedScroll";

const Index = () => {
  // Set page metadata
  useEffect(() => {
    document.title = "Продуктовый кейс-клуб Product Games";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Продуктовый кейс-клуб для развития насмотренности, карьерного роста и подготовки к собеседованиям. Кейсы из известных компаний, обсуждение с экспертами."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EnglishInterviewSection />
      <CaseExamplesSection />
      <ReviewsSection />
      <ExpertsSection />
      <TariffsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <AnimatedScroll />
    </div>
  );
};

export default Index;
