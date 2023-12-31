import React from "react";
import "./SlideCard.css"
import '@fontsource/eczar'

const SlideCard = ({ title, text }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: 'Eczar, serif'}}>{title}</h5>
        <br/>
        <p className="card-text" >{text}</p>
        <br/>
      </div>
    </div>
  );
};

export default SlideCard;
