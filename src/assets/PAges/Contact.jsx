import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-gray-900 p-6 sm:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        
        <form className="space-y-8">
          <div>
            <label className="block text-lg mb-2 text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-white text-black hover:bg-gray-300 transition-all font-semibold rounded-lg shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <a href="tel:+1234567890" className="hover:text-gray-400" title="Call Me"><FaPhoneAlt size={30} /></a>
          <a href="mailto:ammarmasterbusiness@gmail.com" className="hover:text-gray-400" title="Email Me"><FaEnvelope size={30} /></a>
          <a href="https://www.linkedin.com/in/mohammadjalaluddin-master-984130260" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title="LinkedIn"><FaLinkedin size={30} /></a>
          <a href="https://www.instagram.com/prodevopz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title="Instagram"><FaInstagram size={30} /></a>
          <a href="https://www.youtube.com/c/Prodevopz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title="YouTube"><FaYoutube size={30} /></a>
          <a href="https://github.com/Ammarmaster" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title="GitHub"><FaGithub size={30} /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
