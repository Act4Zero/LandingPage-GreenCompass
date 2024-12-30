import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Section from "components/Section";
import TextField from "components/TextField";
import Button from "components/common/Button";
import newsletter from "util/newsletter";
import { useTranslation } from "react-i18next";

function Footer(props) {
  const [subscribed, setSubscribed] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const { t } = useTranslation();

  const onSubmit = ({ email }) => {
    setSubscribed(true);
    props.onSubscribed && props.onSubscribed();
    newsletter.subscribe({ email });
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor || "bg-green-dark"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-white"}
      className={props.sticky && "mt-auto"}
    >
      <footer className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.product.title")}
            </h4>
            <nav className="flex flex-col space-y-3 mt-6">
              {[
                { url: "/#faq", name: t("index.footer.product.faq") },
                { url: "/#features", name: t("index.footer.product.features") },
                { url: "/#timeline", name: t("index.footer.product.timeline") },
              ].map((link, index) => (
                <Link href={link.url} key={index}>
                  <a className="font-medium text-green-light hover:text-green">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.company.title")}
            </h4>
            <nav className="flex flex-col space-y-3 mt-6">
              {[
                { url: "/about", name: t("index.footer.company.about") },
                {
                  url: "/legal/privacy-policy",
                  name: t("index.footer.company.privacy"),
                },
              ].map((link, index) => (
                <Link href={link.url} key={index}>
                  <a className="font-medium text-green-light hover:text-green">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.social.title")}
            </h4>
            <div className="mt-6 flex flex-row space-x-4">
              {[
                {
                  url: "https://twitter.com",
                  icon: (
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                  ),
                },
                {
                  url: "https://facebook.com",
                  icon: (
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                  ),
                },
                {
                  url: "https://instagram.com",
                  icon: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  ),
                },
              ].map((link, index) => (
                <Link href={link.url} key={index}>
                  <a
                    className="text-accentLight hover:text-green-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="inline-block w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {link.icon}
                    </svg>
                  </a>
                </Link>
              ))}
            </div>
            <h4 className="mt-10 text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.form.title")}
            </h4>

            {subscribed === true && (
              <div className="mt-3 text-green-light">
                You are now subscribed!
              </div>
            )}

            {subscribed === false && (
              <form
                className="mt-6 flex items-start space-x-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grow">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("index.footer.form.placeholder")}
                    error={errors.email}
                    size="sm"
                    inputRef={register({
                      required: t("index.form.required"),
                    })}
                  />
                </div>
                <Button type="submit" size="sm" variant="primary">
                  {t("index.footer.form.button")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
