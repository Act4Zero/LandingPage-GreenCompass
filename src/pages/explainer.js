import React from "react";
import Link from "next/link";
import {
  ArrowPathIcon,
  BookOpenIcon,
  ChartBarIcon,
  CheckCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import PageHero from "components/site/PageHero";
import NewsletterSignup from "components/site/NewsletterSignup";
import { useLanguage } from "context/LanguageContext";

const barriers = [
  ["Too much information", "Sustainability advice is often fragmented, technical, or contradictory."],
  ["Too little context", "A good intention is hard to act on when the trade-offs stay invisible."],
  ["All-or-nothing pressure", "People disengage when progress is framed as a purity test."],
];

const explainerCopy = {
  en: {
    metaTitle: "How Green Compass works: From awareness to action", metaDescription: "See how Green Compass connects personalized learning, daily habits, carbon clarity, local discovery, and community action.",
    eyebrow: "How it works", title: "From awareness to action, one clear step at a time.", description: "Sustainable living should not require a climate-science degree. Green Compass connects useful knowledge, daily actions, understandable impact signals, and shared progress.", primary: "Explore the features", secondary: "Open the app",
    barrierEyebrow: "The real barrier", barrierTitle: "Most people care. The path forward is the confusing part.", barrierText: "Daily choices across travel, food, energy, and consumption all have an impact. But information alone rarely makes change feel simple or immediate.", barriers,
    approach: "The approach", choice: "Make the next useful choice visible.", approachText: "Green Compass works as a feedback loop: learn, choose, observe, and keep moving. Each part connects to the same living ecosystem, while pilot capabilities remain clearly labeled.",
    steps: [[BookOpenIcon, "Learn", "Follow personalized paths with articles, quizzes, missions, simulations, and webinars. Every page and menu is available in Bulgarian and English.", "In the app"], [LightBulbIcon, "Choose", "Turn a useful insight into a habit, mission, local discovery, or community challenge.", "In the app"], [ChartBarIcon, "See the pattern", "View directional emissions, avoided impact, confirmed offsets, and the remaining balance separately.", "In the app"], [ArrowPathIcon, "Build momentum", "Grow your ecosystem through private groups, shared goals, points, badges, and scoped leaderboards.", "In the app"]],
    why: "Why feedback matters", evidenceTitle: "Research suggests that visibility can change behavior.", evidenceText: "In a 216-participant study, feedback from a carbon-footprint tracking app was associated with a 23% decrease in emissions. Results varied by domain and by individual characteristics.", evidenceLink: "See the evidence and caveats", stats: [["23%", "Average decrease observed across the study"], ["12%", "Decrease observed for mobility"], ["35%", "Decrease observed for household activities"], ["216", "Participants across several survey rounds"]],
    honest: "What we keep honest", honestTitle: "Useful signals need visible boundaries.", principles: ["Capabilities are labeled by availability and readiness.", "Research findings are attributed and never framed as guarantees.", "Carbon estimates remain directional and methodology versions stay visible.", "Offsets count only after confirmation from a provider.", "The experience should support progress without moralizing."],
    stay: "Stay close to the build", changes: "See what changes and why.",
  },
  bg: {
    metaTitle: "Как работи Green Compass: От осъзнаване към действие", metaDescription: "Виж как Green Compass свързва персонализираното обучение, ежедневните навици, въглеродната яснота, местните открития и общността.",
    eyebrow: "Как работи", title: "От осъзнаване към действие, стъпка по стъпка.", description: "Устойчивият живот не трябва да изисква диплома по климатични науки. Green Compass свързва полезното знание, ежедневните действия, разбираемите показатели и общия напредък.", primary: "Разгледай функциите", secondary: "Отвори приложението",
    barrierEyebrow: "Истинската пречка", barrierTitle: "Повечето хора ги е грижа. Неясен е пътят напред.", barrierText: "Всекидневните решения за пътуване, храна, енергия и потребление имат въздействие. Самата информация обаче рядко прави промяната лесна и непосредствена.", barriers: [["Твърде много информация", "Съветите за устойчивост често са разпокъсани, технически или противоречиви."], ["Твърде малко контекст", "Доброто намерение трудно се превръща в действие, когато компромисите остават невидими."], ["Натиск за всичко или нищо", "Хората се отказват, когато напредъкът се представя като тест за съвършенство."]],
    approach: "Подходът", choice: "Направи следващия полезен избор видим.", approachText: "Green Compass работи като цикъл за обратна връзка: учи, избирай, наблюдавай и продължавай. Всяка част е свързана с една жива екосистема, а пилотните функции са ясно обозначени.",
    steps: [[BookOpenIcon, "Научи", "Следвай персонализирани пътеки със статии, тестове, мисии, симулации и уебинари. Всяка страница и меню е на български и английски.", "В приложението"], [LightBulbIcon, "Избери", "Превърни полезното знание в навик, мисия, местно откритие или общностно предизвикателство.", "В приложението"], [ChartBarIcon, "Виж модела", "Разглеждай отделно ориентировъчните емисии, избегнатото въздействие, потвърдените компенсации и оставащия баланс.", "В приложението"], [ArrowPathIcon, "Натрупай инерция", "Развивай екосистемата си чрез частни групи, общи цели, точки, значки и подходящи класации.", "В приложението"]],
    why: "Защо обратната връзка е важна", evidenceTitle: "Изследванията показват, че видимостта може да промени поведението.", evidenceText: "В изследване с 216 участници обратната връзка от приложение за въглероден отпечатък е свързана с 23% намаление на емисиите. Резултатите варират по области и хора.", evidenceLink: "Виж доказателствата и ограниченията", stats: [["23%", "Средно наблюдавано намаление"], ["12%", "Наблюдавано намаление при мобилността"], ["35%", "Наблюдавано намаление в домакинството"], ["216", "Участници в няколко кръга на проучването"]],
    honest: "Какво представяме честно", honestTitle: "Полезните показатели имат ясни граници.", principles: ["Функциите са обозначени според наличността и готовността си.", "Изследванията се посочват с източник и никога не се представят като гаранция.", "Въглеродните оценки остават ориентировъчни и версията на методологията е видима.", "Компенсациите се отчитат само след потвърждение от доставчик.", "Преживяването подкрепя напредъка без назидание."],
    stay: "Следи развитието", changes: "Виж какво се променя и защо.",
  },
};

function ExplainerPage() {
  const { language } = useLanguage();
  const copy = explainerCopy[language];
  return (
    <>
      <Meta
        title={copy.metaTitle}
        description={copy.metaDescription}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          primary={{ href: "/#features", label: copy.primary }}
          secondary={{ href: "https://app.greencompass.app", label: copy.secondary }}
        />

        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">{copy.barrierEyebrow}</p>
              <h2 className="section-title">{copy.barrierTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.barrierText}
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {copy.barriers.map(([title, text], index) => (
                <article key={title} className="rounded-[2rem] border border-forest/10 bg-paper p-7">
                  <span className="text-sm font-bold text-leaf">0{index + 1}</span>
                  <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                  <p className="mt-4 leading-7 text-ink/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="site-container grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">{copy.approach}</p>
              <h2 className="section-title">{copy.choice}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.approachText}
              </p>
            </div>
            <div className="space-y-5">
              {copy.steps.map(([Icon, title, text, status], index) => (
                <article key={title} className="editorial-card flex gap-5 sm:gap-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-lightest text-leaf">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-bold">{index + 1}. {title}</h3>
                      <span className="w-fit rounded-full bg-stone px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest">{status}</span>
                    </div>
                    <p className="mt-3 leading-7 text-ink/65">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-forest text-white">
          <div className="site-container grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow text-moss">{copy.why}</p>
              <h2 className="section-title text-white">{copy.evidenceTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                {copy.evidenceText}
              </p>
              <Link href="/research" className="button-primary mt-8 bg-moss text-ink hover:bg-white">{copy.evidenceLink}</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.stats.map(([value, label]) => (
                <div key={value} className="rounded-[2rem] border border-white/15 bg-white/5 p-6">
                  <p className="font-serif text-5xl text-moss">{value}</p>
                  <p className="mt-3 leading-6 text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">{copy.honest}</p>
              <h2 className="section-title">{copy.honestTitle}</h2>
            </div>
            <ul className="space-y-5">
              {copy.principles.map((item) => (
                <li key={item} className="flex gap-4 text-lg leading-8 text-ink/70">
                  <CheckCircleIcon className="mt-1 h-6 w-6 shrink-0 text-leaf" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow text-moss">{copy.stay}</p>
              <h2 className="section-title text-white">{copy.changes}</h2>
            </div>
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ExplainerPage;
