import React from "react";
import Table from "../assets/howItWorks--desktop.svg";
import TableMobile from "../assets/howItWorks--mobile.svg";

function HowItWorks() {
  return (
    <div className="how_it_works__container">
      <Table className="how_it_works__container__table--desktop" />
      <TableMobile className="how_it_works__container__table--mobile" />
    </div>
  );
}

export default HowItWorks