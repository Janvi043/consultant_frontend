import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profilec.css";

const ProfilePage = () => {
  const navigation = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    dob: "",
    address: "",
    education: "",
    email: "",
    gender: "",
    photo: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/profile", {
          headers: {
            "x-auth-token": `${localStorage.getItem("token")}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById("profile-preview").style.backgroundImage = `url(${event.target.result})`;
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("photo", profilePicture);
      formData.append("name", userData.name);
      formData.append("dob", userData.dob);
      formData.append("address", userData.address);
      formData.append("education", userData.education);
      formData.append("email", userData.email);
      formData.append("gender", userData.gender);

      await axios.put("http://localhost:5000/profile", formData, {
        headers: {
          "x-auth-token": `${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const redirectToHome = () => {
    navigation("/app");
  };

  return (
    <div>
      <header className="header">
        <div className="logo">Logo</div>
        <button className="home-button" onClick={redirectToHome}>
          Home
        </button>
      </header>
      <div className="form-container">
        <div className="form-left">
          <div className="form-group">
            <div id="profile-preview">
              <button id="choose-file-button" onClick={() => document.getElementById("profile-picture").click()}>
                Choose File
              </button>
            </div>
            <input type="file" id="profile-picture" name="profile-picture" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
          </div>
        </div>
        <div className="form-right">
          <h2>User Details</h2>
          <form id="user-details-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} required disabled={!isEditing} />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={
                  userData.dob
                    ? `${new Date(userData.dob).getFullYear()}-${
                        new Date(userData.dob).getMonth() < 10 ? `0${new Date(userData.dob).getMonth() + 1}` : new Date(userData.dob).getMonth() + 1
                      }-${new Date(userData.dob).getDate()}`
                    : "2020-01-01"
                }
                onChange={handleInputChange}
                required
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} required disabled={!isEditing} />
            </div>
            <div className="form-group">
              <label htmlFor="education">Education:</label>
              <input type="text" id="education" name="education" value={userData.education} onChange={handleInputChange} required disabled={!isEditing} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required disabled={!isEditing} />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <label className="gender-label">
                <input type="radio" name="gender" value="male" checked={userData.gender.toLowerCase() === "male"} onChange={handleInputChange} required disabled={!isEditing} />{" "}
                Male
              </label>
              <label className="gender-label">
                <input type="radio" name="gender" value="female" checked={userData.gender.toLowerCase() === "female"} onChange={handleInputChange} required disabled={!isEditing} />{" "}
                Female
              </label>
              <label className="gender-label">
                <input type="radio" name="gender" value="other" checked={userData.gender.toLowerCase() === "other"} onChange={handleInputChange} required disabled={!isEditing} />{" "}
                Other
              </label>
            </div>
            <div className="form-group">
              <button type="submit" id="update-button" style={{ display: isEditing ? "block" : "none" }}>
                Update
              </button>
              <button type="button" id="edit-button" onClick={() => setIsEditing(true)} style={{ display: isEditing ? "none" : "block" }}>
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
