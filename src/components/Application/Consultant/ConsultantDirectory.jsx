import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConsultantList from "./ConsultantList";

const ConsultantDirectory = () => {
  const navigate = useNavigate();
  const [consultantsData, setConsultantsData] = useState({});

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/consultants/list");
        const consultants = response.data;
        // Organize consultants by field (stream)
        const organizedConsultants = consultants.reduce((acc, consultant) => {
          const { stream } = consultant;
          if (!acc[stream]) {
            acc[stream] = [];
          }
          acc[stream].push(consultant);
          return acc;
        }, {});
        setConsultantsData(organizedConsultants);
      } catch (error) {
        console.error("Error fetching consultants:", error);
      }
    };

    fetchConsultants();
  }, []);

  const redirectToProfile = () => {
    navigate("/profile");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div>
          <button className="profile-btn" onClick={logout}>
            Logout
          </button>
          <button className="profile-btn" onClick={redirectToProfile}>
            Profile
          </button>
        </div>
      </header>
      <div>
        {Object.entries(consultantsData).map(([field, consultants], index) => (
          <ConsultantList key={index} field={field} consultants={consultants} />
        ))}
      </div>
    </>
  );
};

export default ConsultantDirectory;
