
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqItems: FAQItem[] = [
    {
      question: "Я новичок. Подойдет ли мне кейс-клуб?",
      answer: "Конечно! С первого рабочего дня в роли продакта нужно улучшать насмотренность решений и интерфейсов."
    },
    {
      question: "Какие кейсы я буду решать?",
      answer: "Кейсы конкретных компаний, где сообщается о проблеме, метриках, гипотезах и командах вовлеченных в решение. \nВопросы и задачи, которые часто встречаются на собеседованиях, у них нет правильного ответа. \nРеальные ситуации из продуктовой жизни, которые интересны для обсуждения."
    },
    {
      question: "Где проходит кейс-клуб?",
      answer: "Встречи проходят в Zoom, мы пришлем ссылку для еженедельных встреч, а также доступ к чату в Telegram."
    },
    {
      question: "Что, если я пропустил встречу или не могу присутствовать на ближайшей?",
      answer: "Мы понимаем, что планы могут меняться. У тебя будет возможность присоединиться ко второй группе, напиши об этом организатору."
    },
    {
      question: "Я оплатил(а) участие, что дальше?",
      answer: "встречи проходят в Zoom, мы пригласим тебя в закрытый telegram канал для общения и получения ссылки на встречи (только для тарифа \"полный\") \nТебе будет доступна база с материалами кейс-клуба\nДоступ к личной странице для трекинга результатов изучения базы кейсов - только для тарифа \"налегке\""
    },
    {
      question: "Как работает подписка?",
      answer: "Участие в кейс-клубе оплачивается через сервис Boosty, списание средств будет происходить автоматически ежемесячно. Подписку можно отменить в любой момент."
    }
  ];

  return (
    <section id="faq" className="section-container">
      <h2 className="section-title">FAQ</h2>
      
      <div className="max-w-3xl mx-auto mb-12">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-bold text-lg py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-gray-700 py-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="text-center">
        <a 
          href="https://pgcaseclub.com/payment" 
          target="_blank"
          rel="noopener noreferrer"
          className="purple-button inline-flex items-center"
        >
          Оформить подписку
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
