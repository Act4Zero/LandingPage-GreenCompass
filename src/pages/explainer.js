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

const barriers = [
  ["Too much information", "Sustainability advice is often fragmented, technical, or contradictory."],
  ["Too little context", "A good intention is hard to act on when the trade-offs stay invisible."],
  ["All-or-nothing pressure", "People disengage when progress is framed as a purity test."],
];

function ExplainerPage() {
  return (
    <>
      <Meta
        title="How Green Compass works — From awareness to action"
        description="See how Green Compass turns sustainability knowledge into clearer everyday choices, and what the product is building next."
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="How it works"
          title="From awareness to action, one clear step at a time."
          description="Sustainable living should not require a climate-science degree. Green Compass starts by making useful knowledge easier to find, understand, and act on."
          primary={{ href: "/#how-it-works", label: "Explore what is available" }}
          secondary={{ href: "https://app.greencompass.app", label: "Visit the app" }}
        />

        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">The real barrier</p>
              <h2 className="section-title">Most people care. The path forward is the confusing part.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                Daily choices across travel, food, energy, and consumption all have an impact. But information alone rarely makes change feel simple or immediate.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {barriers.map(([title, text], index) => (
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
              <p className="eyebrow">The approach</p>
              <h2 className="section-title">Make the next useful choice visible.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                Green Compass is being built as a feedback loop: understand, choose, observe, and keep moving. Today, the first part of that loop is a curated knowledge experience.
              </p>
            </div>
            <div className="space-y-5">
              {[
                [BookOpenIcon, "Understand", "Start with practical articles and guidance that reduce the information gap.", "Available today"],
                [LightBulbIcon, "Choose", "Translate broad sustainability goals into a next step that fits real life.", "In development"],
                [ChartBarIcon, "See the pattern", "Connect habits to a clearer picture of personal impact over time.", "On the roadmap"],
                [ArrowPathIcon, "Build momentum", "Use feedback and community support to reinforce progress.", "On the roadmap"],
              ].map(([Icon, title, text, status], index) => (
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
              <p className="eyebrow text-moss">Why feedback matters</p>
              <h2 className="section-title text-white">Research suggests that visibility can change behavior.</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                In a 216-participant study, feedback from a carbon-footprint tracking app was associated with a 23% decrease in emissions. Results varied by domain and by individual characteristics.
              </p>
              <Link href="/research" className="button-primary mt-8 bg-moss text-ink hover:bg-white">See the evidence and caveats</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["23%", "Average decrease observed across the study"],
                ["12%", "Decrease observed for mobility"],
                ["35%", "Decrease observed for household activities"],
                ["216", "Participants across several survey rounds"],
              ].map(([value, label]) => (
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
              <p className="eyebrow">What we will keep honest</p>
              <h2 className="section-title">A roadmap is a direction, not a finished product.</h2>
            </div>
            <ul className="space-y-5">
              {[
                "Features are labeled by readiness.",
                "Research findings are attributed and never framed as guarantees.",
                "The experience should support progress without moralizing.",
                "Feedback from real people should shape what gets built next.",
              ].map((item) => (
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
              <p className="eyebrow text-moss">Stay close to the build</p>
              <h2 className="section-title text-white">See what changes—and why.</h2>
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
