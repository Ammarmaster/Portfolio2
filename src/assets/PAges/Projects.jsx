import React from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Real Time Chat App",
    description: "A real-time chat application built using the MERN stack that enables instant messaging, group chats, authentication, and notifications.",
    github: "https://github.com/Prodevopz/real-time-chat-app",
    live: "https://your-live-project-link.com", // Replace with actual live project URL
    skills: [
      "MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT", 
      "HTML", "Tailwind CSS", "CSS", "JavaScript", "RESTful API", "Git"
    ],
    features: [
      "Real-time Messaging using Socket.io",
      "JWT-based User Authentication",
      "Private and Group Chat support",
      "Real-time Notifications",
      "Chat History stored in MongoDB",
      "Customizable User Profiles",
    ],
  },
  {
    title: "Weather App",
    description: "Shows current weather using your location or city name with detailed data and a beautiful UI.",
    github: "https://github.com/Prodevopz/mern-portfolio",
    live: "https://climx.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "OpenWeatherApi"],
    features: [
      "Live Weather via Location and City Name",
      "Temperature, Wind, Humidity display",
      "Celsius/Fahrenheit toggle",
      "Forecast view",
      "Weather-based background and icons",
      "Mobile-responsive design",
      "City search with error handling",
      "Save favorite cities",
    ],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-8">
      <h1 className="text-5xl font-extrabold text-center mb-16">🚀 My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-gray-600/40 transition-transform transform hover:-translate-y-2"
          >
            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3">🔧 Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white text-xs px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3">🌟 Key Features:</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-700 text-white font-medium py-3 rounded-lg hover:bg-gray-600 text-center flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-600 text-white font-medium py-3 rounded-lg hover:bg-gray-500 text-center"
                >
                  View Live Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
