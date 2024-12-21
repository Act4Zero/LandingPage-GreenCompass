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

  const challengeParagraphs = [
    getText().challenge.subtitle,
    ...getText().challenge.paragraphs,
    getText().challenge.conclusion,
  ];

  return (
    <>
      <Meta />
      <Navbar bgColor="white" />
      <ContentSection
        title={getText().title}
        titleSize="h2"
        paragraphs={[getText().subtitle]}
      />
      <ContentSection
        title={getText().challenge.title}
        titleSize="h3"
        paragraphs={challengeParagraphs}
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
