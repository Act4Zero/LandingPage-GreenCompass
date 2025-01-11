import React from "react";
import Image from "next/image";
import { motion } from "motion/react"; // Add motion for animations

function DownloadTheApp({
  title,
  subtitle,
  iosTooltip,
  imageSrc = "/images/mobile-mosaic-mockup.png",
  androidLink = "https://play.google.com/store/apps/details?id=com.act4zero.greencompass.android",
  iosLink = "#",
}) {
  return (
    <motion.section
      id="download"
      className="bg-gradient-to-br from-green-lightest to-accent py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text and Buttons */}
        <motion.div
          className="w-full md:w-1/2 lg:w-5/12 md:pr-8 lg:pr-12 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-green-darkest">
            {title}
          </h2>
          <p className="text-lg text-green-dark mt-4 mb-8">{subtitle}</p>

          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Android Button */}
            <motion.a
              href={androidLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                loading="lazy"
                width={180}
                height={54}
                className="transition"
              />
            </motion.a>

            {/* iOS Button with Tooltip */}
            <div className="relative group inline-flex cursor-not-allowed">
              <Image
                src="/images/apple-app-store.svg"
                alt="Download on the App Store"
                loading="lazy"
                width={180}
                height={64}
                className="opacity-50 transition transform group-hover:scale-105"
              />
              <motion.div
                className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-2 text-sm text-white bg-green-dark rounded shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {iosTooltip}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 lg:w-6/12 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md">
            <motion.div
              className="overflow-hidden rounded-md shadow-xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Image
                src={imageSrc}
                alt="App preview"
                loading="lazy"
                width={500}
                height={500}
                className="object-cover transition"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default DownloadTheApp;
