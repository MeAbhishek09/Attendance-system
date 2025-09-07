export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f2136] to-[#1a202c] py-10 text-center text-white">
      <div className="max-w-7xl mx-auto">
        {/* Logo / Icon */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-800 to-yellow-500 flex items-center justify-center text-3xl">
          🎓
        </div>

        {/* Text Content */}
        <p className="text-lg font-medium mb-2">Advanced Attendance Management System</p>
        <p className="text-sm opacity-80">© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
}
