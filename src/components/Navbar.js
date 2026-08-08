import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/explainer", label: "How it works" },
  { href: "/research", label: "Research" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

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
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/90 backdrop-blur-xl">
        <div className="site-container flex min-h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label="Green Compass home">
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

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
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
            <a
              href="https://app.greencompass.app/auth/signin"
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full border border-forest/20 px-4 py-2 text-sm font-bold text-forest transition hover:bg-white"
            >
              Sign in
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 bg-white text-forest lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" ref={menuRef} className="border-t border-forest/10 bg-paper px-5 py-5 lg:hidden">
            <nav className="site-container flex flex-col gap-2" aria-label="Mobile navigation">
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
              <a
                href="https://app.greencompass.app/auth/signin"
                target="_blank"
                rel="noreferrer"
                className="button-secondary mt-2"
              >
                Sign in
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
