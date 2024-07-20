import React from 'react';
import ConsultantList from './ConsultantList';

const consultantsData = {
  Engineering: [
    { image: 'https://via.placeholder.com/100', name: 'John Doe', qualification: 'B.Tech', job: 'Software Engineer' },
    { image: 'https://via.placeholder.com/100', name: 'Jane Smith', qualification: 'M.Tech', job: 'Civil Engineer' },
    { image: 'https://via.placeholder.com/100', name: 'Michael Brown', qualification: 'Ph.D.', job: 'Mechanical Engineer' },
    { image: 'https://via.placeholder.com/100', name: 'Sara Wilson', qualification: 'B.E.', job: 'Electrical Engineer' },
    // Add more consultant details if needed
  ],
  Medical: [
    { image: 'https://via.placeholder.com/100', name: 'Dr. Alice', qualification: 'MBBS', job: 'General Physician' },
    { image: 'https://via.placeholder.com/100', name: 'Dr. Bob', qualification: 'MD', job: 'Cardiologist' },
    { image: 'https://via.placeholder.com/100', name: 'Dr. Charlie', qualification: 'BDS', job: 'Dentist' },
    { image: 'https://via.placeholder.com/100', name: 'Dr. Dana', qualification: 'MS', job: 'Surgeon' },
    // Add more consultant details if needed
  ],
  Commerce: [
    { image: 'https://via.placeholder.com/100', name: 'Charlie Brown', qualification: 'MBA', job: 'Accountant' },
    { image: 'https://via.placeholder.com/100', name: 'Dave White', qualification: 'B.Com', job: 'Financial Analyst' },
    { image: 'https://via.placeholder.com/100', name: 'Emily Black', qualification: 'M.Com', job: 'Auditor' },
    { image: 'https://via.placeholder.com/100', name: 'Frank Green', qualification: 'CA', job: 'Chartered Accountant' },
    // Add more consultant details if needed
  ],
  Agriculture: [
    { image: 'https://via.placeholder.com/100', name: 'Anna Farm', qualification: 'B.Sc. Agri', job: 'Agronomist' },
    { image: 'https://via.placeholder.com/100', name: 'Ben Harvest', qualification: 'M.Sc. Agri', job: 'Soil Scientist' },
    { image: 'https://via.placeholder.com/100', name: 'Clara Fields', qualification: 'Ph.D. Agri', job: 'Plant Breeder' },
    { image: 'https://via.placeholder.com/100', name: 'Daniel Crop', qualification: 'B.Sc. Hort', job: 'Horticulturist' },
    // Add more consultant details if needed
  ],
  Arts: [
    { image: 'https://via.placeholder.com/100', name: 'Eve Brush', qualification: 'BFA', job: 'Painter' },
    { image: 'https://via.placeholder.com/100', name: 'Frank Chisel', qualification: 'MFA', job: 'Sculptor' },
    { image: 'https://via.placeholder.com/100', name: 'Grace Palette', qualification: 'Ph.D. Arts', job: 'Art Historian' },
    { image: 'https://via.placeholder.com/100', name: 'Henry Color', qualification: 'B.Des', job: 'Graphic Designer' },
    // Add more consultant details if needed
  ]
};

const ConsultantDirectory = () => {
  return (
    <div>
      {Object.entries(consultantsData).map(([field, consultants], index) => (
        <ConsultantList key={index} field={field} consultants={consultants} />
      ))}
    </div>
  );
};

export default ConsultantDirectory;
