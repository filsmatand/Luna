import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { 
  Layout, PenTool, Code, Smartphone, Eye, 
  Search, ChevronRight,  Menu, X,
  Settings, Info, MessageSquare,  BookOpen, 
  Terminal,
} from "lucide-react";
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";

const lessons = [
  {
    title: "Structure d’une page HTML",
    category: "HTML",
    icon: Layout,
    color: "text-orange-500",
    course: "HTML5 définit la structure. Une page commence par <!DOCTYPE html>, suivie de <html>, <head> (métadonnées) et <body> (contenu visible).",
    code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Ma Page</title>\n</head>\n<body>\n  <h1>Bonjour le monde</h1>\n</body>\n</html>`,
    exercise: "Créez un fichier index.html avec la structure de base et ouvrez-le dans votre navigateur.",
  },
  {
    title: "Les balises essentielles",
    category: "HTML",
    icon: PenTool,
    color: "text-green-500",
    course: "Les balises sémantiques comme <header>, <nav>, <main>, <footer> et les balises de contenu comme <h1>, <p>, <a>, <img> sont la base du SEO et de l'accessibilité.",
    code: `<main>\n  <article>\n    <h2>Titre de l'article</h2>\n    <p>Contenu textuel...</p>\n    <a href='#'>Lire la suite</a>\n  </article>\n</main>`,
    exercise: "Listez 5 balises HTML que vous utiliseriez pour créer un blog.",
  },
  {
    title: "Premiers pas en CSS",
    category: "CSS",
    icon: Code,
    color: "text-cyan-500",
    course: "CSS (Cascading Style Sheets) gère la présentation. On utilise des sélecteurs pour appliquer des propriétés (color, margin, font-size) aux éléments HTML.",
    code: `h1 {\n  color: #2563eb;\n  font-size: 2rem;\n  text-align: center;\n}`,
    exercise: "Changez la couleur de fond de votre page HTML en bleu ciel en utilisant du CSS interne.",
  },
  {
    title: "Le CSS Box Model",
    category: "CSS",
    icon: Layout,
    color: "text-blue-500",
    course: "Tous les éléments HTML sont des boîtes. Chaque boîte possède un contenu (content), un espace intérieur (padding), une bordure (border) et un espace extérieur (margin). Comprendre le Box Model est indispensable pour créer des interfaces propres.",
    code: `.card {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #ddd;\n  margin: 20px;\n}`,
    exercise: "Crée une carte avec une marge de 30px, un padding de 20px et une bordure noire.",
  },
  {
    title: "Accessibilité et Responsive Design",
    category: "Responsive",
    icon: Smartphone,
    color: "text-indigo-500",
    course: "Le Web doit être accessible à tous. Le responsive design utilise les Media Queries pour adapter l'affichage selon la taille de l'écran (mobile, tablette, desktop).",
    code: `@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}`,
    exercise: "Testez le mode 'Responsive' dans les outils de développement de votre navigateur sur votre site préféré.",
  },
  {
    title: "Mini-projet : Ma première page Web",
    category: "Projet",
    icon: Eye,
    color: "text-rose-500",
    course: "C'est l'heure de tout assembler ! Créez une page de profil personnel incluant une photo, une bio et des liens vers vos réseaux sociaux.",
    code: `<!-- Combinez HTML pour la structure et CSS pour le style -->\n<section class='profile-card'>\n  <img src='photo.jpg' alt='Ma Photo'>\n  <h1>Mon Nom</h1>\n</section>`,
    exercise: "Publiez votre mini-projet sur une plateforme comme GitHub Pages ou Netlify.",
  },
];

const categories = ["HTML", "CSS", "Responsive", "Projet"];

export default function HtmlCssResources() {

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
        className="flex flex-col border-r border-blue-950 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-950">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1 rounded text-white">
              <FaHtml5 size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-orange-500">HTML & CSS</span>
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
              className="w-full bg-slate-800 border border-blue-900/50 rounded py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          {categories.map(cat => (
            lessonsByCategory[cat].length > 0 && (
              <div key={cat} className="mt-2">
                <div className="px-4 py-1.5 text-[10px] font-bold text-orange-400/70 uppercase tracking-widest flex items-center justify-between">
                  <span>{cat}</span>
                </div>
                <ul className="mt-1">
                  {lessonsByCategory[cat].map((lesson) => (
                    <li key={lesson.title}>
                      <button
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group ${
                          selectedLesson?.title === lesson.title 
                            ? 'bg-orange-600 text-white' 
                            : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                        }`}
                      >
                        {React.createElement(lesson.icon, { size: 14, className: selectedLesson?.title === lesson.title ? 'text-white' : lesson.color })}
                        <span className="truncate flex-1">{lesson.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </nav>

        <div className="p-2 border-t border-blue-950 bg-gray-950 flex items-center justify-around text-gray-500">
          <button title="Aide" className="hover:text-orange-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-orange-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-orange-400 transition-colors"><FaGithub size={14} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative">
        <header className="h-10 border-b border-blue-950 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
              <span className="hover:text-orange-400 cursor-pointer transition-colors">HTML & CSS</span>
              {selectedLesson && (
                <>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-orange-400 font-bold">{selectedLesson.category}</span>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-3xl"
              >
                <div className="border-b border-orange-900/30 pb-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`h-12 w-12 rounded bg-orange-950 border border-orange-900 flex items-center justify-center ${selectedLesson.color}`}>
                      {React.createElement(selectedLesson.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedLesson.title}</h1>
                      <p className="text-xs text-orange-400 font-mono mt-1">type: {selectedLesson.category.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                      <BookOpen size={18} /> Cours Essentiel
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedLesson.course}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-orange-400" /> Code Exemple
                    </h2>
                    <div className="bg-gray-900 border border-orange-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                    </div>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-950 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <PenTool size={18} className="text-rose-400" /> Exercice Pratique
                    </h2>
                    <div className="bg-gray-950/50 border border-orange-900/20 p-4 rounded text-xs text-gray-300 leading-relaxed">
                      {selectedLesson.exercise}
                    </div>
                  </section>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-blue-950 flex items-center justify-center mb-6">
                  <FaHtml5 size={40} className="text-orange-500/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">HTML & CSS Documentation</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Apprenez à structurer et styliser vos pages web. Sélectionnez un module dans la barre latérale pour commencer l'exploration.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[FaHtml5, FaCss3Alt, Smartphone, Layout].map((Icon, i) => (
                    <Icon key={i} className="text-xl text-gray-700 hover:text-orange-400 transition-colors cursor-pointer" />
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
