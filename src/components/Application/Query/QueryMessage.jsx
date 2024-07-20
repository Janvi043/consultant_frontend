import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./queryc.css";

const QueryMessage = () => {
  const [queryDetails, setQueryDetails] = useState({
    title: "",
    message: "",
    description: "",
    createdAt: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchQueryDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/query/${id}`, {
          headers: {
            "x-auth-token": `${localStorage.getItem("token")}`,
          },
        });
        const { title, message, description, createdAt } = response.data;
        setQueryDetails({ title, message, description, createdAt });
      } catch (error) {
        console.error("Error fetching query details:", error);
      }
    };

    fetchQueryDetails();
  }, [id]);

  const goBack = () => {
    navigate("/app");
  };

  return (
    <div>
      <header>
        <img src="logo.png" alt="Logo" />
      </header>
      <div className="forum-container">
        <div className="message-details">
          <h2>Query Title: {queryDetails.title}</h2>
          <p className="message-text">{queryDetails.description}</p>
          <p className="message-date">{queryDetails.createdAt ? `Posted on: ${new Date(queryDetails.createdAt).toLocaleDateString()}` : ""}</p>
          <button onClick={goBack}>Back to Queries</button>
        </div>
      </div>
    </div>
  );
};

export default QueryMessage;
