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
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text and Buttons */}
        <div className="w-full md:w-1/2 lg:w-5/12 md:pr-8 lg:pr-12 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 mt-4 mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Android Button (Enabled) */}
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
              />
            </a>

            {/* iOS Button (Disabled) */}
            <div className="relative group inline-flex cursor-not-allowed">
              <Image
                src="/images/apple-app-store.svg"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="opacity-50"
              />
              {/* Tooltip shown on hover */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-sm text-white bg-black rounded">
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
              className="rounded-md shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadTheApp;
