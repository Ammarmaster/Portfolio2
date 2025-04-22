import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl bg-gray-900 p-10 rounded-2xl shadow-2xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        
        <form className="space-y-8">
          <div>
            <label className="block text-lg mb-2 text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-6 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-300">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full px-6 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-white text-black hover:bg-gray-300 transition-all font-semibold rounded-lg shadow-md"
          >
            Send Message
          </button>
          <br />
          <br />
        </form>

        {/* Social Media Links Section with more padding and margin */}
        <div className="mt-16 flex justify-center space-x-16">
          <a
            href="tel:+1234567890"
            className="text-white hover:text-gray-400"
            title="Call Me"
            aria-label="Call"
          >
            <FaPhoneAlt size={35} />
          </a>
          <a
            href="mailto:ammarmasterbusiness@gmail.com"
            className="text-white hover:text-gray-400"
            title="Email Me"
            aria-label="Email"
          >
            <FaEnvelope size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammadjalaluddin-master-984130260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://www.instagram.com/prodevopz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            title="Instagram"
            aria-label="Instagram"
          >
            <FaInstagram size={35} />
          </a>
          <a
            href="https://www.youtube.com/c/Prodevopz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            title="YouTube"
            aria-label="YouTube"
          >
            <FaYoutube size={35} />
          </a>
          <a
            href="https://github.com/Ammarmaster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub size={35} />
          </a>
          <br /><br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
