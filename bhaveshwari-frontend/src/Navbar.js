import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/search?city=${encodeURIComponent(city)}`);
    } else {
      alert("Please enter a city to search");
    }
  };

  return (
    <nav style={navStyle}>
      {/* Left Side */}
      <div style={logoContainer}>
        <h1 style={headingStyle}>Design With Best Art!!!!!</h1>
      </div>

      {/* Center Menu */}
      <div style={menuStyle}>
        <Link to="/" style={buttonStyle}>Home</Link>
        <Link to="/signup" style={buttonStyle}>Signup</Link>
        <Link to="/login" style={buttonStyle}>Login</Link>
        <Link to="/gallery" style={buttonStyle}>Gallery</Link>
      </div>

      {/* Right Side Search */}
      <div style={searchContactStyle}>
        
        {/* CITY DROPDOWN */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik</option>
          <option value="Solapur">Solapur</option>
          <option value="Nagpur">Nagpur</option>
        </select>

        <button onClick={handleSearch} style={searchButtonStyle}>Search</button>

        <div style={contactStyle}>
          <div>📞 +8660939473</div>
          <div>✉️ rajesh.mane1994@gmail.com</div>
        </div>
      </div>

    </nav>
  );
}

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  fontFamily: "'Arial', sans-serif",
  flexWrap: "wrap"
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "10px"
};

const headingStyle = {
  color: "#fff",
  textShadow: "2px 2px 5px #000",
  fontSize: "24px"
};

const menuStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  flex: 1
};

const buttonStyle = {
  padding: "8px 16px",
  borderRadius: "8px",
  backgroundColor: "rgba(255,255,255,0.3)",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease"
};

const searchContactStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  flexWrap: "wrap"
};

const inputStyle = {
  padding: "6px 10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none"
};

const searchButtonStyle = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#fff",
  color: "#ff7e5f",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "1px 1px 5px rgba(0,0,0,0.3)"
};

const contactStyle = {
  color: "#fff",
  textAlign: "right",
  fontSize: "14px"
};

export default Navbar;
