import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { 
  Server, Eye, Zap, Layout, Code, Smartphone, 
  Search, ChevronRight, Menu, X,
  Settings, Info, MessageSquare, Sparkles,
  BookOpen, PenTool, Terminal, CheckCircle
} from "lucide-react";
import { FaGithub, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const lessons = [
  {
    title: "Architecture Client / Serveur",
    level: "Concept",
    icon: Server,
    color: "text-cyan-500",
    course: "Lorsque tu visites un site web, ton navigateur (le client) envoie une requête à un serveur. Le serveur traite cette demande puis renvoie une réponse contenant les fichiers HTML, CSS, JavaScript ou des données.",
    code: `Client (Navigateur)
  │
  ▼
Requête HTTP
  │
  ▼
Serveur
  │
  ▼
Réponse (HTML/CSS/JS)
  │
  ▼
Affichage de la page`,
    exercise: "Explique avec tes propres mots le rôle du client et celui du serveur.",
    questions: [
      { question: "Qui envoie la requête ?", answer: "Le client (le navigateur)." },
      { question: "Qui répond à la requête ?", answer: "Le serveur." },
      { question: "Que renvoie généralement le serveur ?", answer: "Des fichiers HTML, CSS, JavaScript ou des données." },
    ],
  },
  {
    title: "Les Navigateurs Web",
    level: "Outils",
    icon: Eye,
    color: "text-green-500",
    course: "Un navigateur est un logiciel permettant d'afficher des pages Web. Les plus connus sont Google Chrome, Firefox, Microsoft Edge et Safari.",
    code: `Google Chrome
Firefox
Microsoft Edge
Safari`,
    exercise: "Installe un navigateur de ton choix puis ouvre https://developer.mozilla.org",
    questions: [
      { question: "Quel est le rôle d'un navigateur ?", answer: "Afficher les pages Web." },
      { question: "Le navigateur comprend-il le HTML ?", answer: "Oui." },
      { question: "Le navigateur exécute-t-il JavaScript ?", answer: "Oui." },
    ],
  },
  {
    title: "HTTP & HTTPS",
    level: "Protocole",
    icon: Zap,
    color: "text-yellow-500",
    course: "HTTP est le protocole utilisé pour communiquer sur le Web. HTTPS est sa version sécurisée qui chiffre les données échangées entre le navigateur et le serveur.",
    code: `GET /index.html HTTP/1.1

200 OK
404 Not Found
500 Internal Server Error`,
    exercise: "Ouvre trois sites Internet et vérifie qu'ils utilisent HTTPS.",
    questions: [
      { question: "Que signifie HTTPS ?", answer: "HTTP sécurisé grâce au chiffrement SSL/TLS." },
      { question: "Que signifie le code 404 ?", answer: "Page introuvable." },
      { question: "Le HTTPS est-il plus sécurisé que HTTP ?", answer: "Oui." },
    ],
  },
  {
    title: "Les fichiers d'un site Web",
    level: "Structure",
    icon: Layout,
    color: "text-indigo-500",
    course: "Un site Web est constitué de plusieurs fichiers. HTML construit la structure, CSS ajoute le design et JavaScript apporte les interactions.",
    code: `index.html (Structure)
style.css  (Design)
script.js  (Interactions)`,
    exercise: "Crée un dossier contenant ces trois fichiers.",
    questions: [
      { question: "Quel fichier contient la structure ?", answer: "HTML." },
      { question: "Quel fichier contient le style ?", answer: "CSS." },
      { question: "Quel fichier contient les interactions ?", answer: "JavaScript." },
    ],
  },
  {
    title: "Les outils du développeur",
    level: "Outils",
    icon: Code,
    color: "text-orange-500",
    course: "Un développeur Web utilise plusieurs outils : VS Code pour écrire le code, Git pour gérer les versions, GitHub pour partager ses projets et Chrome DevTools pour déboguer.",
    code: `VS Code (Éditeur)
Git (Versionnage)
GitHub (Hébergement)
Chrome DevTools (Debug)`,
    exercise: "Installe VS Code et ouvre ton premier dossier de projet.",
    questions: [
      { question: "Quel logiciel permet d'écrire du code ?", answer: "VS Code." },
      { question: "À quoi sert Git ?", answer: "À gérer les versions du projet." },
      { question: "À quoi sert GitHub ?", answer: "À héberger et partager les projets." },
    ],
  },
  {
    title: "Le Responsive Design",
    level: "Design",
    icon: Smartphone,
    color: "text-pink-500",
    course: "Aujourd'hui, un site doit fonctionner sur ordinateur, tablette et téléphone. Le Responsive Design permet d'adapter automatiquement l'affichage.",
    code: `Desktop (1200px+)
   ↓
Tablet (768px)
   ↓
Mobile (320px)`,
    exercise: "Ouvre ton site sur ton téléphone et observe les différences.",
    questions: [
      { question: "Pourquoi rendre un site responsive ?", answer: "Pour qu'il soit utilisable sur tous les écrans." },
      { question: "Quel appareil est le plus utilisé aujourd'hui ?", answer: "Le smartphone." },
    ],
  },
];

const categories = ["Concept", "Protocole", "Structure", "Design", "Outils"];

export default function FondamentauxResources() {

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
      grouped[cat] = filteredLessons.filter(l => l.level === cat);
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
            <div className="bg-blue-600 p-1 rounded text-white">
              <BookOpen size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase">Fondamentaux</span>
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
                            ? 'bg-blue-600 text-white' 
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
          <button title="Aide" className="hover:text-blue-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-blue-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-blue-400 transition-colors"><FaGithub size={14} /></button>
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
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Fondamentaux</span>
              {selectedLesson && (
                <>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-blue-400 font-bold">{selectedLesson.level}</span>
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
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`h-12 w-12 rounded bg-blue-950 border border-blue-900 flex items-center justify-center ${selectedLesson.color}`}>
                      {React.createElement(selectedLesson.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedLesson.title}</h1>
                      <p className="text-xs text-blue-400 font-mono mt-1">type: {selectedLesson.level.toLowerCase()}</p>
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
                      <Terminal size={18} className="text-blue-400" /> Schéma / Code
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                    </div>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-950 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <PenTool size={18} className="text-rose-400" /> Exercice
                    </h2>
                    <p className="text-xs text-gray-400 mb-4">{selectedLesson.exercise}</p>
                    <div className="space-y-4">
                      {selectedLesson.questions.map((q, i) => (
                        <div key={i} className="bg-gray-950/50 border border-blue-900/20 p-3 rounded">
                          <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">Question {i+1}</p>
                          <p className="text-xs text-white mb-2">{q.question}</p>
                          <p className="text-xs text-gray-500 italic flex items-center gap-2">
                            <CheckCircle size={12} className="text-green-500" /> {q.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-blue-950 flex items-center justify-center mb-6">
                  <Sparkles size={40} className="text-blue-400/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Fondamentaux du Web</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Explorez les bases du web moderne à travers nos modules interactifs. Sélectionnez une leçon dans la barre latérale pour commencer.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[FaHtml5, FaCss3Alt, FaJs].map((Icon, i) => (
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
