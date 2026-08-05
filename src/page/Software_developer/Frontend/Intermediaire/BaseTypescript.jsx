import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, ChevronRight, Menu, X,
  Settings, Info, MessageSquare, BookOpen,
  Terminal, Zap, ArrowLeft,
  Braces, Box
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const lessons = [
  {
    title: "Types de Base et Interfaces",
    category: "Fondamentaux",
    icon: Braces,
    color: "text-blue-400",
    course: "TypeScript ajoute une couche de typage statique à JavaScript. L'essentiel est de savoir typer les variables simples et de créer des interfaces pour les objets complexes afin de sécuriser le code.",
    code: "interface User {\n  id: number;\n  name: string;\n  email?: string; // Optionnel\n}\n\nconst user: User = { id: 1, name: 'Manus' };",
    exercise: "Créez une interface 'Product' avec un nom (string), un prix (number) et une catégorie optionnelle.",
  },
  {
    title: "Génériques (Generics)",
    category: "Avancé",
    icon: Box,
    color: "text-indigo-500",
    course: "Les génériques permettent de créer des composants ou des fonctions réutilisables qui fonctionnent avec plusieurs types tout en conservant la sécurité du typage.",
    code: "function wrapInArray<T>(value: T): T[] {\n  return [value];\n}\n\nconst numbers = wrapInArray<number>(5);",
    exercise: "Écrivez une fonction générique qui retourne le premier élément d'un tableau.",
  },
  {
    title: "Utility Types (Partial, Pick, Omit)",
    category: "Productivité",
    icon: Zap,
    color: "text-cyan-500",
    course: "TS fournit des outils pour transformer les types existants. 'Partial' rend tout optionnel, 'Pick' sélectionne des clés, et 'Omit' en retire. Indispensable pour éviter la répétition.",
    code: "type UserUpdate = Partial<User>;\ntype UserPreview = Pick<User, 'name' | 'email'>;",
    exercise: "Utilisez 'Omit' pour créer un type 'NewUser' qui contient tout de 'User' sauf l'ID.",
  },
  {
    title: "TypeScript avec React",
    category: "Pratique",
    icon: SiTypescript,
    color: "text-blue-600",
    course: "Typer les props des composants et les événements est la base du développement React moderne. Cela élimine 90% des erreurs courantes en production.",
    code: "interface Props {\n  title: string;\n  children: React.ReactNode;\n}\n\nconst Layout: React.FC<Props> = ({ title, children }) => ...",
    exercise: "Créez un composant bouton typé acceptant une prop 'variant' restreinte à 'primary' ou 'secondary'.",
  },
];

const categories = ["Fondamentaux", "Avancé", "Productivité", "Pratique"];

export default function TypeScriptResources() {
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
              <SiTypescript size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">TypeScript Mastery</span>
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
            <button 
              onClick={() => navigate('/resourcecourcefrontend')} 
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
              <span className="hover:text-blue-400 cursor-pointer transition-colors">TypeScript</span>
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
                      <BookOpen size={18} /> L'essentiel
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedLesson.course}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-blue-400" /> Code Pratique
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                    </div>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Braces size={18} className="text-blue-300" /> Exercice
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
                  <SiTypescript size={40} className="text-blue-500/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">TypeScript Essentials</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Sécurisez vos applications avec un typage robuste. Sélectionnez un module pour commencer.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[SiTypescript, Braces, Box, Zap].map((Icon, i) => (
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
