import { useState } from "react";

function SendOtp() {
  const [mobile, setMobile] = useState("");

  const handleSendOtp = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: mobile }),
      });
      const data = await response.text();
      alert(data); // "OTP sent successfully"
    } catch (error) {
      console.error(error);
      alert("Error sending OTP");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Enter Mobile Number</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
    </div>
  );
}

export default SendOtp;
