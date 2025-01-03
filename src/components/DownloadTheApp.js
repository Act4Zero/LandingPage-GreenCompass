import React from "react";
import Image from "next/image";

function DownloadTheApp({
  title,
  subtitle,
  iosTooltip,
  imageSrc = "/images/mobile-mosaic-mockup.png",
  androidLink = "https://play.google.com/store/apps/details?id=com.act4zero.greencompass.android",
  iosLink = "#",
}) {
  return (
    <section
      id="download"
      className="bg-gradient-to-br from-green-lightest to-accent py-16"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text and Buttons */}
        <div className="w-full md:w-1/2 lg:w-5/12 md:pr-8 lg:pr-12 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-green-darkest">
            {title}
          </h2>
          <p className="text-lg text-green-dark mt-4 mb-8">{subtitle}</p>

          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Android Button */}
            <a
              href={androidLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Image
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="transition transform hover:scale-105"
              />
            </a>

            {/* iOS Button with Tooltip */}
            <div className="relative group inline-flex cursor-not-allowed">
              <Image
                src="/images/apple-app-store.svg"
                alt="Download on the App Store"
                width={180}
                height={64}
                className="opacity-50 transition transform group-hover:scale-105"
              />
              <div className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-2 text-sm text-white bg-green-dark rounded shadow-lg">
                {iosTooltip}
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:w-6/12 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <Image
              src={imageSrc}
              alt="App preview"
              width={500}
              height={500}
              className="rounded-md shadow-xl object-cover transition transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadTheApp;
