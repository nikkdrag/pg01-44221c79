
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`fixed right-6 bottom-6 bg-purple hover:bg-purple-light text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
