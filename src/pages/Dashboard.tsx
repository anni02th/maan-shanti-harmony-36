import React from "react";

const Dashboard = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background animate-fade-in">
    <img src="/public/meditation.png" alt="Dashboard" className="w-40 h-40 mb-6 animate-bounce" />
    <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
      <div className="bg-white/80 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Upcoming Sessions</h2>
        <ul>
          <li>CBT with Dr. A. Sharma - 14 Aug, 10:00 AM</li>
        </ul>
      </div>
      <div className="bg-white/80 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Affirmations</h2>
        <p>You are strong. You are capable. You are not alone.</p>
      </div>
      <div className="bg-white/80 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
        <ul className="space-y-1">
          <li><a href="/journal" className="text-blue-600 underline">Journaling</a></li>
          <li><a href="/content" className="text-blue-600 underline">Content Library</a></li>
          <li><a href="/courses" className="text-blue-600 underline">Courses</a></li>
          <li><a href="/profile" className="text-blue-600 underline">Profile</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dashboard;
