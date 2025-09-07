import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "./Background";
// import { HomeIcon, CalendarIcon, UserGroupIcon, ChartBarIcon, LogoutIcon } from  "react-icons/fa";
// import { HomeIcon, CalendarIcon, UserGroupIcon, ChartBarIcon, LogoutIcon } from '@heroicons/react/24/outline';
import { FaHome, FaCalendarAlt, FaUsers, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import Avatar from "react-avatar";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      <div className="relative h-screen w-screen flex items-center justify-center">
        {/* Center Card */}
        <div className="w-full max-w-5xl h-auto bg-white rounded-2xl flex shadow-lg overflow-hidden">
          {/* Sidebar */}
          <div className="w-56 bg-gray-200 rounded-tl-2xl rounded-bl-2xl p-4 flex flex-col justify-between">
            <div>
              <button
                onClick={() => navigate("/admin")}
                className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md mb-4"
              >
                <FaHome />
                Home
              </button>

              <button
                onClick={() => navigate("/event")}
                className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md mb-4"
              >
                <FaCalendarAlt />
                Create Event
              </button>

              <button
                onClick={() => navigate("/participants")}
                className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md mb-4"
              >
                <FaUsers />
                Participants
              </button>

              <button
                onClick={() => navigate("/analytics")}
                className="flex items-center gap-2 px-4 py-2 w-full text-left bg-gray-200 text-black hover:bg-gray-300 transition rounded-md"
              >
                 <FaChartBar />
                View Analytics
              </button>
            </div>


            {/* Profile + Logout */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Avatar 
                  name="Admin" 
                  size="48" 
                  round={true} 
                  textSizeRatio={2} 
                />
                <button className="text-black font-medium">Admin</button>
              </div>
              <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black hover:bg-gray-300 transition rounded-md w-full">
                <FaSignOutAlt className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Stats Cards */}
            <div className="flex gap-6 mb-6">
              <div className="bg-pink-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold">
                Total Events
              </div>
              <div className="bg-purple-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold">
                Attendance Today
              </div>
              <div className="bg-amber-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold">
                Total Participants
              </div>
              <div className="bg-green-200 h-24 flex-1 rounded-xl shadow-md flex justify-center items-center text-lg font-semibold">
                Past Events
              </div>
            </div>

            {/* Events Table */}
            <div className="border border-gray-400 rounded-xl overflow-auto">
              <div className="grid grid-cols-4 text-lg font-semibold border-b border-gray-400 h-14 px-6 bg-gray-100 sticky top-0">
                <div className="flex items-center">Event Name</div>
                <div className="flex items-center">Date</div>
                <div className="flex items-center">Type</div>
                <div className="flex items-center">Status</div>
              </div>

              <div className="h-64 flex items-center justify-center text-gray-500 italic">
                No events available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
