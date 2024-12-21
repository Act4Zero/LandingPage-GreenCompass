import Footer from "components/Footer";
import "../util/i18n";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import ContentSection from "components/ContentSection";
import EvidenceOfImpact from "components/explainer/EvidenceOfImpact";

function ExplainerPage(props) {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer", { returnObjects: true }) || {};
  };

  const challengeParagraphs = [
    getText().challenge.subtitle,
    ...getText().challenge.paragraphs,
    getText().challenge.conclusion
  ];

  const solutionParagraphs = [
    getText().solution.subtitle,
    ...getText().solution.paragraphs,
    getText().solution.conclusion
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
      <ContentSection
        title={getText().solution.title}
        titleSize="h3"
        paragraphs={solutionParagraphs}
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
