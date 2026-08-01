import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Code2, Terminal, Database, GitBranch, Sparkles, GraduationCap, 
  Cloud, Zap, TrendingUp, Cpu, ServerCog, HardDrive, Globe, 
  Lock, Lightbulb, Search, ChevronRight, ExternalLink, Menu, X,
  Settings, Info, MessageSquare, ArrowLeft
} from "lucide-react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaAws, FaGithub
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTypescript, SiNextdotjs, SiKubernetes 
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
      
      {/* SIDEBAR */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-900/30">
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
                        onClick={() => setSelectedModule(module)}
                        className={`w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group ${
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
            {/* BACK ARROW BUTTON */}
            <button 
              onClick={() => navigate('/')} 
              className="p-1 hover:bg-slate-800 rounded text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              title="Retour à l'accueil"
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
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Frontend</span>
              {selectedModule && (
                <>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-blue-400 font-bold">{selectedModule.level}</span>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-white lowercase">{selectedModule.title}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="https://devdocs.io/javascript/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
              Source <ExternalLink size={10} />
            </a>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12">
          <AnimatePresence mode="wait">
            {selectedModule ? (
              <motion.article
                key={selectedModule.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-3xl"
              >
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded bg-blue-950 border border-blue-900/50 flex items-center justify-center text-blue-400">
                      {React.createElement(selectedModule.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedModule.title}</h1>
                      <p className="text-xs text-blue-400 font-mono mt-1">level: {selectedModule.level.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <Info size={18} /> Description
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedModule.description}
                    </p>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-blue-400" /> Points clés
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Apprentissage structuré",
                        "Projets pratiques",
                        "Validation des acquis",
                        "Ressources complémentaires"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="h-1 w-1 rounded-full bg-blue-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-white mb-4">Mise en route</h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <div className="text-gray-500 mb-2">// Pour commencer ce module</div>
                      <div><span className="text-blue-400">cd</span> project-directory</div>
                      <div><span className="text-blue-400">npm</span> install</div>
                      <div><span className="text-blue-400">npm</span> run dev</div>
                    </div>
                  </section>

                  <div className="pt-10 flex gap-4">
                    <button
                      onClick={() => navigate(selectedModule.path)}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded transition-all shadow-lg shadow-blue-600/20"
                    >
                      Ouvrir le cours
                    </button>
                    <button className="px-6 py-2.5 border border-blue-900 text-gray-300 text-xs font-bold rounded hover:bg-slate-800 transition-all">
                      Voir sur GitHub
                    </button>
                  </div>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-blue-900/30 flex items-center justify-center mb-6">
                  <GraduationCap size={40} className="text-blue-500/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Frontend Documentation</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Bienvenue dans votre centre de ressources Frontend. Sélectionnez un module pour commencer votre apprentissage.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[FaHtml5, FaCss3Alt, FaJs, FaReact, SiTailwindcss].map((Icon, i) => (
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
