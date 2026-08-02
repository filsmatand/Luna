import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronDown, CheckCircle2, Circle, Trophy, 
  Target, Zap, Layout, Server, Shield, ThumbsUp, Eye, 
  Globe, Cpu, Terminal, Sparkles, Star, Info, MessageSquare, 
  Settings, Menu, X, Filter, Code2, Rocket
} from "lucide-react";

/**
 * LunaTechInterview - Plateforme d'exercices d'entretien technique.
 * Style harmonisé avec LunaResourcesCenter.
 * Design : Dark, Glassmorphism, Gradients, Sidebar interactive.
 */
export default function LunaTechInterview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filters, setFilters] = useState({
    language: "Tous",
    difficulty: "Tous",
    company: "Tous"
  });

  // BASE DE DONNÉES D'EXERCICES (Harmonisée)
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
      
      {/* SIDEBAR (STYLE LUNA HARMONISÉ) */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="flex flex-col border-r border-blue-900/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-blue-900/20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/20">
              <Trophy size={18} />
            </div>
            <span className="font-black text-sm tracking-widest uppercase text-blue-400">Luna Interview</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
          {/* Section Langages */}
          <div>
            <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Technologies</div>
            <div className="space-y-1">
              {filterOptions.language.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setFilters(prev => ({ ...prev, language: lang }))}
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
                  onClick={() => setFilters(prev => ({ ...prev, difficulty: diff }))}
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
                  onClick={() => setFilters(prev => ({ ...prev, company: comp }))}
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

        <div className="p-4 border-t border-blue-900/20 flex items-center justify-around text-slate-500">
          <button className="hover:text-blue-400 transition-colors"><Info size={16} /></button>
          <button className="hover:text-blue-400 transition-colors"><MessageSquare size={16} /></button>
          <button className="hover:text-blue-400 transition-colors"><Settings size={16} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#020617] relative">
        
        {/* HEADER */}
        <header className="h-16 border-b border-blue-900/20 flex items-center justify-between px-6 bg-slate-900/20 backdrop-blur-md z-10">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Rechercher un exercice ou une entreprise..." 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-xs text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{filteredQuestions.length} Questions</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black px-4 py-2 rounded-xl transition-all shadow-lg shadow-blue-600/20">
              Passer Premium
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
          
          <div className="mb-10">
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Interview</span> Prep
            </h1>
            <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
              Maîtrisez les algorithmes et les architectures demandés par les géants de la Tech.
            </p>
          </div>

          {/* GRILLE DES EXERCICES (STYLE LUNA HARMONISÉ) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredQuestions.map((q, index) => (
                <motion.div
                  layout
                  key={q.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/20 p-6 transition-all hover:border-blue-500/40 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
                >
                  {/* Décoration de fond */}
                  <div className="absolute -right-4 -top-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <Rocket size={120} />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                          {q.company}
                        </span>
                        {q.solved && <CheckCircle2 size={12} className="text-emerald-500" />}
                      </div>
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold border ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                      {q.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-medium mb-4 italic">{q.subtitle}</p>
                    
                    <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold font-mono">
                      <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                        <ThumbsUp size={12} className="text-blue-500" />
                        <span>{q.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye size={12} className="text-slate-700" />
                        <span>{q.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/50">
                        <Code2 size={10} />
                        <span>{q.language}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <button className={`rounded-xl px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                      q.solved 
                        ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                    }`}>
                      {q.solved ? 'Revoir' : 'Start'}
                    </button>
                    
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      <span className="text-[9px] font-bold text-slate-600">ID #{q.id}</span>
                      <ChevronDown size={14} className="-rotate-90 text-slate-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ÉTAT VIDE */}
          {filteredQuestions.length === 0 && (
            <div className="h-96 flex flex-col items-center justify-center text-center p-12 bg-slate-900/10 border-2 border-dashed border-slate-800 rounded-[40px]">
              <Search size={48} className="text-slate-800 mb-4" />
              <h3 className="text-xl font-black text-white mb-2 tracking-tight">Aucun exercice trouvé</h3>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Essayez de modifier vos filtres pour trouver des défis correspondant à vos critères.
              </p>
              <button 
                onClick={() => { setSearchTerm(""); setFilters({ language: "Tous", difficulty: "Tous", company: "Tous" }); }}
                className="mt-8 px-8 py-3 bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #020617; }
      `}} />
    </div>
  );
}
