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
      textColor={props.textColor || "text-white"}
      className={props.sticky && "mt-auto"}
    >
      <footer className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="flex items-start justify-start text-left">
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

          {/* Product Links */}
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-accentLight">
              {t("index.footer.product.title")}
            </h4>
            <nav className="flex flex-col space-y-3 mt-6">
              {[
                { url: "/#features", name: t("index.footer.product.features") },
                { url: "/#download", name: t("index.footer.product.download") },
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
                { url: "/about", name: t("index.footer.project.about") },
                { url: "/#timeline", name: t("index.footer.project.timeline") },
                { url: "/explainer", name: t("index.footer.project.research") },
                {
                  url: "/legal/privacy-policy",
                  name: t("index.footer.project.privacy"),
                },
              ].map((link, index) => (
                <Link href={link.url} key={index} legacyBehavior>
                  <a className="font-medium text-green-light hover:text-green">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Subscription Form */}
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
                className="mt-6 flex items-start space-x-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grow">
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
          </div>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
