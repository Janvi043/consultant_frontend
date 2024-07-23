import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homec.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [queries, setQueries] = useState([]);
  const [queryResponses, setQueryResponses] = useState([]);

  const fetchResponses = async (queries) => {
    try {
      const responses = await Promise.all(
        queries.map((query) =>
          axios.get(`http://localhost:5000/resolution/list/${query._id}`, {
            headers: {
              "x-auth-token": `${localStorage.getItem("token")}`,
            },
          })
        )
      );

      setQueryResponses(responses.map((response) => response.data));
    } catch (error) {
      console.error("Error fetching responses:", error);
    }
  };

  const fetchQueries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/query/list", {
        headers: {
          "x-auth-token": `${localStorage.getItem("token")}`,
        },
      });
      setQueries(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching queries:", error);
    }
  };

  useEffect(() => {
    return async () => {
      const data = await fetchQueries();
      await fetchResponses(data);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const redirectToProfile = () => {
    navigate("/profile");
  };

  const redirectToQuery = (url) => {
    navigate(url);
  };

  const addQuery = () => {
    navigate("/add-query");
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
      <div className="main-content">
        <section className="queries-posted">
          <h2>Queries Posted</h2>
          {queries.map((query) => (
            <div key={query._id} className="query" onClick={() => redirectToQuery(`/query/${query._id}`)}>
              <h3>{query.title}</h3>
              <p>Date Posted: {new Date(query.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </section>
        <section className="query-responses">
          <h2>Query Responses</h2>
          {!queryResponses.every((responses) => responses.length === 0) ? (
            queryResponses.map((responses) =>
              responses.map((response) => (
                <div key={response._id} className="response" onClick={() => redirectToQuery(`/response/${response._id}`)}>
                  <h3>{response.queryTitle}</h3>
                  <p>Responded by: {response.respondedBy}</p>
                  <p>Date Posted: {new Date(response.queryCreatedAt).toLocaleDateString()}</p>
                  <p>Date Responded: {new Date(response.createdAt).toLocaleDateString()}</p>
                </div>
              ))
            )
          ) : (
            <p>No resolutions to your queries...</p>
          )}
        </section>
      </div>
      <div className="add-query-button">
        <button onClick={addQuery}>Add Query</button>
      </div>
    </>
  );
};

export default HomePage;
