
const ExpertsSection = () => {
  const experts = [
    {
      name: "Эксперт 1",
      role: "Product Manager",
      experience: "10+ лет опыта в продуктовой разработке",
      avatar: "/placeholder.svg"
    },
    {
      name: "Эксперт 2",
      role: "UX/UI Designer",
      experience: "Опыт работы в международных компаниях",
      avatar: "/placeholder.svg"
    },
    {
      name: "Эксперт 3",
      role: "Product Analyst",
      experience: "Специалист по аналитике продуктовых метрик",
      avatar: "/placeholder.svg"
    },
    {
      name: "Эксперт 4",
      role: "Marketing Expert",
      experience: "Опыт в цифровом маркетинге и продвижении продуктов",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section id="experts" className="section-container">
      <h2 className="section-title">Кто проводит кейс-клуб?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experts.map((expert, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow animate-on-scroll"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="h-64 bg-gray-100">
              <img 
                src={expert.avatar} 
                alt={expert.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
              <p className="text-purple font-medium mb-2">{expert.role}</p>
              <p className="text-gray-700">{expert.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;
