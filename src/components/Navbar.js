import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Section from "components/Section";
import Button from "components/Button";
import Image from "next/image";

function Navbar(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const classes = {
    navLink:
      "font-semibold inline-flex items-center space-x-1 h-8 px-4 py-6 group-hover:text-green hover:text-green-dark transition duration-200",
    navLinkIcon:
      "opacity-50 transform transition duration-200 ease-out group-hover:rotate-180 inline-block w-4 h-4",
    dropdown: {
      base: "absolute top-19 pt-1 z-10 invisible group-hover:visible transform transition duration-800 ease-in opacity-0 group-hover:opacity-100",
      inner:
        "bg-white shadow-xl ring-1 ring-green-light rounded-lg overflow-hidden",
      link: "text-green-dark hover:text-green-darker font-medium text-sm flex items-center space-x-2",
    },
    accountDropdown: {
      inner:
        "bg-white ring-1 ring-green-light rounded divide-y divide-green-light shadow-xl",
      link: "flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-green-dark hover:bg-green-light hover:text-green-darker",
    },
  };

  return (
    <Section bgColor="bg-white">
      <div className="container py-4">
        <div className="flex justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-green-darkest hover:text-green">
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
                <Link href="/about">
                  <a className={classes.navLink}>
                    <span>About</span>
                  </a>
                </Link>
              </li>
              <li className="relative group">
                <Link href="/faq">
                  <a className={classes.navLink}>
                    <span>FAQ</span>
                  </a>
                </Link>
              </li>
              <li className="relative group">
                <Link href="/contact">
                  <a className={classes.navLink}>
                    <span>Contact</span>
                  </a>
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center justify-center">
              <Button
                variant="simple"
                size="sm"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                endIcon={
                  <Bars3Icon className="inline-block w-5 h-5 text-green-dark" />
                }
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={"lg:hidden" + (!mobileNavOpen ? " hidden" : "")}>
          <div className="grid grid-cols-1 sm:grid-cols-3 border rounded-xl my-5 bg-lightBg">
            <div className="p-6 space-y-6">
              <nav className="flex flex-col space-y-3">
                <Link href="/about">
                  <a className={classes.dropdown.link}>About</a>
                </Link>
                <Link href="/faq">
                  <a className={classes.dropdown.link}>FAQ</a>
                </Link>
                <Link href="/contact">
                  <a className={classes.dropdown.link}>Contact</a>
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
