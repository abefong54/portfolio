import React, { useState, useEffect, createRef } from "react";
import "./SkillCard.css";
import ColorThief from "colorthief";

export default function SkillCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  return (
    <div className="experience-card">
      <div style={{background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.level}</h5>
        </div>
        
        <img crossOrigin={"anonymous"} ref={imgRef} className="experience-roundedimg" src={cardInfo.colorlogo} alt={cardInfo.level} onLoad={() => getColorArrays()}/>
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{cardInfo.level}</h5>
        <h5 className="experience-text-date">{cardInfo.technology}</h5>
        <p className="subTitle experience-text-desc">{cardInfo.projects}</p>
      </div>
    </div>
  );
}