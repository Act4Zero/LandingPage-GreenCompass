import React, { useEffect } from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowPathRoundedSquareIcon,
  ArrowRightIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  MapIcon,
  MapPinIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const APP_URL = "https://app.greencompass.app";

const developed = [
  [ChartBarIcon, "Въглероден отпечатък и устойчиви навици", "Цели, проследяване на дейности и ориентировъчни CO₂e оценки с ясно разграничени емисии, избегнато въздействие и потвърдени компенсации."],
  [AcademicCapIcon, "Образователен център на български и английски", "Статии, тестове, учебни пътеки, практически мисии, симулации и материали за по-информирани решения."],
  [MapIcon, "Карта на устойчивостта", "Начален каталог за България, екомаршрути, офлайн карти и модерирани предложения за места и инициативи."],
  [UserGroupIcon, "Общност и мотивация", "Групи, предизвикателства, споделени цели, зелени точки, значки и визуална екосистема."],
  [BuildingStorefrontIcon, "Marketplace за местни устойчиви продукти", "Разработена инфраструктура за каталог, профили и покупки, насочена към български биопроизводители и отговорни местни бизнеси."],
];

const opportunities = [
  [TruckIcon, "Устойчива градска мобилност", "Свързване с официални данни за спирки, линии и разписания, така че хората по-лесно да достигат до устойчиви места и инициативи."],
  [ArrowPathRoundedSquareIcon, "Разделно събиране и повторна употреба", "Единен слой за контейнери, зелени острови, текстил, електроника, лекарства, ремонт и повторна употреба, с видим източник и дата на актуализация."],
  [MapPinIcon, "Компостиране и квартални инициативи", "Информация за домашно, училищно и общностно компостиране, почиствания, доброволчески кампании и местни събития."],
  [MapIcon, "Полезни градски точки", "Чешми, пазари, велоинфраструктура, зелени пространства и други общински ресурси в достъпна карта."],
  [AcademicCapIcon, "Образователни инициативи", "Практически мисии и материали, които биха могли да бъдат разработени съвместно с общината, училищата и образователните експерти."],
  [BuildingStorefrontIcon, "Местна икономика", "По-голяма видимост за български биопроизводители, фермерски пазари, ремонтни услуги и кръгови бизнеси чрез проверени профили и ясни критерии."],
];

function SofiaPage() {
  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    document.documentElement.lang = "bg";
    return () => { document.documentElement.lang = previousLanguage; };
  }, []);

  return (
    <>
      <Meta
        title="Green Compass за устойчива София"
        description="Разработена дигитална платформа и възможности за устойчиви градски инициативи, въглероден отпечатък, разделно събиране, компостиране, мобилност и подкрепа за български биопроизводители."
      >
        <meta httpEquiv="content-language" content="bg" />
      </Meta>
      <Navbar forceLanguage="bg" />
      <main id="main-content">
        <section className="eco-grid overflow-hidden border-b border-forest/10 py-20 sm:py-28 lg:py-36">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div className="fade-rise max-w-4xl">
              <p className="eyebrow">Green Compass за София</p>
              <h1 className="display-title">От устойчивите политики до практичните решения в ежедневието.</h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-ink/75">Green Compass е независима дигитална платформа, която събира знание, устойчиви навици, въглеродна яснота, местни възможности и гражданско участие на едно място. Тук представяме разработеното и областите, в които то би могло да бъде полезно за София.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button-primary" href={APP_URL} target="_blank" rel="noreferrer">Разгледайте приложението <ArrowRightIcon className="h-4 w-4" /></a>
                <a className="button-secondary" href="#contact">Контакт</a>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[30rem] rounded-full border border-forest/15 bg-white/60 p-[12%] shadow-soft">
              <div className="absolute inset-[12%] rounded-full border border-dashed border-leaf/35" />
              <div className="absolute inset-[27%] rounded-full border border-forest/20 bg-green-lightest" />
              <div className="relative z-10 flex h-full items-center justify-center text-center">
                <div><span className="font-serif text-6xl text-forest">6</span><p className="mt-2 max-w-40 font-bold leading-6 text-forest">свързани градски направления</p></div>
              </div>
              {["CO₂e", "данни", "знание", "местни", "общност"].map((label, index) => {
                const positions = ["left-[2%] top-[43%]", "left-[22%] top-[5%]", "right-[9%] top-[20%]", "right-[2%] bottom-[28%]", "left-[22%] bottom-[5%]"];
                return <span key={label} className={`absolute ${positions[index]} rounded-full bg-forest px-4 py-2 text-sm font-bold text-white shadow-lg`}>{label}</span>;
              })}
            </div>
          </div>
        </section>

        <section id="platform" className="section-pad bg-white">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div><p className="eyebrow">Разработено до момента</p><h2 className="section-title">Работеща основа, която може да бъде надграждана.</h2></div>
              <p className="text-lg leading-8 text-ink/75">Платформата не се представя като завършено общинско решение. Тя показва реално разработени модули и възможности за приложение, които подлежат на обсъждане и експертна оценка.</p>
            </div>
            <div className="mt-14 grid gap-x-14 md:grid-cols-2">
              {developed.map(([Icon, title, text], index) => (
                <article key={title} className="grid grid-cols-[3rem_1fr] gap-x-5 border-t border-forest/15 py-7">
                  <span className="row-span-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-lightest text-forest"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="text-xl font-bold leading-7">{title}</h3>
                  <p className="mt-2 leading-7 text-ink/75">{text}</p>
                  <span className="sr-only">Функция {index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-paper">
          <div className="site-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div><p className="eyebrow">Въглероден отпечатък</p><h2 className="section-title">Разбираема оценка на въздействието, без подвеждаща точност.</h2><p className="mt-6 text-lg leading-8 text-ink/75">Green Compass помага на потребителите да проследяват част от личния си въглероден отпечатък чрез конкретни дейности и измерими единици. Резултатите са ориентировъчни и служат за по-добро разбиране на ежедневните избори, а не като официална инвентаризация или сертификат.</p></div>
            <div className="divide-y divide-forest/15 border-y border-forest/15">
              {[["Проследими изчисления", "Към всяка оценка се запазват единицата, емисионният фактор, източникът и версията на методологията."], ["Ясно разграничени стойности", "Измерените емисии, избегнатото въздействие и потвърдените компенсации не се смесват в едно число."], ["Лични данни по подразбиране", "Индивидуалните дейности остават лични; при партньорство могат да се използват само обобщени показатели при подходящи правила."]].map(([title, text]) => <div key={title} className="grid gap-3 py-7 sm:grid-cols-[0.75fr_1.25fr]"><h3 className="text-lg font-bold text-forest">{title}</h3><p className="leading-7 text-ink/75">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="opportunities" className="section-pad bg-forest text-white">
          <div className="site-container">
            <div className="max-w-4xl"><p className="eyebrow text-moss">Възможности за София</p><h2 className="section-title text-white">Една платформа, няколко свързани градски теми.</h2><p className="mt-6 text-lg leading-8 text-white/75">Посочените направления са идеи за обсъждане, а не предварително определен план за общината.</p></div>
            <div className="mt-14 grid gap-x-14 md:grid-cols-2">
              {opportunities.map(([Icon, title, text]) => <article key={title} className="grid grid-cols-[3rem_1fr] gap-x-5 border-t border-white/20 py-7"><span className="row-span-2 flex h-12 w-12 items-center justify-center rounded-full bg-moss text-ink"><Icon className="h-6 w-6" aria-hidden="true" /></span><h3 className="text-xl font-bold leading-7 text-white">{title}</h3><p className="mt-2 leading-7 text-white/75">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="producers" className="section-pad bg-white">
          <div className="site-container grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div><p className="eyebrow">Български биопроизводители</p><h2 className="section-title">Marketplace е част от идеята за местна устойчивост.</h2><p className="mt-6 text-lg leading-8 text-ink/75">Целта му е да даде по-добра видимост на български биопроизводители и отговорни местни бизнеси, като свърже продуктите и историите им с хора, които търсят устойчиви алтернативи.</p></div>
            <ol className="space-y-7">
              {[["01", "Реални партньори", "Профили и продукти се публикуват след действително партньорство, а не с примерни предложения."], ["02", "Проверими твърдения", "Сертификатите и твърденията за устойчивост трябва да имат доказуем източник и ясно представяне."], ["03", "Равнопоставено представяне", "Платеното по-високо класиране не определя кои производители се виждат първи."]].map(([number, title, text]) => <li key={number} className="grid grid-cols-[3rem_1fr] gap-5"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-lightest font-serif text-forest">{number}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-ink/75">{text}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section id="contact" className="section-pad bg-paper">
          <div className="site-container grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
            <div><p className="eyebrow">Контакт</p><h2 className="section-title">Разговор при проявен интерес.</h2><p className="mt-6 text-lg leading-8 text-ink/75">Ако инициативата представлява интерес, ще се радваме да представим разработеното дотук и да обсъдим с определени от Столична община експерти дали и в кои области платформата би могла да има практическо приложение за града.</p></div>
            <div className="border-y border-forest/15 py-2">
              <div className="border-b border-forest/15 py-6"><strong className="block text-xl">Стоян Коруджиев</strong><span className="mt-1 block text-ink/70">Android разработчик и основател</span></div>
              <div className="border-b border-forest/15 py-6"><strong className="block text-xl">Цветомира Машова</strong><span className="mt-1 block text-ink/70">Биотехнолог и съосновател</span></div>
              <div className="flex flex-wrap gap-3 py-6"><a className="button-secondary" href="tel:+359888307632">0888 307 632</a><a className="button-secondary" href="mailto:support@greencompass.app">support@greencompass.app</a></div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 pb-6 font-bold text-leaf"><Link href="/">Уебсайт</Link><a href={APP_URL} target="_blank" rel="noreferrer">Приложение</a></div>
            </div>
          </div>
        </section>
      </main>
      <Footer forceLanguage="bg" />
    </>
  );
}

export default SofiaPage;
