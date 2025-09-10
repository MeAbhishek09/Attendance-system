import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./Background";
import Participants from "./Participants";
import Event from "./Event";
import Analytics from "./Analytics";
import { FaHome, FaCalendarAlt, FaUsers, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import Avatar from "react-avatar";

const Admin = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home"); // default view

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      <div className="relative flex flex-col md:flex-row w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-56 bg-gray-200 p-4 flex flex-col justify-between">
          <div>
            <button
              onClick={() => setActiveSection("home")}
              className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md mb-4"
            >
              <FaHome /> Home
            </button>

            <button
              onClick={() => setActiveSection("event")}
              className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md mb-4"
            >
              <FaCalendarAlt /> Create Event
            </button>

            <button
              onClick={() => setActiveSection("participants")}
              className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md mb-4"
            >
              <FaUsers /> Participants
            </button>

            <button
              onClick={() => setActiveSection("analytics")}
              className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md"
            >
              <FaChartBar /> View Analytics
            </button>
          </div>

          {/* Profile + Logout */}
          <div className="mt-8 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Avatar name="Admin" size="48" round textSizeRatio={2} />
              <button className="text-black font-medium">Admin</button>
            </div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black hover:bg-gray-300 transition rounded-md w-full"
            >
              <FaSignOutAlt className="w-5 h-5" /> Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          {activeSection === "home" && (
            <>
              {/* Stats Cards */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-pink-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold min-w-[150px]">
                  Total Events
                </div>
                <div className="bg-purple-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold min-w-[150px]">
                  Attendance Today
                </div>
                <div className="bg-amber-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold min-w-[150px]">
                  Total Participants
                </div>
                <div className="bg-green-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold min-w-[150px]">
                  Past Events
                </div>
              </div>

              {/* Events Table */}
              <div className="border border-gray-400 rounded-xl overflow-auto">
                <div className="grid grid-cols-4 text-lg font-semibold border-b border-gray-400 h-14 px-4 bg-gray-100 sticky top-0">
                  <div className="flex items-center">Event Name</div>
                  <div className="flex items-center">Date</div>
                  <div className="flex items-center">Type</div>
                  <div className="flex items-center">Status</div>
                </div>
                <div className="h-64 flex items-center justify-center text-gray-500 italic">
                  No events available
                </div>
              </div>
            </>
          )}

          {activeSection === "event" && <Event />}
          {activeSection === "participants" && <Participants />}
          {activeSection === "analytics" && <Analytics />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
