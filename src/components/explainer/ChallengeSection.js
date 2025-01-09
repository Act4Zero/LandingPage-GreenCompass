import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";
import Icon from "@mdi/react";
import { mdiMoleculeCo2, mdiPipeDisconnected, mdiBoomGateAlert } from "@mdi/js";
import parse from "html-react-parser";
import { motion } from "motion/react";

function ChallengeSection() {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.challenge", { returnObjects: true }) || {};
  };

  return (
    <motion.section
      className="py-12 px-6 sm:py-16 lg:py-20 lg:px-8 bg-gradient-to-b text-green-darkest relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtitle */}
        <motion.p
          className="text-green-dark leading-relaxed mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {getText().subtitle}
        </motion.p>

        {/* Challenge Details with Staggered Animation */}
        <motion.div
          className="space-y-8 sm:space-y-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Stagger animation by 0.3 seconds
              },
            },
          }}
        >
          {[
            { icon: mdiMoleculeCo2, paragraph: getText().paragraph1 },
            { icon: mdiPipeDisconnected, paragraph: getText().paragraph2 },
            { icon: mdiBoomGateAlert, paragraph: getText().paragraph3 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    path={item.icon}
                    size={2}
                    className="text-green-dark mr-4 transition-transform"
                  />
                </motion.div>
                <h4 className="font-bold text-lg text-green-darkest">
                  {item.paragraph.title}
                </h4>
              </div>
              <p className="text-green-dark leading-relaxed">
                {item.paragraph.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion */}
        <motion.div
          className="mt-8 bg-white text-green-darkest py-6 px-8 rounded-lg shadow-lg border border-green-dark"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {parse(getText().conclusion)}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ChallengeSection;
