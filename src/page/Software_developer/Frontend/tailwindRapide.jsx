
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  PlayCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Trophy,
  ArrowLeft,
  ChevronDown,
  BookOpen,
  Code,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TailwindCSSCourses = () => {
  const navigate = useNavigate();
  const [completedTopics, setCompletedTopics] = useState(new Set());
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (id, e) => {
    e.stopPropagation();
    const newSet = new Set(completedTopics);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompletedTopics(newSet);
  };

  const toggleExpand = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  const courseSections = [
    {
      title: "Introduction à Tailwind CSS",
      topics: [
        {
          id: "tailwind-intro",
          title: "Qu'est-ce que Tailwind CSS ?",
          duration: "15 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p><strong>Tailwind CSS</strong> est un framework CSS utilitaire-first qui permet de construire rapidement des interfaces utilisateur personnalisées sans quitter votre HTML. Contrairement aux frameworks UI traditionnels (comme Bootstrap), Tailwind ne fournit pas de composants pré-stylisés, mais des classes utilitaires de bas niveau.</p>
              <h4 class="text-cyan-400 font-bold mt-4">Philosophie Utility-First</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Au lieu d'écrire du CSS personnalisé, vous appliquez des classes directement dans votre balisage HTML.</li>
                <li>Chaque classe correspond à une propriété CSS spécifique (ex: <code>flex</code>, <code>pt-4</code>, <code>text-center</code>).</li>
                <li>Permet une personnalisation totale et évite la surcharge de styles.</li>
              </ul>
              <h4 class="text-cyan-400 font-bold mt-4">Avantages Clés</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Rapidité de développement :</strong> Construisez des designs complexes sans écrire une seule ligne de CSS.</li>
                <li><strong>Flexibilité :</strong> Créez des designs uniques sans être contraint par des composants prédéfinis.</li>
                <li><strong>Maintenance :</strong> Les styles sont locaux au composant, facilitant les modifications.</li>
                <li><strong>Performance :</strong> Le CSS final est minifié et ne contient que les classes utilisées.</li>
              </ul>
            </div>
          `
        },
        {
          id: "tailwind-setup",
          title: "Installation et Configuration de Base",
          duration: "20 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>L'installation de Tailwind CSS est simple et s'intègre bien avec la plupart des outils de build modernes.</p>
              <h4 class="text-cyan-400 font-bold mt-4">Étapes d'installation</h4>
              <ol class="list-decimal ml-5 space-y-1">
                <li>Installez Tailwind CSS via npm ou yarn : <code>npm install -D tailwindcss postcss autoprefixer</code></li>
                <li>Générez votre fichier de configuration Tailwind : <code>npx tailwindcss init -p</code></li>
                <li>Configurez les chemins de vos fichiers modèles dans <code>tailwind.config.js</code>.</li>
                <li>Ajoutez les directives Tailwind à votre fichier CSS principal.</li>
              </ol>
              <h4 class="text-cyan-400 font-bold mt-4">Exemple de config</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};</code></pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Les Fondamentaux Utilitaires",
      topics: [
        {
          id: "tailwind-layout",
          title: "Disposition (Flexbox, Grid, Spacing)",
          duration: "30 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Tailwind offre un contrôle granulaire sur la disposition avec des classes intuitives.</p>
              <h4 class="text-cyan-400 font-bold mt-4">Flexbox</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>&lt;div class="flex justify-center items-center gap-4"&gt;...&lt;/div&gt;</code></pre>
              <h4 class="text-cyan-400 font-bold mt-4">Grid</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>&lt;div class="grid grid-cols-3 gap-6"&gt;...&lt;/div&gt;</code></pre>
              <h4 class="text-cyan-400 font-bold mt-4">Espacement</h4>
              <p>Utilisez <code>p-N</code> pour le padding et <code>m-N</code> pour la marge (ex: <code>p-4</code>, <code>mt-8</code>).</p>
            </div>
          `
        },
        {
          id: "tailwind-typography-colors",
          title: "Typographie et Couleurs",
          duration: "25 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <h4 class="text-cyan-400 font-bold mt-4">Typographie</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>&lt;p class="text-lg font-bold text-gray-800"&gt;...&lt;/p&gt;</code></pre>
              <h4 class="text-cyan-400 font-bold mt-4">Couleurs</h4>
              <p>Tailwind propose des palettes comme <code>text-blue-500</code> ou <code>bg-slate-900</code>.</p>
            </div>
          `
        },
        {
          id: "tailwind-responsive",
          title: "Responsive Design (sm, md, lg)",
          duration: "20 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Tailwind utilise une approche mobile-first avec des préfixes de breakpoint.</p>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;...&lt;/div&gt;</code></pre>
              <p>Les styles sans préfixe s'appliquent sur mobile, <code>md:</code> sur tablettes, et <code>lg:</code> sur ordinateurs.</p>
            </div>
          `
        }
      ]
    },
    {
      title: "Concepts Avancés",
      topics: [
        {
          id: "tailwind-hover-focus",
          title: "États (Hover, Focus, Active)",
          duration: "15 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Ajoutez des styles interactifs facilement avec des préfixes d'état.</p>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>&lt;button class="bg-blue-500 hover:bg-blue-700 focus:ring-2"&gt;...&lt;/button&gt;</code></pre>
            </div>
          `
        },
        {
          id: "tailwind-customization",
          title: "Personnalisation du Thème",
          duration: "25 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Modifiez vos couleurs et polices dans <code>tailwind.config.js</code>.</p>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>theme: {
  extend: {
    colors: { 'brand': '#3b82f6' }
  }
}</code></pre>
            </div>
          `
        },
        {
          id: "tailwind-jit",
          title: "Mode JIT et Performance",
          duration: "20 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>Le mode Just-In-Time (JIT) génère le CSS à la volée, permettant des valeurs arbitraires comme <code>top-[117px]</code>.</p>
            </div>
          `
        }
      ]
    }
  ];

  const totalTopics = courseSections.reduce((acc, section) => acc + section.topics.length, 0);
  const progress = Math.round((completedTopics.size / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Top Progress Bar */}
      <div className="sticky top-0 z-50 w-full h-1.5 bg-slate-900">
        <motion.div
          className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Retour aux cours</span>
        </button>

        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              <Palette size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Tailwind CSS <span className="text-cyan-500">Rapide</span>
              </h1>
              <p className="text-slate-400 font-medium mt-1">Développer des interfaces modernes rapidement.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Progression</div>
              <div className="text-2xl font-black text-white">{progress}%</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Modules</div>
              <div className="text-2xl font-black text-white">{courseSections.length}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Durée totale</div>
              <div className="text-2xl font-black text-white">~4h</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Niveau</div>
              <div className="text-2xl font-black text-white">Lvl 1</div>
            </div>
          </div>
        </header>

        {/* Course Roadmap Style */}
        <div className="relative space-y-16">
          {courseSections.map((section, sIdx) => (
            <div key={section.title} className="relative">
              {sIdx !== courseSections.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-800" />
              )}

              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-cyan-600/20 z-10">
                  {sIdx + 1}
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">{section.title}</h2>
              </div>

              <div className="ml-6 md:ml-12 space-y-4">
                {section.topics.map((topic) => (
                  <div key={topic.id} className="relative">
                    <motion.div
                      whileHover={{ x: 8 }}
                      onClick={() => toggleExpand(topic.id)}
                      className={`
                        group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer
                        ${completedTopics.has(topic.id)
                          ? 'bg-green-500/5 border-green-500/30'
                          : 'bg-slate-900/40 border-white/5 hover:border-cyan-500/50 hover:bg-slate-900/60'}
                        ${expandedTopic === topic.id ? 'border-cyan-500/50 bg-slate-900/60 rounded-b-none' : ''}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <button
                          onClick={(e) => toggleTopic(topic.id, e)}
                          className={`
                            w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                            ${completedTopics.has(topic.id)
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-slate-700 group-hover:border-cyan-500'}
                          `}
                        >
                          {completedTopics.has(topic.id) && <CheckCircle2 size={14} />}
                        </button>

                        <div>
                          <h3 className={`font-bold transition-colors ${completedTopics.has(topic.id) ? 'text-slate-400 line-through' : 'text-slate-200 group-hover:text-white'}`}>
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                              <Clock size={10} /> {topic.duration}
                            </span>
                            <span className={`text-[9px] px-2 py-0.5 rounded-md font-black uppercase tracking-widest ${
                              topic.type === 'essential' ? 'bg-red-500/10 text-red-400' :
                              topic.type === 'practice' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-500'
                            }`}>
                              {topic.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl bg-white/5 text-slate-400 transition-all ${expandedTopic === topic.id ? 'rotate-180 text-cyan-500' : ''}`}>
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {expandedTopic === topic.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-slate-900/60 border-x border-b border-cyan-500/50 rounded-b-2xl"
                        >
                          <div className="p-6 pt-2 text-slate-300 leading-relaxed text-sm">
                            <div className="flex items-center gap-2 mb-4 text-cyan-400">
                              <BookOpen size={16} />
                              <span className="text-[10px] font-black uppercase tracking-widest">Théorie du module</span>
                            </div>
                            <div
                              className="prose prose-invert max-w-none"
                              dangerouslySetInnerHTML={{ __html: topic.content }}
                            />
                            <div className="mt-6 flex justify-end">
                              <button
                                onClick={(e) => toggleTopic(topic.id, e)}
                                className={`
                                  px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2
                                  ${completedTopics.has(topic.id)
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/20'}
                                `}
                              >
                                {completedTopics.has(topic.id) ? (
                                  <><CheckCircle2 size={14} /> Terminé</>
                                ) : (
                                  <><PlayCircle size={14} /> Marquer comme lu</>
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final Achievement */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-cyan-600/20 to-blue-600/10 border border-cyan-500/20 text-center relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Trophy size={200} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Prêt pour la suite ?</h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8 font-medium">
            Vous maîtrisez maintenant Tailwind CSS pour créer des interfaces modernes.
          </p>
          <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-cyan-600/20 flex items-center gap-2 mx-auto">
            Module Suivant <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindCSSCourses;
