import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  Eye, 
  Star, 
  PlayCircle, 
  BookOpen, 
  FileText,
  Filter,
  ArrowUpDown
} from "lucide-react";

/**
 * Composant ResourcesGrid
 * Reproduit l'interface devtools.tech/resources/all
 * Caractéristiques : Barre de filtres avancée, grille de cartes avec métadonnées (vues, notes, type).
 */
export default function ResourcesGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const resources = [
    { title: "Optimisation des performances Web pour les appareils à faible consommation d'énergie", views: 4, rating: 5, type: "Article" },
    { title: "Suivi de la production et longue traîne", views: 55, rating: 4, type: "Vidéo" },
    { title: "CDN d'images et infrastructure de livraison", views: 23, rating: 5, type: "Article" },
    { title: "Donner la priorité aux images critiques", views: 16, rating: 4, type: "Blog" },
    { title: "Chargement paresseux des images", views: 10, rating: 5, type: "Article" },
    { title: "Images réactives : srcset, tailles et image", views: 13, rating: 4, type: "Vidéo" },
    { title: "Réduire les octets d'image", views: 17, rating: 5, type: "Article" },
    { title: "Mesurer les performances d'une image avec Core Web Vitals", views: 27, rating: 4, type: "Blog" },
    { title: "Fondements : pourquoi l'optimisation des images est importante et comment les navigateurs chargent les images", views: 40, rating: 5, type: "Article" },
    { title: "Expérience d'entretien frontend Cars24", views: 3597, rating: null, type: "Blog / Article" },
    { title: "Comment ai-je été promu dans mon travail ?", views: 2192, rating: null, type: "Vidéo" },
    { title: "Comment refactoriser de grandes bases de code ?", views: 1819, rating: null, type: "Vidéo" },
  ];

  return (
    <section className="items-center  min-h-screen  py-12 px-4 sm:px-8 lg:px-24  font-sans text-slate-900 bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 ">

      <div className="items-center lg:px-20  mx-auto max-w-7xl">
        
        {/* Barre de Filtres & Recherche */}
        <div className="items-center mb-10  flex-col gap-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            
            {/* Search Input */}
            <div className="relative lg:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Que voulez-vous chercher ?" 
                className="w-full rounded-lg border border-slate-800 bg-[#1e293b]/50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Selects */}
            {[
              { label: "Dificille", icon: <Filter size={14} /> },
              { label: "Niveau", icon: <BookOpen size={14} /> },
              { label: "Trier par", icon: <ArrowUpDown size={14} /> },
            
            ].map((filter, i) => (
              <div key={i} className="relative group ">
                <button className="flex w-full items-center justify-between rounded-lg border border-slate-800 bg-[#1e293b]/50 px-4 py-2.5 text-sm text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-all">
                  <span className="flex items-center gap-2">
                    {filter.icon}
                    {filter.label}
                  </span>
                  <ChevronDown size={14} className="group-hover:text-emerald-500 transition-colors" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Grille des Ressources */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col justify-between rounded-2xl border border-blue-800 bg-slate-950 p-6 transition-all hover:border-slate-500/30 hover:bg-slate-950 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-slate-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="mt-4 flex items-center gap-4 text-slate-500 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <Eye size={14} className="text-slate-800" />
                    <span>{item.views}</span>
                  </div>
                  
                  {item.rating && (
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={14} fill="currentColor" />
                      <span>{item.rating}</span>
                    </div>
                  )}

                  {item.type && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-800/50 text-slate-400 border border-slate-700/50">
                      {item.type.includes("Vidéo") ? <PlayCircle size={12} /> : <FileText size={12} />}
                      <span>{item.type}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button className="rounded-lg bg-white-600/10 px-6 py-2 text-sm font-bold text-white border border-emerald-500/20 transition-all hover:bg-blue-900 hover:text-white hover:shadow-lg hover:shadow-emerald-900/20">
                  Explorer
                </button>
                
                {/* Micro-décoration */}
                <div className="h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-16"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de section */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-900 transition-all hover:scale-105 active:scale-95">
            Voir plus de ressources
            <ChevronDown size={16} className="transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
