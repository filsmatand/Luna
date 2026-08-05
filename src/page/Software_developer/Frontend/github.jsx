import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  PenTool,
  Search, ChevronRight, Menu, X,
  Settings, Info, MessageSquare, BookOpen,
  Terminal,  GitBranch, GitPullRequest, GitMerge, Database, Globe
} from "lucide-react";
import { FaGithub, FaGitAlt } from "react-icons/fa";

const lessons = [
  // Introduction à Git
  {
    title: "Qu'est-ce que Git ?",
    category: "Introduction à Git",
    icon: GitBranch,
    color: "text-blue-500",
    course: "Git est un système de contrôle de version distribué (DVCS) gratuit et open source. Il permet de suivre les modifications du code, de collaborer efficacement et de conserver un historique complet de votre projet.",
    code: "# Vérifier si Git est installé\ngit --version",
    exercise: "Installez Git sur votre machine et vérifiez la version installée dans votre terminal.",
  },
  {
    title: "Installation et Configuration",
    category: "Introduction à Git",
    icon: Settings,
    color: "text-indigo-500",
    course: "Pour commencer, configurez votre identité. Ces informations seront associées à chacun de vos commits pour identifier l'auteur des modifications.",
    code: "git config --global user.name \"Votre Nom\"\ngit config --global user.email \"votre.email@example.com\"",
    exercise: "Configurez votre nom d'utilisateur et votre email dans votre environnement Git local.",
  },
  {
    title: "Commandes de Base (init, add, commit)",
    category: "Introduction à Git",
    icon: Terminal,
    color: "text-blue-400",
    course: "Le cycle de base : 'init' pour créer un dépôt, 'add' pour préparer les fichiers (staging), et 'commit' pour enregistrer les modifications dans l'historique.",
    code: "git init\ngit add .\ngit commit -m \"Message descriptif\"",
    exercise: "Créez un nouveau dossier, initialisez un dépôt Git, créez un fichier et effectuez votre premier commit.",
  },
  // Travailler avec les Dépôts
  {
    title: "Branches et Fusions",
    category: "Travailler avec les Dépôts",
    icon: GitMerge,
    color: "text-cyan-500",
    course: "Les branches permettent de travailler sur des fonctionnalités isolées. Une fois le travail terminé, on fusionne (merge) la branche dans la branche principale.",
    code: "git checkout -b feature-nouvelle-page\n# ... modifications ...\ngit checkout main\ngit merge feature-nouvelle-page",
    exercise: "Créez une branche nommée 'test-feature', faites une modification, et fusionnez-la dans 'main'.",
  },
  {
    title: "Historique et Annulation",
    category: "Travailler avec les Dépôts",
    icon: Database,
    color: "text-blue-600",
    course: "Git permet d'explorer l'historique avec 'log' et d'annuler des erreurs avec 'reset' ou 'revert'. C'est votre filet de sécurité ultime.",
    code: "git log --oneline\ngit revert <commit-hash>\ngit reset --hard HEAD~1",
    exercise: "Affichez l'historique de vos commits et essayez d'annuler le dernier commit de manière sécurisée.",
  },
  // Introduction à GitHub
  {
    title: "Qu'est-ce que GitHub ?",
    category: "Introduction à GitHub",
    icon: FaGithub,
    color: "text-slate-400",
    course: "GitHub est une plateforme web qui héberge vos dépôts Git. Elle ajoute une couche collaborative puissante : Pull Requests, Issues, et Actions.",
    code: "# GitHub est une interface web, pas seulement une CLI\n# Mais vous interagissez avec via Git",
    exercise: "Créez un compte sur GitHub.com si ce n'est pas déjà fait.",
  },
  {
    title: "Cloner et Pousser (clone, push)",
    category: "Introduction à GitHub",
    icon: Globe,
    color: "text-blue-300",
    course: "Pour lier votre travail local à GitHub, utilisez 'clone' pour récupérer un projet et 'push' pour envoyer vos commits vers le serveur distant.",
    code: "git clone https://github.com/user/repo.git\ngit push origin main",
    exercise: "Créez un dépôt vide sur GitHub et poussez votre projet local vers celui-ci.",
  },
  // Collaboration sur GitHub
  {
    title: "Pull Requests (PR)",
    category: "Collaboration sur GitHub",
    icon: GitPullRequest,
    color: "text-blue-500",
    course: "La Pull Request est le cœur de la collaboration. C'est une demande formelle pour fusionner votre code, permettant la revue par les pairs avant intégration.",
    code: "# 1. Push la branche\ngit push origin feature-branch\n# 2. Ouvrir la PR sur l'interface GitHub",
    exercise: "Ouvrez une Pull Request sur un dépôt de test pour simuler une revue de code.",
  },
  {
    title: "Gestion des Conflits",
    category: "Collaboration sur GitHub",
    icon: X,
    color: "text-red-400",
    course: "Un conflit survient quand deux personnes modifient la même ligne. Git vous demande alors de choisir manuellement quelle version conserver.",
    code: "<<<<<<< HEAD\nMon code\n=======\nCode de l'autre\n>>>>>>> branch-name",
    exercise: "Provoquez volontairement un conflit de fusion et résolvez-le dans votre éditeur de code.",
  },
];

const categories = [
  "Introduction à Git",
  "Travailler avec les Dépôts",
  "Introduction à GitHub",
  "Collaboration sur GitHub"
];

export default function GithubResources() {

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
              <FaGitAlt size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">Git & GitHub</span>
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
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Git & GitHub</span>
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
                      <BookOpen size={18} /> Concepts Clés
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedLesson.course}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-blue-400" /> Terminal / Code
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                    </div>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <PenTool size={18} className="text-blue-300" /> Exercice Pratique
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
                  <FaGitAlt size={40} className="text-blue-500/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Git & GitHub Documentation</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Maîtrisez le contrôle de version et la collaboration moderne. Sélectionnez un module dans la barre latérale pour commencer.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[FaGitAlt, FaGithub, GitBranch, GitMerge].map((Icon, i) => (
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
