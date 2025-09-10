import React from "react";

const Participants = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-6 overflow-y-auto">
      
      {/* Box: Participant Table */}
      <div className="w-full border border-gray-400 rounded-xl overflow-auto min-h-[300px] shadow-lg bg-white/80 backdrop-blur-sm">
        
        {/* Header Row */}
        <div className="grid grid-cols-2 text-xl font-semibold border-b border-gray-400 h-16 px-4 sticky top-0 bg-gray-100 z-10">
          <div className="flex items-center">Event Name</div>
          <div className="flex items-center gap-2 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a4 4 0 00-5-4H7a4 4 0 00-5 4v2h5m4-9a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
            See Participants
          </div>
        </div>

        {/* Dynamic Event Rows / Placeholder */}
        <div className="flex justify-center items-center h-[200px] text-gray-500 text-lg">
          No data available
        </div>
      </div>
    </div>
  );
};

export default Participants;
