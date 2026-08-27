import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LanguageSwitcher from "components/site/LanguageSwitcher";
import { useLanguage } from "context/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const { language } = useLanguage();
  const copy = language === "bg" ? {
    home: "Начало на Green Compass",
    skip: "Към съдържанието",
    primary: "Основна навигация",
    mobile: "Мобилна навигация",
    open: "Отвори навигацията",
    close: "Затвори навигацията",
    app: "Отвори приложението",
    links: [
      ["/#features", "Функции"],
      ["/explainer", "Как работи"],
      ["/research", "Изследвания"],
      ["/#faq", "Въпроси"],
      ["/#contact", "Контакт"],
    ],
  } : {
    home: "Green Compass home",
    skip: "Skip to content",
    primary: "Primary navigation",
    mobile: "Mobile navigation",
    open: "Open navigation",
    close: "Close navigation",
    app: "Open app",
    links: [
      ["/#features", "Features"],
      ["/explainer", "How it works"],
      ["/research", "Research"],
      ["/#faq", "FAQ"],
      ["/#contact", "Contact"],
    ],
  };
  const links = copy.links.map(([href, label]) => ({ href, label }));

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOutside);
    };
  }, []);

  const isActive = (href) => href.startsWith("/") && !href.startsWith("/#") && router.pathname === href;

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-full bg-moss px-4 py-2 font-bold text-ink transition focus:translate-y-0"
      >
        {copy.skip}
      </a>
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/90 backdrop-blur-xl">
        <div className="site-container flex min-h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label={copy.home}>
            <Image
              src="/images/GCLogo-no-bg.png"
              alt=""
              width={42}
              height={42}
              priority
              className="rounded-xl transition group-hover:rotate-3"
            />
            <span className="text-base font-extrabold tracking-[-0.02em] text-ink">Green Compass</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.primary}>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-leaf ${
                  isActive(link.href) ? "bg-white text-leaf" : "text-ink/75"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher className="ml-2" />
            <a
              href="https://app.greencompass.app/auth/signin"
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full border border-forest/20 px-4 py-2 text-sm font-bold text-forest transition hover:bg-white"
            >
              {copy.app}
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 bg-white text-forest lg:hidden"
            aria-label={open ? copy.close : copy.open}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" ref={menuRef} className="border-t border-forest/10 bg-paper px-5 py-5 lg:hidden">
            <nav className="site-container flex flex-col gap-2" aria-label={copy.mobile}>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-bold text-ink hover:bg-white"
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher className="mt-2 self-start" />
              <a
                href="https://app.greencompass.app/auth/signin"
                target="_blank"
                rel="noreferrer"
                className="button-secondary mt-2"
              >
                {copy.app}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
