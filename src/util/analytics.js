import Analytics from "analytics";
import googleAnalyticsPlugin from "@analytics/google-analytics";
import Router from "next/router";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const analytics = Analytics({
  debug: false,
  plugins: measurementId ? [googleAnalyticsPlugin({ measurementIds: [measurementId] })] : [],
});

if (typeof window !== "undefined" && measurementId) {
  analytics.page();
  Router.events.on("routeChangeComplete", () => analytics.page());
}

export default analytics;
