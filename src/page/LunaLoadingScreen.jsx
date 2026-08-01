import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * LunaLoadingScreen - Page de chargement pour Luna Development
 * Effet : Une lune qui se remplit d'un liquide blanc lumineux.
 */
export default function LunaLoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulation du chargement : de 0 à 100% en 4 secondes
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    // Redirection une fois le chargement terminé
    if (progress === 100) {
      const timer = setTimeout(() => {
        navigate("/dashboard"); // Remplacez par votre route de destination
      }, 500);
      return () => clearTimeout(timer);
    }

    return () => clearInterval(interval);
  }, [progress, navigate]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 font-sans text-white overflow-hidden">
      
      {/* CONTENEUR DE LA LUNE */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
        
        {/* LUNE DE FOND (VIDE) */}
        <div className="absolute inset-0 rounded-full border-2 border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]"></div>
        
        {/* LUNE QUI SE REMPLIT (MASQUE) */}
        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/20">
          
          {/* LIQUIDE (EAU BLANCHE) */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: (100 - progress) + "%" }}
            transition={{ ease: "linear", duration: 0.1 }}
            className="absolute inset-0 bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          >
            {/* EFFET DE VAGUE SUR LE DESSUS DU LIQUIDE */}
            <motion.div 
              animate={{ 
                x: ["-25%", "0%"],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                x: { repeat: Infinity, duration: 2, ease: "linear" },
                rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
              className="absolute -top-4 left-[-50%] w-[200%] h-8 bg-white rounded-[40%] opacity-90"
            />
            <motion.div 
              animate={{ 
                x: ["0%", "-25%"],
                rotate: [0, -2, 2, 0]
              }}
              transition={{ 
                x: { repeat: Infinity, duration: 3, ease: "linear" },
                rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
              className="absolute -top-6 left-[-50%] w-[200%] h-10 bg-white/50 rounded-[45%] opacity-50"
            />
          </motion.div>
        </div>

        {/* LUEUR EXTÉRIEURE DYNAMIQUE */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-[-20px] rounded-full bg-white/5 blur-3xl -z-10"
        />
      </div>

      {/* TEXTE ET PROGRESSION */}
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase mb-2"
        >
          Luna <span className="text-white/50">Development</span>
        </motion.h1>
        
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: (progress - 100) + "%" }}
              className="absolute inset-0 bg-white"
            />
          </div>
          <span className="text-[10px] font-mono text-white/40 tracking-widest">
            {progress}%
          </span>
        </div>
      </div>

      {/* DÉTAILS DÉCORATIFS (ÉTOILES) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: Math.random() }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3 }}
          className="absolute w-[1px] h-[1px] bg-white rounded-full"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
      `}} />
    </div>
  );
}
