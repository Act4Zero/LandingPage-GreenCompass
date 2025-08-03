import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Section from "components/common/Section";
import TextField from "components/common/TextField";
import Button from "components/common/Button";
import subscribeToNewsletter from "util/newsletter"; // Ensure the correct path
import { useTranslation } from "react-i18next";
import Image from "next/image";

function Footer(props) {
  const [subscribed, setSubscribed] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const onSubmit = async ({ email }) => {
    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setSubscribed(true);
        props.onSubscribed && props.onSubscribed();
      } else {
        console.error("Subscription failed:", result.error);
      }
    } catch (error) {
      console.error("An error occurred during subscription:", error);
    }
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor || "bg-green-dark"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-green-dark"}
      className={props.sticky && "mt-auto"}
    >
      <footer className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Links */}
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.product.title")}
            </h4>
            <nav className="flex flex-col space-y-3 mt-6">
              {[
                { url: "/#features", name: t("index.footer.product.features") },
                { url: "/#faq", name: t("index.footer.product.faq") },
              ].map((link, index) => (
                <Link href={link.url} key={index} legacyBehavior>
                  <a className="font-medium text-green-light hover:text-green">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.project.title")}
            </h4>
            <nav className="flex flex-col space-y-3 mt-6">
              {[
                { url: "/explainer", name: t("index.footer.project.research") },
                { url: "/privacy", name: t("index.footer.project.privacy") },
                { url: "/tos", name: t("index.footer.project.tos") },
              ].map((link, index) => (
                <Link href={link.url} key={index} legacyBehavior>
                  <a className="font-medium text-green-light hover:text-green">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Subscription Form and Social Icons */}
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.form.title")}
            </h4>

            {subscribed ? (
              <div className="mt-3 text-green-light">
                {t("index.newsletter.success")}
              </div>
            ) : (
              <form
                className="mt-6 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex-grow w-full">
                  <TextField
                    type="email"
                    id="email"
                    placeholder={t("index.newsletter.placeholder")}
                    error={errors.email}
                    {...register("email", {
                      required: t("index.newsletter.inputRequired"),
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: t("index.newsletter.invalidEmail"),
                      },
                    })}
                  />
                </div>
                <Button type="submit" size="sm" variant="primary">
                  {t("index.footer.form.button")}
                </Button>
              </form>
            )}

            {/* Social Icons Section */}
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.linkedin.com/company/green-compass-app"
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/socials/linkedin-icon.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="transition-transform hover:scale-105"
                  />
                </a>
              </Link>
              <Link href="https://x.com/GreenCompassApp" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/socials/x-icon.png"
                    alt="X"
                    width={24}
                    height={24}
                    className="transition-transform hover:scale-105"
                  />
                </a>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61577595789202"
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/socials/facebook-icon.png"
                    alt="Facebook"
                    width={28}
                    height={28}
                    className="transition-transform hover:scale-105"
                  />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/greencompass.app/"
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/socials/instagram-icon.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="transition-transform hover:scale-105"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center text-center mt-8">
          <Link href="/" legacyBehavior>
            <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-green-darkest hover:text-green">
              <Image
                src="/images/GCLogo-no-bg.png"
                alt="Green Compass Logo"
                width={48}
                height={48}
                className="transition-transform hover:scale-105"
              />
            </a>
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center text-white text-sm text-center mt-4">
          <p>© {currentYear} Green Compass Project. All rights reserved.</p>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
