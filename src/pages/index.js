import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import ProjectTimeline from "components/ProjectTimeline";
import FeaturesSection from "components/FeaturesSection";
import CtaSection from "components/CtaSection";
import FaqSection from "components/FaqSection";
import DownloadTheApp from "components/DownloadTheApp";
import NewsletterSection from "components/NewsletterSection";
import TeamBiosSection from "components/TeamBiosSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";
import './_i18n';
import { useTranslation } from 'react-i18next';

function IndexPage(props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <Navbar bgColor="bg-white" />
      <HeroSection
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        strapline=""
        size="lg"
        bgColor="bg-green-500"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
      />
      <ProjectTimeline />
      <FeaturesSection
        title="Amazing features packed in a neat package"
        subtitle="You will love working with your newly updated and customized dashboard."
        strapline="It's time to build"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <CtaSection
        title="Ready? Let’s do it!"
        subtitle="Get your own custom dashboard and start building amazing services, always with the most solid and rock steady foundation."
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
      />
      <ProjectTimeline />
      <FaqSection
        title="Frequently Asked Questions"
        subtitle=""
        strapline="We answer"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        showSupportButton={true}
        supportUrl="https://zendesk.com"
      />
      <DownloadTheApp />
      <NewsletterSection
        title="Subscribe to our newsletter"
        subtitle="Join us and receive the best curated news, freebies and resources directly to your inbox every week!"
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <TeamBiosSection
        title="Meet our amazing team"
        subtitle="They are working nonstop behind the scenes to help you build better products, web services and websites."
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <ContactSection
        title="Get in touch"
        subtitle="If something does not make sense, feel free to contact us and we will get back to you as soon as possible."
        strapline="We reply in 24hrs"
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
