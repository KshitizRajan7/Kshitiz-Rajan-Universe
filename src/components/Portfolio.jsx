"use client";
import { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col justify-between">
      {/* Popover panel */}
      <div
        className={`flex-1 mx-5 my-5 mb-27 border-2 border-blue-500 rounded-xl 
          bg-white/10 backdrop-blur-sm text-white p-4 
          transition-all duration-500 flex flex-col items-center gap-6 
          overflow-y-auto
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
          {/* Admin Photo */}
          <img
            src="/profile.jpg"
            alt="photo"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-blue-500 object-cover"
          />

          {/* Welcome Text */}
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <p className="text-lg font-semibold">
              Whats up people, Hello everyone, नमस्ते सबै जना लाई
            </p>
            <p className="text-md">Welcome to Kshitiz Rajan Universe!</p>
            <p className="text-sm leading-relaxed text-white/90">
              I am a Full Stack Developer, Video Editor, Content Creator, Moto Vlogger.
              Explore my projects, videos, blogs, and everything I create to share knowledge and fun!
            </p>
          </div>
        </div>

        {/* Projects / Cards Section */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {/* My Projects */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-blue-500 
            hover:scale-105 transition-transform cursor-pointer">
            <img
              src="/zxc.png"
              alt="Projects"
              className="w-full h-32 sm:h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-white font-semibold">My Projects</h3>
            <p className="text-sm text-white/80">All the projects I worked on.</p>
          </div>

          {/* My Skills */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-blue-500 
            hover:scale-105 transition-transform cursor-pointer">
            <img
              src="/path-to-project2.jpg"
              alt="skills"
              className="w-full h-32 sm:h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-white font-semibold">My Skills</h3>
            <p className="text-sm text-white/80">This guy can work with these technologies.</p>
          </div>

          {/* Latest Video */}
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-blue-500 
            hover:scale-105 transition-transform cursor-pointer">
            <img
              src="/path-to-project3.jpg"
              alt="Project 3"
              className="w-full h-32 sm:h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-white font-semibold">Latest Works</h3>
            <p className="text-sm text-white/80">Projects I am currently working on</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 text-center">
          <p className="text-white/80">You can reach out or check out what I create on:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="https://github.com/YourUsername"
              target="_blank"
              className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/YourUsername"
              target="_blank"
              className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://youtube.com/YourChannel"
              target="_blank"
              className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="mailto:your-email@gmail.com"
              target="_blank"
              className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors"
            >
              <MdEmail size={24} />
            </a>
            <a
              href="https://facebook.com/YourProfile"
              target="_blank"
              className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/YourProfile"
              target="_blank"
              className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Menu button */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 
            border-2 border-blue-500 text-blue-500 rounded-full
            transition-all duration-300 hover:shadow-[0_0_15px_#ffffff] hover:scale-105 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <BsGrid className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
