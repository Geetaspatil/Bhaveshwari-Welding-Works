import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
//import LoginPage from "./Login";
import Signup from "./Signup";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import "./App.css";
import VerifyOtp from "./components/VerifyOtp";
import SendOtp from "./components/SendOtp";


function App() {
  return (
    <div>
      <Navbar />  {/* Use your Navbar here */}
      
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/send-otp" element={<SendOtp />} />
<Route path="/verify-otp" element={<VerifyOtp />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
