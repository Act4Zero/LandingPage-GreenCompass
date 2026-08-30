import React from "react";
import Link from "next/link";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import PageHero from "components/site/PageHero";
import ContactForm from "components/site/ContactForm";
import { useLanguage } from "context/LanguageContext";

const results = [
  { domain: "Overall", value: 23, note: "Average across the study" },
  { domain: "Mobility", value: 12, note: "Lowest reported domain result" },
  { domain: "Household", value: 35, note: "Highest reported domain result" },
];

const domains = [
  ["Mobility", "Travel choices such as private cars, public transport, cycling, and shared journeys."],
  ["Food", "Diet, sourcing, and food-waste decisions that can add up over time."],
  ["Heating", "Home energy use, insulation, temperature settings, and heating systems."],
  ["Household", "Electricity, devices, purchases, and other everyday consumption patterns."],
];

const researchCopy = {
  en: {
    metaTitle: "Research & methodology: Green Compass carbon clarity", metaDescription: "How Green Compass communicates directional carbon estimates, methodology versions, and independent research with clear limitations.",
    eyebrow: "Research", title: "Carbon clarity starts with honest boundaries.", description: "Green Compass separates directional product estimates from independent research findings and explains what each signal can and cannot tell you.", primary: "See our approach", secondary: "Read the paper",
    methodEyebrow: "Green Compass methodology", methodTitle: "Four signals, kept deliberately separate.", methodText: "Product figures are directional estimates. They are not measurements or guarantees. The methodology is versioned so changes can be explained over time.", cards: [["Emissions", "Estimated impact linked to logged activities."], ["Avoided impact", "Estimated impact avoided through lower-impact choices."], ["Confirmed offsets", "Offsets included only after provider confirmation."], ["Remaining balance", "What remains after the separate signals are presented."]],
    evidence: "Independent evidence", repeated: "Repeated feedback, tested over time.", metrics: [["216", "participants"], ["4", "consumption domains"], ["Several", "survey rounds"]],
    resultsEyebrow: "Reported results", resultsTitle: "A meaningful signal, with important boundaries.", resultsText: "The researchers reported a 23% average decrease in carbon emissions. Effects varied by consumption area, from 12% in mobility to 35% in household activities.", chart: "Emissions decrease observed in the study", scale: "Scale shown to 40% for visual comparison. Values are reported by Hoffmann, Lasarov, Reimers, and Trabandt (2024), not measured outcomes from Green Compass users.", chartLabel: "Study results bar chart", tableCaption: "Accessible summary of reported study results", headers: ["Result", "Decrease", "Context"], results,
    domainsEyebrow: "Four domains", domainsTitle: "Where daily consumption takes shape.", domains,
    careful: "Read this carefully", carefulTitle: "What the numbers mean and what they do not.", caveats: ["The study tested a purpose-built research app with 216 participants. Its results should not be treated as a universal forecast for every app, person, or timeframe.", "Effects differed by domain and individual characteristics. The paper reports that perceived green self-efficacy strengthened the effect, while a strong green self-identity reduced it.", "For Green Compass, the responsible takeaway is that repeated, useful feedback is worth exploring. It does not mean that a specific reduction can be guaranteed."], publication: "Read the full publication",
    discuss: "Discuss the evidence", contactTitle: "Questions, challenges, and useful criticism are welcome.", contactText: "If you work in sustainability, research, or behavior change, we would value your perspective.", productLink: "See how this informs the product",
  },
  bg: {
    metaTitle: "Изследвания и методология: Въглеродна яснота в Green Compass", metaDescription: "Как Green Compass представя ориентировъчните въглеродни оценки, версиите на методологията и независимите изследвания с ясни ограничения.",
    eyebrow: "Изследвания", title: "Въглеродната яснота започва с честни граници.", description: "Green Compass отделя ориентировъчните продуктови оценки от резултатите на независими изследвания и обяснява какво може и какво не може да покаже всеки сигнал.", primary: "Виж нашия подход", secondary: "Прочети публикацията",
    methodEyebrow: "Методология на Green Compass", methodTitle: "Четири сигнала, съзнателно разделени.", methodText: "Продуктовите стойности са ориентировъчни оценки. Те не са измервания или гаранции. Методологията има версии, за да могат промените да се обясняват във времето.", cards: [["Емисии", "Оценено въздействие, свързано със записаните дейности."], ["Избегнато въздействие", "Оценено въздействие, избегнато чрез избори с по-нисък отпечатък."], ["Потвърдени компенсации", "Компенсации, включени само след потвърждение от доставчик."], ["Оставащ баланс", "Оставащото след отделното представяне на всички сигнали."]],
    evidence: "Независими доказателства", repeated: "Повтаряща се обратна връзка, проверена във времето.", metrics: [["216", "участници"], ["4", "области на потребление"], ["Няколко", "кръга на проучването"]],
    resultsEyebrow: "Публикувани резултати", resultsTitle: "Значим сигнал с важни граници.", resultsText: "Изследователите отчитат средно 23% намаление на въглеродните емисии. Ефектът варира от 12% при мобилността до 35% при домакинските дейности.", chart: "Намаление на емисиите, наблюдавано в изследването", scale: "Скалата е до 40% за визуално сравнение. Стойностите са публикувани от Hoffmann, Lasarov, Reimers и Trabandt (2024), а не са измерени резултати от потребители на Green Compass.", chartLabel: "Графика с резултатите от изследването", tableCaption: "Достъпно обобщение на публикуваните резултати", headers: ["Резултат", "Намаление", "Контекст"], results: [{ domain: "Общо", value: 23, note: "Средно за изследването" }, { domain: "Мобилност", value: 12, note: "Най-ниският публикуван резултат" }, { domain: "Домакинство", value: 35, note: "Най-високият публикуван резултат" }],
    domainsEyebrow: "Четири области", domainsTitle: "Къде се оформя ежедневното потребление.", domains: [["Мобилност", "Пътуване с личен автомобил, обществен транспорт, велосипед и споделени пътувания."], ["Храна", "Хранителен режим, произход и решения за намаляване на хранителните отпадъци."], ["Отопление", "Домашна енергия, изолация, температура и отоплителни системи."], ["Домакинство", "Електричество, устройства, покупки и други всекидневни модели на потребление."]],
    careful: "Прочети внимателно", carefulTitle: "Какво означават числата и какво не.", caveats: ["Изследването тества специално създадено приложение с 216 участници. Резултатите не трябва да се приемат като универсална прогноза за всяко приложение, човек или период.", "Ефектите се различават според областта и индивидуалните характеристики. Публикацията посочва, че усещането за лична ефективност засилва ефекта, а силната зелена самоидентичност го намалява.", "Отговорният извод за Green Compass е, че редовната полезна обратна връзка си заслужава. Това не означава, че може да се гарантира конкретно намаление."], publication: "Прочети цялата публикация",
    discuss: "Обсъди доказателствата", contactTitle: "Въпроси, предизвикателства и полезна критика са добре дошли.", contactText: "Ако работиш в областта на устойчивостта, изследванията или промяната на поведението, ще се радваме да чуем гледната ти точка.", productLink: "Виж как това влияе на продукта",
  },
};

function ResearchPage() {
  const { language } = useLanguage();
  const copy = researchCopy[language];
  return (
    <>
      <Meta
        title={copy.metaTitle}
        description={copy.metaDescription}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          compact
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          primary={{ href: "#methodology", label: copy.primary }}
          secondary={{ href: "https://doi.org/10.1016/j.jclepro.2023.139981", label: copy.secondary }}
        />

        <section id="methodology" className="section-pad bg-white">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">{copy.methodEyebrow}</p>
              <h2 className="section-title">{copy.methodTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.methodText}
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {copy.cards.map(([title, text]) => (
                <article key={title} className="rounded-[2rem] border border-forest/10 bg-paper p-6">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-4 leading-7 text-ink/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="site-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="eyebrow">{copy.evidence}</p>
              <h2 className="section-title">{copy.repeated}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.metrics.map(([value, label]) => (
                <div key={label} className="rounded-[2rem] bg-paper p-6 text-center">
                  <p className="font-serif text-5xl text-leaf">{value}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.13em] text-ink/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="section-pad bg-white">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">{copy.resultsEyebrow}</p>
              <h2 className="section-title">{copy.resultsTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.resultsText}
              </p>
            </div>

            <figure className="mt-12 rounded-[2.5rem] border border-forest/10 bg-white p-6 shadow-soft sm:p-10">
              <figcaption className="mb-9 text-sm font-bold uppercase tracking-[0.16em] text-forest">
                {copy.chart}
              </figcaption>
              <div className="space-y-7" aria-label={copy.chartLabel}>
                {copy.results.map((result) => (
                  <div key={result.domain}>
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <div>
                        <p className="font-bold">{result.domain}</p>
                        <p className="text-sm text-ink/50">{result.note}</p>
                      </div>
                      <p className="font-serif text-3xl text-leaf">{result.value}%</p>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-stone">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-leaf to-moss"
                        style={{ width: `${(result.value / 40) * 100}%` }}
                        role="img"
                        aria-label={`${result.domain}: ${result.value}${language === "bg" ? " процента намаление" : " percent decrease"}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-9 border-t border-forest/10 pt-6 text-sm leading-6 text-ink/55">
                {copy.scale}
              </p>
            </figure>

            <div className="mt-8 overflow-x-auto rounded-3xl border border-forest/10 bg-white">
              <table className="w-full min-w-[560px] text-left">
                <caption className="sr-only">{copy.tableCaption}</caption>
                <thead className="bg-green-lightest text-sm uppercase tracking-[0.12em] text-forest">
                  <tr>{copy.headers.map((header) => <th key={header} className="px-6 py-4">{header}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-forest/10">
                  {copy.results.map((result) => (
                    <tr key={result.domain}><th className="px-6 py-5 font-bold">{result.domain}</th><td className="px-6 py-5">{result.value}%</td><td className="px-6 py-5 text-ink/60">{result.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-pad bg-forest text-white">
          <div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow text-moss">{copy.domainsEyebrow}</p>
              <h2 className="section-title text-white">{copy.domainsTitle}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.domains.map(([title, text], index) => (
                <article key={title} className="rounded-[2rem] border border-white/15 bg-white/5 p-6">
                  <span className="text-sm font-bold text-moss">0{index + 1}</span>
                  <h3 className="mt-7 text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="eyebrow">{copy.careful}</p>
              <h2 className="section-title">{copy.carefulTitle}</h2>
            </div>
            <div className="space-y-7 text-lg leading-8 text-ink/70">
              {copy.caveats.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a href="https://doi.org/10.1016/j.jclepro.2023.139981" target="_blank" rel="noreferrer" className="button-primary">
                {copy.publication}
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">{copy.discuss}</p>
              <h2 className="section-title">{copy.contactTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.contactText}
              </p>
              <Link href="/explainer" className="mt-7 inline-flex font-bold text-leaf underline decoration-moss decoration-2 underline-offset-4">{copy.productLink}</Link>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ResearchPage;
