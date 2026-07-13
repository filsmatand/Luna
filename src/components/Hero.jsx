import React from "react";
import { motion } from "framer-motion";
import Button from "../components/bouton";
import img from "../assets/af5.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

/**
 * Composant Hero - Version Premium & Innovation Africaine
 * Caractéristiques : 
 * - Animation de texte mot par mot
 * - Carte de l'Afrique avec contour lumineux animé (glow)
 * - Arrière-plan technologique subtil
 */
export default function Hero() {

  const users = [img1, img2, img3];
  // Variantes pour l'animation du titre (mot par mot)
  const titleWords = "L'Innovation De Demain Commence Ici En Afrique.".split(" ");
  
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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-16">
      
      {/* Éléments de design d'arrière-plan (subtils/techno) */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-100 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 h-64 w-64 rounded-full bg-orange-50 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 text-left"
          >
            {/* Badge optionnel pour le professionnalisme */}
            <motion.span 
              variants={wordVariants}
              className="mb-6 inline-block  rounded-lg bg-indigo-50 px-4 py-1.5 text-sm font-bold tracking-wider text-indigo-600 uppercase"
            >
              L'avenir technologique du continent
            </motion.span>

            <h1 className="text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={`inline-block mr-[0.2em] ${
                    word === "Afrique." ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={wordVariants}
              className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              Apprenez l’essentiel sur la technologie, du niveau débutant à expert, 
              et découvrez comment utiliser l’intelligence artificielle pour créer 
              <span className="font-semibold text-slate-900"> plus vite et mieux</span>.
            </motion.p>

            <motion.div
              variants={wordVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="transform transition-transform hover:scale-105 active:scale-95">
                <Button />
              </div>
              
              {/* Ajout d'un indicateur de confiance/social proof subtil */}
              <div className="flex items-center gap-3 pl-2">
                <div className="flex -space-x-3">
                  {users.map((user, index) => (
                    <img
                      key={index}
                      src={user}
                      alt={`Utilisateur ${index + 1}`}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-md transition-transform duration-300 hover:z-10 hover:scale-110"
                    />
                  ))}
                </div>

                <p className="text-sm font-medium text-slate-500">
                  Rejoignez <span className="font-bold text-slate-900">+500</span> innovateurs
                </p>
              </div>

            </motion.div>
          </motion.div>

          {/* IMAGE / MAP SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* EFFET DE LUMIÈRE (GLOW) AUTOUR DE LA CARTE */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 -z-10 flex items-center justify-center blur-3xl"
            >
              <div className="h-3/4 w-3/4 rounded-full bg-gradient-to-tr from-orange-400/40 to-indigo-500/30"></div>
            </motion.div>

            {/* Conteneur de l'image avec bordure lumineuse animée */}
            <div className="relative p-4">
              {/* L'anneau lumineux qui suit le contour (conceptuel via filtre drop-shadow) */}
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(249, 115, 22, 0.3))",
                    "drop-shadow(0 0 25px rgba(247, 202, 4, 0.91))",
                    "drop-shadow(0 0 10px rgba(249, 115, 22, 0.3))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={img}
                  alt="Innovation Afrique"
                  className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain transform transition-all duration-500"
                />
              </motion.div>

              {/* Décoration supplémentaire : petits cercles de connexion */}
              {/* <div className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-orange-500 animate-ping"></div>
              <div className="absolute bottom-1/3 left-1/4 h-2 w-2 rounded-full bg-indigo-500 animate-ping [animation-delay:1s]"></div> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
