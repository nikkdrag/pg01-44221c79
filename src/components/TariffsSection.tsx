
import { ArrowRight } from "lucide-react";

const TariffsSection = () => {
  const tariffs = [
    {
      name: "Налегке",
      price: "1 490₽/мес.",
      features: [
        "База данных материалов кейс-клуба"
      ],
      isPopular: false
    },
    {
      name: "Полный",
      price: "4 900₽/мес.",
      features: [
        "База данных материалов кейс-клуба",
        "Участие в 5 встречах клуба в месяц, можно в разных группах",
        "Доступ в чат с участниками и организатором"
      ],
      isPopular: true
    },
    {
      name: "Дабл",
      price: "9 400₽/мес.",
      features: [
        "База данных материалов кейс-клуба",
        "Участие в 10 встречах клуба в месяц, можно в разных группах",
        "Доступ в чат с участниками и организатором"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="tariffs" className="section-container bg-gray-50">
      <h2 className="section-title">Тарифы</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {tariffs.map((tariff, index) => (
          <div 
            key={index}
            className={`
              bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative
              ${tariff.isPopular ? 'border-2 border-purple' : ''}
            `}
          >
            {tariff.isPopular && (
              <div className="absolute top-0 right-0 bg-purple text-white py-1 px-4 text-sm font-medium">
                Популярный
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
              <div className="text-3xl font-bold text-purple mb-6">{tariff.price}</div>
              <div className="space-y-3 mb-8">
                <p className="font-medium">В рамках тарифа:</p>
                {tariff.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-2 mt-1 text-purple">•</div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <a href="https://pgcaseclub.com/payment" target="_blank" rel="noopener noreferrer">
                <button className={`w-full py-2 px-4 rounded-md font-bold transition-colors ${
                  tariff.isPopular 
                    ? "bg-purple hover:bg-purple-light text-white" 
                    : "bg-white border-2 border-purple text-purple hover:bg-purple/10"
                }`}>
                  Выбрать
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold mb-4">А еще у нас есть Телеграм-бот для тренировки вопросов перед интервью</h3>
        <a 
          href="https://t.me/PMCasesBot" 
          target="_blank"
          rel="noopener noreferrer"
          className="purple-button inline-flex items-center"
        >
          К боту
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default TariffsSection;
