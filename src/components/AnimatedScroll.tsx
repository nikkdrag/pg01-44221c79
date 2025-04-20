
import { useEffect, useRef } from "react";

const AnimatedScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        
        if (isInViewport) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    // Run once on initial render
    animateElements();
    
    // Add scroll event listener
    window.addEventListener("scroll", animateElements);
    
    // Clean up
    return () => window.removeEventListener("scroll", animateElements);
  }, []);

  return null; // This component doesn't render anything
};

export default AnimatedScroll;
