/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";

function DownloadButtons({ title, text, href = "/" }) {
  return (
    <Link
      href={href}
      // download
      rel="noreferrer"
      className="download_button"
      passHref
    >
      <div>
        <svg
          width="41"
          height="52"
          viewBox="0 0 41 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.52 11.71H28.38V4.57M8.23 24H31.86M8.23 29.33H31.86M8.23 34.67H31.86M8.23 40H22.14M3.38 1H29.57L39.09 10.52V48.62C39.09 49.93 38.02 51 36.71 51H3.38C2.07 51 1 49.93 1 48.62V3.38C1 2.07 2.07 1 3.38 1Z"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </Link>
  );
}

export default DownloadButtons;
