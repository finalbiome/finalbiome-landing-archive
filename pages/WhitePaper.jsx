import React from "react";
import DownloadButtons from "../components/downloadButton";
import ItemList from "../components/ItemList";

function WhitePaper() {
  return (
    <div className="white_paper__container">
      <h2>Whitepaper</h2>
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
        <DownloadButtons title="English" text="View PDF" />
        <DownloadButtons title="Chines" text="View PDF" />
        <DownloadButtons title="Español" text="View PDF" />
      </div>
      </div>
    </div>
  );
}

export default WhitePaper;
