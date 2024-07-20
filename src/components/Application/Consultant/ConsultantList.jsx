import React, { useState } from 'react';
import ConsultantCard from './ConsultantCard';
import './ConsultantList.css';

const ConsultantList = ({ field, consultants }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <div className="consultant-list">
      <h2>{field}</h2>
      <div className="consultant-row">
        {consultants.slice(0, visibleCount).map((consultant, index) => (
          <ConsultantCard key={index} {...consultant} />
        ))}
      </div>
      {visibleCount < consultants.length && (
        <button className="show-more-btn" onClick={showMore}>Show More ↓</button>
      )}
    </div>
  );
};

export default ConsultantList;
