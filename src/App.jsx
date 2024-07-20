import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ConsultantDirectory from "./components/Application/Consultant/ConsultantDirectory";
import HomePage from "./components/Application/Query/HomePage";
import PostQuery from "./components/Application/Query/PostQuery";
import QueryMessage from "./components/Application/Query/QueryMessage";
import ProfilePage from "./components/Application/Reusable/ProfilePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Contact from "./components/LandingPageTemp/Contact";
import Home from "./components/LandingPageTemp/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/consultant" element={<ConsultantDirectory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/app" element={<HomePage />} />
          <Route path="/add-query" element={<PostQuery />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/query/:id" element={<QueryMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
