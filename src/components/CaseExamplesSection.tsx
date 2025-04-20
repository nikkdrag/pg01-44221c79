import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Case {
  id: string;
  company: string;
  title: string;
  question: string;
  answer: string;
  logo: string;
}

const CaseExamplesSection = () => {
  const [openCase, setOpenCase] = useState<Case | null>(null);

  const cases: Case[] = [
    {
      id: "wise",
      company: "Wise",
      title: "Кейс на привлечение",
      question: "Вы продакт в компании wise, предоставляющая решения для международных денежных переводов. Рост компании зависит от рекомендаций сервиса пользователей своим друзьям. Вы пробовали многочисленные стимулы для рефералов, такие как скидки и подарки, но результат не дает значительного роста пользователей.\n\nВопрос:\nКак вы бы мотивировали пользователей советовать сервис друзьям?",
      answer: "Wise: кейс на привлечение\nКак это делал сервис wise\nОсновная гипотеза заключалась в том, что, увидев существенную экономию, пользователь обязательно поделится сервисом с другом.\nТрадиционное электронное письмо после перевода, подчеркивающее экономию, не давало результата.\nРешение:\nКоманда переработала решение. После совершения трансфера денег на экране появлялся график под кнопкой \"сравнить\", который визуально показывал отправленную сумму, скрытые комиссии, которые в таком случае берут традиционные банки, и реальную экономию с Wise. Там же была кнопка \"поделиться\" и кнопка \"пригласить друзей\".\nРезультат:\nНовый дизайн утроил коэффициент шаринга, значительно увеличив количество рекомендаций от клиентов.",
      logo: "/placeholder.svg"
    },
    {
      id: "tinkoff",
      company: "Тинькофф",
      title: "Геймификация",
      question: "Чтобы побудить пользователей пользоваться голосовым помощником, а также рассказать о его функциях, Тинькофф решил внедрить гефмификацию в виде игры. Игра была представлена в браузере.\n\nВопрос\nКакая интересная игровая механика была использована в игре?",
      answer: "Тинькофф: геймификация\nТинькофф разработал браузерную брендированную игру \"Олег\". Всё управление в игре происходит голосом, чтобы игра началась, нужно крикнуть \"Олег\". Во время игры персонажу необходимо перепрыгивать через препятствия — это можно сделать также только голосом, крича \"Олееег\".\n\nВся игра строится на определенной сюжетной линии — жизнь персонажа, которому нужно выполнять повседневные задачи. Он общается с друзьями, которые собираются на вечеринки, просят в долг, персонаж игры даёт в долг, заказывает еду и тд.\n\nНа каждом этапе ему нужна помощь Олега (таким образом отображается оплата через Тинькофф). Олег настолько стремительно появляется, решает нужные задачи по оплате и переводам, что не всегда успеваешь сообразить, что это произошло и для денежных операций не нужно предпринимать никаких дополнительных действий.\n\nТакже в игре отображены основные функции голосового помощника Тинькофф. Кричать \"Олег\" нужно только в сложных ситуациях, когда есть препятствия на пути. Отличная визуализация и обучение использования голосовой системы. Игра \"обучает\" пользоваться сервисом, управляя опытом и рассказывая, что помощник нужен только в трудных ситуациях. Тем самым игра помогает снять нагрузку с операторов и \"внедрить\" голосового помощника в жизнь клиентов банка.\n\nАналогичную игровую механику применяла и Fanta.\nhttps://www.gamification-now.ru/cases/tinkoff-brauzernaya-igra-oleg-dlya-prodvizheniya-golosovogo-pomoshchnika",
      logo: "/placeholder.svg"
    },
    {
      id: "amazon",
      company: "Amazon",
      title: "Стратегия - пример ответа на собеседовании",
      question: "Amazon начинал свою работу как место, где можно было купить разные вещи, и дела у него шли очень хорошо. В какой-то момент они также решили позволить людям продавать свои вещи. Это было рискованное решение, так как было непонятно насколько решение будет успешным и не ухудшит ли оно текущий опыт пользователей.\n\nВопрос\nКак вы считаете, было ли это успешным решением? Почему?",
      answer: "Amazon: стратегия - пример ответа на собеседовании\nЧто можно рассматривать при ответе:\nкакой будет эффект каннибализации?\nкак это решение повлияет на уровень удовлетворенности клиентов?\nкак это повлияет на конкуренцию?\n\nСравнивая преимущества и недостатки, мы можем сформулировать мнение.\n\nПреимущества решения:\nбольший объем трафика в сервис\nдиверсификация товаров в сервисе\nполучение информации о покупательском спросе и ценах и, тем самым, возможность закрывать гэпы своими поставками\nпривлекая продавцов к себе снижаем конкуренцию, так как администрировать запасы на нескольких площадках трудозатратно для продавцов\nболее высокий поток выручки в долгосрочном периоде за счет большего предложения товаров\nусиление бренда - становление самым большим магазином в мире\n\nНедостатки решения:\nриск ухудшения репутации Амазона, связанный с плохим качеством товаров / сервисов продавцов\nрост затрат на координацию взаимоотношений между площадкой и продавцами, а также между продавцами и клиентами",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section id="examples" className="section-container">
      <h2 className="section-title">Примеры кейсов</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {cases.map((caseItem) => (
          <div 
            key={caseItem.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow animate-on-scroll"
            onClick={() => setOpenCase(caseItem)}
            data-aos="fade-up"
          >
            <div className="h-40 bg-gray-100 flex items-center justify-center p-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                {caseItem.company}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{caseItem.question}</p>
              <button 
                className="text-purple font-medium hover:text-purple-light transition-colors"
                onClick={() => setOpenCase(caseItem)}
              >
                Посмотреть ответ →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-4">Посмотрите запись одной из наших встреч</h3>
        <div className="aspect-video max-w-3xl mx-auto">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/MGAJhmBYHto" 
            title="Product Games Case Club Meeting" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      <Dialog open={openCase !== null} onOpenChange={() => setOpenCase(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {openCase && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{openCase.company}: {openCase.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 whitespace-pre-line">
                {openCase.question}
                {openCase.answer}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseExamplesSection;
