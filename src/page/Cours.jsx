import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronDown, Eye, Star, PlayCircle,
  FileText,  Layout, Globe, 
  Cpu, Shield, Zap, TrendingUp, Settings, Info, 
  MessageSquare, Menu, X, 
  Sparkles, ServerCog, Bot
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * LunaResourcesCenter - Plateforme de ressources pédagogiques premium.
 * Design : Luna Development Aesthetic (Dark, Glassmorphism, Gradients).
 * Fonctionnalités : Filtrage dynamique, Recherche, Sidebar intelligente.
 * Responsive : Optimisé pour mobile, tablette et desktop.
 * Authentification : Vérification de l'utilisateur dans localStorage (cohérent avec Navbar).
 */
// BASE DE DONNÉES MASSIVE DE RESSOURCES
const resources = [
  // --- WEB PERFORMANCE ---
  { id: 1, title: "Optimisation des performances Web pour les appareils à faible consommation", views: 4200, rating: 5, type: "Article", category: "Performance", company: "Google" },
  { id: 2, title: "CDN d'images et infrastructure de livraison moderne", views: 2300, rating: 5, type: "Article", category: "Performance", company: "Cloudflare" },
  { id: 3, title: "Chargement paresseux (Lazy Loading) des images en 2027", views: 1050, rating: 5, type: "Article", category: "Performance", company: "Chrome" },
  { id: 4, title: "Mesurer les Core Web Vitals avec précision", views: 2700, rating: 4, type: "Blog", category: "Performance", company: "Vercel" },
  
  // --- ARCHITECTURE & CODE ---
  { id: 5, title: "Comment refactoriser de grandes bases de code sans douleur", views: 18190, rating: 5, type: "Vidéo", category: "Architecture", company: "Meta" },
  { id: 6, title: "Design Patterns en JavaScript Moderne", views: 5500, rating: 4, type: "Vidéo", category: "Architecture", company: "Microsoft" },
  { id: 7, title: "Micro-frontends : Stratégies de déploiement", views: 3200, rating: 5, type: "Article", category: "Architecture", company: "Amazon" },
  { id: 8, title: "Clean Code : Principes SOLID appliqués au Frontend", views: 9400, rating: 5, type: "Article", category: "Architecture", company: "Apple" },

  // --- CARRIÈRE & ENTRETIENS ---
  { id: 9, title: "Expérience d'entretien frontend chez Cars24", views: 35970, rating: 4, type: "Blog", category: "Carrière", company: "Cars24" },
  { id: 10, title: "Comment j'ai été promu Senior Engineer en 12 mois", views: 21920, rating: 5, type: "Vidéo", category: "Carrière", company: "Netflix" },
  { id: 11, title: "Négocier son salaire de développeur en 2027", views: 15400, rating: 5, type: "Article", category: "Carrière", company: "Luna" },
  { id: 12, title: "Préparer le System Design Interview", views: 28000, rating: 5, type: "Vidéo", category: "Carrière", company: "Google" },

  // --- SÉCURITÉ & BACKEND ---
  { id: 13, title: "Sécuriser vos APIs avec JWT et Refresh Tokens", views: 12500, rating: 5, type: "Article", category: "Sécurité", company: "Auth0" },
  { id: 14, title: "Prévenir les failles OWASP Top 10 en Node.js", views: 8900, rating: 4, type: "Vidéo", category: "Sécurité", company: "Snyk" },
  { id: 15, title: "Introduction à Rust pour les développeurs JS", views: 6700, rating: 5, type: "Blog", category: "Backend", company: "Mozilla" },
  { id: 16, title: "Scaling Database with Sharding and Replication", views: 4500, rating: 5, type: "Article", category: "Backend", company: "AWS" },

  // --- IA & FUTUR ---
  { id: 17, title: "Intégrer les LLMs dans vos applications React", views: 34000, rating: 5, type: "Vidéo", category: "IA", company: "OpenAI" },
  { id: 18, title: "Prompt Engineering pour les développeurs Frontend", views: 12000, rating: 4, type: "Article", category: "IA", company: "Anthropic" },
  { id: 19, title: "WebAssembly : Le futur du Web haute performance", views: 9800, rating: 5, type: "Article", category: "Performance", company: "Figma" },
  { id: 20, title: "Créer des agents autonomes avec Vercel AI SDK", views: 15000, rating: 5, type: "Vidéo", category: "IA", company: "Vercel" }
];

const categories = ["Toutes", "Performance", "Architecture", "Carrière", "Sécurité", "Backend", "IA"];

export default function LunaResourcesCenter() {
  const navigate = useNavigate();
  
  // TOUS LES HOOKS DÉCLARÉS AU DÉBUT DU COMPOSANT
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);



  // LOGIQUE DE FILTRAGE - useMemo APPELÉ AVANT TOUT RETURN CONDITIONNEL
  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Toutes" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // VÉRIFICATION DE L'AUTHENTIFICATION AU CHARGEMENT (IDENTIQUE À LA NAVBAR)
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors du parsing de l'utilisateur:", error);
        navigate("/login");
      }
    } else {
      // Pas d'utilisateur trouvé, redirection vers la page Login
      navigate("/login");
    }
  }, [navigate]);

  // AFFICHAGE DE L'ÉCRAN DE CHARGEMENT PENDANT LA VÉRIFICATION
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#020617]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
        />
      </div>
    );
  }

  // SI PAS D'UTILISATEUR, NE PAS AFFICHER LE CONTENU (LA REDIRECTION SE FAIT DANS useEffect)
  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#020617] font-sans text-slate-200 overflow-hidden selection:bg-blue-500/30 relative">
      
      {/* SIDEBAR (STYLE LUNA) - RESPONSIVE */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? 280 : 0,
          height: isSidebarOpen ? "auto" : 0
        }}
        className="fixed lg:static left-0 top-0 lg:top-auto h-screen lg:h-auto flex flex-col lg:w-[280px] lg:h-screen border-r border-b lg:border-b-0 border-blue-900/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden z-50 lg:z-20"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-blue-900/20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/20">
              <Sparkles size={18} />
            </div>
            <span className="font-black text-sm tracking-widest uppercase text-blue-400">Luna Resources</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Catégories</div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setIsSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 group ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              {cat === "Toutes" ? <Layout size={16} /> : 
               cat === "Performance" ? <Zap size={16} /> : 
               cat === "Architecture" ? <Cpu size={16} /> : 
               cat === "Carrière" ? <TrendingUp size={16} /> : 
               cat === "Sécurité" ? <Shield size={16} /> : 
               cat === "Backend" ? <ServerCog size={16} /> : <Bot size={16} />}
              <span className="flex-1">{cat}</span>
              {selectedCategory !== cat && (
                <span className="text-[10px] text-slate-600 group-hover:text-slate-400">
                  {resources.filter(r => r.category === cat || cat === "Toutes").length}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-900/20 flex items-center justify-around text-slate-500">
          <button className="hover:text-blue-400 transition-colors"><Info size={16} /></button>
          <button className="hover:text-blue-400 transition-colors"><MessageSquare size={16} /></button>
          <button className="hover:text-blue-400 transition-colors"><Settings size={16} /></button>
        </div>
      </motion.aside>

      {/* OVERLAY MOBILE */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#020617] relative w-full">
        
        {/* HEADER */}
        <header className="h-16 border-b border-blue-900/20 flex items-center justify-between px-4 sm:px-6 bg-slate-900/20 backdrop-blur-md z-10">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all flex-shrink-0 relative z-40"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            <div className="relative w-full max-w-md group min-w-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors flex-shrink-0" size={16} />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-xs text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Live Updates</span>
            </div>
            <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all flex-shrink-0">
              <Globe size={20} />
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-10">
          
          {/* HERO SECTION DANS LE CONTENU */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Centre de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Ressources</span>
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed">
              Explorez notre bibliothèque exhaustive de connaissances techniques, optimisée pour les ingénieurs d'élite.
            </p>
          </div>

          {/* GRILLE DES RESSOURCES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/20 p-4 sm:p-6 transition-all hover:border-blue-500/40 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
                >
                  {/* Décoration de fond */}
                  <div className="absolute -right-4 -top-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    {item.type === "Vidéo" ? <PlayCircle size={120} /> : <FileText size={120} />}
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                      <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                        {item.company}
                      </span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-800/50 text-[9px] font-bold text-slate-400 border border-slate-700/50">
                        {item.type === "Vidéo" ? <PlayCircle size={10} /> : <FileText size={10} />}
                        <span>{item.type}</span>
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2 mb-4">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-500 text-[10px] font-bold font-mono">
                      <div className="flex items-center gap-1.5">
                        <Eye size={12} className="text-slate-700 flex-shrink-0" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                      
                      {item.rating && (
                        <div className="flex items-center gap-1 text-amber-500/80">
                          <Star size={12} fill="currentColor" className="flex-shrink-0" />
                          <span>{item.rating}.0</span>
                        </div>
                      )}

                      <div className="text-slate-600 italic">
                        #{item.category}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <button className="w-full sm:w-auto rounded-xl bg-blue-600 px-4 sm:px-6 py-2 text-[10px] font-black text-white uppercase tracking-widest transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">
                      Explorer
                    </button>
                    
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      <span className="text-[9px] font-bold text-slate-600">Détails</span>
                      <ChevronDown size={14} className="-rotate-90 text-slate-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ÉTAT VIDE */}
          {filteredResources.length === 0 && (
            <div className="h-64 sm:h-96 flex flex-col items-center justify-center text-center p-6 sm:p-12 bg-slate-900/10 border-2 border-dashed border-slate-800 rounded-[40px]">
              <Search size={48} className="text-slate-800 mb-4" />
              <h3 className="text-lg sm:text-xl font-black text-white mb-2 tracking-tight">Aucune ressource trouvée</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-xs leading-relaxed">
                Nous n'avons trouvé aucune ressource correspondant à "{searchTerm}" dans la catégorie "{selectedCategory}".
              </p>
              <button 
                onClick={() => { setSearchTerm(""); setSelectedCategory("Toutes"); }}
                className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all"
              >
                Réinitialiser
              </button>
            </div>
          )}
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #020617; }
      `}} />
    </div>
  );
}
