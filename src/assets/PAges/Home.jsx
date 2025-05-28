import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-10"
      >
        Welcome to Prodevopz
      </motion.h1>

      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.05}
        className="w-full md:w-[500px] bg-gradient-to-tr from-emerald-900 via-black to-emerald-700 rounded-3xl shadow-lg p-6"
      >
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-xl text-gray-300 mb-4">
            👋 Hello, I’m <span className="text-yellow-400 font-bold">Md Jalaluddin</span>, also known as{" "}
            <span className="text-pink-400 font-bold">Prodevopz</span>.
          </p>
          <p className="text-gray-400 mb-4">
            I'm a passionate full-stack developer creating modern, responsive, and intuitive web and mobile experiences.
          </p>
          <Link
            to="/Projects"
            className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg"
          >
            View My Projects
          </Link>
        </motion.div>
      </Tilt>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-sm text-gray-500"
      >
        Scroll down for more ↓
      </motion.div>
    </div>
  );
}
