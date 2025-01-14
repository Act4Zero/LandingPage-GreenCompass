import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Section from "components/common/Section";
import Button from "components/common/Button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Navbar(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "bg", label: "Български" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLanguageMenuOpen(false); // Close menu after selecting a language
  };

  const classes = {
    navLink:
      "font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-green-600 hover:text-green-600 py-6 transition duration-300",
    navLinkIcon:
      "opacity-50 transform transition duration-200 ease-out group-hover:rotate-180 ",
    dropdown: {
      base: "absolute top-full mt-2 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out",
      left: "right-0",
      center: "left-1/2 -translate-x-1/2",
      right: "left-0",
      normal: "w-56",
      inner:
        "bg-white shadow-lg ring-1 ring-black ring-opacity-10 rounded-lg overflow-hidden",
      link: "text-gray-700 hover:text-green-600 hover:bg-gray-100 font-medium text-sm flex items-center space-x-2 px-4 py-2 transition duration-300",
    },
    languageDropdown:
      "relative group text-gray-700 hover:text-green-600 font-medium text-sm px-4 py-2 transition duration-300 cursor-pointer",
    languageMenu:
      "absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-20",
    languageOption:
      "block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 cursor-pointer",
  };

  return (
    <Section bgColor="bg-white" className="sticky top-0 z-50 shadow-md">
      <div className="container py-4">
        <div className="flex justify-between">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-black hover:text-green-600">
              <Image
                src="/images/GCLogo-no-bg.png"
                alt="Green Compass Logo"
                width={48}
                height={48}
              />
              <span>Green Compass</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center ml-auto space-x-1 lg:space-x-4">
            <ul className="hidden lg:flex items-center ml-auto">
              <li className="relative group">
                <Link href="/about" legacyBehavior>
                  <a className={`${classes.navLink}`}>
                    <span>About</span>
                  </a>
                </Link>
              </li>
              <li className="relative group">
                <a className={`${classes.navLink}`}>
                  <span>Product</span>
                  <span className={classes.navLinkIcon}>▼</span>
                </a>
                <div
                  className={`${classes.dropdown.base} ${classes.dropdown.right} ${classes.dropdown.normal}`}
                >
                  <div className={classes.dropdown.inner}>
                    <Link href="/#features" legacyBehavior>
                      <a className={classes.dropdown.link}>Features</a>
                    </Link>
                    <Link href="/explainer" legacyBehavior>
                      <a className={classes.dropdown.link}>Research</a>
                    </Link>
                    <Link href="/#timeline" legacyBehavior>
                      <a className={`${classes.dropdown.link}`}>Timeline</a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <Link href="/#faq" legacyBehavior>
                  <a className={`${classes.navLink}`}>
                    <span>FAQ</span>
                  </a>
                </Link>
              </li>
              <li className="relative group">
                <Link href="/#contact" legacyBehavior>
                  <a className={`${classes.navLink}`}>
                    <span>Contact</span>
                  </a>
                </Link>
              </li>
            </ul>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className={classes.languageDropdown}
              >
                Language
              </button>
              {languageMenuOpen && (
                <div className={classes.languageMenu}>
                  {languages.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={classes.languageOption}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center justify-center">
              <Button
                variant="simple"
                size="sm"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                endIcon={<Bars3Icon className="inline-block w-5 h-5" />}
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={"lg:hidden" + (!mobileNavOpen ? " hidden" : "")}>
          <div className="grid grid-cols-1 sm:grid-cols-3 border rounded-xl my-5">
            <div className="p-6 space-y-6">
              <nav className="flex flex-col space-y-3">
                <Link href="/about" legacyBehavior>
                  <a className={`${classes.dropdown.link}`}>About</a>
                </Link>
                <Link href="/#features" legacyBehavior>
                  <a className={`${classes.dropdown.link}`}>Features</a>
                </Link>
                <Link href="/explainer" legacyBehavior>
                  <a className={`${classes.dropdown.link}`}>Research</a>
                </Link>
                <Link href="/#timeline" legacyBehavior>
                  <a className={`${classes.dropdown.link}`}>Timeline</a>
                </Link>
                <Link href="/#faq" legacyBehavior>
                  <a className={`${classes.dropdown.link}`}>FAQ</a>
                </Link>
                <Link href="/#contact" legacyBehavior>
                  <a className={`${classes.dropdown.link}`}>Contact</a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Navbar;
