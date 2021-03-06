/* eslint-disable max-len */
import React, { useRef } from "react";

import Head from "next/head";
import Script from "next/script";
// import Image from "next/image";
// import ItemList from "../components/ItemList/ItemList";
// import HeaderBackGround from "../assets/HeaderBackground/HeaderBackground";
import Header from "./Header";
import Solution from "./Solution";
import HowItWorks from "./HowItWorks";
import RoadMap from "./Roadmap";
import WhitePaper from "./WhitePaper";
import Contacts from "./Constcts";

export default function Home() {
  const technologyRef = useRef();
  const solutionRef = useRef();
  const roadmapRef = useRef();
  const whitepaperRef = useRef();

  const toView = (ref) =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  return (
    <div>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="lazyOnload" id="script-ga">
        {`
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <Head>
        <title>Finalbiome</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header
          links={[
            {
              name: "Technology",
              link: () => toView(technologyRef),
            },
            {
              name: "Solution",
              link: () => toView(solutionRef),
            },
            {
              name: "Roadmap",
              link: () => toView(roadmapRef),
            },
            {
              name: "Whitepaper",
              link: () => toView(whitepaperRef),
            },
          ]}
        />
        div
        <div ref={solutionRef}>
          <Solution />
        </div>
        <div ref={technologyRef}>
          <HowItWorks />
        </div>
        <div ref={roadmapRef}>
          <RoadMap />
        </div>
        <div ref={whitepaperRef}>
          <WhitePaper />
        </div>
        <Contacts />
      </main>
    </div>
  );
}
