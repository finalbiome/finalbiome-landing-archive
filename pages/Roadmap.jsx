import React from "react";
import RoadMapPhases from "../components/RoadMapPhases";
import RoadMapPhasesMobile from "../components/RoadMapPhasesMobile";

function RoadMap() {
  return (
    <div className="road_map__container">
      <h2 className="road_map__container__header">Roadmap</h2>
      <div className="road_map__container__road_map">
        <RoadMapPhasesMobile />
        <div className="road_map__container__images">
          <div className="__plant1" />
          <div className="__plant2" />
          <div className="__plant3" />
        </div>
        <RoadMapPhases
          phases={[
            { name: "Phase 1", status: "done" },
            { name: "Testnet", status: "done" },
            { name: "FinalBiome Wallet", status: "active" },
            { name: "BIO token launch", status: "active" },
            { name: "Private Sale", status: "active" },
            { name: "Phase 2", status: "waiting" },
            { name: "Marketplace", status: "waiting" },
            { name: "Westend Testnet", status: "waiting" },
            { name: "Collator Node Staking", status: "waiting" },
            { name: "Security Audit", status: "waiting" },
            { name: "First game release", status: "waiting" },
            { name: "Phase 3", status: "waiting" },
          ]}
        />
      </div>
      <div className="grass" />
    </div>
  );
}

export default RoadMap;
