import React from "react";
import Link from "next/link";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import PageHero from "components/site/PageHero";
import ContactForm from "components/site/ContactForm";

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

function ResearchPage() {
  return (
    <>
      <Meta
        title="Research — Carbon-footprint feedback and behavior"
        description="A careful look at the 2024 study behind Green Compass's research story, including results, context, and limitations."
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          compact
          eyebrow="Research"
          title="What does carbon-footprint feedback actually change?"
          description="A 2024 Journal of Cleaner Production study tested whether repeated feedback from a carbon-footprint tracking app could help people adjust consumption habits."
          primary={{ href: "#results", label: "See the results" }}
          secondary={{ href: "https://doi.org/10.1016/j.jclepro.2023.139981", label: "Read the paper" }}
        />

        <section className="section-pad bg-white">
          <div className="site-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="eyebrow">The study at a glance</p>
              <h2 className="section-title">Repeated feedback, tested over time.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["216", "participants"],
                ["4", "consumption domains"],
                ["Several", "survey rounds"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[2rem] bg-paper p-6 text-center">
                  <p className="font-serif text-5xl text-leaf">{value}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.13em] text-ink/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="section-pad">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">Reported results</p>
              <h2 className="section-title">A meaningful signal, with important boundaries.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                The researchers reported a 23% average decrease in carbon emissions. Effects varied by consumption area, from 12% in mobility to 35% in household activities.
              </p>
            </div>

            <figure className="mt-12 rounded-[2.5rem] border border-forest/10 bg-white p-6 shadow-soft sm:p-10">
              <figcaption className="mb-9 text-sm font-bold uppercase tracking-[0.16em] text-forest">
                Emissions decrease observed in the study
              </figcaption>
              <div className="space-y-7" aria-label="Study results bar chart">
                {results.map((result) => (
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
                        aria-label={`${result.domain}: ${result.value} percent decrease`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-9 border-t border-forest/10 pt-6 text-sm leading-6 text-ink/55">
                Scale shown to 40% for visual comparison. Values are reported by Hoffmann, Lasarov, Reimers, and Trabandt (2024), not measured outcomes from Green Compass users.
              </p>
            </figure>

            <div className="mt-8 overflow-x-auto rounded-3xl border border-forest/10 bg-white">
              <table className="w-full min-w-[560px] text-left">
                <caption className="sr-only">Accessible summary of reported study results</caption>
                <thead className="bg-green-lightest text-sm uppercase tracking-[0.12em] text-forest">
                  <tr><th className="px-6 py-4">Result</th><th className="px-6 py-4">Decrease</th><th className="px-6 py-4">Context</th></tr>
                </thead>
                <tbody className="divide-y divide-forest/10">
                  {results.map((result) => (
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
              <p className="eyebrow text-moss">Four domains</p>
              <h2 className="section-title text-white">Where daily consumption takes shape.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {domains.map(([title, text], index) => (
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
              <p className="eyebrow">Read this carefully</p>
              <h2 className="section-title">What the numbers do—and do not—mean.</h2>
            </div>
            <div className="space-y-7 text-lg leading-8 text-ink/70">
              <p>The study tested a purpose-built research app with 216 participants. Its results should not be treated as a universal forecast for every app, person, or timeframe.</p>
              <p>Effects differed by domain and individual characteristics. The paper reports that perceived green self-efficacy strengthened the effect, while a strong green self-identity reduced it.</p>
              <p>For Green Compass, the responsible takeaway is that repeated, useful feedback is worth exploring—not that a specific reduction can be guaranteed.</p>
              <a href="https://doi.org/10.1016/j.jclepro.2023.139981" target="_blank" rel="noreferrer" className="button-primary">
                Read the full publication
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Discuss the evidence</p>
              <h2 className="section-title">Questions, challenges, and useful criticism are welcome.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/65">
                If you work in sustainability, research, or behavior change, we would value your perspective.
              </p>
              <Link href="/explainer" className="mt-7 inline-flex font-bold text-leaf underline decoration-moss decoration-2 underline-offset-4">See how this informs the product</Link>
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
