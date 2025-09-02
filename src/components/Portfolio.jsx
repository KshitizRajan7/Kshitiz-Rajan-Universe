"use client";
import { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen flex flex-col justify-between">
      {/* Render menu only if open */}
      {open && (
        <div className="flex-1 mx-5 my-5 mb-27 border border-blue-500/50 rounded-xl 
          bg-white/10 backdrop-blur-sm text-white p-4 flex flex-col items-center gap-6 overflow-y-auto">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
            <img
              src="/profile.jpg"
              alt="photo"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-[0_0_15px_#ffffff]"
            />
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
            <a href="https://github.com/kshitizrajan7" target="_blank" className="relative rounded-lg p-4 border border-blue-500/50 hover:scale-105 transition-transform duration-400 cursor-pointer overflow-hidden bg-[url('/projects.png')] bg-cover bg-center h-64 sm:h-72 hover:shadow-[0_0_15px_#ffffff]">
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 z-10 text-white bg-black/50 w-full">
                <div className="px-3 pb-3">
                  <h3 className="font-semibold text-xl">My Projects</h3>
                  <p className="text-sm text-white/80">All the projects I worked on.</p>
                </div>
              </div>
            </a>
            {/* My Skills */}
            <a href="https://www.linkedin.com/in/kshitiz-rajan-4b7a45344/" target="_blank" className="relative rounded-lg p-4 border border-blue-500/50 hover:scale-105 transition-transform duration-400 cursor-pointer overflow-hidden bg-[url('/skills.png')] bg-cover bg-center h-64 sm:h-72 hover:shadow-[0_0_15px_#ffffff]">
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 z-10 text-white bg-black/50 w-full">
                <div className="px-3 pb-3">
                  <h3 className="font-semibold text-xl">My Skills</h3>
                  <p className="text-sm text-white/80">This guy can work with these technologies.</p>
                </div>
              </div>
            </a>
            {/* Latest Video */}
            <a href="https://lnkd.in/eMYAs7E4" target="_blank" className="relative rounded-lg p-4 border border-blue-500/50 hover:scale-105 transition-transform duration-400 cursor-pointer overflow-hidden bg-[url('/latest.png')] bg-cover bg-center h-64 sm:h-72 hover:shadow-[0_0_15px_#ffffff]">
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 z-10 text-white bg-black/50 w-full">
                <div className="px-3 pb-3">
                  <h3 className="font-semibold text-xl">Latest Works</h3>
                  <p className="text-sm text-white/80">Projects I am currently working on</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 text-center">
            <p className="text-white/80">You can reach out or check out what I create on:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="https://github.com/kshitizrajan7" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/kshitiz-rajan-4b7a45344" target="_blank" className="bg-[#0A66C2] p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://youtube.com/@KshitizRajan7" target="_blank" className="bg-[#FF0000] p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaYoutube size={24} />
              </a>
              <a href="mailto:kshitizrajan1234@gmail.com" target="_blank" className="bg-[#188038] p-3 rounded-full hover:bg-blue-500 transition-colors">
                <MdEmail size={24} />
              </a>
              <a href="https://facebook.com/ksitija.rajana" target="_blank" className="bg-[#1877F2] p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/kshitiz_rajan" target="_blank" className="bg-[#833AB4] p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Menu button */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 
             shadow-[0_0_20px_rgba(59,130,246,0.7)] text-blue-500 rounded-full
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
