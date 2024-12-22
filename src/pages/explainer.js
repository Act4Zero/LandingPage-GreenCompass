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
      <EvidenceOfImpact
        title="Research on the impact of carbon tracking apps"
        content={
          <>
            <p>
              According to a 2024 study published in the{" "}
              <em>Journal of Cleaner Production</em>, providing users with
              feedback through carbon tracking apps significantly reduces
              emissions by increasing awareness and encouraging actionable
              changes (Hoffmann et al., 2024).
            </p>
            <p>
              The research highlights that feedback can reduce carbon emissions
              by an average of <strong>23%</strong>, with specific reductions
              ranging from 12% in mobility to 35% in household activities.
              Moreover, individual traits like perceived green self-efficacy
              amplify the feedback’s effect, whereas a strong green
              self-identity diminishes it.
            </p>
          </>
        }
      />
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
