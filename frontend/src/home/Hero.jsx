import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col bg-[#1a365d] justify-center items-center px-6 pt-28 text-center relative overflow-x-hidden"
    >

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



      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-2 backdrop-blur-md rounded-full mb-6 animate-pulse">
        <span className="text-2xl animate-spin">🎓</span>
        <span className="font-bold uppercase">Official University System</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent animate-pulse mb-6">
        Manage Events and Secure Attendance with Ease
      </h1>

      {/* Subheading */}
      <p className="text-xl text-yellow-300 font-semibold mb-6">
        Revolutionary Attendance Management Platform
      </p>

      {/* Description */}
      <p className="max-w-2xl text-lg text-white/90 mb-10">
        Experience the future of academic attendance tracking with our
        cutting-edge platform. Designed for students, faculty, and
        administrators in both online and offline events.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/SignupPage"
          className="px-6 py-3 rounded-xl font-bold uppercase bg-gradient-to-r from-red-600 to-yellow-400 shadow-lg hover:scale-105 transition inline-flex gap-2 items-center"
        >
          <i className="fas fa-rocket"></i> Launch Portal
        </a>
        <a
          href="#features"
          className="px-6 py-3 rounded-xl border border-white/40 bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-105 transition inline-flex gap-2 items-center"
        >
          <i className="fas fa-compass"></i> Explore Features
        </a>
      </div>
    </section>
  );
};

export default Hero;
