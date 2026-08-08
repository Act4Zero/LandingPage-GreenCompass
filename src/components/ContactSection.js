import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import FormAlert from "components/FormAlert";
import TextField from "components/common/TextField";
import Button from "components/common/Button";
import LoadingIcon from "components/common/LoadingIcon";
import submitContactForm from "util/contact";
import { Trans, useTranslation } from "react-i18next";

function ContactSection(props) {
  const { t } = useTranslation();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    setPending(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        reset();
        setFormAlert({
          type: "success",
          message: "Your message has been sent!",
        });
        props.onSuccess && props.onSuccess();
      } else {
        setFormAlert({
          type: "error",
          message:
            t("index.contact.error") ||
            "Submission failed. Please try again later.",
        });
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setFormAlert({
        type: "error",
        message:
          t("index.contact.error") || "An error occurred. Please try again.",
      });
    } finally {
      setPending(false);
    }
  };


  return (
    <Section
      id={props.id}
      size={props.size}
      bgColor={props.bgColor || "bg-gradient-to-br from-green-light to-lightBg"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-green-darkest"}
    >
      <div className="relative overflow-hidden">
        {/* Enhanced Pattern Backgrounds */}
        <div className="pattern-dots text-accentLight absolute top-0 left-0 w-32 h-48 md:h-96 transform translate-y-12 -translate-x-16 md:-translate-x-4" />
        <div className="pattern-dots text-green-light absolute bottom-0 right-0 w-32 h-48 md:h-96 transform -translate-y-12 translate-x-16 md:translate-x-6" />
        <div className="relative container xl:max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
            className="text-center text-green-darkest"
          />
          <div className="mx-auto max-w-2xl">
            {formAlert && (
              <div className="mb-6">
                <FormAlert type={formAlert.type} message={formAlert.message} />
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <TextField
                    type="text"
                    label="Name"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    error={errors.name}
                    {...register("name", {})}
                  />
                </div>
                <div>
                  <TextField
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    error={errors.email}
                    {...register("email", {
                      required: t("index.newsletter.inputRequired"),
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
              </div>
              <div>
                <TextField
                  type="textarea"
                  label="Message"
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  error={errors.message}
                  rows={6}
                  {...register("message", {
                    required: "Please write a message.",
                  })}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={pending}
                isBlock={true}
                startIcon={
                  !pending && (
                    <PaperAirplaneIcon className="opacity-70 inline-block w-5 h-5" />
                  )
                }
                className="w-48 bg-gradient-to-r from-green-dark to-green hover:from-green-darkest hover:to-green-dark text-white shadow-lg"
              >
                {!pending && <>Send message</>}
                {pending && <LoadingIcon className="w-6" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
