import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import icon from "/public/images/GCLogo-no-bg.png";

function Meta(props) {
  const { children, ...customPageMeta } = props;
  const router = useRouter();

  // Meta values that are the same across all pages
  const globalMeta = {
    // Site name
    siteName: "Green Compass",
    // Your production domain (example: https://myapp.com)
    domain: "https://greencompass.app",
    // Your Twitter handle (example: @divjoy)
    twitterHandle: "@GreenCompassApp",
  };

  // Default meta values for current page (override with props)
  const defaultPageMeta = {
    // Page title
    title: props.title,
    // Page description
    description: props.description,
    // Social share image (create this file in /public/images/)
    image: icon.src,
    // Page type (see https://ogp.me/#types)
    type: "website",
  };

  // Construct meta object from global, default, and custom meta
  const meta = { ...globalMeta, ...defaultPageMeta, ...customPageMeta };

  // Note: Each tag should have a unique `key` so that they are de-deduped if other
  // `Meta` components are rendered on the same page or within nested components.
  // prettier-ignore
  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" key="description" />
      {meta.domain && <link rel="canonical" href={`${meta.domain}${router.asPath}`} key="canonical" />}

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} key="og-title" />
      <meta property="og:description" content={meta.description} key="og-description" />
      <meta property="og:site_name" content={meta.siteName} key="og-site-name" />
      <meta property="og:type" content="website" key="og-type" />
      {meta.domain && <meta property="og:url" content={`${meta.domain}${router.asPath}`} key="og-url" />}
      {meta.domain && meta.image && <meta property="og:image" content={`${meta.domain}${meta.image}`} key="og-image" />}
      <meta property="og:locale" content="en_US" key="og-locale" />

      {/* Twitter */}
      <meta name="twitter:title" content={meta.title} key="twitter-title" />
      <meta name="twitter:description" content={meta.description} key="twitter-description"/>
      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      {meta.twitterHandle && <meta name="twitter:site" content={meta.twitterHandle} key="twitter-site" />}
      {meta.domain && meta.image && <meta name="twitter:image" content={`${meta.domain}${meta.image}`} key="twitter-image" />}

      {/* Keywords */}
      <meta name="keywords" content="sustainability app, carbon tracking, eco-friendly living, renewable energy, reduce carbon footprint" key="keywords" />
    </Head>
  );
}

export default Meta;
