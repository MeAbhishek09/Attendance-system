
import React from "react";
import Background from "./Background";

const Analytics = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Main Content */}
      <div className="w-[1000px] h-full overflow-y-auto px-6 py-8 space-y-8">
        {/* Box 1: 5 Column Event Table */}
        <div className="w-full border border-gray-400 rounded-2xl overflow-auto min-h-[300px] shadow-lg bg-white/80 backdrop-blur-sm">
          <div className="grid grid-cols-5 text-lg font-semibold border-b border-gray-400 h-16 px-6 sticky top-0 bg-gray-100 rounded-t-2xl">
            <div className="flex items-center">Past Events</div>
            <div className="flex items-center">Total Participants</div>
            <div className="flex items-center">Total Present</div>
            <div className="flex items-center">Total Absent</div>
            <div className="flex items-center">Duration of Event</div>
          </div>
          <div className="flex justify-center items-center h-[200px] text-gray-500 text-lg">
            No data available
          </div>
        </div>

        {/* Box 2: 3 Column List */}
        <div className="w-full border border-gray-400 rounded-2xl overflow-auto min-h-[300px] shadow-lg bg-white/80 backdrop-blur-sm">
          <div className="grid grid-cols-3 text-lg font-semibold border-b border-gray-400 h-16 px-6 sticky top-0 bg-gray-100 rounded-t-2xl">
            <div className="flex items-center">Past Events</div>
            <div className="flex items-center">Total Present List</div>
            <div className="flex items-center">Total Absent List</div>
          </div>
          <div className="flex justify-center items-center h-[200px] text-gray-500 text-lg">
            No data available
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
