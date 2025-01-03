import React from "react";
import '../util/i18n';
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
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function IndexPage(props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <Navbar bgColor="white" />
      <HeroSection
        title={t("index.hero.title")}
        subtitle={t("index.hero.subtitle")}
        strapline=""
        size="lg"
        bgColor="white"
        bgImage="https://images.unsplash.com/photo-1528122819723-9dca3a31295d"
        bgImageOpacity={1}
        textColor={{
          title: "text-accent",
          subtitle: "text-accent",
        }}
      />
      <ContentSection
        id="content"
        title={t("index.content.title")}
        paragraphs={[
          t("index.content.paragraph1"),
          t("index.content.paragraph2"),
          t("index.content.paragraph3"),
          t("index.content.paragraph4"),
        ]}
        showButton={true}
        buttonText={t("index.content.cta")}
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
      <CtaSection
        title={t("index.cta.title")}
        subtitle={t("index.cta.subtitle")}
        ctaText={t("index.cta.button")}
        strapline=""
        size="lg"
        bgColor="white"
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
      <DownloadTheApp
        title={t("index.download.title")}
        subtitle={t("index.download.subtitle")}
        iosTooltip={t("index.download.iosTooltip")}
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
