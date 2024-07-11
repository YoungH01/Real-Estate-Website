import React from "react";
import "./Companies.css";
import prologis from "../../assets/image/prologis.png";
import tower from "../../assets/image/tower.png";
import equinix from "../../assets/image/equinix.png";
import realty from "../../assets/image/realty.png";
const Companies = () => {
  return (
    <div className="company">
      <div className="company-content">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
      </div>
    </div>
  );
};

export default Companies;
