/* eslint-disable react/prop-types */
import React from "react";

import "../styles/globals.css";
import "../styles/Header.scss";
import "../styles/Solution.scss";
import "../styles/HowItWorks.scss";
import "../styles/RoadMap.scss";
import "../styles/WhitePaper.scss";
import "../styles/Contacts.scss";

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
