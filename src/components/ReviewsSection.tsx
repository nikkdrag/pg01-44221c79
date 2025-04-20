
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Review {
  id: number;
  name: string;
  text: string;
  avatar: string;
}

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Богдан Капранов",
      text: "Крис, привет!\nСпасибо тебе за расшаренные кейсы =) Это мне помогло подготовиться к собеседованию и продуктовым кейсам в Циане =)\nИз самого полезного это кейс с классифайдами и деревом их метрик прям очень мне помогло на собеседовании. Ну и вообще размялись мозги",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Анонимный участник",
      text: "1) Решила подписаться потому что хотелось тренировать насмотренность. Ваши разборы дают много почвы для размышлений и взгляда с другой стороны на фичи, и с какими проблемами сталкивались CEO|PM и т. д при их решении\n2) Есть потребность узнавать то, как устроены какие-то фичи/бизнесы, но не всегда есть много времени для того, чтобы, во-первых, находить полезную информацию, во-вторых, долго смотреть видео или слушать подкаст. А такой формат, как у вас, на самом деле напоминает рилс, когда в сжатом виде есть польза. И я всегда знаю, что это много времени не займет, надо будет все-таки подумать (тренировка) и в конечном итоге я узнаю что-то полезное о новом бизнесе.",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Владислав Фомин",
      text: "Кристина, привет! \nПишу сказать спасибо, что создала такой крутой кейс-клуб!) Мне было крайне полезно и интересно провести в нем пол года. Мой карьерный трек двинулся в сторону проджект менеджмента, поэтому переключаюсь на другие образовательные активности. Удачи тебе с этим проектом, надеюсь, что он будет развиваться и дальше, как и любые твои другие!)",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Анонимный участник",
      text: "Для меня кейс-клуб вполне решил задачи, которые я ставила: снизилась тревожность перед собеседованиями, появились более устойчивые фреймворки подходов к кейсам, расширилось представление об индустриях. Спасибо за организацию!",
      avatar: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Анонимный участник",
      text: "1. Я недавно перешел в продакты и мне нужно развивать продуктовое мышление, а также насмотренность. С этой целью и пошел в кейс-клуб\n2. На самом деле все очень круто и даже не знаю, что я хотел бы добавить. Нравится разнообразие кейсов: есть и b2b, и b2c, внутренние продукты и совершенно разные сферы. Все оч круто",
      avatar: "/placeholder.svg"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-container bg-gray-50">
      <h2 className="section-title">Отзывы</h2>

      {/* Desktop Reviews */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-on-scroll"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0">
                <img src={review.avatar} alt={review.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="font-bold">{review.name}</h3>
            </div>
            <p className="text-gray-700 whitespace-pre-line">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Mobile Reviews (Slider) */}
      <div className="md:hidden mb-16">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0">
              <img 
                src={reviews[currentReview].avatar} 
                alt={reviews[currentReview].name} 
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
            <h3 className="font-bold">{reviews[currentReview].name}</h3>
          </div>
          <p className="text-gray-700 whitespace-pre-line">{reviews[currentReview].text}</p>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={prevReview}
            className="w-10 h-10 rounded-full bg-purple text-white flex items-center justify-center"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button 
            onClick={nextReview}
            className="w-10 h-10 rounded-full bg-purple text-white flex items-center justify-center"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-4">
          {reviews.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentReview ? "bg-purple" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <a 
          href="https://www.youtube.com/watch?v=uJfnbJ1OySw" 
          target="_blank"
          rel="noopener noreferrer"
          className="purple-button inline-flex items-center"
        >
          Нажав на кнопку, вы также можете посмотреть видео-отзыв
        </a>
      </div>
    </section>
  );
};

export default ReviewsSection;
