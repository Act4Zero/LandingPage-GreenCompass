import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "Green Compass";
const SITE_URL = "https://www.greencompass.app";
const DEFAULT_TITLE = "Green Compass: A clearer path to sustainable living";
const DEFAULT_DESCRIPTION =
  "Practical sustainability guidance today, with thoughtful tools for lower-impact living on the horizon.";

function Meta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = "/og.png",
  children,
}) {
  const router = useRouter();
  const pathname = (router.asPath || "/").split("?")[0].split("#")[0];
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const imageUrl = `${SITE_URL}${image}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/GCLogo-no-bg.png`,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={canonical} key="canonical" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:description" content={description} key="og-description" />
      <meta property="og:site_name" content={SITE_NAME} key="og-site-name" />
      <meta property="og:type" content="website" key="og-type" />
      <meta property="og:url" content={canonical} key="og-url" />
      <meta property="og:image" content={imageUrl} key="og-image" />
      <meta property="og:image:width" content="1200" key="og-image-width" />
      <meta property="og:image:height" content="630" key="og-image-height" />

      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      <meta name="twitter:title" content={title} key="twitter-title" />
      <meta name="twitter:description" content={description} key="twitter-description" />
      <meta name="twitter:image" content={imageUrl} key="twitter-image" />
      <meta name="twitter:site" content="@GreenCompassApp" key="twitter-site" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        key="structured-data"
      />
      {children}
    </Head>
  );
}

export default Meta;
