import React from "react";
import { PropTypes } from "prop-types";
import "./BenefitCard.scss";

BenefitCard.propTypes = {
  bnfc: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string
  })
};

function BenefitCard({ bnfc }) {
  return (
    <div id="benefit" className="benefit-card">
      <img src={bnfc.img} alt="" className="logo" />
      <h2 className="benefit-card-name">{bnfc.name}</h2>
      <div className="benefit-card-body">{bnfc.content}</div>
    </div>
  );
}

export default BenefitCard;
