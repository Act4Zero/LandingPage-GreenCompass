import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "../util/i18n";
import { useTranslation } from "react-i18next";
import SectionHeader from "components/common/SectionHeader";
import MissionStatement from "components/about/MissionStatement";
import VisionStatement from "components/about/VisionStatement";
import CoreValues from "components/about/CoreValues";
import WhyItMatters from "components/about/WhyItMatters";

function AboutPage(props) {
  const { t } = useTranslation();
  const getText = () => {
    return t("about", { returnObjects: true }) || {};
  };

  return (
    <>
      <Meta />
      <Navbar bgColor="white" />
      <SectionHeader
        title={getText().headline}
        subtitle={getText().subtitle}
        paddingVertical="py-24"
      />
      <MissionStatement />
      <VisionStatement
        title={getText().vision.title}
        subtitle={getText().vision.subtitle}
      />
      <CoreValues />
      <WhyItMatters
        title={getText().cta.title}
        subtitle={getText().cta.subtitle}
        button={getText().cta.button}
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

export default AboutPage;
