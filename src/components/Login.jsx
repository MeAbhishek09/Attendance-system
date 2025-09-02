   // ✅ Page switching
  // if (page === "member") {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-green-100">
  //       <h1 className="text-3xl font-bold">🎓 Welcome, {name}! (Member Page)</h1>
  //     </div>
  //   );
  // }

  // if (page === "admin") {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-yellow-100">
  //       <h1 className="text-3xl font-bold">🔑 Welcome Admin ({username})</h1>
  //     </div>
  //   );
  // }


// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate(); // <-- React Router navigation
  const [isAdminPanel, setIsAdminPanel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Inputs
  const [name, setName] = useState("");
  const [eventCode, setEventCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


const handleLogin = () => {
  if (!username.trim() || !password.trim()) {
    alert("Please fill in both Email/Username and Password before logging in.");
  } else {
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernameOrEmail: username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Login successful!");
          navigate("/admin"); // ✅ Go to Admin Dashboard
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.error(err));
  }
};



  const handleJoin = () => {
    if (!name.trim() || !eventCode.trim()) {
      alert("Please fill in both your Name and Event Code before joining.");
    } else {
      // Navigate to a member page if you have one
      navigate("/participants"); // or another member page
    }
  };



  // ✅ Login Page
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a365d] relative overflow-x-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-2 h-2 bg-white/20 rounded-full left-[10%] animate-float"></div>
        <div className="absolute w-3 h-3 bg-white/20 rounded-full left-[30%] animate-float delay-1000"></div>
        <div className="absolute w-4 h-4 bg-white/20 rounded-full left-[60%] animate-float delay-2000"></div>
        <div className="absolute w-3 h-3 bg-white/20 rounded-full left-[80%] animate-float delay-3000"></div>
      </div>
      <div className="w-10 h-10 bg-blue-700 absolute top-20 left-12 rounded-full opacity-20 animate-bounce"></div>
      <div className="w-36 h-36 bg-blue-700 absolute top-0 left-[430px] -my-[50px] rounded-full opacity-20 animate-pulse"></div>
      <div className="w-96 h-96 bg-blue-700 absolute top-[15px] -right-[120px] rounded-full opacity-20 animate-pulse"></div>
      <div className="w-72 h-72 bg-blue-700 absolute bottom-0 -left-[50px] rounded-full opacity-20 animate-pulse"></div>

      {/* Container */}
      <div className="container relative max-w-2xl min-h-[25rem] max-h-[40rem] bg-white rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-700">
        

        {/* Admin Login Panel */}
        <div
          className={`absolute left-0 top-0 w-1/2 h-full bg-white p-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform 
          ${isAdminPanel ? "" : "translate-x-full opacity-0 pointer-events-none"}`}
        >

          <h2 className="flex items-center text-3xl font-semibold mb-6 gap-2">
            <FaLock  className="text-yellow-400 animate-pulse" />
            <span className="bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-pulse ">
              Admin Login
            </span>
          </h2>

          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-9 mb-4 px-4 py-3 bg-gray-200 rounded-md outline-none"
          />
          <div className="relative w-full mb-4">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-9 px-4 py-3 pr-12 bg-gray-200 rounded-md outline-none"
            />
            <button
              type="button"

              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
               {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            // onClick={() => navigate("/admin")}

            // chnage this while backend 

            onClick={handleLogin}
            className="w-full bg-blue-800 hover:bg-blue-700 text-white  h-10 rounded-md"
          >
            Login
          </button>
        </div>


        {/* Member Join Panel */}
        <div
          className={`absolute left-0 top-0 w-1/2 h-full bg-white p-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out
          ${isAdminPanel ? "translate-x-[-100%] opacity-0 pointer-events-none" : ""}`}
        >
          <h2 className="flex items-center text-3xl font-semibold mb-6 gap-2">
            <FaUserPlus className="bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-500 bg-clip-text animate-pulse text-yellow-400" />
            <span className="bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              Join Event
            </span>
          </h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-9 mb-4 px-4 py-3 bg-gray-200 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Enter Event Code"
            value={eventCode}
            onChange={(e) => setEventCode(e.target.value)}
            className="w-full h-9 mb-4 px-4 py-3 bg-gray-200 rounded-md outline-none"
          />
          <button
            onClick={handleJoin}
            className="w-full bg-blue-800 hover:bg-blue-700 text-white h-10 rounded-md"
          >
            Join
          </button>
        </div>

        

        {/* Toggle Panel */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900 text-white flex flex-col justify-center items-center p-10 z-20 transition-all duration-700 text-center">
          <div className="mb-8">
            <h3 className="text-[1.3rem] font-bold">Wanna host an event?</h3>
            <p>Login as Admin.</p>
          </div>
          <button
            onClick={() => setIsAdminPanel(true)}
            className="mb-6 w-36 h-9 rounded-md bg-gradient-to-r from-red-600 to-yellow-400 shadow-lg hover:scale-105 transition"
          >
            Admin Login
          </button>

          <div>
            <h3 className="text-[1.3rem] font-bold">Join Event as Member</h3>
            <p>Click to enter.</p>
          </div>
          <button
            onClick={() => setIsAdminPanel(false)}
            className="mt-6 w-36 h-9 rounded-md bg-gradient-to-r from-red-600 to-yellow-400 shadow-lg hover:scale-105 transition"
          >
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
}






