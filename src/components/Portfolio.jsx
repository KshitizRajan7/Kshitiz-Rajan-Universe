"use client";
import { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-screen h-fit flex flex-col justify-between">
      {/* Render menu only if open */}
      {open && (
        <div className="flex-1 mx-5 mt-2 mb-2 border border-blue-500/50 rounded-xl justify-center
          bg-white/10 backdrop-blur-sm text-white p-4 flex flex-col items-center gap-4 overflow-y-auto">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
            <img
              src="/profile.jpg"
              alt="photo"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-[0_0_15px_#ffffff]"
            />
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              {/* <p className="text-lg font-semibold">
                Whats up people, Hello everyone, नमस्ते सबै जना लाई
              </p> */}
              <p className="md:text-[30px] text-[16px] font-bold">Welcome to Kshitiz Rajan Universe!</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-white/30 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                  QA-skilled
                </span>
                <span className="bg-white/30 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Full Stack Developer
                </span>
                <span className="bg-white/30 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Video Editor
                </span>
                <span className="bg-white/30 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Content Creator
                </span>
                <span className="bg-white/30 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                  Moto Vlogger
                </span>
                <span className="text-white text-xs italic px-2 py-1">
                  Exploring..
                </span>
              </div>

            </div>
          </div>

        
          {/* Projects / Cards Section */}
          <div className="relative w-full">

            {/* Left Button */}
            <button
              onClick={() => {
                const container = document.getElementById("scrollArea");
                container.scrollBy({ left: -220, behavior: "smooth" });
              }}
              className="
    hidden sm:flex              
    absolute left-2 top-1/2 -translate-y-1/2 z-20
    w-12 h-12 sm:w-14 sm:h-14
    items-center justify-center
    rounded-full
    bg-black backdrop-blur-md
    opacity-30
    text-white text-2xl sm:text-3xl
    shadow-lg
    hover:bg-black/50 hover:opacity-100 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
    transition-all duration-300
    cursor-pointer
  "
            >
              <FaArrowLeft size={20} />
            </button>

            {/* Right Button */}
            <button
              onClick={() => {
                const container = document.getElementById("scrollArea");
                container.scrollBy({ left: 220, behavior: "smooth" });
              }}
              className="
    hidden sm:flex               
    absolute right-2 top-1/2 -translate-y-1/2 z-20
    w-12 h-12 sm:w-14 sm:h-14
    items-center justify-center
    rounded-full
    bg-black backdrop-blur-md
    opacity-50
    text-white text-2xl sm:text-3xl
    shadow-lg
    hover:bg-black/50 hover:opacity-100 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
    transition-all duration-300
    cursor-pointer
  "
            >
              <FaArrowRight size={20} />
            </button>


            {/* Scrollable Cards */}
            <div
              id="scrollArea"
              className="
      flex flex-row flex-nowrap space-x-4 
      overflow-x-auto overflow-y-hidden
      snap-x snap-mandatory snap-center
      scroll-smooth

      p-2
      touch-pan-x
      scroll-pl-4
    "
              style={{
                WebkitOverflowScrolling: "touch", // smooth momentum scrolling on mobile
                scrollBehavior: "smooth",
              }}
            >

              {/* Example Card */}
              {[
                { title: "My Projects", desc: "All the projects I worked on", img: "/projects.png", link: "https://github.com/kshitizrajan7" },
                { title: "My Skills", desc: "This guy can work with these technologies", img: "/skills.png", link: "https://www.linkedin.com/in/kshitiz-rajan-4b7a45344/" },
                { title: "Latest Works", desc: "Projects I am currently working on", img: "/latest.png", link: "https://lnkd.in/eMYAs7E4" },
                // { title: "Contact Me", desc: "Reach out for collaboration", img: "/contact.png", link: "#contact" },
                { title: "Videos", desc: "My latest video uploads", img: "https://www.techspot.com/images2/news/bigimage/2017/04/2017-04-14-image-13-j.webp", link: "https://youtu.be/vAZmftfmIEU?si=heYecFCHRyhabIMM" },
                { title: "Tutorials", desc: "Step-by-step learning guides", img: "https://i0.wp.com/www.themantic-education.com/ibpsych/wp-content/uploads/sites/3/2017/08/bigstock-170524445.jpg?w=900&ssl=1", link: "#tutorials" },
                { title: "Blogs", desc: "Things I learn every day", img: "https://scontent.fktm2-2.fna.fbcdn.net/v/t39.30808-6/497790172_122177972186285759_5872617430011029160_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEKbEbagkVdnKuW-3woOhqUbELWIU00bLJsQtYhTTRssprhgWRSCMKzP68M8zkEdo1Hs0jE6OQSECK49oTgmxKr&_nc_ohc=ToynYu6PJgAQ7kNvwEpS2vp&_nc_oc=AdmOwQqidrijuu7bsq46LqHGIxuMvNFaMqGzMsSVxnsxI7CgR2WY3b9jJs4zt9gSvNI&_nc_zt=23&_nc_ht=scontent.fktm2-2.fna&_nc_gid=HtxquTSTPW1S61v3RgMlSg&oh=00_Aflz61JIV8uDeQPU_hgrk_vNCImVcGBt5bAYY2kI5bAI2g&oe=693F40D4https://scontent.fktm2-2.fna.fbcdn.net/v/t39.30808-6/497790172_122177972186285759_5872617430011029160_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEKbEbagkVdnKuW-3woOhqUbELWIU00bLJsQtYhTTRssprhgWRSCMKzP68M8zkEdo1Hs0jE6OQSECK49oTgmxKr&_nc_ohc=ToynYu6PJgAQ7kNvwEpS2vp&_nc_oc=AdmOwQqidrijuu7bsq46LqHGIxuMvNFaMqGzMsSVxnsxI7CgR2WY3b9jJs4zt9gSvNI&_nc_zt=23&_nc_ht=scontent.fktm2-2.fna&_nc_gid=HtxquTSTPW1S61v3RgMlSg&oh=00_Aflz61JIV8uDeQPU_hgrk_vNCImVcGBt5bAYY2kI5bAI2g&oe=693F40D4", link: "#blogs" },
                // { title: "Challenges", desc: "challenges faced", img: "/challenges.png", link: "#challenges" },
                // { title: "Testimonials", desc: "What people say about me", img: "/testimonials.png", link: "#testimonials" },
              ].map((card, idx) => (
                <a
                  key={idx}
                  href={card.link}
                  target="_blank"
                  className="relative min-w-[250px] lg:w-[380px] snap-center rounded-lg p-4 border border-blue-500/50 hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer overflow-hidden bg-cover bg-center h-38 sm:h-44"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-0 left-0 z-10 text-white bg-black/50 w-full px-3 pb-3">
                    <h3 className="font-semibold text-xl">{card.title}</h3>
                    <p className="text-sm text-white/80">{card.desc}</p>
                  </div>
                </a>
              ))}

            </div>
          </div>




          {/* Social Links */}
          <div className="mt-1 text-center">
            <p className="text-sm text-white/80 mt-2">Connect with me:</p>
            <div className="flex flex-wrap justify-center items-end gap-3 mt-4">
              <a href="https://github.com/kshitizrajan7" target="_blank" className="bg-white/20 p-2 sm:p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://linkedin.com/in/kshitiz-rajan-4b7a45344" target="_blank" className="bg-[#0A66C2] p-2 sm:p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://youtube.com/@KshitizRajan7" target="_blank" className="bg-[#FF0000] p-2 sm:p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:kshitizrajan1234@gmail.com" target="_blank" className="bg-[#188038] p-2 sm:p-3 rounded-full hover:bg-blue-500 transition-colors">
                <MdEmail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://facebook.com/ksitija.rajana" target="_blank" className="bg-[#1877F2] p-2 sm:p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://instagram.com/kshitiz_rajan" target="_blank" className="bg-[#833AB4] p-2 sm:p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

        </div>
      )}

      {/* Menu button */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 
      shadow-[0_0_20px_rgba(59,130,246,0.7)] text-blue-500/50 rounded-full
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
