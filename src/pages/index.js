import React from "react";
import '../util/i18n';
import { useTranslation } from 'react-i18next';
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import ContentSection from "components/ContentSection";
import ProjectTimeline from "components/ProjectTimeline";
import FeaturesSection from "components/FeaturesSection";
import FaqSection from "components/FaqSection";
import NewsletterSection from "components/NewsletterSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function IndexPage(props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t("meta.title")}
        description={t("meta.description")}
      />
      <Navbar bgColor="white" />
      <HeroSection
        title={t("index.hero.title")}
        subtitle={t("index.hero.subtitle")}
        strapline=""
        size="md"
        bgColor="white"
        bgImageOpacity={1}
        textColor={{
          title: "text-white",
          subtitle: "text-white",
        }}
        showButton={true}
        buttonText={t("index.hero.cta")}
        buttonHref="https://app.greencompass.app"
        buttonVariant="secondary"
      />
      <FeaturesSection
        id="features"
        title={t("index.features.title")}
        subtitle={t("index.features.subtitle")}
        strapline={t("index.features.strapline")}
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <ContentSection
        id="content"
        paragraphs={[
          t("index.content.paragraph1")
        ]}
        showButton={true}
        buttonText={t("index.content.cta")}
      />
      <ProjectTimeline />
      <NewsletterSection
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <FaqSection
        id="faq"
        title={t("index.faq.title")}
        subtitle=""
        strapline={t("index.faq.strapline")}
        size="md"
        bgColor="white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        showSupportButton={true}
        supportUrl="https://zendesk.com"
      />
      <ContactSection
        id="contact"
        title={t("index.contact.title")}
        subtitle={t("index.contact.subtitle")}
        strapline=""
        size="md"
        bgColor="white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <Footer
        size="md"
        bgColor="bg-green-dark"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        sticky={false}
      />
    </>
  );
}

export default IndexPage;
