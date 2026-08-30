import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useLanguage } from "context/LanguageContext";

const content = {
  en: {
    metaTitle: "Terms of Service - Green Compass", metaDescription: "Review the terms for using Green Compass, including your rights, responsibilities, and service limitations.",
    title: "Terms of Service", effective: "Effective Date: January 16, 2025", contents: "Contents",
    sections: [
      ["introduction", "1. Introduction", "By accessing or using Green Compass websites and services, you agree to these Terms of Service. If you do not agree, do not use our services."],
      ["eligibility", "2. Eligibility", "You must be at least 13 years old to use our services. By using the platform, you confirm that you meet this requirement."],
      ["user-obligations", "3. User Obligations", "You agree to use Green Compass responsibly and in compliance with all applicable laws and regulations."],
      ["acceptable-use", "4. Acceptable Use", "You may not use Green Compass for unlawful purposes, including spamming, hacking, abuse, or spreading misinformation."],
      ["intellectual-property", "5. Intellectual Property", "Green Compass content, including logos, text, and images, is protected intellectual property. Unauthorized use is prohibited."],
      ["disclaimers", "6. Disclaimers and Limitation of Liability", "Services are provided as is without a guarantee of uninterrupted access. To the extent permitted by law, Green Compass is not liable for damage caused by use of or inability to use the platform."],
      ["termination", "7. Termination", "We may suspend or terminate accounts that violate these terms."],
      ["governing-law", "8. Governing Law", "These terms are governed by the applicable laws identified by Green Compass, without regard to conflict-of-law principles."],
      ["changes", "9. Changes to Terms", "We may update these terms. Continued use of Green Compass after a change means you accept the updated terms."],
      ["contact", "10. Contact Us", "For questions about these terms, contact support@greencompass.app."],
    ],
  },
  bg: {
    metaTitle: "Условия за ползване - Green Compass", metaDescription: "Прегледай условията за използване на Green Compass, включително правата, отговорностите и ограниченията на услугата.",
    title: "Условия за ползване", effective: "В сила от: 16 януари 2025 г.", contents: "Съдържание",
    sections: [
      ["introduction", "1. Въведение", "С достъпа до сайтовете и услугите на Green Compass приемаш тези Условия за ползване. Ако не си съгласен с тях, не използвай услугите ни."],
      ["eligibility", "2. Допустимост", "Трябва да си навършил поне 13 години, за да използваш услугите. С използването на платформата потвърждаваш, че отговаряш на това изискване."],
      ["user-obligations", "3. Задължения на потребителя", "Съгласяваш се да използваш Green Compass отговорно и в съответствие с всички приложими закони и разпоредби."],
      ["acceptable-use", "4. Допустима употреба", "Не можеш да използваш Green Compass за незаконни цели, включително спам, хакерски действия, злоупотреба или разпространяване на невярна информация."],
      ["intellectual-property", "5. Интелектуална собственост", "Съдържанието на Green Compass, включително лога, текстове и изображения, е защитена интелектуална собственост. Неразрешеното използване е забранено."],
      ["disclaimers", "6. Отказ от гаранции и ограничение на отговорността", "Услугите се предоставят във вида, в който са, без гаранция за непрекъснат достъп. В допустимата от закона степен Green Compass не носи отговорност за вреди от използването или невъзможността за използване на платформата."],
      ["termination", "7. Прекратяване", "Може да спрем временно или окончателно профили, които нарушават тези условия."],
      ["governing-law", "8. Приложимо право", "Тези условия се уреждат от приложимото право, посочено от Green Compass, без прилагане на принципите за стълкновение на закони."],
      ["changes", "9. Промени в условията", "Може да актуализираме тези условия. Продължаването на използването на Green Compass след промяна означава, че приемаш актуализираните условия."],
      ["contact", "10. Контакт", "За въпроси относно тези условия пиши на support@greencompass.app."],
    ],
  },
};

function TermsOfService() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <>
      <Meta title={copy.metaTitle} description={copy.metaDescription} />
      <Navbar />
      <main id="main-content" className="legal-page">
        <h1 className="mb-8 text-4xl font-bold text-green-dark">{copy.title}</h1>
        <p className="mb-6 text-sm text-gray-600">{copy.effective}</p>
        <nav className="mb-12" aria-label={copy.contents}>
          <h2 className="mb-4 text-2xl font-semibold text-green-dark">{copy.contents}</h2>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            {copy.sections.map(([id, title]) => <li key={id}><a href={`#${id}`} className="hover:text-green-600">{title}</a></li>)}
          </ul>
        </nav>
        {copy.sections.map(([id, title, paragraph]) => (
          <section id={id} key={id} className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-green-dark">{title}</h2>
            <p className="leading-relaxed text-gray-700">{paragraph}</p>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default TermsOfService;
