import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenIcon,
  ChartBarIcon,
  CheckCircleIcon,
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  ShoppingBagIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FaqAccordion from "components/site/FaqAccordion";
import NewsletterSignup from "components/site/NewsletterSignup";
import ContactForm from "components/site/ContactForm";
import { useLanguage } from "context/LanguageContext";

const features = [
  {
    icon: ChartBarIcon,
    status: "In the app",
    title: "Habits & carbon clarity",
    summary: "Track everyday habits and see estimated emissions, avoided impact, confirmed offsets, and your remaining balance as separate signals.",
  },
  {
    icon: SparklesIcon,
    status: "In the app",
    title: "Your living ecosystem",
    summary: "Grow a realistic Bulgarian forest habitat where mature trees, shrubs, flowers, and unlocked species accumulate instead of disappearing between milestones.",
  },
  {
    icon: MapPinIcon,
    status: "Sign-in required",
    title: "Sustainability map",
    summary: "Explore reviewed places, events, and eco-tours in Bulgaria through an interactive 3D globe and a public catalogue preview.",
  },
  {
    icon: BookOpenIcon,
    status: "In the app",
    title: "Personalized Knowledge Hub",
    summary: "Follow tailored learning paths with articles, quizzes, missions, simulations, and webinars. The entire app and navigation are available in Bulgarian and English.",
  },
  {
    icon: UserGroupIcon,
    status: "In the app",
    title: "Community action",
    summary: "Community sections remain visible when the post feed cannot load, with challenges, groups, shared goals, scoped leaderboards, points, and badges easier to reach.",
  },
  {
    icon: ShoppingBagIcon,
    status: "Partner onboarding",
    title: "Marketplace for local impact",
    summary: "A marketplace built to give Bulgarian bio-producers and responsible local businesses a trusted place to present their products. Public offers appear after partner and product claims are reviewed.",
  },
];

const featuresBg = [
  { icon: ChartBarIcon, status: "В приложението", title: "Навици и въглеродна яснота", summary: "Проследявай ежедневните си навици и виж отделно изчислените емисии, избегнатото въздействие, потвърдените компенсации и оставащия баланс." },
  { icon: SparklesIcon, status: "В приложението", title: "Твоята жива екосистема", summary: "Отглеждай реалистично българско горско местообитание, в което зрелите дървета, храстите, цветята и отключените видове се натрупват с напредъка ти." },
  { icon: MapPinIcon, status: "Изисква вход", title: "Карта на устойчивостта", summary: "Разглеждай проверени места, събития и екотурове в България чрез интерактивен 3D глобус и публичен каталог." },
  { icon: BookOpenIcon, status: "В приложението", title: "Персонализиран център за знания", summary: "Следвай персонализирани пътеки със статии, тестове, мисии, симулации и уебинари. Цялото приложение и навигацията са налични на български и английски." },
  { icon: UserGroupIcon, status: "В приложението", title: "Действие с общността", summary: "Секциите на общността остават достъпни и при проблем с публикациите, а предизвикателствата, групите, общите цели, класациите, точките и значките са лесни за откриване." },
  { icon: ShoppingBagIcon, status: "Включване на партньори", title: "Marketplace с местна стойност", summary: "Marketplace е създаден, за да дава видимост на български биопроизводители и отговорни местни бизнеси. Публични предложения се добавят след проверка на партньора и продуктовите твърдения." },
];

const faqItems = [
  {
    question: "What can I use Green Compass for today?",
    answer: "Green Compass includes habits and impact estimates, a personal ecosystem, personalized learning, sustainable places and events, Community, and a pilot Marketplace. Some personal and interactive experiences require an account.",
  },
  {
    question: "Are the carbon figures exact?",
    answer: "No. Green Compass presents directional estimates based on a versioned methodology. Emissions, avoided impact, provider-confirmed offsets, and the remaining balance are shown separately so the result stays understandable and honest.",
  },
  {
    question: "Is the map available everywhere?",
    answer: "The first reviewed catalogue focuses on Bulgaria. A public preview is available on the website, while the interactive 3D globe and personalized experience require sign-in.",
  },
  {
    question: "Can I use Green Compass in Bulgarian?",
    answer: "Yes. Every page, menu, and feature is available in Bulgarian and English. Your selected language stays consistent throughout the entire app.",
  },
  {
    question: "Can I buy products or offsets in the app?",
    answer: "Marketplace infrastructure is built to support Bulgarian bio-producers and responsible local businesses. Product catalogues and checkout open as real partners, certifications, and evidence complete review. Offsets are shown as confirmed only after provider confirmation.",
  },
  {
    question: "Why does Community ask me to sign in?",
    answer: "Participation and personal Community data require an account. After signing in, the app returns you to the intended Community experience, while the functional sections remain visible even if the post feed cannot load.",
  },
];

const faqItemsBg = [
  { question: "За какво мога да използвам Green Compass?", answer: "Green Compass включва навици и оценки на въздействието, лична екосистема, персонализирано обучение, устойчиви места и събития, общност и пилотен Marketplace. Някои персонални и интерактивни функции изискват профил." },
  { question: "Точни ли са въглеродните стойности?", answer: "Не. Green Compass показва ориентировъчни оценки според версионирана методология. Емисиите, избегнатото въздействие, потвърдените от доставчик компенсации и оставащият баланс се показват отделно." },
  { question: "Картата налична ли е навсякъде?", answer: "Първият проверен каталог е фокусиран върху България. Публичният сайт предлага преглед, а интерактивният 3D глобус и персонализираното преживяване изискват вход." },
  { question: "Мога ли да използвам Green Compass на български?", answer: "Да. Всяка страница, меню и функция е налична на български и английски. Избраният език остава един и същ в цялото приложение." },
  { question: "Мога ли да купувам продукти или компенсации в приложението?", answer: "Marketplace е разработен с цел да подкрепя български биопроизводители и отговорни местни бизнеси. Каталогът и плащането се отварят с включването на реални партньори и след проверка на сертификатите и доказателствата. Компенсациите се показват като потвърдени само след потвърждение от доставчик." },
  { question: "Защо Community изисква вход?", answer: "Участието и личните данни в Community изискват профил. След вход приложението те връща към избраното място, а функционалните секции остават видими дори ако публикациите не се заредят." },
];

const homeCopy = {
  en: {
    metaTitle: "Green Compass: Turn sustainable intent into everyday progress",
    metaDescription: "Track habits and carbon impact, learn, discover sustainable places, and take action with your community in Green Compass.",
    heroEyebrow: "Your sustainability journey, connected", heroTitle: "Turn good intentions into visible progress.",
    heroText: "Green Compass connects daily habits, carbon clarity, personalized learning, local discovery, and community action. Your next sustainable step is easier to see.",
    open: "Open Green Compass", explore: "Explore the features", evidence: "Evidence-aware", progress: "Progress over perfection",
    ecosystemLabel: "Your ecosystem", ecosystemLine: "Learn. Act. See the difference.", journey: "One connected journey", journeyLine: "from insight to collective action",
    how: "How it works", loopTitle: "A practical loop that grows with you.", loopText: "Green Compass brings guidance and action into the same experience. Start wherever you are, understand the signals, and keep building momentum.",
    steps: [["01", "Learn", "Follow a personalized path in Bulgarian or English."], ["02", "Act", "Log habits, complete missions, and join challenges."], ["03", "Understand", "See directional impact without false precision."], ["04", "Grow", "Build your ecosystem with people who share your goals."]],
    inside: "Inside Green Compass", six: "Six parts. One clearer direction.", sixText: "Each capability has a visible availability label, so you know what you can use now and what is being introduced gradually.",
    habitat: "A shared habitat", forestMemory: "A forest that remembers your progress.", layers: ["Trees", "Shrubs", "Wildflowers"], ecosystemRedesign: "Ecosystem redesign", forestTitle: "A Bulgarian forest that grows layer by layer.", forestText: "The visual system starts with a natural Bulgarian forest edge and a mature English oak. Every unlocked tree, shrub, and flower accumulates into a coherent habitat, making long-term progress easier to imagine.", forestBullets: ["Realistic nature-study art direction", "Botanically grounded mature species", "Visible accumulation across milestones", "A clear explanation of how the habitat forms"],
    carbon: "Carbon clarity", carbonTitle: "A balance you can understand, not a magic number.", carbonText: "Impact estimates are directional and methodology versions stay visible. Green Compass keeps different types of impact separate instead of collapsing everything into one claim.", methodology: "Explore the methodology", carbonCards: [["Emissions", "Estimated impact from the habits and activities you log."], ["Avoided impact", "Estimated emissions avoided through lower-impact choices."], ["Confirmed offsets", "Offsets counted only after confirmation from a provider."], ["Remaining balance", "A clear view of what remains after separate impact signals."]],
    bulgaria: "Bulgaria first", mapStatement: "A growing map of sustainable places and experiences.", nearby: "Discover nearby", mapTitle: "From catalogue to interactive globe.", mapText: "Browse reviewed locations, events, and eco-tours. The public catalogue offers a preview; sign in to explore the interactive 3D globe and connect discovery to your journey.", appExplore: "Explore in the app",
    research: "Research, with context", statistic: "decrease observed in one 216-participant study using carbon-footprint feedback.", feedbackTitle: "Feedback can help without guaranteeing an outcome.", feedbackText: "The independent study is useful evidence for the role of feedback, not a promise of what Green Compass will achieve for every person. Our own estimates remain directional and transparent about their methodology.", readResearch: "Read the research",
    questions: "Questions, answered", clarity: "Clear about what every signal means.", noPromises: "No vague promises and no pressure to be perfect.", follow: "Follow the journey", updates: "Useful updates, sent occasionally.", improve: "Help improve Green Compass", contactTitle: "Tell us what would make your next step easier.", contactText: "Questions, product feedback, partnership ideas, and honest criticism are welcome. We only collect the details you choose to send.",
  },
  bg: {
    metaTitle: "Green Compass: Превърни устойчивите намерения във видим напредък",
    metaDescription: "Проследявай навици и въглеродно въздействие, учи, откривай устойчиви места и действай заедно с общността в Green Compass.",
    heroEyebrow: "Твоето устойчиво пътуване на едно място", heroTitle: "Превърни добрите намерения във видим напредък.",
    heroText: "Green Compass свързва ежедневните навици, въглеродната яснота, персонализираното обучение, местните открития и общността. Следващата ти устойчива стъпка става по-ясна.",
    open: "Отвори Green Compass", explore: "Разгледай функциите", evidence: "С фокус върху доказателствата", progress: "Напредък, не съвършенство",
    ecosystemLabel: "Твоята екосистема", ecosystemLine: "Учи. Действай. Виж промяната.", journey: "Едно свързано пътуване", journeyLine: "от знание към общо действие",
    how: "Как работи", loopTitle: "Практичен цикъл, който расте с теб.", loopText: "Green Compass събира знанието и действието в едно преживяване. Започни оттам, където си, разбери сигналите и продължавай напред.",
    steps: [["01", "Научи", "Следвай персонализирана пътека на български или английски."], ["02", "Действай", "Записвай навици, изпълнявай мисии и участвай в предизвикателства."], ["03", "Разбери", "Виж ориентировъчното въздействие без подвеждаща точност."], ["04", "Развивай", "Изграждай екосистемата си с хора, които споделят твоите цели."]],
    inside: "В Green Compass", six: "Шест части. Една по-ясна посока.", sixText: "Всяка функция има ясен етикет за наличност, за да знаеш какво можеш да използваш и кое се въвежда поетапно.",
    habitat: "Общо местообитание", forestMemory: "Гора, която помни напредъка ти.", layers: ["Дървета", "Храсти", "Диви цветя"], ecosystemRedesign: "Нова екосистема", forestTitle: "Българска гора, която расте слой по слой.", forestText: "Визуалната система започва с естествен български горски край и зрял летен дъб. Всяко отключено дърво, храст и цвете остава и образува общо местообитание.", forestBullets: ["Реалистична природонаучна посока", "Ботанически достоверни зрели видове", "Видимо натрупване през етапите", "Ясно обяснение как се оформя местообитанието"],
    carbon: "Въглеродна яснота", carbonTitle: "Разбираем баланс, а не магическо число.", carbonText: "Оценките са ориентировъчни, а версията на методологията остава видима. Green Compass показва различните видове въздействие отделно.", methodology: "Разгледай методологията", carbonCards: [["Емисии", "Оценено въздействие от записаните навици и дейности."], ["Избегнато въздействие", "Оценени емисии, избегнати чрез избори с по-ниско въздействие."], ["Потвърдени компенсации", "Компенсации, отчетени само след потвърждение от доставчик."], ["Оставащ баланс", "Ясен поглед към оставащото след отделното представяне на сигналите."]],
    bulgaria: "Първо България", mapStatement: "Развиваща се карта на устойчиви места и преживявания.", nearby: "Открий наблизо", mapTitle: "От каталог към интерактивен глобус.", mapText: "Разглеждай проверени места, събития и екотурове. Публичният каталог предлага преглед, а след вход можеш да използваш интерактивния 3D глобус.", appExplore: "Разгледай в приложението",
    research: "Изследвания с контекст", statistic: "намаление, наблюдавано в изследване с 216 участници и обратна връзка за въглеродния отпечатък.", feedbackTitle: "Обратната връзка може да помогне без да гарантира резултат.", feedbackText: "Независимото изследване показва потенциала на обратната връзка, но не обещава еднакъв резултат за всеки. Нашите оценки остават ориентировъчни и прозрачни.", readResearch: "Прочети изследването",
    questions: "Въпроси и отговори", clarity: "Яснота за значението на всеки показател.", noPromises: "Без неясни обещания и без натиск за съвършенство.", follow: "Следи развитието", updates: "Полезни новини от време на време.", improve: "Помогни ни да подобрим Green Compass", contactTitle: "Кажи ни какво би улеснило следващата ти стъпка.", contactText: "Въпроси, продуктова обратна връзка, идеи за партньорство и честна критика са добре дошли. Събираме само данните, които решиш да изпратиш.",
  },
};

function IndexPage() {
  const { language } = useLanguage();
  const copy = homeCopy[language];
  const localizedFeatures = language === "bg" ? featuresBg : features;
  const localizedFaqItems = language === "bg" ? faqItemsBg : faqItems;
  return (
    <>
      <Meta
        title={copy.metaTitle}
        description={copy.metaDescription}
      />
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-forest/10">
          <div className="site-container grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            <div className="fade-rise max-w-3xl">
              <p className="eyebrow">{copy.heroEyebrow}</p>
              <h1 className="display-title">{copy.heroTitle}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
                {copy.heroText}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="https://app.greencompass.app" target="_blank" rel="noreferrer" className="button-primary">
                  {copy.open}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
                <Link href="/#features" className="button-secondary">{copy.explore}</Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-forest">
                {[copy.evidence, copy.progress].map((label) => (
                  <span key={label} className="rounded-full border border-forest/15 bg-white/70 px-3 py-2">{label}</span>
                ))}
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-lg">
              <div className="hero-orbit relative aspect-square overflow-hidden rounded-full shadow-soft">
                <div className="absolute inset-x-[15%] bottom-[15%] rounded-3xl border border-white/25 bg-white/10 p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-moss">{copy.ecosystemLabel}</p>
                  <p className="mt-2 font-serif text-2xl">{copy.ecosystemLine}</p>
                </div>
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-l-2 border-leaf pl-4 text-sm leading-6 text-ink/60">
                <span className="font-bold text-forest">{copy.journey}</span>
                <span aria-hidden="true">·</span>
                <span>{copy.journeyLine}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="how-it-works" className="section-pad bg-white">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">{copy.how}</p>
              <h2 className="section-title">{copy.loopTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.loopText}
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {copy.steps.map(([number, title, text]) => (
                <article key={number} className="rounded-[2rem] border border-forest/10 bg-paper p-6">
                  <span className="font-serif text-4xl text-leaf/60">{number}</span>
                  <h3 className="mt-10 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-ink/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section-pad overflow-hidden">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">{copy.inside}</p>
              <h2 className="section-title">{copy.six}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.sixText}
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {localizedFeatures.map(({ icon: Icon, status, title, summary }) => (
                <article key={title} className="editorial-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-lightest text-leaf">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-stone px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest">{status}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                  <p className="mt-4 leading-7 text-ink/65">{summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad overflow-hidden">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] bg-forest p-8 shadow-soft sm:p-12">
              <Image
                src="/images/ecosystem/bulgarian-forest-meadow-v2.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-forest/20 to-transparent" />
              <Image
                src="/images/ecosystem/english-oak-mature-v2.png"
                alt={language === "bg" ? "Зрял летен дъб в екосистемата на Green Compass" : "A mature English oak growing within the Green Compass ecosystem"}
                fill
                sizes="(min-width: 1024px) 34vw, 70vw"
                className="translate-x-[19%] translate-y-[8%] object-contain object-right-bottom drop-shadow-2xl"
              />
              <div className="relative flex h-full min-h-[26rem] flex-col justify-between">
                <div>
                  <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-forest backdrop-blur">{copy.habitat}</span>
                  <h2 className="mt-6 max-w-sm font-serif text-4xl leading-tight text-white sm:text-5xl">{copy.forestMemory}</h2>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold text-white">
                  {copy.layers.map((label) => (
                    <div key={label} className="rounded-3xl border border-white/20 bg-forest/70 px-3 py-5 backdrop-blur">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">{copy.ecosystemRedesign}</p>
              <h2 className="section-title">{copy.forestTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.forestText}
              </p>
              <ul className="mt-8 space-y-4 text-ink/70">
                {copy.forestBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-pad bg-forest text-white">
          <div className="site-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow text-moss">{copy.carbon}</p>
              <h2 className="section-title text-white">{copy.carbonTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                {copy.carbonText}
              </p>
              <Link href="/research" className="button-primary mt-8 bg-moss text-ink hover:bg-white">{copy.methodology}</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.carbonCards.map(([title, text]) => (
                <article key={title} className="rounded-[2rem] border border-white/15 bg-white/5 p-6">
                  <CheckCircleIcon className="h-6 w-6 text-moss" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="rounded-[2.5rem] bg-green-lightest p-8 sm:p-12">
              <GlobeEuropeAfricaIcon className="h-16 w-16 text-leaf" aria-hidden="true" />
              <p className="mt-12 text-xs font-bold uppercase tracking-[0.16em] text-forest">{copy.bulgaria}</p>
              <p className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{copy.mapStatement}</p>
            </div>
            <div>
              <p className="eyebrow">{copy.nearby}</p>
              <h2 className="section-title">{copy.mapTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.mapText}
              </p>
              <a href="https://app.greencompass.app" target="_blank" rel="noreferrer" className="button-secondary mt-8">{copy.appExplore}</a>
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink text-white">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-moss">{copy.research}</p>
              <p className="font-serif text-7xl leading-none text-moss sm:text-8xl">23%</p>
              <p className="mt-4 max-w-sm text-lg leading-7 text-white/70">
                {copy.statistic}
              </p>
            </div>
            <div>
              <h2 className="section-title text-white">{copy.feedbackTitle}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                {copy.feedbackText}
              </p>
              <Link href="/research" className="button-primary mt-8 bg-moss text-ink hover:bg-white">{copy.readResearch}</Link>
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad bg-white">
          <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow">{copy.questions}</p>
              <h2 className="section-title">{copy.clarity}</h2>
              <p className="mt-5 leading-7 text-ink/65">{copy.noPromises}</p>
            </div>
            <FaqAccordion items={localizedFaqItems} />
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="site-container grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow text-moss">{copy.follow}</p>
              <h2 className="section-title text-white">{copy.updates}</h2>
            </div>
            <NewsletterSignup />
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">{copy.improve}</p>
              <h2 className="section-title">{copy.contactTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                {copy.contactText}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
