import "../util/i18n";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Introduction from "components/research/Introduction";
import Insights from "components/research/Insights";
import ResearchCta from "components/research/ResearchCta";
import DomainImpact from "components/research/DomainImpact";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function ResearchPage(props) {
  const { t } = useTranslation();
  const getText = () => {
    return t("research", { returnObjects: true }) || {};
  };

  return (
    <>
      <Meta />
      <Navbar bgColor="white" />
      <Introduction />
      <Insights description={getText().insights.description2} />
      <ResearchCta
        subtitle={getText().cta.description}
        buttonText={getText().cta.button}
      />
      <DomainImpact />
      <ContactSection
        title={getText()["reach-out"].title}
        subtitle={getText()["reach-out"].subtitle}
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

export default ResearchPage;
