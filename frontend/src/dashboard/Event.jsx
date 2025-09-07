import React from "react";
import Background from "./Background";

export default function Event() {
  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center">
      {/* Background (always full screen, behind content) */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Foreground Card */}
      <div className="relative z-10 overflow-y-auto max-h-[90vh] w-[1000px] px-8 pt-10 space-y-6 bg-white shadow-lg rounded-xl">
        {/* Event Name */}
        <div>
          <label
            htmlFor="event-name"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Event Name
          </label>
          <input
            type="text"
            id="event-name"
            placeholder="Enter Event Name"
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Institution Name */}
        <div>
          <label
            htmlFor="institution-name"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Institution Name
          </label>
          <input
            type="text"
            id="institution-name"
            placeholder="Enter Institution Name"
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Registration Number */}
        <div>
          <label
            htmlFor="registration-number"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Registration Number
          </label>
          <input
            type="text"
            id="registration-number"
            placeholder="Enter Registration Number"
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Event Date */}
        <div>
          <label
            htmlFor="event-date"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Event Date
          </label>
          <input
            type="date"
            id="event-date"
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Event Type */}
        <div>
          <label
            htmlFor="event-type"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Event Type
          </label>
          <select
            id="event-type"
            defaultValue=""
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="" disabled>
              Select event type
            </option>
            <option value="webinar">Webinar</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
            <option value="conference">Conference</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter Event Location"
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            placeholder="Describe the event..."
            className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        {/* Upload Banner Image */}
        <div>
          <label
            htmlFor="banner-upload"
            className="text-lg font-medium text-gray-800 block mb-1"
          >
            Upload Banner Image
          </label>
          <input
            type="file"
            id="banner-upload"
            className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6 mb-5">
          <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Submit
          </button>
          <button className="px-6 py-2 rounded-lg bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
