import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./queryc.css";

const apiUrl = "http://localhost:5000";

async function getQueries() {
  try {
    const response = await axios.get(`${apiUrl}/query/list`, {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching queries:", error);
    return [];
  }
}

async function postQuery(queryData) {
  try {
    const response = await axios.post(`${apiUrl}/query/create`, queryData, {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error posting query:", error);
    throw error;
  }
}

function PostQuery() {
  const [queries, setQueries] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stream, setStream] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQueries = async () => {
      const fetchedQueries = await getQueries();
      setQueries(fetchedQueries);
    };

    fetchQueries();
  }, []);

  const handlePostQuery = async () => {
    const queryData = {
      title,
      description,
      stream,
      date: new Date().toLocaleDateString(),
    };

    try {
      const response = await postQuery(queryData);
      setQueries([response.data, ...queries]);
      setTitle("");
      setDescription("");
      setStream("");
    } catch (error) {}
  };

  return (
    <>
      <header>
        <img src="logo.png" alt="Logo" />
        <button onClick={() => navigate("/app")}>Home</button>
      </header>
      <div className="forum-container">
        <div className="post-form">
          <h2>Post a Query</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePostQuery();
            }}
          >
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" required />
            </div>

            <div className="form-group">
              <label htmlFor="stream">Stream:</label>
              <input type="text" id="stream" value={stream} onChange={(e) => setStream(e.target.value)} required />
            </div>
            <button type="submit">Post Query</button>
          </form>
        </div>

        <div className="messages">
          <h2>Queries</h2>
          {queries.map((query) => (
            <div key={query._id} className="message" onClick={() => (window.location.href = `/message?${new URLSearchParams(query).toString()}`)}>
              <p className="message-text">{query.title}</p>
              <p className="message-date">Posted on: {new Date(query.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PostQuery;
