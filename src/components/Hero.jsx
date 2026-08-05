import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/bouton";
import img from "../assets/back.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { 
  RiReactjsLine,
  RiRobot2Line,
  RiCloudLine
} from "react-icons/ri";

/**
 * Composant Hero - Version Responsive Premium
 * Optimisé pour Mobile, Tablette et Desktop.
 */
export default function Hero() {
  // --- LOGIQUE DYNAMIQUE AJOUTÉE ---
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      console.log("Utilisateur connecté sur la Home:", JSON.parse(savedUser).fullName);
    }
  }, []);
  // ---------------------------------

  const users = [img1, img2, img3];
  const titleWords = "L'avenir s'écrit Avec LunaDev.".split(" ");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-black overflow-hidden py-12 px-6 sm:px-10 md:px-16 lg:px-24">
      
      {/* Background Decor - Subtils cercles de lumière */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          
          {/* TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8"
          >
            <h1 className="text-4xl font-extrabold leading-[1.1] text-slate-200 sm:text-5xl md:text-6xl xl:text-7xl">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={wordVariants}
              className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl"
            >
              Apprenez à concevoir des logiciels modernes et devenez un ingénieur du futur. 
              <span className="font-bold text-blue-500"> plus vite et mieux</span>.
              {/* Message de bienvenue dynamique si connecté */}
              {user && <span className="block mt-4 text-green-400 font-bold">Ravi de vous revoir, {user.fullName} !</span>}
            </motion.p>

            <motion.div
              variants={wordVariants}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <div className="w-full sm:w-auto transform transition-transform hover:scale-105 active:scale-95">
                <Button />
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <div className="flex -space-x-2 shrink-0">
                  {users.map((user, index) => (
                    <img
                      key={index}
                      src={user}
                      alt={`Utilisateur ${index + 1}`}
                      className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                </div>
                <p className="whitespace-nowrap text-[10px] sm:text-xs font-semibold text-slate-400">
                  Rejoignez <span className="text-blue-400">+500</span> innovateurs
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* IMAGE / MAP SECTION */}
          <motion.div
          
            className="relative flex justify-center items-center w-full"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full scale-75 animate-pulse"></div>

            {/* Conteneur Image & Badges */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px]">
              <img
                src={img}
                alt="Innovation Afrique"
                className="w-full h-auto object-contain relative z-10;"
              />

              {/* Badges Dynamiques & Responsives */}
              {/* React Badge */}
              <motion.div 
                
                className="absolute -left-4 top-[15%] sm:-left-8 sm:top-[20%] z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-xl shadow-2xl"
              >
                <RiReactjsLine className="text-sm sm:text-lg text-cyan-400" />
                <span className="text-[9px] sm:text-[11px] font-bold text-white uppercase tracking-wider">React</span>
              </motion.div>

              {/* AI Badge */}
              <motion.div 
               
                className="absolute -right-4 top-[10%] sm:-right-10 sm:top-[15%] z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-xl shadow-2xl"
              >
                <RiRobot2Line className="text-sm sm:text-lg text-green-400" />
                <span className="text-[9px] sm:text-[11px] font-bold text-white uppercase tracking-wider">AI Expert</span>
              </motion.div>

              {/* Cloud Badge */}
              <motion.div 
              
                className="absolute -right-2 bottom-[15%] sm:-right-6 sm:bottom-[20%] z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-xl shadow-2xl"
              >
                <RiCloudLine className="text-sm sm:text-lg text-purple-400" />
                <span className="text-[9px] sm:text-[11px] font-bold text-white uppercase tracking-wider">Cloud</span>
              </motion.div>

              {/* Badge flottant supplémentaire pour mobile */}
              <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 lg:hidden z-20 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md">
                <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Innovation Africaine</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
