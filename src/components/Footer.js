import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "context/LanguageContext";

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/green-compass-app"],
  ["Instagram", "https://www.instagram.com/greencompass.app/"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61577595789202"],
  ["X", "https://x.com/GreenCompassApp"],
];

function Footer() {
  const { language } = useLanguage();
  const copy = language === "bg" ? {
    home: "Начало на Green Compass",
    description: "Едно свързано място за учене, действие, разбиране на въздействието и устойчив напредък заедно с други хора.",
    explore: "Разгледай",
    nav: "Навигация в долната част",
    links: [["/#features", "Функции"], ["/explainer", "Как работи"], ["/research", "Изследвания"], ["/#faq", "Въпроси"], ["/privacy", "Поверителност"], ["/tos", "Условия"]],
    follow: "Последвай ни",
    rights: "Всички права запазени.",
    principle: "Създадено за напредък, не за съвършенство.",
  } : {
    home: "Green Compass home",
    description: "One connected place to learn, act, understand your impact, and grow sustainable progress with others.",
    explore: "Explore",
    nav: "Footer navigation",
    links: [["/#features", "Features"], ["/explainer", "How it works"], ["/research", "Research"], ["/#faq", "FAQ"], ["/privacy", "Privacy"], ["/tos", "Terms"]],
    follow: "Follow along",
    rights: "All rights reserved.",
    principle: "Built for progress, not perfection.",
  };

  return (
    <footer className="bg-ink text-white">
      <div className="site-container py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={copy.home}>
              <Image src="/images/GCLogo-no-bg.png" alt="" width={46} height={46} className="rounded-xl" />
              <span className="text-lg font-extrabold">Green Compass</span>
            </Link>
            <p className="mt-5 leading-7 text-white/65">
              {copy.description}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-moss">{copy.explore}</h2>
            <nav className="mt-5 flex flex-col gap-3" aria-label={copy.nav}>
              {copy.links.map(([href, label]) => <Link key={href} href={href} className="text-white/70 transition hover:text-white">{label}</Link>)}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-moss">{copy.follow}</h2>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {socialLinks.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Green Compass. {copy.rights}</p>
          <p>{copy.principle}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
