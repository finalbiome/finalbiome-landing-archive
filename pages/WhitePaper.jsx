import React from "react";
import DownloadButtons from "../components/downloadButton";
import ItemList from "../components/ItemList";

import randomPdf from "../public/randomPdf.pdf";

function WhitePaper() {
  console.log(randomPdf);
  return (
    <div className="white_paper__container">
      <div className="white_paper__container__header">Whitepaper</div>
      <div className="white_paper__container__items">
        <ItemList
          className="white_paper__container__list"
          title="About the platform"
          list={[
            { text: "Понятные и прозрачные правила генерации ассетов" },
            { text: "Ценность ассета определяется  трудозатратами игрока" },
            { text: "Неизменные правила экономики игры" },
            {
              text: "Отсутсвием возможности манипулирования ценностью игровых ассетов",
            },
            {
              text: "Нет административных полномочий, в том числе у платформы, что исключает возникновение скама",
            },
          ]}
        />
        <div className="white_paper__container__buttons">
          <DownloadButtons
            href="/randomPdf.pdf"
            title="English"
            text="View PDF"
          />
          <DownloadButtons
            href="/randomPdf.pdf"
            title="Chines"
            text="View PDF"
          />
          <DownloadButtons
            href="/randomPdf.pdf"
            title="Español"
            text="View PDF"
          />
        </div>
      </div>
    </div>
  );
}

export default WhitePaper;
