import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search,CheckCircle2,  Trophy, 
  Target,  ThumbsUp, Eye, 
  Globe, Terminal,Info, MessageSquare, 
  Settings, Menu, X, Code2, Rocket, ArrowRight
} from "lucide-react";

/**
 * LunaTechInterview - Version Responsive Premium
 * Style harmonisé avec LunaResourcesCenter.
 * Design : Dark, Glassmorphism, Gradients, Sidebar interactive.
 */
// BASE DE DONNÉES D'EXERCICES
const questions = [
  { id: 1, title: "Centrer une Div en 2027", subtitle: "CSS Moderne - Flexbox/Grid", difficulty: 'Facile', language: 'CSS', type: 'Design', company: 'Apple', likes: 12000, views: 45000, solved: true },
  { id: 2, title: "Inverser une chaîne de caractères", subtitle: "Algorithme de base JS", difficulty: 'Facile', language: 'JavaScript', type: 'Programmation', company: 'Google', likes: 8500, views: 32000, solved: true },
  { id: 3, title: "Créer un hook de minuterie personnalisé", subtitle: "React State & A11y", difficulty: 'Moyen', language: 'React.js', type: 'Composant', company: 'Microsoft', likes: 9200, views: 28000, solved: false },
  { id: 7, title: "Implémenter la fonction Debounce", subtitle: "Optimisation Performance", difficulty: 'Moyen', language: 'JavaScript', type: 'Programmation', company: 'Google', likes: 23000, views: 88000, solved: true },
  { id: 11, title: "Flatten a Deeply Nested Array", subtitle: "Recursion Masterclass", difficulty: 'Moyen', language: 'JavaScript', type: 'Programmation', company: 'Google', likes: 42000, views: 134000, solved: true },
  { id: 14, title: "Mini Clone de Google Calendar", subtitle: "Complex UI & Data Sync", difficulty: 'Difficile', language: 'React.js', type: 'Architecture', company: 'Google', likes: 25000, views: 95000, solved: false },
  { id: 16, title: "Système de Virtual Scrolling", subtitle: "Performance de listes massives", difficulty: 'Difficile', language: 'React.js', type: 'Architecture', company: 'Meta', likes: 22000, views: 76000, solved: true },
  { id: 21, title: "Apple Home App UI Clone", subtitle: "Glassmorphism & Gestures", difficulty: 'Difficile', language: 'CSS', type: 'Design', company: 'Apple', likes: 28000, views: 110000, solved: false },
  { id: 23, title: "Meta News Feed Optimization", subtitle: "Infinite Scroll & Caching", difficulty: 'Difficile', language: 'React.js', type: 'Architecture', company: 'Meta', likes: 31000, views: 125000, solved: true },
  { id: 24, title: "Microsoft Teams Chat Architecture", subtitle: "WebSockets & Real-time", difficulty: 'Difficile', language: 'Node.js', type: 'Backend', company: 'Microsoft', likes: 24000, views: 88000, solved: false },
  { id: 29, title: "Apple Music Player (SwiftUI to React)", subtitle: "State & Audio API", difficulty: 'Difficile', language: 'React.js', type: 'Composant', company: 'Apple', likes: 26000, views: 92000, solved: false },
  { id: 30, title: "Google Maps Marker Clustering", subtitle: "Geo-spatial Algorithms", difficulty: 'Difficile', language: 'JavaScript', type: 'Programmation', company: 'Google', likes: 14000, views: 38000, solved: false }
];

const filterOptions = {
  language: ['Tous', 'JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'TypeScript'],
  difficulty: ['Tous', 'Facile', 'Moyen', 'Difficile'],
  company: ['Tous', 'Apple', 'Google', 'Meta', 'Microsoft']
};

export default function LunaTechInterview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [filters, setFilters] = useState({
    language: "Tous",
    difficulty: "Tous",
    company: "Tous"
  });

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



  // LOGIQUE DE FILTRAGE
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            q.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLang = filters.language === 'Tous' || q.language === filters.language;
      const matchesDiff = filters.difficulty === 'Tous' || q.difficulty === filters.difficulty;
      const matchesComp = filters.company === 'Tous' || q.company === filters.company;
      return matchesSearch && matchesLang && matchesDiff && matchesComp;
    });
  }, [searchTerm, filters]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Facile': return 'text-emerald-400 bg-emerald-400/10 border-emerald-500/20';
      case 'Moyen': return 'text-amber-400 bg-amber-400/10 border-amber-500/20';
      case 'Difficile': return 'text-rose-400 bg-rose-400/10 border-rose-500/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-500/20';
    }
  };

  return (
    <div className="flex h-screen bg-[#020617] font-sans text-slate-200 overflow-hidden selection:bg-blue-500/30">
      
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
        className={`flex flex-col border-r border-blue-900/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden z-40 transition-all duration-300 ${
          isMobile ? 'fixed inset-y-0 left-0 shadow-2xl shadow-blue-900/20' : 'relative'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-blue-900/20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/20">
              <Trophy size={18} />
            </div>
            <span className="font-black text-sm tracking-widest uppercase text-blue-400">Luna Interview</span>
          </div>
          {isMobile && (
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-500 hover:text-white">
              <X size={20} />
            </button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar pb-8">
          {/* Section Langages */}
          <div>
            <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Technologies</div>
            <div className="space-y-1">
              {filterOptions.language.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setFilters(prev => ({ ...prev, language: lang }));
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
                    filters.language === lang ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Terminal size={14} />
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Section Difficulté */}
          <div>
            <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Difficulté</div>
            <div className="space-y-1">
              {filterOptions.difficulty.map((diff) => (
                <button
                  key={diff}
                  onClick={() => {
                    setFilters(prev => ({ ...prev, difficulty: diff }));
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
                    filters.difficulty === diff ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Target size={14} />
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Section Entreprises */}
          <div>
            <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Entreprises</div>
            <div className="space-y-1">
              {filterOptions.company.map((comp) => (
                <button
                  key={comp}
                  onClick={() => {
                    setFilters(prev => ({ ...prev, company: comp }));
                    if (isMobile) setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
                    filters.company === comp ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Globe size={14} />
                  {comp}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-blue-900/20 flex items-center justify-around text-slate-500 shrink-0">
          <button className="hover:text-blue-400 transition-colors"><Info size={16} /></button>
          <button className="hover:text-blue-400 transition-colors"><MessageSquare size={16} /></button>
          <button className="hover:text-blue-400 transition-colors"><Settings size={16} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT RESPONSIVE */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#020617] relative overflow-hidden">
        
        {/* HEADER */}
        <header className="h-16 border-b border-blue-900/20 flex items-center justify-between px-4 sm:px-6 bg-slate-900/20 backdrop-blur-md z-10 shrink-0">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all shrink-0"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="relative w-full max-w-[200px] sm:max-w-md group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={14} />
              <input 
                type="text" 
                placeholder={isMobile ? "Rechercher..." : "Rechercher un exercice..."}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-[10px] sm:text-xs text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{filteredQuestions.length} Q</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-[9px] sm:text-[10px] font-black px-3 py-2 sm:px-4 sm:py-2 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              <span className="hidden xs:inline">Passer </span>Premium
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-10">
          
          <div className="mb-8 sm:mb-10 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Interview</span> Prep
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed mx-auto lg:mx-0">
              Maîtrisez les algorithmes et les architectures demandés par les géants de la Tech.
            </p>
          </div>

          {/* GRILLE DES EXERCICES RESPONSIVE */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredQuestions.map((q, index) => (
                <motion.div
                  layout
                  key={q.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/20 p-5 sm:p-6 transition-all hover:border-blue-500/40 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
                >
                  {/* Décoration de fond */}
                  <div className="absolute -right-4 -top-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <Rocket size={100} />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] sm:text-[9px] font-black text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                          {q.company}
                        </span>
                        {q.solved && <CheckCircle2 size={12} className="text-emerald-500" />}
                      </div>
                      <span className={`px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-bold border ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                      {q.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium mb-4 italic line-clamp-1">{q.subtitle}</p>
                    
                    <div className="flex items-center gap-3 sm:gap-4 text-slate-500 text-[9px] sm:text-[10px] font-bold font-mono">
                      <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                        <ThumbsUp size={12} className="text-blue-500" />
                        <span>{q.likes > 1000 ? `${(q.likes/1000).toFixed(1)}k` : q.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye size={12} className="text-slate-700" />
                        <span>{q.views > 1000 ? `${(q.views/1000).toFixed(1)}k` : q.views}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/50">
                        <Code2 size={10} />
                        <span>{q.language}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 flex items-center justify-between">
                    <button className={`rounded-xl px-4 sm:px-6 py-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                      q.solved 
                        ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                    }`}>
                      {q.solved ? "Revoir" : "Résoudre"}
                    </button>
                    <ArrowRight size={16} className="text-slate-700 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredQuestions.length === 0 && (
            <div className="h-64 flex flex-col items-center justify-center text-center">
              <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 mb-4">
                <Search size={32} className="text-slate-600" />
              </div>
              <h3 className="text-white font-bold">Aucun exercice trouvé</h3>
              <p className="text-slate-500 text-xs">Essayez d'ajuster vos filtres ou votre recherche.</p>
            </div>
          )}
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
