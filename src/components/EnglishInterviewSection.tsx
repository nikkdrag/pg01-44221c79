
import { ArrowRight } from "lucide-react";

const EnglishInterviewSection = () => {
  return (
    <section id="english" className="section-container bg-gray-50">
      <div className="max-w-4xl mx-auto text-center p-8 rounded-lg bg-white shadow-lg">
        <h2 className="section-title">Интервью на английском</h2>
        <p className="text-xl mb-8">
          Специальная программа для подготовки к продуктовым собеседованиям на английском языке.
          Развивайте профессиональный словарный запас и уверенность в общении.
        </p>
        <a 
          href="#" 
          className="purple-button inline-flex items-center"
        >
          Подробнее
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default EnglishInterviewSection;
