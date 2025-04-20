
import { Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Product Games</h2>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:pgcaseclub@gmail.com"
              className="text-white hover:text-purple-light transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://t.me/KriGuseva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-light transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
            </a>
            <a 
              href="https://t.me/productgames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-light transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>© ProductGames, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
