import Footer from "components/Footer";
import "../util/i18n";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import EvidenceOfImpact from "components/explainer/EvidenceOfImpact";
import ExplainerCta from "components/explainer/ExplainerCta";
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
        title={getText().title}
        subtitle={getText().subtitle}
        strapline=""
      />
      <ChallengeSection />
      <SolutionShowcase />
      <EvidenceOfImpact/>
      <ExplainerCta />
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
