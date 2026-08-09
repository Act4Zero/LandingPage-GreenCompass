import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/green-compass-app"],
  ["Instagram", "https://www.instagram.com/greencompass.app/"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61577595789202"],
  ["X", "https://x.com/GreenCompassApp"],
];

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="site-container py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Green Compass home">
              <Image src="/images/GCLogo-no-bg.png" alt="" width={46} height={46} className="rounded-xl" />
              <span className="text-lg font-extrabold">Green Compass</span>
            </Link>
            <p className="mt-5 leading-7 text-white/65">
              Practical guidance for people who want to make greener choices without turning everyday life into a test.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Explore</h2>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/explainer" className="text-white/70 transition hover:text-white">How it works</Link>
              <Link href="/research" className="text-white/70 transition hover:text-white">Research</Link>
              <Link href="/#faq" className="text-white/70 transition hover:text-white">FAQ</Link>
              <Link href="/privacy" className="text-white/70 transition hover:text-white">Privacy</Link>
              <Link href="/tos" className="text-white/70 transition hover:text-white">Terms</Link>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Follow along</h2>
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
          <p>© {new Date().getFullYear()} Green Compass. All rights reserved.</p>
          <p>Built for progress, not perfection.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
