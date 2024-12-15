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
    dropdownLink:
      "text-green-dark hover:text-green-darker font-medium text-sm flex items-center space-x-2",
  };

  return (
    <Section bgColor="bg-white" className="overflow-x-hidden">
      {/* Full-width Navbar Container */}
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center">
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
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/about">
              <a className={classes.navLink}>About</a>
            </Link>
            <Link href="/faq">
              <a className={classes.navLink}>FAQ</a>
            </Link>
            <Link href="/contact">
              <a className={classes.navLink}>Contact</a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
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

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-transform duration-300 ${
            mobileNavOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-3 bg-lightBg border rounded-lg p-4 mt-3">
            <Link href="/about">
              <a className={classes.dropdownLink}>About</a>
            </Link>
            <Link href="/faq">
              <a className={classes.dropdownLink}>FAQ</a>
            </Link>
            <Link href="/contact">
              <a className={classes.dropdownLink}>Contact</a>
            </Link>
          </nav>
        </div>
      </div>
    </Section>
  );
}

export default Navbar;
