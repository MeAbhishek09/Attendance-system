
import { FaQrcode, FaShieldAlt, FaTachometerAlt, FaMobileAlt, FaChartLine, FaUsersCog } from "react-icons/fa";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white text-dark">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="inline-block px-4 py-1 rounded-full text-2xl font-bold uppercase bg-gradient-to-r from-blue-800 to-yellow-500 text-white mb-6">
          Next-Generation Technology
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Unparalleled Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-4xl">
          Discover the most advanced attendance management system designed for educational digital transformation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card */}
          <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition relative border-t-4 border-blue-800">
            <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-2xl text-white shadow-md">
              <FaQrcode />
            </div>
            <h3 className="text-xl font-bold mb-2">QR Attendance</h3>
            <p className="text-gray-600">
              Scan QR codes for quick sign-ins. Prevent proxy attendance, save time, and reduce errors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition relative border-t-4 border-blue-800">
            <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-2xl text-white shadow-md">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Event Tracking</h3>
            <p className="text-gray-600">
              Monitor events with a unified platform, track participant check-ins in real-time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition relative border-t-4 border-blue-800">
            <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-2xl text-white shadow-md">
              <FaTachometerAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning-Fast</h3>
            <p className="text-gray-600">
              Cloud-native architecture with 99.9% uptime and sub-second response times.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition relative border-t-4 border-blue-800">
            <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-2xl text-white shadow-md">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Universal Compatibility</h3>
            <p className="text-gray-600">
              Seamless experience across all devices, with progressive web app support.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition relative border-t-4 border-blue-800">
            <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-2xl text-white shadow-md">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Dashboard</h3>
            <p className="text-gray-600">
              Interactive dashboard with live analytics and customizable widgets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition relative border-t-4 border-blue-800">
            <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-yellow-500 text-2xl text-white shadow-md">
              <FaUsersCog />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Automation</h3>
            <p className="text-gray-600">
              Automated notifications & reporting reduce manual work by up to 90%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
