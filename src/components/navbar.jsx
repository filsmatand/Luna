import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo4.png"
import { Menu, X, ChevronDown, User, Map, Layout, Server, Layers } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const roadmapRef = useRef(null);
  
   const navigate = useNavigate();

  const Showlogin = () => {
    navigate("/register");
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roadmapRef.current && !roadmapRef.current.contains(event.target)) {
        setRoadmapOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menus = [
    { name: "HOME", path: "/" },
    { name: "EXERCICES", path: "/question" },
    { name: "COURS", path: "/cours" },
  ];

  const roadmapLinks = [
    { name: "Frontend", path: "/roadmapfrontend", icon: <Layout size={16} />, desc: "Client-side & UI" },
    { name: "Backend", path: "/roadmapbackend", icon: <Server size={16} />, desc: "Server & Databases" },
    { name: "Full Stack", path: "/roadmapfullstack", icon: <Layers size={16} />, desc: "End-to-end Systems" },
  ];

  return (
    <motion.nav
      
      className="w-full bg-slate-950 z-50 relative">

      <div className="mx-auto bg-slate-950 relative h-16 max-w-full px-4 md:px-24 backdrop-blur-xl shadow-[0_8px_4px_rgba(0,0,0,0.02)] flex items-center justify-between border-b border-white/5">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center -ml-4 md:ml-8">
            <img
              src={logo}
              alt="Maarifa"
              className="w-auto h-24 md:h-32 lg:h-32 object-contain transition-transform duration-300"
            />
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="text-xs text-white flex items-center gap-8 font-bold">
            {menus.map((menu) => (
              <li key={menu.path}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `transition duration-300 hover:text-blue-500 ${
                      isActive ? "text-blue-500" : "text-white"
                    }`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}

            {/* ROADMAP DROPDOWN */}
            <li className="relative" ref={roadmapRef}>
              <button
                onClick={() => setRoadmapOpen(!roadmapOpen)}
                className={`flex items-center gap-1 transition duration-300 hover:text-blue-500 font-bold ${
                  roadmapOpen ? "text-blue-500" : "text-white"
                }`}
              >
                ROADMAP <ChevronDown size={14} className={`transition-transform duration-300 ${roadmapOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {roadmapOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-4 w-64 bg-slate-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-2 z-[60]"
                  >
                    <div className="grid gap-1">
                      {roadmapLinks.map((link) => (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          onClick={() => setRoadmapOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            {link.icon}
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-white group-hover:text-blue-400 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium">
                              {link.desc}
                            </div>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                    <div className="mt-2 p-3 bg-blue-500/5 border-t border-white/5">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                        <Map size={12} /> Explore all paths
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>

        {/* DESKTOP ACTION */}
        <div className="hidden lg:flex items-center gap-5 lg:px-20">
          <button className="text-[10px] font-black text-slate-400 hover:text-white transition tracking-widest">FR / EN</button>
          <button onClick={Showlogin} className="bg-white text-black text-xs font-black px-6 py-2.5 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 shadow-lg shadow-white/5">
            CONNEXION
          </button>
          <button className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 hover:border-blue-500/50 hover:text-blue-400 transition-all flex items-center justify-center text-slate-400">
            <User size={18} />
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-slate-950 border-b border-white/5 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {menus.map((menu) => (
                <NavLink
                  key={menu.path}
                  to={menu.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-bold text-white py-2"
                >
                  {menu.name}
                </NavLink>
              ))}
              
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Roadmaps</p>
                <div className="grid gap-4">
                  {roadmapLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-sm font-bold text-slate-300"
                    >
                      <span className="text-blue-500">{link.icon}</span>
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <button  onClick={Showlogin} className="w-full bg-white text-black font-black py-4 rounded-2xl">
                  CONNEXION
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
