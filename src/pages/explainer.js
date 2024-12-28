import Footer from "components/Footer";
import "../util/i18n";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import EvidenceOfImpact from "components/explainer/EvidenceOfImpact";
import ExplainerBanner from "components/explainer/ExplainerBanner";
import SectionHeader from "components/SectionHeader";
import ChallengeSection from "components/explainer/ChallengeSection";
import SolutionShowcase from "components/explainer/SolutionShowcase";

function ExplainerPage(props) {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer", { returnObjects: true }) || {};
  };

  return (
    <>
      <Meta />
      <Navbar bgColor="white" />
      <SectionHeader
        bgColor="bg-gradient-to-b from-lightBg to-green-lightest"
        title={getText().title}
        subtitle={getText().subtitle}
        className="mb-0"
        strapline=""
      />
      <div className="h-2 bg-gradient-to-b from-green-lightest to-green-lighter"></div>
      <ChallengeSection />
      <SolutionShowcase />
      <EvidenceOfImpact />
      <ExplainerBanner
        title={getText().banner.title}
        subtitle={getText().banner.subtitle}
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

export default ExplainerPage;
