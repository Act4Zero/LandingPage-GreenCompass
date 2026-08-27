import React from "react";
import "styles/global.css";
import "util/analytics";
import Chat from "components/Chat";
import { LanguageProvider } from "context/LanguageContext";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Chat />

      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
