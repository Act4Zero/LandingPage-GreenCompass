import "../util/i18n";
import { useTranslation } from "react-i18next";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import ContentSections from "components/research/ContentSections";
import Footer from "components/Footer";

function ResearchPage(props) {
    const { t } = useTranslation();
    
    return (
      <>
        <Meta />
        <Navbar bgColor="white" />
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