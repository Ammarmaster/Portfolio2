import React from 'react';

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-black h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-emerald-400 font-bold text-xl sm:text-2xl underline hover:text-cyan-500 mb-4">
          <a href="#about">ABOUT</a>
        </h1>
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          MD <span className="text-emerald-300">Jalaluddin</span> Master
        </h1>
        <div className="mt-8 flex flex-col items-center">
          <h3 className="text-amber-50 text-sm sm:text-base">Scroll Down</h3>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="bg-emerald-700 min-h-screen px-4 py-10">
        <h1
          id="about"
          className="text-emerald-50 text-center font-extrabold text-2xl sm:text-3xl hover:text-black mb-10"
        >
          ABOUT
        </h1>

        <div className="text-center space-y-8">
          <h3 className="font-bold text-2xl sm:text-4xl md:text-5xl text-blue-100">
            Hey, I am a BCA Student from RCUB University
          </h3>
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-neutral-900">
            Software Developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
