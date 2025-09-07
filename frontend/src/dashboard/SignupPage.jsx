import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupPage = () => {
  const navigate = useNavigate();

//   // ✅ States for form inputs
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   //  Backend integration placeholder
//   const handleSignup = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ fullName, email, username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Signup successful! Please login.");
//         navigate("/login");
//       } else {
//         alert(data.message || "Signup failed.");
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert("Something went wrong.");
//     }
//   };



  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignup = async () => {
    if (!fullName || !email || !username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };




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

      {/* Signup Container */}
      <div className="container relative max-w-lg min-h-[30rem] bg-white rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden p-10">
        <h2 className="flex items-center text-3xl font-semibold mb-6 gap-2 justify-center">
          <FaUserPlus className="text-yellow-400 animate-pulse" />
          <span className="bg-gradient-to-r from-red-600 via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            Sign Up As Admin
          </span>
        </h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full h-10 mb-4 px-4 py-3 bg-gray-200 rounded-md outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 mb-4 px-4 py-3 bg-gray-200 rounded-md outline-none"
        />

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-10 mb-4 px-4 py-3 bg-gray-200 rounded-md outline-none"
        />

        {/* Password */}
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 px-4 py-3 pr-12 bg-gray-200 rounded-md outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {/* <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i> */}
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full h-10 mb-4 px-4 py-3 bg-gray-200 rounded-md outline-none"
        />

        {/* Signup Button */}
        <button
          onClick={handleSignup} disabled={loading}
          className="w-full bg-blue-800 hover:bg-blue-700 text-white h-10 rounded-md"
        >
          Sign Up
          {/* {loading ? "Signing up..." : "Signup"} */}
        </button>

        {/* Already have account link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-800 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
