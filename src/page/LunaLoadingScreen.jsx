import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * LunaLoadingScreen - Version "Aesthetic Photo"
 * Forme : Croissant de lune volumineux orienté à droite, fidèle à la photo.
 * Animation : Remplissage liquide très lent (10s) et complet.
 */
export default function LunaLoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Chargement très lent : 0 à 100% en 10 secondes (100ms par %)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100); 

    if (progress === 100) {
      const timer = setTimeout(() => {
        navigate("/"); // Remplacez par votre route d'accueil
      }, 1200);
      return () => clearTimeout(timer);
    }

    return () => clearInterval(interval);
  }, [progress, navigate]);

  // Tracé SVG d'un croissant volumineux orienté à droite (Waxing Crescent)
  // Basé sur l'esthétique de la photo fournie.
  // Le dos (convexe) est à gauche, le creux (concave) est à droite.
  const crescentPath = "M 50 5 A 45 45 0 0 0 50 95 A 32 45 0 0 1 50 5 Z";

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] font-sans text-white overflow-hidden">
      
      {/* CONTENEUR DU CROISSANT DE LUNE VOLUMINEUX */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-16">
        
        {/* SVG POUR LE DESSIN ET LE MASQUAGE */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]">
          <defs>
            {/* Masque de découpe pour la forme exacte de la photo */}
            <clipPath id="crescentMask">
              <path d={crescentPath} />
            </clipPath>
          </defs>

          {/* SILHOUETTE DE FOND (Lueur très faible) */}
          <path 
            d={crescentPath} 
            fill="rgba(255,255,255,0.05)" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="0.5"
          />

          {/* GROUPE MASQUÉ POUR LE LIQUIDE BLANC */}
          <g clipPath="url(#crescentMask)">
            {/* LE LIQUIDE QUI MONTE LENTEMENT */}
            <motion.g
              initial={{ y: 100 }}
              animate={{ y: 100 - progress }}
              transition={{ ease: "linear", duration: 0.1 }}
            >
              {/* CORPS DU LIQUIDE BLANC PUR */}
              <rect x="0" y="0" width="100" height="100" fill="white" />
              
              {/* EFFET DE VAGUES LÉGÈRES */}
              <motion.path
                d="M-100 0 Q-75 -4 -50 0 T0 0 T50 0 T100 0 T150 0 T200 0 V20 H-100 Z"
                fill="white"
                animate={{ x: [-100, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.path
                d="M-100 0 Q-75 -6 -50 0 T0 0 T50 0 T100 0 T150 0 T200 0 V20 H-100 Z"
                fill="rgba(255,255,255,0.3)"
                animate={{ x: [0, -100] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                style={{ y: -1 }}
              />
            </motion.g>
          </g>
        </svg>

        {/* AURA LUMINEUSE ÉVOLUTIVE */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute inset-0 rounded-full bg-white/5 blur-[60px] -z-10"
        />
      </div>

      {/* TITRE MINIMALISTE HAUT DE GAMME */}
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 3 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[8px] md:text-[9px] font-extralight uppercase text-white tracking-[1.2em] mb-2">
            Luna
          </h2>
          <h1 className="text-[10px] md:text-[12px] font-medium uppercase text-white tracking-[0.6em]">
            Development
          </h1>
        </motion.div>

        {/* PROGRESSION DISCRÈTE */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-32 h-[1px] bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              className="absolute inset-0 bg-white/20 origin-left"
            />
          </div>
          <span className="text-[7px] font-mono text-white/10 uppercase tracking-[0.5em]">
            {progress}%
          </span>
        </div>
      </div>

      {/* AMBIANCE STELLAIRE PROFONDE */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 4 + Math.random() * 5,
              delay: Math.random() * 10
            }}
            className="absolute w-px h-px bg-white"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500&display=swap');
        body { background-color: #020617; margin: 0; cursor: wait; }
      `}} />
    </div>
  );
}
