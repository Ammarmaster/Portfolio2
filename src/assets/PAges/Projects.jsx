import React from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "ChattApp",
    description:
      "A feature-rich real-time chat app allowing login, private messaging, and smooth real-time interaction using MERN and Socket.io.",
    github: "https://github.com/Ammarmaster/ChattApp",
    live: "https://chatt-app-hv3t-2snzovw9r-ammarmasters-projects.vercel.app/login",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "REST API",
    ],
    features: [
      "User login and authentication",
      "Real-time private chat with Socket.io",
      "JWT-secured routes",
      "Responsive design",
      "Error handling and validation",
    ],
  },
  {
    title: "Real Time Chat App",
    description:
      "A MERN-based real-time chat app with room creation, messaging, and user profiles using Socket.io and JWT.",
    github: "https://github.com/Prodevopz/real-time-chat-app",
    live: "https://your-live-project-link.com",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Real-time messaging via WebSockets",
      "Login/signup with JWT",
      "Private and group chat rooms",
      "User profiles with image and status",
      "Message history storage in MongoDB",
    ],
  },
  {
    title: "Weather App",
    description:
      "Shows live weather based on your location or searched city using OpenWeather API.",
    github: "https://github.com/Prodevopz/mern-portfolio",
    live: "https://climx.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    features: [
      "Location-based weather",
      "City name search",
      "Forecast display (daily/hourly)",
      "Weather-based background changes",
      "Responsive UI for mobile and desktop",
    ],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 md:px-16">
      <h1 className="text-5xl font-extrabold text-center mb-20 text-white tracking-tight">
        🚀 My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">{project.title}</h2>
            <p className="text-gray-300 mb-5">{project.description}</p>

            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 text-white">🛠 Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-yellow-500/10 text-yellow-300 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="text-sm font-semibold mb-2 text-white">✨ Features</h3>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-white text-sm py-2 px-4 rounded-lg text-center font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
