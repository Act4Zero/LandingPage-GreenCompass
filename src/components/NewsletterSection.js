import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Section from "components/common/Section";
import TextField from "components/common/TextField";
import Button from "components/common/Button";
import subscribeToNewsletter from "util/newsletter";
import { Trans, useTranslation } from "react-i18next";

function NewsletterSection(props) {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email }) => {
    console.log("Submitting email:", email);
    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setSubscribed(true);
        console.log("Subscription successful:", result);
        props.onSubscribed && props.onSubscribed();
      } else {
        setErrorMessage(
          t("index.newsletter.error") ||
            "Subscription failed. Please try again."
        );
        console.error("Subscription failed:", result);
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      setErrorMessage(
        t("index.newsletter.error") || "An error occurred. Please try again."
      );
    }
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor || "bg-lightBg"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-green-darkest"}
    >
      <div className="container py-10 md:py-0">
        <div className="lg:w-2/3 xl:w-1/2 mx-auto relative">
          {/* Pattern and Accent Backgrounds */}
          <div className="absolute pattern-dots text-green-light top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3" />
          <div className="absolute pattern-dots text-green-light bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3" />
          <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-accentLight bg-opacity-50 -mt-12 -mr-12" />
          <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-brown bg-opacity-25 -mb-10 -ml-10 transform rotate-3" />
          {/* Newsletter Content */}
          <div className="p-2 rounded text-center relative bg-green-lightest bg-opacity-10">
            <div className="p-8 lg:py-12 lg:px-16 bg-white rounded shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-green-darkest">
                {t("index.newsletter.title")}
              </h3>
              <p className="prose prose-green mb-6 text-green-dark">
                {t("index.newsletter.subtitle")}
              </p>

              {subscribed ? (
                <div className="mt-3 text-center text-green-dark">
                  {t("index.newsletter.success")}
                </div>
              ) : (
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-start space-x-3">
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
                    <Button type="submit" size="lg" variant="primary">
                      {t("index.newsletter.button")}
                    </Button>
                  </div>
                  <p className="text-sm text-green-dark leading-6">
                    {t("index.newsletter.note")}
                    <br />
                    {t("index.newsletter.privacyPolicy.text")}{" "}
                    <Link href="/legal/privacy-policy" legacyBehavior>
                      <a className="font-medium text-green hover:text-green-dark">
                        {t("index.newsletter.privacyPolicy.link")}
                      </a>
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection;
