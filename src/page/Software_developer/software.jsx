import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../Software_developer/assets/img1.png";
import img2 from "../Software_developer/assets/img2.png";
import img3 from "../Software_developer/assets/img3.png";
import {
  Sprout,
  Rocket,
  Crown,
  ChevronRight,
  Target
} from "lucide-react";

/**
 * ImpactSection - Version Professionnelle
 * - Mise en page asymétrique et moderne
 * - Composition d'images flottantes avec animations parallaxes
 * - Cartes de sélection de niveau interactives
 * - Typographie soignée et hiérarchisée
 */
export default function ImpactSection() {
  const navigate = useNavigate();

  const handleGo = (path) => {
    navigate(path);
  };

  const levels = [
    {
      title: "Débutant",
      subtitle: "Construire les bases",
      icon: <Sprout size={22} />,
      color: "emerald",
      path: "/Debutant",
      description: "Idéal pour ceux qui partent de zéro."
    },
    {
      title: "Intermédiaire",
      subtitle: "Approfondir les acquis",
      icon: <Rocket size={22} />,
      color: "amber",
      path: "/Intermediaire",
      description: "Passez à la vitesse supérieure."
    },
    {
      title: "Expert",
      subtitle: "Maîtrise totale",
      icon: <Crown size={22} />,
      color: "violet",
      path: "/Expert",
      description: "Devenez un leader technique."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white  sm:py-6">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-slate-50 opacity-50 blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT: VISUAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Main Orbit Circle */}
            <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-slate-200"
              />
              
              {/* Image 1 (Large - Center) */}
              <motion.div
                
                className="z-20 h-48 w-48 overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-2xl sm:h-64 sm:w-64"
              >
                <img src={img1} alt="Learning" className="h-full w-full rounded-[2rem] object-cover" />
              </motion.div>

              {/* Image 2 (Medium - Top Right) */}
              <motion.div
                className="absolute -right-4 top-10 z-30 h-28 w-28 overflow-hidden rounded-3xl bg-white p-1.5 shadow-xl sm:h-36 sm:w-36"
              >
                <img src={img3} alt="Progress" className="h-full w-full rounded-2xl object-cover" />
              </motion.div>

              {/* Image 3 (Small - Bottom Left) */}
              <motion.div
               
                className="absolute -left-6 bottom-10 z-30 h-24 w-24 overflow-hidden rounded-full bg-white p-1.5 shadow-lg sm:h-32 sm:w-32"
              >
                <img src={img2} alt="Success" className="h-full w-full rounded-full object-cover" />
              </motion.div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-10 z-40 flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-white shadow-xl">
                <Target size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Objectif Carrière</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT & SELECTION */}
          <div className="flex flex-col text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                Parcours Personnalisé
              </span>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-4xl leading-[1.1]">
                Identifiez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">niveau actuel</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">
                Que vous soyez curieux de découvrir le code ou prêt à maîtriser des architectures complexes, 
                nous avons le chemin tracé pour votre réussite.
              </p>
            </motion.div>

            {/* Level Cards */}
            <div className="mt-12 grid gap-4 sm:grid-cols-1">
              {levels.map((level, index) => (
                <motion.button
                  key={level.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleGo(level.path)}
                  className={`group relative flex items-center gap-6 overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-5 text-left transition-all duration-300 hover:border-${level.color}-200 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1`}
                >
                  {/* Icon Container */}
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-${level.color}-50 text-${level.color}-600 transition-colors group-hover:bg-${level.color}-600 group-hover:text-white`}>
                    {level.icon}
                  </div>

                  {/* Text Container */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">{level.title}</h3>
                      <ChevronRight size={18} className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-slate-900" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">{level.subtitle}</p>
                    <p className="mt-1 text-xs text-slate-400 hidden sm:block">{level.description}</p>
                  </div>

                  {/* Hover Background Decor */}
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-${level.color}-50 opacity-0 transition-opacity group-hover:opacity-50`}></div>
                </motion.button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
