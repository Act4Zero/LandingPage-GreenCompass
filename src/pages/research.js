import "../util/i18n";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Introduction from "components/research/Introduction";
import Insights from "components/research/Insights";
import ContentSections from "components/research/ContentSections";
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
        <Insights
          description={getText().insights.description2}
        />
        <ContentSections />
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