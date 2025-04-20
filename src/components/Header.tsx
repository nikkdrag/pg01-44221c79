
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-bold text-purple">Product Games</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="nav-link">
            О кейс-клубе
          </a>
          <a href="#english" className="nav-link">
            Интервью на английском
          </a>
          <a href="#examples" className="nav-link">
            Примеры кейсов
          </a>
          <a href="#reviews" className="nav-link">
            Отзывы
          </a>
          <a href="#tariffs" className="nav-link">
            Тарифы
          </a>
          <a href="#experts" className="nav-link">
            Об экспертах
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
          <a href="https://t.me/productgames" target="_blank" rel="noopener noreferrer" className="nav-link">
            Telegram-канал
          </a>
        </nav>

        {/* Contact Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="mailto:pgcaseclub@gmail.com"
            className="text-gray-700 hover:text-purple transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/KriGuseva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-purple transition-colors duration-300"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              О кейс-клубе
            </a>
            <a
              href="#english"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Интервью на английском
            </a>
            <a
              href="#examples"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Примеры кейсов
            </a>
            <a
              href="#reviews"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <a
              href="#tariffs"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Тарифы
            </a>
            <a
              href="#experts"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Об экспертах
            </a>
            <a
              href="#faq"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://t.me/productgames"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Telegram-канал
            </a>
            <div className="flex space-x-4 pt-2">
              <a
                href="mailto:pgcaseclub@gmail.com"
                className="text-gray-700 hover:text-purple transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/KriGuseva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple transition-colors duration-300"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
