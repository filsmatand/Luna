import React from "react";
import { motion } from "framer-motion";
import Button from "../components/bouton";
import img from "../assets/back.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { 
  RiReactjsLine,
  RiCodeSSlashLine,
  RiRobot2Line,
  RiCloudLine
} from "react-icons/ri";

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
    <section className="mx-auto w-full max-w-full relative   min-h-[70vh] flex items-center overflow-hidden bg-black px-8 py-6 sm:px-8  md:px-20">
      
      {/* Éléments de design d'arrière-plan (subtils/techno) */}

      <div className="mx-auto max-w-7xl md:w-full  md:px-20  relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          
          {/* TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 text-left" >

            <h1 className="  lg:-mt-20 text-4xl font-extrabold  leading-[1.1] text-slate-200 sm:text-5xl md:text-6xl lg:text-6xl">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={`inline-block mr-[0.2em] ${
                    word === "Afrique." ? "text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-700/80" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={wordVariants}
              className="mt-8 max-w-xl text-lg leading-relaxed text-slate-500 md:text-xl">
              Apprenez à concevoir des logiciels modernes et devenez un ingénieur du futur. 
              <span className="font-semibold text-blue-900"> plus vite et mieux</span>.
            </motion.p>

            <motion.div
              variants={wordVariants}
              className="mt-5 flex items-center gap-2"
            >
              <div className="transform transition-transform hover:bg-slate-950 ">
                <Button />
              </div>
              
              {/* Ajout d'un indicateur de confiance/social proof subtil */}
             <div className="flex items-center gap-3 min-w-max">

              {/* Images */}
              <div className="flex -space-x-2 shrink-0">
                {users.map((user, index) => (
                  <img
                    key={index}
                    src={user}
                    alt={`Utilisateur ${index + 1}`}
                    className="h-8 w-8 rounded-full border-2 border-slate-900 object-cover"
                  />
                ))}
              </div>


          {/* Texte */}
          <p className="whitespace-nowrap text-sm font-medium text-slate-500">
            Rejoignez{" "}
            <span className="font-bold text-blue-900">
              +500
            </span>{" "}
            innovateurs
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
              className="absolute inset-0 -z-10 flex items-center justify-center blur-3xl">
              
            </motion.div>

            {/* Conteneur de l'image avec bordure lumineuse animée */}
            <div className="relative p-4">
              {/* L'anneau lumineux qui suit le contour (conceptuel via filtre drop-shadow) */}
              {/* <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(3, 5, 99, 0.3))",
                    "drop-shadow(0 0 25px rgba(44, 74, 241, 0.91))",
                    "drop-shadow(0 0 10px rgba(28, 2, 88, 0.3))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                // ici doit contenenir l'image
                
              </motion.div> */}

              <img
                  src={img}
                  alt="Innovation Afrique"
                  className="relative  w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain transform transition-all duration-500"
                />


             {/* Badges statiques */}

            <div className="absolute z-5 -left-5 top-24 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-xl shadow-lg">
              <RiReactjsLine className="text-xs text-cyan-400" />
              <span className="text-xs font-medium text-white">
                React
              </span>
            </div>


            <div className="absolute -right-10 top-24 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-xl shadow-lg">
              <RiRobot2Line className="text-xs text-green-400" />
              <span className="text-xs font-medium text-white">
                Artificial Intelligence
              </span>
            </div>


            {/* <div className="absolute -left-5 bottom-28 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-lg">
              <RiCodeSSlashLine className="text-xl text-blue-400" />
              <span className="text-sm font-medium text-white">
                Software Engineering
              </span>
            </div> */}


            <div className="absolute -right-5 bottom-24 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-lg">
              <RiCloudLine className="text-xl text-purple-400" />
              <span className="text-sm font-medium text-white">
                Cloud
              </span>
            </div>


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
