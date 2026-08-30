import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useLanguage } from "context/LanguageContext";

const content = {
  en: {
    metaTitle: "Privacy Policy - Green Compass",
    metaDescription: "Understand how Green Compass collects, uses, and protects your personal information, your rights, and our commitment to privacy.",
    title: "Privacy Policy", effective: "Effective Date: January 16, 2025", contents: "Contents",
    sections: [
      ["introduction", "1. Introduction", ["Welcome to Green Compass (we, our, us). Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website, use our services, or communicate with us.", "By using our website, you agree to the terms outlined in this Privacy Policy."]],
      ["information-collection", "2. Information We Collect", ["We collect information you provide voluntarily, including your name, email address, and message when you use our contact form, and your email address when you subscribe to our newsletter.", "We use Google Analytics to collect anonymized information about visits, such as pages viewed, time spent, and general geographic location, so we can improve our services."]],
      ["information-use", "3. How We Use Your Information", ["We use your information to respond to inquiries, provide support, send subscribed newsletters and updates, analyze website use, improve our services, and comply with legal obligations."]],
      ["information-sharing", "4. Information Sharing", ["We do not sell, trade, or rent your personal information. We may share data with trusted service providers, such as Google Analytics, when needed to operate and improve the website.", "We may disclose information to authorities when required by law or necessary to protect our legal rights."]],
      ["data-retention", "5. Data Retention", ["We keep personal information only for as long as necessary to fulfill the purposes described in this policy or as required by law."]],
      ["your-rights", "6. Your Rights", ["You may request access to your personal information, correction of inaccurate information, deletion of your data, or withdrawal from newsletters and marketing communications.", "To exercise these rights, contact privacy@greencompass.app."]],
      ["security", "7. Security", ["We use industry-standard security measures to protect personal information. No online system is entirely secure, so absolute security cannot be guaranteed."]],
      ["third-party-links", "8. Third-Party Links", ["Our website may link to external websites. We are not responsible for their privacy practices or content. Review their privacy policies before providing personal information."]],
      ["policy-changes", "9. Changes to This Privacy Policy", ["We may update this policy periodically. Changes will appear on this page with an updated effective date. Continued use of the website after a change means you accept the updated policy."]],
      ["contact", "10. Contact Us", ["For questions or concerns about this Privacy Policy, contact privacy@greencompass.app."]],
    ],
    closing: "Thank you for trusting Green Compass. Your privacy matters to us.",
  },
  bg: {
    metaTitle: "Политика за поверителност - Green Compass",
    metaDescription: "Научи как Green Compass събира, използва и защитава личната ти информация, какви са правата ти и как се грижим за поверителността.",
    title: "Политика за поверителност", effective: "В сила от: 16 януари 2025 г.", contents: "Съдържание",
    sections: [
      ["introduction", "1. Въведение", ["Добре дошли в Green Compass (ние, наш, нас). Поверителността ти е важна за нас. Тази политика обяснява как събираме, използваме и защитаваме информацията, когато посещаваш сайта, използваш услугите или се свързваш с нас.", "С използването на сайта приемаш условията в тази Политика за поверителност."]],
      ["information-collection", "2. Информация, която събираме", ["Събираме информацията, която предоставяш доброволно, включително име, имейл адрес и съобщение чрез контактната форма, както и имейл адрес при абонамент за новини.", "Използваме Google Analytics за анонимизирана информация за посещенията, като разгледани страници, време в сайта и общо географско местоположение, за да подобряваме услугите си."]],
      ["information-use", "3. Как използваме информацията", ["Използваме информацията, за да отговаряме на запитвания, да предоставяме поддръжка, да изпращаме заявени новини, да анализираме използването на сайта, да подобряваме услугите и да изпълняваме законови задължения."]],
      ["information-sharing", "4. Споделяне на информация", ["Не продаваме, не търгуваме и не отдаваме личната ти информация. Може да споделяме данни с доверени доставчици, като Google Analytics, когато това е необходимо за работата и подобряването на сайта.", "Може да разкрием информация пред органи, когато законът го изисква или когато това е необходимо за защита на законните ни права."]],
      ["data-retention", "5. Съхранение на данните", ["Пазим личната информация само толкова дълго, колкото е необходимо за целите, описани в тази политика, или според изискванията на закона."]],
      ["your-rights", "6. Твоите права", ["Можеш да поискаш достъп до личната си информация, корекция на неточни данни, изтриване на данните или отписване от новини и маркетингови съобщения.", "За да упражниш тези права, пиши на privacy@greencompass.app."]],
      ["security", "7. Сигурност", ["Използваме стандартни за индустрията мерки за защита на личната информация. Никоя онлайн система не е напълно сигурна, затова абсолютна сигурност не може да бъде гарантирана."]],
      ["third-party-links", "8. Връзки към трети страни", ["Сайтът може да съдържа връзки към външни сайтове. Не носим отговорност за техните практики за поверителност или съдържание. Прегледай политиките им, преди да предоставиш лични данни."]],
      ["policy-changes", "9. Промени в политиката", ["Може периодично да актуализираме тази политика. Промените ще бъдат публикувани тук с нова дата на влизане в сила. Продължаването на използването на сайта означава приемане на актуализираната политика."]],
      ["contact", "10. Контакт", ["За въпроси или притеснения относно тази политика пиши на privacy@greencompass.app."]],
    ],
    closing: "Благодарим ти за доверието в Green Compass. Поверителността ти е важна за нас.",
  },
};

function Privacy() {
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
        {copy.sections.map(([id, title, paragraphs]) => (
          <section id={id} key={id} className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-green-dark">{title}</h2>
            <div className="space-y-4 text-gray-700">
              {paragraphs.map((paragraph) => <p key={paragraph} className="leading-relaxed">{paragraph}</p>)}
            </div>
          </section>
        ))}
        <p className="leading-relaxed text-gray-700">{copy.closing}</p>
      </main>
      <Footer />
    </>
  );
}

export default Privacy;
