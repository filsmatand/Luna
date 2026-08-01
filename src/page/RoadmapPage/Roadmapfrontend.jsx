import React, { useState } from 'react';

const RoadmapSH = () => {
  const [completed, setCompleted] = useState(new Set());

  const toggleNode = (id) => {
    const newSet = new Set(completed);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompleted(newSet);
  };

  const sections = [
    {
      id: "internet",
      title: "Internet",
      color: "bg-yellow-400",
      items: [
        { id: "how-internet", label: "Comment fonctionne Internet ?", type: "essential" },
        { id: "http", label: "Qu'est-ce que le HTTP ?", type: "essential" },
        { id: "browsers", label: "Navigateurs et leur fonctionnement", type: "essential" },
        { id: "dns", label: "DNS et son fonctionnement", type: "essential" }
      ]
    },
    {
      id: "html",
      title: "HTML",
      color: "bg-orange-500",
      items: [
        { id: "html-basics", label: "Apprendre les bases", type: "essential" },
        { id: "semantic-html", label: "HTML Sémantique", type: "essential" },
        { id: "forms-validation", label: "Formulaires et Validation", type: "essential" },
        { id: "conventions", label: "Conventions et Bonnes Pratiques", type: "recommended" },
        { id: "seo-basics", label: "Bases du SEO", type: "recommended" }
      ]
    },
    {
      id: "css",
      title: "CSS",
      color: "bg-blue-500",
      items: [
        { id: "css-basics", label: "Apprendre les bases", type: "essential" },
        { id: "layouts", label: "Layouts (Flexbox, Grid)", type: "essential" },
        { id: "responsive", label: "Responsive Design & Media Queries", type: "essential" }
      ]
    },
    {
      id: "javascript",
      title: "JavaScript",
      color: "bg-yellow-300",
      items: [
        { id: "js-basics", label: "Syntaxe et Bases", type: "essential" },
        { id: "dom-manipulation", label: "Manipulation du DOM", type: "essential" },
        { id: "fetch-api", label: "Fetch API / Ajax", type: "essential" },
        { id: "es6", label: "ES6+ et JavaScript Moderne", type: "essential" }
      ]
    },
    {
      id: "vcs",
      title: "Version Control Systems",
      color: "bg-red-500",
      items: [
        { id: "git-basics", label: "Bases de Git", type: "essential" },
        { id: "github", label: "Services d'Hébergement (GitHub, GitLab)", type: "essential" }
      ]
    },
    {
      id: "package-managers",
      title: "Package Managers",
      color: "bg-red-400",
      items: [
        { id: "npm", label: "npm", type: "essential" },
        { id: "yarn", label: "yarn", type: "recommended" },
        { id: "pnpm", label: "pnpm", type: "recommended" }
      ]
    },
    {
      id: "frameworks",
      title: "Pick a Framework",
      color: "bg-cyan-400",
      items: [
        { id: "react", label: "React.js", type: "essential" },
        { id: "vue", label: "Vue.js", type: "alternative" },
        { id: "angular", label: "Angular", type: "alternative" }
      ]
    },
    {
      id: "css-modern",
      title: "Modern CSS",
      color: "bg-indigo-400",
      items: [
        { id: "tailwind", label: "Tailwind CSS", type: "recommended" },
        { id: "styled-components", label: "Styled Components", type: "recommended" }
      ]
    }
  ];

  const Node = ({ item, color }) => (
    <div 
      onClick={() => toggleNode(item.id)}
      className={`
        relative group cursor-pointer p-3 rounded-lg border-2 transition-all duration-200
        ${completed.has(item.id) 
          ? 'bg-green-100 border-green-500 scale-95' 
          : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md'}
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <span className={`text-sm font-semibold ${completed.has(item.id) ? 'text-green-700' : 'text-gray-700'}`}>
          {item.label}
        </span>
        <div className={`
          w-4 h-4 rounded-full border-2 flex items-center justify-center
          ${completed.has(item.id) ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'}
        `}>
          {completed.has(item.id) && (
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      {item.type !== 'essential' && (
        <span className={`
          absolute -top-2 -right-2 text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase text-white
          ${item.type === 'recommended' ? 'bg-blue-500' : 'bg-gray-400'}
        `}>
          {item.type}
        </span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black mb-4 tracking-tight">
            Frontend <span className="text-blue-600">Roadmap</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Inspiré par le style iconique de roadmap.sh. Suivez le chemin, cochez vos acquis et devenez un expert.
          </p>
          
          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div> Appris
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div> Recommandé
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div> Alternative
            </div>
          </div>
        </div>

        {/* Roadmap Path */}
        <div className="relative space-y-16">
          {sections.map((section, sIdx) => (
            <div key={section.id} className="relative">
              {/* Vertical Connector */}
              {sIdx !== sections.length - 1 && (
                <div className="absolute left-1/2 top-full h-16 w-1 bg-slate-200 -translate-x-1/2"></div>
              )}

              {/* Section Header */}
              <div className="flex flex-col items-center mb-8">
                <div className={`${section.color} px-6 py-2 rounded-full shadow-sm z-10`}>
                  <h2 className="text-white font-bold text-lg">{section.title}</h2>
                </div>
              </div>

              {/* Grid of items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <Node key={item.id} item={item} color={section.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final Goal */}
        <div className="mt-24 text-center">
          <div className="inline-block p-8 bg-white rounded-3xl shadow-xl">
            <h3 className="text-2xl font-black text-blue-600 mb-2">PRÊT POUR LE JOB !</h3>
            <p className="text-slate-500">Continuez à construire des projets et à apprendre.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSH;
