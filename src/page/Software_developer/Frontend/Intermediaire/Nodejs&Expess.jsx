import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Server, Search, ChevronRight, Menu, X,
  Settings, Info, MessageSquare, BookOpen,
  Terminal, ShieldCheck, ArrowLeft,
  Globe, Database, Activity
} from "lucide-react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const lessons = [
  {
    title: "Architecture Node & Express",
    category: "Serveur",
    icon: Server,
    color: "text-green-400",
    course: "Node.js permet d'exécuter du JS côté serveur. Express est le framework standard pour créer des APIs. L'essentiel est de comprendre le cycle requête-réponse et l'asynchronisme (async/await).",
    code: "const express = require('express');\nconst app = express();\n\napp.listen(3000, () => console.log('Serveur prêt'));",
    exercise: "Installez Express et créez un serveur qui écoute sur le port 5000.",
  },
  {
    title: "Routes et Contrôleurs",
    category: "API",
    icon: Globe,
    color: "text-blue-400",
    course: "Les routes définissent les points d'entrée de votre API (GET, POST, PUT, DELETE). Les contrôleurs contiennent la logique métier pour traiter ces requêtes.",
    code: "app.get('/api/users', (req, res) => {\n  res.json({ message: 'Liste des utilisateurs' });\n});",
    exercise: "Créez une route POST '/api/login' qui reçoit un email et un mot de passe.",
  },
  {
    title: "Middlewares et Sécurité",
    category: "Middleware",
    icon: ShieldCheck,
    color: "text-red-400",
    course: "Les middlewares sont des fonctions qui s'exécutent entre la requête et la réponse. Ils sont essentiels pour l'authentification (JWT), la validation de données et la gestion des erreurs.",
    code: "const auth = (req, res, next) => {\n  if (!req.headers.token) return res.status(401).send();\n  next();\n};\n\napp.use(auth);",
    exercise: "Écrivez un middleware qui logue l'URL de chaque requête entrante.",
  },
  {
    title: "Intégration Base de Données",
    category: "Données",
    icon: Database,
    color: "text-amber-500",
    course: "En 2027, on utilise des ORM/Query Builders comme Prisma ou Drizzle pour interagir avec SQL/NoSQL de manière typée et sécurisée.",
    code: "const users = await prisma.user.findMany();\nres.json(users);",
    exercise: "Connectez votre application Express à une base de données SQLite via Prisma.",
  },
];

const categories = ["Serveur", "API", "Middleware", "Données"];

export default function NodeExpressResources() {
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
            <div className="bg-green-700 p-1 rounded text-white">
              <FaNodeJs size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-green-400">Node & Express</span>
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
                <div className="px-4 py-1.5 text-[10px] font-bold text-green-400/70 uppercase tracking-widest flex items-center justify-between">
                  <span>{cat}</span>
                </div>
                <ul className="mt-1">
                  {lessonsByCategory[cat].map((lesson) => (
                    <li key={lesson.title}>
                      <button
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group ${
                          selectedLesson?.title === lesson.title 
                            ? 'bg-blue-900/50 text-white border-l-2 border-green-500' 
                            : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                        }`}
                      >
                        {React.createElement(lesson.icon, { size: 14, className: selectedLesson?.title === lesson.title ? 'text-green-400' : lesson.color })}
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
          <button title="Aide" className="hover:text-green-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-green-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-green-400 transition-colors"><FaGithub size={14} /></button>
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
              <span className="hover:text-green-400 cursor-pointer transition-colors">Node & Express</span>
              {selectedLesson && (
                <>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-green-400 font-bold">{selectedLesson.category}</span>
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
                    <div className={`h-12 w-12 rounded bg-slate-900 border border-blue-900/50 flex items-center justify-center ${selectedLesson.color}`}>
                      {React.createElement(selectedLesson.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedLesson.title}</h1>
                      <p className="text-xs text-green-400 font-mono mt-1">module: {selectedLesson.category.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                      <BookOpen size={18} /> L'essentiel
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedLesson.course}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-green-400" /> Code Pratique
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                    </div>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Activity size={18} className="text-green-300" /> Exercice
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
                  <FaNodeJs size={40} className="text-green-500/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Node & Express Essentials</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Développez des backends performants pour vos applications frontend. Sélectionnez un module pour commencer.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[FaNodeJs, SiExpress, Server, Database].map((Icon, i) => (
                    <Icon key={i} className="text-xl text-gray-700 hover:text-green-400 transition-colors cursor-pointer" />
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
