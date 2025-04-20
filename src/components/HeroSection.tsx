
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen pt-28 pb-16 flex items-center"
      style={{ background: "linear-gradient(135deg, #fff 65%, #6A40E1 65%)" }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Продуктовый кейс-клуб
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl">
            Развивай насмотренность для карьерного роста и подготовки к собеседованию
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://pgcaseclub.com/payment" target="_blank" rel="noopener noreferrer">
              <button className="purple-button flex items-center">
                Оформить подписку
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </a>
            <a href="https://t.me/KriGuseva" target="_blank" rel="noopener noreferrer">
              <button className="outline-button">
                Записаться на пробное занятие
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="aspect-video rounded-lg shadow-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xLFGFpzOHh8"
              title="Product Games Case Club"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
