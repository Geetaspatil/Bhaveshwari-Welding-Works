import { useState } from "react";

function VerifyOtp() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: mobile, otp }),
      });
      const data = await response.text();
      alert(data); // "Login Successful" or "Invalid OTP"
    } catch (error) {
      console.error(error);
      alert("Error verifying OTP");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
}

export default VerifyOtp;
