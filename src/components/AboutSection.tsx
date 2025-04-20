
import { useState } from "react";
import { Book, Star, Users, Calendar } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const beneficiaries = [
    {
      title: "Junior, Middle, Senior Product Managers",
      content: "Junior: Научишься разбирать реальные кейсы и избегать типовых ошибок\nMiddle: Прокачаешь насмотренность и стратегическое мышление\nSenior: Увидишь неочевидные решения из других сфер и расширишь инструментарий"
    },
    {
      title: "Аналитикам, Дизайнерам, Проджектам",
      content: "Будет полезен аналитикам, дизайнерам, проджектам\nНаучишься предсказывать последствия изменений в продукте\nУвидишь, как твоя роль влияет на итоговый UX и бизнес-метрики\nПоймёшь логику продуктовых решений, чтобы работать слаженнее с командой"
    },
    {
      title: "Тем, кто ищет работу и тем, кто уже работает",
      content: "Для тех, кто ищет работу\n             Даже с сильным резюме многие «спотыкаются» на кейс-\n           интервью. Разберёшь реальные задачи с собеседований и\n           научишься отвечать уверенно.\n\n\nДля тех, кто уже работает\n             Обычные курсы дают теорию, но не учат применять её в\n           реальных задачах. В клубе ты вырвешься из рутины,\n           прорешаешь кейсы с разными бизнес-моделями и найдёшь\n           свежие идеи для своих проектов"
    }
  ];

  // Features with icons
  const problems = [
    {
      title: "Не хватает насмотренности?",
      description: "Кейс-клуб - еженедельный разбор продуктовых и UX кейсов известных компаний.",
      icon: <Star className="w-12 h-12 text-purple mb-4" />
    },
    {
      title: "Меняешь компанию?",
      description: "Узнай, какие вопросы задают на собеседовании и посмотри, как эксперты отвечают на них.",
      icon: <Users className="w-12 h-12 text-purple mb-4" />
    },
    {
      title: "Рабочая рутина лишила идей?",
      description: "Чем больше ты видел, тем легче тебе придумать решение под себя. Выстраивай в голове, что есть удачное решение, а что не очень, решая кейсы известных компаний из разных сфер.",
      icon: <Book className="w-12 h-12 text-purple mb-4" />
    },
    {
      title: "Ищешь продуктовое сообщество?",
      description: "Знакомься с продактами и околопродуктовыми коллегами, делись идеями, вдохновляйся.",
      icon: <Users className="w-12 h-12 text-purple mb-4" />
    }
  ];

  // Club advantages
  const advantages = [
    { text: "3 года работы", icon: <Calendar className="w-8 h-8 text-purple" /> },
    { text: "200+ кейсов", icon: <Book className="w-8 h-8 text-purple" /> },
    { text: "Глубокая проработка", icon: <Star className="w-8 h-8 text-purple" /> },
    { text: "Несколько менторов", icon: <Users className="w-8 h-8 text-purple" /> },
    { text: "Менторы с российским и международным опытом", icon: <Star className="w-8 h-8 text-purple" /> },
    { text: "База данных всех материалов клуба", icon: <Book className="w-8 h-8 text-purple" /> }
  ];

  // How the club works
  const howItWorks = [
    {
      title: "Онлайн формат в Zoom",
      description: "Группа от 5 до 10 человек + ментор\nЕсть записи встреч, которые можно самостоятельно изучить в удобное время"
    },
    {
      title: "Ментор задаёт кейс + обсуждение",
      description: "Далее: обсуждение всех предположений и разбор того, как поступила конкретная компания, если это реальный случай"
    },
    {
      title: "Кейсы из разных сфер",
      description: "Кейсы из разных областей:\nB2C, B2B, B2B2C, C2C... Сферы: EdTech, FoodTech, PropTech, e-com, telecom и другие\nМожем разобрать ваш кейс"
    },
    {
      title: "Расписание встреч",
      description: "Встречи кейс-клуба проходят практически ежедневно. Есть 4 группы, каждая группа до 10 человек:\nПо понедельникам\nс 19:00 по 20:00 (GMT+3)\nПо вторникам\nc 20:00 до 21:00 (GMT+3)\nПо средам\nc 18:45 до 19:45 (GMT+3)\nПо четвергам\nс 19:30 по 20:30 (GMT+3)"
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">О кейс-клубе</h2>
      
      {/* Problems We Solve Section */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold mb-10 text-center">Какие задачи мы решаем</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow animate-on-scroll"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {problem.icon}
              <h4 className="text-xl font-bold mb-2">{problem.title}</h4>
              <p className="text-gray-700">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Who Benefits Section */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold mb-10 text-center">Кому будет полезен кейс-клуб?</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="w-full md:w-1/3">
            {beneficiaries.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 mb-3 rounded-lg transition-colors duration-300 ${
                  activeTab === index 
                    ? "bg-purple text-white" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <h4 className={`font-bold ${activeTab === index ? "text-xl" : "text-lg"}`}>
                  {item.title}
                </h4>
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="w-full md:w-2/3 bg-gray-100 p-6 rounded-lg">
            {beneficiaries.map((item, index) => (
              activeTab === index && (
                <div key={index} className="animate-fade-in">
                  <div className="whitespace-pre-line text-gray-700">
                    {item.content}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Advantages Section */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold mb-10 text-center">Преимущества</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow animate-on-scroll text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {advantage.icon}
              <p className="mt-3 text-sm font-medium">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* How It Works Section */}
      <div>
        <h3 className="text-2xl font-bold mb-10 text-center">Как проходят занятия?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {howItWorks.map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow animate-on-scroll"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-700 whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
