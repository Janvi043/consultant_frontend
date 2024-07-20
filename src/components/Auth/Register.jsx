import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (username, password, email, city, zipcode, state, gender, mobile, address, dob, education) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        name: username,
        password,
        email,
        gender,
        city,
        zipcode,
        state,
        mobile,
        address,
        dob,
        education,
      });
      localStorage.setItem("token", response.data.token);

      if (response.status === 201) navigate("/app");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(username, password, email, city, zipcode, state, gender, mobile, address, dob, education);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <input type="text" placeholder="Zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
        <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} required />
        <input type="text" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} required />
        <button type="submit" className="reg">
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
