import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarCheck, FaChartPie } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUserGraduate className="text-3xl text-yellow-400 mb-4 animate-bounce" />,
      value: "15,247",
      label: "Active Students",
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-yellow-400 mb-4 animate-bounce" />,
      value: "847",
      label: "Faculty Members",
    },
    {
      icon: <FaCalendarCheck className="text-3xl text-yellow-400 mb-4 animate-bounce" />,
      value: "2,856",
      label: "Monthly Classes",
    },
    {
      icon: <FaChartPie className="text-3xl text-yellow-400 mb-4 animate-bounce" />,
      value: "99.8%",
      label: "System Uptime",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-[#1a202c]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          Impressive Impact
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-2xl backdrop-blur-lg hover:scale-105 transition shadow"
            >
              {stat.icon}
              <span className="block text-3xl font-extrabold">{stat.value}</span>
              <p className="uppercase text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
