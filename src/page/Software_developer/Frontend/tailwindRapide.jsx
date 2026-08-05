import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Layout, Search, ChevronRight, Menu, X,
  Settings, Info, MessageSquare, BookOpen,
  Terminal, Zap, Smartphone, Palette, MousePointer2, ArrowLeft
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const lessons = [
  {
    title: "Le Concept Utility-First",
    category: "Concepts",
    icon: Zap,
    color: "text-blue-400",
    course: "Contrairement aux frameworks traditionnels qui donnent des composants tout faits, Tailwind donne des classes utilitaires de bas niveau. Vous assemblez vos styles directement dans votre HTML sans quitter votre fichier.",
    code: "<!-- Avec Tailwind -->\n<button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\">\n  Valider\n</button>",
    exercise: "Créez un bouton avec un fond bleu, du texte blanc, et des coins arrondis en utilisant uniquement des classes Tailwind.",
  },
  {
    title: "Mise en page et Espacement",
    category: "Layout",
    icon: Layout,
    color: "text-indigo-500",
    course: "Tailwind simplifie Flexbox et Grid. Tout repose sur une échelle numérique cohérente : 'p-4' (padding), 'm-2' (marge), 'gap-4' (espace entre éléments).",
    code: "// Grid responsive\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n  <div>Carte 1</div>\n  <div>Carte 2</div>\n  <div>Carte 3</div>\n</div>",
    exercise: "Créez une grille qui affiche 1 colonne sur mobile et 2 colonnes sur tablette (md).",
  },
  {
    title: "Responsive Design",
    category: "Responsive",
    icon: Smartphone,
    color: "text-cyan-500",
    course: "Tailwind suit une approche Mobile-First. Vous définissez le style de base pour mobile, puis ajoutez des préfixes (sm:, md:, lg:, xl:) pour les écrans plus larges.",
    code: "<div class=\"w-full md:w-1/2 lg:w-1/3 bg-slate-800\">\n  Adaptatif selon la taille d'écran\n</div>",
    exercise: "Faites en sorte qu'une image soit masquée sur mobile (hidden) et visible sur bureau (md:block).",
  },
  {
    title: "États et Interactivité",
    category: "Interactivité",
    icon: MousePointer2,
    color: "text-blue-600",
    course: "Appliquez des styles conditionnels via des préfixes d'état comme 'hover:', 'focus:', ou 'active:'. Utilisez 'transition' pour animer ces changements.",
    code: "<button class=\"bg-slate-700 hover:bg-slate-600 transition-colors\">\n  Survol interactif\n</button>",
    exercise: "Créez un champ de saisie (input) qui change de couleur de bordure lorsqu'il reçoit le focus.",
  },
];

const categories = [
  "Concepts",
  "Layout",
  "Responsive",
  "Interactivité"
];

export default function TailwindResources() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const filteredLessons = useMemo(() => {
    return lessons.filter(l =>
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.course.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const lessonsByCategory = useMemo(() => {
    const grouped = {};
    categories.forEach(cat => {
      grouped[cat] = filteredLessons.filter(l => l.category === cat);
    });
    return grouped;
  }, [filteredLessons]);

  return (
    <div className="flex h-screen bg-gray-950 font-sans text-white overflow-hidden selection:bg-blue-500/30">
      
      {/* SIDEBAR */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-900/30">
          <div className="flex items-center gap-2">
            <div className="bg-blue-800 p-1 rounded text-white">
              <SiTailwindcss size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">Tailwind CSS</span>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <Settings size={16} />
          </button>
        </div>

        <div className="p-2 bg-gray-950">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-blue-900/20 rounded py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          {categories.map(cat => (
            lessonsByCategory[cat] && lessonsByCategory[cat].length > 0 && (
              <div key={cat} className="mt-2">
                <div className="px-4 py-1.5 text-[10px] font-bold text-blue-400/70 uppercase tracking-widest flex items-center justify-between">
                  <span>{cat}</span>
                </div>
                <ul className="mt-1">
                  {lessonsByCategory[cat].map((lesson) => (
                    <li key={lesson.title}>
                      <button
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group ${
                          selectedLesson?.title === lesson.title 
                            ? 'bg-blue-900/50 text-white border-l-2 border-blue-500' 
                            : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                        }`}
                      >
                        {React.createElement(lesson.icon, { size: 14, className: selectedLesson?.title === lesson.title ? 'text-blue-400' : lesson.color })}
                        <span className="truncate flex-1">{lesson.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </nav>

        <div className="p-2 border-t border-blue-900/30 bg-gray-950 flex items-center justify-around text-gray-500">
          <button title="Aide" className="hover:text-blue-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-blue-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-blue-400 transition-colors"><FaGithub size={14} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative">
        <header className="h-10 border-b border-blue-900/30 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            {/* NEW BACK ARROW BUTTON */}
            <button 
              onClick={() => navigate('/dashboard')} // Navigate back to the main dashboard
              className="p-1 hover:bg-slate-800 rounded text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              title="Retour au tableau de bord"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="h-4 w-[1px] bg-blue-900/50 mx-1"></div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Tailwind CSS</span>
              {selectedLesson && (
                <>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-blue-400 font-bold">{selectedLesson.category}</span>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-white lowercase">{selectedLesson.title}</span>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12">
          <AnimatePresence mode="wait">
            {selectedLesson ? (
              <motion.article
                key={selectedLesson.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-3xl"
              >
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`h-12 w-12 rounded bg-blue-950 border border-blue-900/50 flex items-center justify-center ${selectedLesson.color}`}>
                      {React.createElement(selectedLesson.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedLesson.title}</h1>
                      <p className="text-xs text-blue-400 font-mono mt-1">module: {selectedLesson.category.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <BookOpen size={18} /> Cours Essentiel
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedLesson.course}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-blue-400" /> Exemple de Classes
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                    </div>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Palette size={18} className="text-blue-300" /> Exercice Pratique
                    </h2>
                    <div className="bg-gray-950/50 border border-blue-900/20 p-4 rounded text-xs text-gray-300 leading-relaxed">
                      {selectedLesson.exercise}
                    </div>
                  </section>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-blue-900/30 flex items-center justify-center mb-6">
                  <SiTailwindcss size={40} className="text-blue-500/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Tailwind CSS Documentation</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Construisez des interfaces modernes rapidement sans quitter votre HTML. Sélectionnez un module dans la barre latérale pour commencer.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[SiTailwindcss, Layout, Smartphone, Palette].map((Icon, i) => (
                    <Icon key={i} className="text-xl text-gray-700 hover:text-blue-400 transition-colors cursor-pointer" />
                  ))}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}} />
    </div>
  );
}
