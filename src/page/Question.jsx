import React from "react";
import { motion } from "framer-motion";
import { Eye, ExternalLink } from "lucide-react";

/**
 * Composant CollectionsGrid
 * Reproduit l'interface sombre de devtools.tech/lists/all
 * Style : Dark mode, cartes épurées, accent vert émeraude.
 */
export default function CollectionsGrid() {
  const collections = [
    { title: "Optimisation d'image pour le Web moderne", views: 850 },
    { title: "Questions d'entretien sur Intuit Frontend", views: 691 },
    { title: "Questions d'entretien sur le frontend de Blinkit", views: 616 },
    { title: "Questions d'entretien sur le frontend de Makemytrip", views: 567 },
    { title: "Questions d'entretien sur le frontend Zeta", views: 545 },
    { title: "Questions d'entretien sur le frontend Hotstar", views: 443 },
    { title: "Questions d'entretien sur le frontend de Phonepe", views: 344 },
    { title: "Questions d'entretien sur Swiggy Frontend", views: 361 },
    { title: "Questions d'entretien sur le frontend du facteur", views: 339 },
    { title: "Questions d'entretien sur le frontend de Cars24", views: 353 },
    { title: "Questions d'entretien sur le frontend Paytm", views: 346 },
    { title: "Questions d'entretien sur le frontend Moengage", views: 359 },
  ];

  return (
    <section className="min-h-screen bg-[#0f172a] py-16 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header de la section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Toutes les Collections
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl">
              Explorez nos listes organisées de ressources et de questions d'entretien pour booster votre carrière de développeur frontend.
            </p>
          </div>
          <div className="flex items-center gap-2 text-emerald-500 font-medium text-sm bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {collections.length} Collections disponibles
          </div>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#1e293b]/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-[#1e293b]"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-100 leading-snug group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                
                <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                  <Eye size={14} />
                  <span>{item.views} vues</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button className="flex items-center gap-2 rounded-lg bg-emerald-600/10 px-4 py-2 text-sm font-bold text-emerald-500 border border-emerald-500/20 transition-all hover:bg-emerald-500 hover:text-white">
                  Explorer
                  <ExternalLink size={14} />
                </button>
                
                {/* Petit élément de design discret */}
                <div className="h-1 w-12 rounded-full bg-slate-800 group-hover:bg-emerald-500/30 transition-colors"></div>
              </div>
              
              {/* Effet de lueur au survol */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Pagination ou Footer de section optionnel */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full border border-slate-700 px-8 py-3 text-sm font-bold text-slate-300 transition-all hover:bg-white hover:text-slate-900">
            Charger plus de collections
          </button>
        </div>
      </div>
    </section>
  );
}
