"use client";

import { useState, useRef, useEffect } from "react";
import {
  Phone,
  MessageSquare,
  Camera,
  User,
  Menu,
  X,
  Wifi,
  Bluetooth,
  Volume2,
  Airplay,
  WifiOff,
  MapPin,
  Settings,
  Bell,
  ChevronUp,
  Book,
  Briefcase,
  Award,
  Monitor,
  Youtube,
  Code,
  Layers,
} from "lucide-react";

export default function AndroidHomeScreen() {
  const [openBottomModal, setOpenBottomModal] = useState(false);
  const [closingBottom, setClosingBottom] = useState(false);

  const [openQuickSettings, setOpenQuickSettings] = useState(false);
  const [closingQuickSettings, setClosingQuickSettings] = useState(false);

  const [isMobile, setIsMobile] = useState(true);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - endY;

    if (!openQuickSettings && diff < -50 && touchStartY.current < 80) {
      setOpenQuickSettings(true);
      return;
    }

    if (openQuickSettings && diff > 50) {
      closeQuickSettingsWithAnimation();
      return;
    }

    if (!openBottomModal && diff > 80 && !openQuickSettings) setOpenBottomModal(true);
    else if (openBottomModal && diff < -80) closeBottomModalWithAnimation();
  };

  const closeBottomModalWithAnimation = () => {
    setClosingBottom(true);
    setTimeout(() => {
      setOpenBottomModal(false);
      setClosingBottom(false);
    }, 300);
  };

  const handleDesktopToggle = () => {
    if (openQuickSettings) return;
    if (openBottomModal) closeBottomModalWithAnimation();
    else setOpenBottomModal(true);
  };

  const openQuickSettingsDesktop = () => {
    if (!openQuickSettings) setOpenQuickSettings(true);
  };

  const closeQuickSettingsWithAnimation = () => {
    setClosingQuickSettings(true);
    setTimeout(() => {
      setOpenQuickSettings(false);
      setClosingQuickSettings(false);
    }, 500);
  };

  return (
    <div
      className="w-screen h-screen bg-gradient-to-b from-blue-900 to-black flex flex-col items-center justify-between relative overflow-hidden text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* STATUS BAR */}
      <div className="fixed top-0 w-full flex justify-end items-center px-4 py-2 text-white text-sm z-50">
        <span className="font-semibold text-white mr-auto">12:45</span>
        <div className="flex gap-2 items-center">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
          {!isMobile && !openQuickSettings && (
            <button onClick={openQuickSettingsDesktop}>
              <ChevronUp className="w-6 h-6 text-white rotate-180 ml-2" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE swipe up indicator */}
      {isMobile && !openQuickSettings && (
        <div className="absolute bottom-24 text-white/70 text-sm lg:hidden">Swipe up ↑</div>
      )}

      {/* WALLPAPER */}
      <div className="flex-1 w-full max-w-[600px]"></div>

      {/* BOTTOM DOCK */}
      <div className="fixed bottom-5 w-full max-w-[600px] px-6 py-4 backdrop-blur-xl bg-white/10 rounded-3xl flex justify-around items-center z-20">
        <IconButton icon={<Phone />} label="Phone" />
        <IconButton icon={<MessageSquare />} label="Messages" />
        <IconButton icon={<Camera />} label="Camera" />
        <IconButton icon={<User />} label="Contacts" />

        <div className="hidden lg:block">
          <button onClick={handleDesktopToggle} disabled={openQuickSettings}>
            <IconButton icon={<Menu />} label="Menu" />
          </button>
        </div>
      </div>

      {/* SWIPEABLE FULL MODALS */}
      {openBottomModal && (
        <SwipeableFullModals
          closeModal={closeBottomModalWithAnimation}
          isMobile={isMobile}
          closing={closingBottom}
        />
      )}

      {/* QUICK SETTINGS PANEL */}
      {openQuickSettings && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-35"></div>
          <div className="fixed inset-0 z-40 flex justify-center items-start pointer-events-auto">
            <div
              className={`absolute top-0 left-0 w-full h-screen bg-white/10 text-white p-4 shadow-lg overflow-y-auto
                ${closingQuickSettings ? "animate-slideUpTop" : "animate-slideDownTop"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-16">
                <div className="flex justify-between items-center mb-4 px-2">
                  <div>
                    <div className="text-sm font-medium">Thursday, 11 December 2025</div>
                  </div>
                  <Settings className="w-6 h-6" />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 px-2">
                  <QuickAction icon={<Wifi />} label="Wi-Fi" />
                  <QuickAction icon={<Bluetooth />} label="Bluetooth" />
                  <QuickAction icon={<Volume2 />} label="Sound" />
                  <QuickAction icon={<Airplay />} label="Flight" />
                  <QuickAction icon={<WifiOff />} label="Hotspot" />
                  <QuickAction icon={<MapPin />} label="Location" />
                </div>

                <div className="mb-4 px-2">
                  <input type="range" min="0" max="100" className="w-full h-2 rounded-lg accent-white" />
                </div>

                <div className="flex items-center gap-2 mb-2 px-2 font-medium">
                  <Bell className="w-5 h-5" /> <span>2 New Notifications</span>
                </div>
                <div className="bg-white/20 p-2 rounded-lg text-black/80 mb-2 px-2">
                  Message from Alice
                </div>
                <div className="bg-white/20 p-2 rounded-lg text-black/80 px-2">
                  System Update Available
                </div>
              </div>
            </div>

            {!isMobile && (
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                <button
                  onClick={closeQuickSettingsWithAnimation}
                  className="text-white hover:text-gray-300 transition-transform duration-700"
                >
                  <ChevronUp className="w-6 h-6 animate-bounce" />
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ICON BUTTON
function IconButton({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">{icon}</div>
      <span className="text-xs text-white/80">{label}</span>
    </div>
  );
}

// QUICK ACTION
function QuickAction({ icon, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-3 bg-white/20 rounded-2xl">
      {icon}
      <span className="text-xs">{label}</span>
    </div>
  );
}

// FULL SCREEN MODAL CONTAINER
function SwipeableFullModals({ closeModal, isMobile, closing }) {
  const containers = [
    <PersonalSection key={1} />,
    <ProfessionalSection key={2} />,
    <ProjectsSection key={3} />,
  ];

  const totalPages = containers.length;
  const [currentPage, setCurrentPage] = useState(0);

  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50 && currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    if (diff < -50 && currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goLeft = () => currentPage > 0 && setCurrentPage(currentPage - 1);
  const goRight = () => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-30"
      onClick={isMobile ? closeModal : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[90%] h-[90%] flex overflow-hidden 
        ${closing ? "animate-slideDown" : "animate-slideUp"}`}
      >
        {!isMobile && (
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-30"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {currentPage > 0 && !isMobile && (
          <button
            onClick={goLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full z-20"
          >
            ←
          </button>
        )}
        {currentPage < totalPages - 1 && !isMobile && (
          <button
            onClick={goRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full z-20"
          >
            → 
          </button>
        )}

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full h-full flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {containers.map((container, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              {container}
            </div>
          ))}
        </div>

        {/* Page dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {containers.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === currentPage ? "bg-white" : "bg-white/40"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

// PERSONAL SECTION WITH 70% MODAL MENU
function PersonalSection() {
  const personalItems = [
    { label: "Resume", icon: Book, color: "bg-red-400" },
    { label: "Contact", icon: MessageSquare, color: "bg-blue-400" },
    { label: "Social Profiles", icon: User, color: "bg-green-400" },
    { label: "Timeline", icon: Layers, color: "bg-purple-400" },
    { label: "Hobbies", icon: Award, color: "bg-yellow-400" },
    { label: "Projects Overview", icon: Monitor, color: "bg-pink-400" },
  ];

  const [activeModal, setActiveModal] = useState(null);

  const contactItems = [
    { label: "Gmail", link: "mailto:example@gmail.com", color: "bg-red-500" },
    { label: "WhatsApp", link: "https://wa.me/9779812345678", color: "bg-green-500" },
  ];

  const socialItems = [
    { label: "Facebook", link: "https://facebook.com", color: "bg-blue-600" },
    { label: "Instagram", link: "https://instagram.com", color: "bg-pink-500" },
    { label: "LinkedIn", link: "https://linkedin.com", color: "bg-blue-700" },
    { label: "GitHub", link: "https://github.com", color: "bg-black" },
    { label: "Discord", link: "https://discord.com", color: "bg-purple-500" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center bg-white/10 text-white p-6 overflow-y-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-white/20 mb-2 flex items-center justify-center text-2xl font-bold">KR</div>
        <h2 className="text-xl font-bold mb-1">Kshitiz Rajan</h2>
        <p className="text-sm text-white/80 text-center">
          Full Stack Developer with MERN expertise and AI integrations. Passionate about building seamless web applications.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full">
        {personalItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => setActiveModal(item.label)}
              className={`flex flex-col items-center p-4 rounded-2xl ${item.color}`}
            >
              <div className="mb-2 w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs text-white text-center">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white/10 p-6 rounded-2xl text-white w-[70vw] h-[70vh] flex flex-col items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/20 hover:bg-white/30"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full h-full place-items-center">
              {activeModal === "Resume" && (
                <iframe src="/resume.pdf" className="w-full h-full border rounded-lg" />
              )}
              {activeModal === "Contact" &&
                contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    className={`flex flex-col items-center justify-center ${item.color} w-20 h-20 sm:w-24 sm:h-24 rounded-lg text-white`}
                  >
                    {item.label}
                  </a>
                ))}
              {activeModal === "Social Profiles" &&
                socialItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    className={`flex flex-col items-center justify-center ${item.color} w-20 h-20 sm:w-24 sm:h-24 rounded-lg text-white`}
                  >
                    {item.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// PROFESSIONAL SECTION
function ProfessionalSection() {
  const professionalItems = [
    { label: "Skills", icon: Monitor, color: "bg-blue-400" },
    { label: "Experience", icon: Briefcase, color: "bg-green-400" },
    { label: "Education", icon: Book, color: "bg-purple-400" },
    { label: "Certificates", icon: Award, color: "bg-red-400" },
    { label: "Achievements", icon: Award, color: "bg-yellow-400" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center bg-white/10 text-white p-6 overflow-y-auto">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-xl font-bold mb-1">Professional Overview</h2>
        <p className="text-sm text-white/80 text-center">
          Experienced Full Stack Developer specialized in MERN stack and building scalable web applications.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full">
        {professionalItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className={`flex flex-col items-center p-4 rounded-2xl ${item.color}`}>
              <div className="mb-2 w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs text-white text-center">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// PROJECTS SECTION
function ProjectsSection() {
  const projectItems = [
    { label: "Featured Project", icon: Monitor, color: "bg-blue-400" },
    { label: "All Projects", icon: Layers, color: "bg-green-400" },
    { label: "AI Projects", icon: Code, color: "bg-purple-400" },
    { label: "YouTube Demos", icon: Youtube, color: "bg-red-400" },
    { label: "Case Studies", icon: Book, color: "bg-yellow-400" },
  ];

  const banners = ["/banner1.jpg","/banner2.jpg","/banner3.jpg"];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentBanner((prev) => (prev + 1) % banners.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center bg-white/10 text-white p-6 overflow-y-auto">
      {/* Top Carousel */}
      <div className="w-full mb-4 overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
          {banners.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-full h-40 bg-white/20 flex items-center justify-center text-white text-lg font-bold">
              Banner {idx + 1}
            </div>
          ))}
        </div>
        <p className="text-sm text-white/80 mt-2 text-center">
          Explore my projects, AI integrations, and video demos
        </p>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-3 gap-4 w-full mt-4">
        {projectItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className={`flex flex-col items-center p-4 rounded-2xl ${item.color}`}>
              <div className="mb-2 w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs text-white text-center">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
