import Footer from "components/Footer";
import "../util/i18n";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import CtaSection from "components/CtaSection";
import ContentSection from "components/ContentSection";

function ExplainerPage(props) {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer", { returnObjects: true }) || {};
  };

  return (
    <>
      <Meta />
      <Navbar bgColor="white" />
      <ContentSection
        title={getText().title}
        paragraph1={getText().subtitle}
      />
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
