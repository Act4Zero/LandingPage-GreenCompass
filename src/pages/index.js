import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenIcon,
  ChartBarIcon,
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

const roadmap = [
  { icon: MapPinIcon, title: "Local green discovery", text: "Find lower-impact shops, services, and places around you." },
  { icon: ChartBarIcon, title: "Footprint tracking", text: "Connect everyday habits to a clearer view of personal impact." },
  { icon: UserGroupIcon, title: "Community challenges", text: "Build momentum with shared goals and progress worth celebrating." },
  { icon: ShoppingBagIcon, title: "A considered marketplace", text: "Explore better choices with more context and less greenwash." },
];

function IndexPage() {
  return (
    <>
      <Meta
        title="Green Compass — Make greener choices with less guesswork"
        description="Practical sustainability guidance today, with thoughtful tools for lower-impact living on the horizon."
      />
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-forest/10">
          <div className="site-container grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            <div className="fade-rise max-w-3xl">
              <p className="eyebrow">A clearer path to sustainable living</p>
              <h1 className="display-title">Make greener choices with less guesswork.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
                Green Compass turns a huge, complicated subject into useful guidance for everyday life—starting with knowledge you can use now, and building thoughtfully from there.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/#how-it-works" className="button-primary">
                  See how it works
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <a href="https://app.greencompass.app" target="_blank" rel="noreferrer" className="button-secondary">
                  Explore the app
                </a>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-6 text-ink/55">
                The app is evolving. We label what is ready today and what remains on the roadmap.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
              <div className="hero-orbit relative aspect-square overflow-hidden rounded-full shadow-soft">
                <div className="absolute inset-x-[18%] bottom-[18%] rounded-3xl border border-white/25 bg-white/10 p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-moss">Your direction</p>
                  <p className="mt-2 font-serif text-2xl">Learn. Choose. Keep moving.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-2 rounded-full bg-moss px-5 py-3 text-sm font-bold text-ink shadow-lg sm:left-2">
                Progress over perfection
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-pad bg-white">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="eyebrow">Available today</p>
                <h2 className="section-title">Start with knowledge you can actually use.</h2>
                <p className="mt-6 text-lg leading-8 text-ink/65">
                  Green Compass currently curates sustainability articles and practical guidance. It is a starting point—not a claim that every part of the bigger vision is finished.
                </p>
                <a href="https://app.greencompass.app" target="_blank" rel="noreferrer" className="button-secondary mt-8">
                  Visit the knowledge hub
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  ["01", "Understand", "Get accessible context without wading through jargon."],
                  ["02", "Choose", "Turn useful ideas into actions that fit real life."],
                  ["03", "Build", "Create momentum one considered decision at a time."],
                ].map(([number, title, text]) => (
                  <article key={number} className="rounded-[2rem] border border-forest/10 bg-paper p-6">
                    <span className="font-serif text-4xl text-leaf/60">{number}</span>
                    <h3 className="mt-10 text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-7 text-ink/65">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad overflow-hidden">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">Coming next</p>
              <h2 className="section-title">A wider toolkit, built in the right order.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                These ideas are the direction of travel. They are not being presented as finished features.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {roadmap.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="editorial-card relative overflow-hidden">
                  <span className="absolute right-5 top-5 rounded-full bg-stone px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest">
                    Roadmap {index + 1}
                  </span>
                  <Icon className="h-8 w-8 text-leaf" aria-hidden="true" />
                  <h3 className="mt-12 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-ink/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-forest text-white">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-moss">Research, with context</p>
              <p className="font-serif text-7xl leading-none text-moss sm:text-8xl">23%</p>
              <p className="mt-4 max-w-sm text-lg leading-7 text-white/70">
                decrease in carbon emissions observed in one 216-participant study using a carbon-footprint tracking app.
              </p>
            </div>
            <div>
              <h2 className="section-title text-white">Feedback can help—without guaranteeing an outcome.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                The 2024 study found domain-specific results ranging from 12% for mobility to 35% for household activities. These are independent research findings, not a promise of what Green Compass will achieve for every person.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/research" className="button-primary bg-moss text-ink hover:bg-white">Read the research</Link>
                <a href="https://doi.org/10.1016/j.jclepro.2023.139981" target="_blank" rel="noreferrer" className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white/15">
                  Open the paper
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-forest/10 bg-white py-10">
          <div className="site-container grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [SparklesIcon, "Empowerment", "Make the next step feel possible."],
              [UserGroupIcon, "Collaboration", "Learn with people, not at them."],
              [BookOpenIcon, "Transparency", "Say clearly what is ready and what is not."],
              [ChartBarIcon, "Evidence", "Use research with context and care."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-leaf" aria-hidden="true" />
                <div>
                  <h2 className="text-base font-bold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-ink/60">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section-pad bg-white">
          <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow">Questions, answered</p>
              <h2 className="section-title">Clarity from the start.</h2>
              <p className="mt-5 leading-7 text-ink/65">No vague promises and no pressure to be perfect.</p>
            </div>
            <FaqAccordion />
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="site-container grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow text-moss">Follow the journey</p>
              <h2 className="section-title text-white">Useful updates, sent occasionally.</h2>
            </div>
            <NewsletterSignup />
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Shape what comes next</p>
              <h2 className="section-title">Tell us what would make this genuinely useful.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                Questions, product feedback, and honest criticism are welcome. We only collect the details you choose to send in this form.
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
