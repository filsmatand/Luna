import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Code2, Terminal, Database, GitBranch, Sparkles, 
  Cloud, Zap, TrendingUp, Cpu, ServerCog, HardDrive, Globe, 
  Lock, Lightbulb, Search, ChevronRight, ExternalLink, Menu, X,
  Settings, Info, MessageSquare, ArrowLeft,GraduationCap
} from "lucide-react";
import { 
   FaReact,  FaNodeJs,  FaGithub
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTypescript, SiKubernetes 
} from "react-icons/si";

const modules = [
  // Cours Débutant
  {
    title: "Les fondamentaux du Web",
    description: "Comprendre comment fonctionne Internet, les navigateurs et les bases du développement web.",
    icon: Globe,
    level: "Débutant",
    path: "/fondamentaux",
  },
  {
    title: "HTML & CSS Essentiels",
    description: "Créer des pages web structurées et stylisées avec HTML5 et CSS3, incluant le responsive design.",
    icon: Code2,
    level: "Débutant",
    path: "/htmlcss",
  },
  {
    title: "JavaScript Fondamental",
    description: "Apprendre la logique de programmation, les variables, fonctions, conditions et la manipulation du DOM.",
    icon: Terminal,
    level: "Débutant",
    path: "/javascript",
  },
  {
    title: "Git & GitHub pour Débutants",
    description: "Maîtriser le contrôle de version et la collaboration sur des projets de code.",
    icon: GitBranch,
    level: "Débutant",
    path: "/github",
  },
  {
    title: "Introduction aux bases de données",
    description: "Comprendre les concepts clés des bases de données relationnelles et NoSQL.",
    icon: Database,
    level: "Débutant",
    path: "/introbase",
  },
  {
    title: "Tailwind CSS Rapide",
    description: "Développer des interfaces modernes et responsives rapidement avec Tailwind CSS.",
    icon: SiTailwindcss,
    level: "Débutant",
    path: "/tailwindcss",
  },

  // Cours Intermédiaire
  {
    title: "React.js: Composants et Hooks",
    description: "Construire des applications web interactives avec React, ses composants et ses hooks.",
    icon: FaReact,
    level: "Intermédiaire",
    path: "/reactintermediaire",
  },
  {
    title: "Node.js & Express.js",
    description: "Développer des backends robustes et des APIs RESTful avec Node.js et Express.",
    icon: FaNodeJs,
    level: "Intermédiaire",
    path: "/nodejsintermediaire",
  },
  {
    title: "Bases de TypeScript",
    description: "Améliorer la qualité et la maintenabilité du code JavaScript avec TypeScript.",
    icon: SiTypescript,
    level: "Intermédiaire",
    path: "/basetypescript",
  },
  {
    title: "Déploiement Cloud (AWS/Azure)",
    description: "Déployer des applications sur des plateformes cloud comme AWS ou Azure.",
    icon: Cloud,
    level: "Intermédiaire",
    path: "/cloudawsintermediaire",
  },
  {
    title: "API RESTful Design",
    description: "Concevoir et implémenter des APIs RESTful efficaces et sécurisées.",
    icon: Zap,
    level: "Intermédiaire",
    path: "/api-design",
  },
  {
    title: "Sécurité Web Essentielle",
    description: "Apprendre les principes fondamentaux de la sécurité web pour protéger les applications.",
    icon: Lock,
    level: "Intermédiaire",
    path: "/web-security",
  },

  // Cours Expert
  {
    title: "Architecture Microservices",
    description: "Concevoir et implémenter des architectures basées sur les microservices.",
    icon: ServerCog,
    level: "Expert",
    path: "/microservices",
  },
  {
    title: "DevOps & CI/CD",
    description: "Mettre en place des pipelines d'intégration et de déploiement continus avec Docker et Kubernetes.",
    icon: SiKubernetes,
    level: "Expert",
    path: "/devops",
  },
  {
    title: "Machine Learning avec Python",
    description: "Développer des modèles de Machine Learning avec Python, TensorFlow et PyTorch.",
    icon: Cpu,
    level: "Expert",
    path: "/machine-learning",
  },
  {
    title: "Optimisation des Performances Web",
    description: "Techniques avancées pour améliorer la vitesse et la réactivité des applications web.",
    icon: TrendingUp,
    level: "Expert",
    path: "/web-perf",
  },
  {
    title: "Blockchain et Web3",
    description: "Explorer les concepts de la blockchain, des contrats intelligents et du développement Web3.",
    icon: HardDrive,
    level: "Expert",
    path: "/blockchain",
  },
  {
    title: "UI/UX Avancé & Accessibilité",
    description: "Maîtriser les principes d'UI/UX avancés et l'accessibilité pour des interfaces inclusives.",
    icon: Lightbulb,
    level: "Expert",
    path: "/ui-ux-advanced",
  },
];

const levels = ["Débutant", "Intermédiaire", "Expert"];

export default function FrontendDashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Détection de la taille de l'écran pour le responsive
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredModules = useMemo(() => {
    return modules.filter(m => 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const modulesByLevel = useMemo(() => {
    const grouped = {};
    levels.forEach(level => {
      grouped[level] = filteredModules.filter(m => m.level === level);
    });
    return grouped;
  }, [filteredModules]);

  return (
    <div className="flex h-screen bg-gray-950 font-sans text-white overflow-hidden selection:bg-blue-500/30">
      
      {/* OVERLAY POUR MOBILE */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR RESPONSIVE */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? 280 : 0,
          x: isMobile && !isSidebarOpen ? -280 : 0
        }}
        className={`flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden z-40 transition-all duration-300 ${
          isMobile ? 'fixed inset-y-0 left-0 shadow-2xl shadow-blue-900/20' : 'relative'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-900/30 shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1 rounded text-white">
              <Sparkles size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">Frontend Docs</span>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <Settings size={16} />
          </button>
        </div>

        <div className="p-2 bg-gray-950 shrink-0">
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

        <nav className="flex-1 overflow-y-auto custom-scrollbar pb-4">
          {levels.map(level => (
            modulesByLevel[level] && modulesByLevel[level].length > 0 && (
              <div key={level} className="mt-2">
                <div className="px-4 py-1.5 text-[10px] font-bold text-blue-400/70 uppercase tracking-widest flex items-center justify-between">
                  <span>{level}</span>
                  <span className="text-gray-600">{modulesByLevel[level].length}</span>
                </div>
                <ul className="mt-1">
                  {modulesByLevel[level].map((module) => (
                    <li key={module.title}>
                      <button
                        onClick={() => {
                          setSelectedModule(module);
                          if (isMobile) setIsSidebarOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center gap-3 group ${
                          selectedModule?.title === module.title 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                        }`}
                      >
                        {React.createElement(module.icon, { size: 14, className: selectedModule?.title === module.title ? 'text-white' : 'text-gray-500' })}
                        <span className="truncate flex-1">{module.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </nav>

        <div className="p-2 border-t border-blue-900/30 bg-gray-950 flex items-center justify-around text-gray-500 shrink-0">
          <button title="Aide" className="hover:text-blue-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-blue-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-blue-400 transition-colors"><FaGithub size={14} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT RESPONSIVE */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative overflow-hidden">
        <header className="h-12 sm:h-10 border-b border-blue-900/30 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            {/* BACK ARROW BUTTON */}
            <button 
              onClick={() => navigate('/')} 
              className="p-1.5 hover:bg-slate-800 rounded text-blue-400 hover:text-blue-300 transition-colors flex items-center shrink-0"
              title="Retour à l'accueil"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="h-4 w-[1px] bg-blue-900/50 mx-0.5 sm:mx-1 shrink-0"></div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors shrink-0"
            >
              {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            
            {/* Breadcrumbs responsive */}
            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wider truncate">
              <span className="hidden sm:inline hover:text-blue-400 cursor-pointer transition-colors">Frontend</span>
              {selectedModule && (
                <>
                  <ChevronRight size={10} className="text-gray-700 hidden sm:inline" />
                  <span className="text-blue-400 font-bold shrink-0">{selectedModule.level}</span>
                  <ChevronRight size={10} className="text-gray-700" />
                  <span className="text-white lowercase truncate">{selectedModule.title}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] sm:text-[11px] shrink-0 ml-2">
            <a href="https://devdocs.io/javascript/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
              <span className="hidden xs:inline">Source</span> <ExternalLink size={10} />
            </a>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-12">
          <AnimatePresence mode="wait">
            {selectedModule ? (
              <motion.article
                key={selectedModule.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-3xl mx-auto lg:mx-0"
              >
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded bg-blue-950 border border-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                      {React.createElement(selectedModule.icon, { size: 24 })}
                    </div>
                    <div className="min-w-0">
                      <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight truncate">{selectedModule.title}</h1>
                      <p className="text-[10px] sm:text-xs text-blue-400 font-mono mt-1 uppercase tracking-widest">level: {selectedModule.level}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-base sm:text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <Info size={18} /> Description
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {selectedModule.description}
                    </p>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-xl p-4 sm:p-6">
                    <h2 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-blue-400" /> Points clés
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        "Apprentissage structuré",
                        "Projets pratiques",
                        "Validation des acquis",
                        "Ressources complémentaires"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base sm:text-lg font-bold text-white mb-4">Mise en route</h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded-lg p-4 font-mono text-[10px] sm:text-[11px] text-gray-300 overflow-x-auto">
                      <div className="text-gray-500 mb-2">{"// Pour commencer ce module"}</div>
                      <div className="whitespace-nowrap"><span className="text-blue-400">cd</span> project-directory</div>
                      <div className="whitespace-nowrap"><span className="text-blue-400">npm</span> install</div>
                      <div className="whitespace-nowrap"><span className="text-blue-400">npm</span> run dev</div>
                    </div>
                  </section>

                  <div className="pt-10 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => navigate(selectedModule.path)}
                      className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                    >
                      Démarrer le cours
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs font-black uppercase tracking-widest rounded-xl transition-all border border-slate-700 active:scale-95">
                      Documentation
                    </button>
                  </div>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-blue-900/20 rounded-3xl flex items-center justify-center mb-6 border border-blue-500/20">
                  <GraduationCap size={40} className="text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Bienvenue sur Frontend Docs</h2>
                <p className="text-gray-500 text-sm max-w-sm">
                  Sélectionnez un module dans la barre latérale pour commencer votre apprentissage.
                </p>
                {isMobile && !isSidebarOpen && (
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="mt-6 px-6 py-2 bg-blue-600 rounded-full text-xs font-bold text-white"
                  >
                    Ouvrir le menu
                  </button>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
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
        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 0px;
          }
        }
      `}} />
    </div>
  );
}
