
const ContactSection = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
        <p className="text-lg mb-8">Остались вопросы или хочешь на пробное? Напиши нам</p>
        <a
          href="https://t.me/KriGuseva"
          target="_blank"
          rel="noopener noreferrer"
          className="purple-button inline-block"
        >
          Написать в Telegram
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
