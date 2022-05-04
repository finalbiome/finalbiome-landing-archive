import React from "react";
import ItemList from "../components/ItemList";

function Solution() {
  return (
    <div className="solution_container">
      <div className="solution_container__text">
        <div className="solution_container__image" />
        <div>
          <h2 className="solution_container__header">Solution</h2>
          <ItemList
            className="solution_container__list"
            title="FinalBiome is a decentralised video game deployment platform that, in addition to the general benefits of decentralised applications, such as:"
            list={[
              {
                text: "Censorship resistance",
              },
              {
                text: "With no single entity controllin",
              },
              {
                text: "Doesn’t rely on a single point of failure like a hosting serve",
              },
              {
                text: "No downtime or restriction",
              },
              {
                text: "Open source encourages faster and more secure development of the ecosystem",
              },
            ]}
          />
          <ItemList
            className="solution_container__list"
            title="Includes"
            list={[
              {
                text: "Transparent and easy entry for developers",
                additional: "(using ready-made SDKs for major game engines)",
              },
              {
                text: "Eliminates the need for server infrastructure",
                additional: "(all business logic is implemented on blockchain)",
              },
              {
                text: "Out-of-the-box ability to trade in-game assets, both NFT and in-game currency on a built-in marketplace",
              },
              {
                text: "An ecosystem-wide global player account system",
              },
              {
                text: "A transparent, convenient and uniform way of interacting with your account and personal game assets for players in all games",
              },
              {
                text: "No developer fees",
                additional: "(unless otherwise determined by the developer)",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Solution;
