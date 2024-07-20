import React from 'react';
import './ConsultantCard.css';

const ConsultantCard = ({ image, name, qualification, job }) => {
  return (
    <div className="consultant-card">
      <div className="consultant-image" style={{ backgroundImage: `url(${image})` }}></div>
      <h3>{name}</h3>
      <p>{qualification}</p>
      <p>{job}</p>
    </div>
  );
};

export default ConsultantCard;
