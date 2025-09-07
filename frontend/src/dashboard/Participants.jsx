
import React from "react";
import Background from "./Background";

const Participants = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10">
         <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <div className="w-[1000px] h-full overflow-y-auto px-6 py-8 space-y-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl">
        
        {/* Box 1: Participant Summary */}
        <div className="w-full border border-gray-400 rounded-xl overflow-auto min-h-[300px]">
          <div className="grid grid-cols-4 text-xl font-semibold border-b border-gray-400 h-16 px-6 sticky top-0 bg-gray-100">
            <div className="flex items-center">Event Name</div>
            <div className="flex items-center">Total Participants</div>
            <div className="flex items-center">Present</div>
            <div className="flex items-center">Absent</div>
          </div>
          {/* Placeholder */}
          <div className="flex justify-center items-center h-[200px] text-gray-500 text-lg">
            No participants data available
          </div>
        </div>

        {/* Box 2: Detailed Participant List */}
        <div className="w-full border border-gray-400 rounded-xl overflow-auto min-h-[300px]">
          <div className="grid grid-cols-3 text-xl font-semibold border-b border-gray-400 h-16 px-6 sticky top-0 bg-gray-100">
            <div className="flex items-center">Participant Name</div>
            <div className="flex items-center">Status</div>
            <div className="flex items-center">Event Attended</div>
          </div>
          {/* Placeholder */}
          <div className="flex justify-center items-center h-[200px] text-gray-500 text-lg">
            No participant records found
          </div>
        </div>

      </div>
    </div>
  );
};

export default Participants;
