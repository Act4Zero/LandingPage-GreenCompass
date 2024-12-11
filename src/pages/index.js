import React from "react";
import './_i18n';
import { useTranslation } from 'react-i18next';
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import ContentSection from "components/ContentSection";
import ProjectTimeline from "components/ProjectTimeline";
import FeaturesSection from "components/FeaturesSection";
import CtaSection from "components/CtaSection";
import FaqSection from "components/FaqSection";
import DownloadTheApp from "components/DownloadTheApp";
import NewsletterSection from "components/NewsletterSection";
import TeamBiosSection from "components/TeamBiosSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function IndexPage(props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <Navbar bgColor="bg-white" />
      <HeroSection
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        strapline=""
        size="lg"
        bgColor="bg-green-500"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
      />
      <ContentSection
        title={t("content.title")}
        paragraph1={t("content.paragraph1")}
        paragraph2={t("content.paragraph2")}
        paragraph3={t("content.paragraph3")}
        paragraph4={t("content.paragraph4")}
      />
      <FeaturesSection
        title={t("features.title")}
        subtitle={t("features.subtitle")}
        strapline={t("features.strapline")}
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <CtaSection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaText={t("cta.button")}
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
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
        title={t("faq.title")}
        subtitle=""
        strapline={t("faq.strapline")}
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        showSupportButton={true}
        supportUrl="https://zendesk.com"
      />
      <DownloadTheApp
        title={t("download.title")}
        subtitle={t("download.subtitle")}
        iosTooltip={t("download.iosTooltip")}
      />
      <ContactSection
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <Footer
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        sticky={false}
      />
    </>
  );
}

export default IndexPage;
