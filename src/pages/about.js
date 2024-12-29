import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "../util/i18n";
import { useTranslation } from "react-i18next";
import SectionHeader from "components/SectionHeader";
import MissionStatement from "components/about/MissionStatement";
import VisionStatement from "components/about/VisionStatement";

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
