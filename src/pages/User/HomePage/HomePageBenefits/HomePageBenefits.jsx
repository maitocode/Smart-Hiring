import React from "react";
import BenefitCard from "./BenefitCard/BenefitCard.jsx";
import "./HomePageBenefits.scss";
import technicalTraining from "../../../../assets/images/benefit/technicalTraining.svg";
import englishTraining from "../../../../assets/images/benefit/englishTraining.svg";
import processTraining from "../../../../assets/images/benefit/processTraining.svg";
import knowledgeExchange from "../../../../assets/images/benefit/knowledgeExchange.svg";

function HomePageBenefits() {
  const benefitCards = [
    {
      id: 1,
      img: technicalTraining,
      name: "Technical training",
      content:
        "Technical skills underscore our ability to provide exceptional development services, so we provide ample opportunities for you to participate in training programs and courses that will keep you abreast of the latest developments in programming languages, project management, and cutting-edge technologies"
    },
    {
      id: 2,
      img: englishTraining,
      name: "English training",
      content:
        "Because we work directly with international clients, you will constantly hone your ability to communicate in English. Orient Software has in-house English courses taught by native English speaking instructors to develop your ability to understand and produce written and spoken English."
    },
    {
      id: 3,
      img: knowledgeExchange,
      name: "Knowledge Exchange Initiative",
      content:
        "Every month we organize a knowledge exchange event to promote free flow of knowledge between the different teams. This is an opportunity for our employees to shared their expert knowledge to the rest of the company."
    },
    {
      id: 4,
      img: processTraining,
      name: "Process training",
      content:
        "Orient Software’s success relies on smooth processes and effective teamwork. We provide training opportunities to develop your knowledge of best practices for development processes and methodologies, as well as interpersonal and soft skills."
    }
  ];

  return (
    <div className="page-benefits">
      <h1>Attractive Benefits</h1>
      <h3>
        We are expanding bussiness and people to meet our client demands. You
        are warmly welcomed to join our team, where you got attractive benefits
        to support your daily performance.
      </h3>

      <div className="benefit-group-card">
        {benefitCards.map((bnfc) => (
          <BenefitCard bnfc={bnfc} key={bnfc.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePageBenefits;
