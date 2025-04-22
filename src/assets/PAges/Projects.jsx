import React from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Real Time Chat App",
    description: "A real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to send instant messages, create chat rooms, and engage in real-time conversations with their peers.",
    github: "https://github.com/Prodevopz/real-time-chat-app", // Update GitHub link
    live: "https://your-live-project-link.com", // Replace with actual live project URL
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT (JSON Web Tokens)",
      "HTML",
      "TailWind CSS",
      "CSS",
      "JavaScript",
      "RESTful API",
      "Git"
    ],
    features: [
      "Real-time Messaging: Instant communication between users using WebSockets (Socket.io).",
      "User Authentication: Secure login and registration with JWT (JSON Web Tokens).",
      "Private and Group Chats: Create private conversations or public chat rooms.",
      "Message Notifications: Receive real-time notifications for new messages.",
      "Message History: Store and retrieve past messages from MongoDB",
      "User Profiles: Each user has a customizable profile with a display picture and status",
    ],
  },
  {
    title: "Weather App",
    description: "Shows the Weather By Accessing Your Location and Also By Entering the City Name",
    github: "https://github.com/Prodevopz/mern-portfolio",
    live: "https://climx.netlify.app/", // Replace with actual live project URL
    skills: ["HTML", "CSS", "JavaScript", "OpenWeatherApi"],
    features: [
      "Display current weather based on user location",
      "Search for weather by city name",
      "Show temperature, humidity, wind speed, and weather conditions",
      "Switch between Celsius and Fahrenheit",
      "Hourly and weekly weather forecast",
      "Responsive design for mobile and desktop",
      "User-friendly interface with interactive elements",
      "Weather icons based on conditions (e.g., sunny, rainy, cloudy)",
      "Use of external weather API for real-time data",
      "Background image based on the current weather condition",
      "Error handling for invalid city names",
      "Save favorite cities for quick access"
    ],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-8">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-white">
        🚀 My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-gray-600/40 transition-transform transform hover:-translate-y-2"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-white mb-3">🔧 Skills:</h3>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white text-xs px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-white mb-3">🌟 Key Features:</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => window.open(project.github, "_blank")}
                className="w-full bg-gray-700 text-white font-medium py-3 rounded-lg hover:bg-gray-600 flex items-center justify-center gap-3"
              >
                <Github className="w-5 h-5" /> Visit GitHub
              </button>

              <button
                onClick={() => window.open(project.live, "_blank")}
                className="w-full bg-gray-600 text-white font-medium py-3 rounded-lg hover:bg-gray-500"
              >
                View Live Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
