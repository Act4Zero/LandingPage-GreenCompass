import NewsletterSection from "components/NewsletterSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import CtaSection from "components/CtaSection";
import HeroSection from "components/HeroSection";

function ExplainerPage(props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <Navbar bgColor="white" />
      <CtaSection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaText={t("cta.button")}
        strapline=""
        size="lg"
        bgColor="white"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
      />
      <Footer />
    </>
  );
}

export default ExplainerPage;
