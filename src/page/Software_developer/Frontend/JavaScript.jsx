import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  ListChecks,
  ArrowLeft,
  Terminal,
  Lightbulb,
  FileCode,
  Code2,
  Layers,
  MousePointer2,
  Settings,
  Info,
  MessageSquare,Search,
} from "lucide-react";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JavascriptFondamentaux = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const lessonData = {
    title: "JavaScript : Les Fondamentaux",
    intro: "JavaScript est le moteur de l'interactivité sur le web. Cette leçon se concentre sur les concepts concrets et indispensables que tout développeur doit maîtriser pour construire des applications réelles.",
    overview: [
      "Maîtriser la déclaration moderne des variables (const/let).",
      "Comprendre les types de données primitifs et complexes.",
      "Écrire des fonctions réutilisables et efficaces.",
      "Manipuler des listes de données avec les tableaux.",
      "Interagir directement avec les éléments HTML via le DOM."
    ],
    sections: [
      {
        id: "variables",
        title: "1. Variables et Types",
        content: [
          {
            subTitle: "Le stockage des données",
            text: "En JavaScript moderne, on utilise 'const' pour les valeurs qui ne changent jamais et 'let' pour celles qui seront réassignées. Oubliez 'var', il n'est plus utilisé en 2026 car il pose des problèmes de portée.",
            code: "// Toujours privilégier const\nconst nomUtilisateur = 'Alex';\n\n// Utiliser let si la valeur doit évoluer\nlet score = 0;\nscore = 10; // Réassignation possible",
            tips: "Nommez vos variables de façon explicite en camelCase (ex: prixTotal) pour rendre votre code lisible par les autres."
          },
          {
            subTitle: "Les types essentiels",
            text: "JavaScript gère principalement les chaînes de caractères (String), les nombres (Number) et les booléens (true/false).",
            code: "const message = \"Bonjour\"; // String\nconst age = 25;           // Number\nconst estConnecte = true; // Boolean"
          }
        ]
      },
      {
        id: "fonctions",
        title: "2. Les Fonctions",
        content: [
          {
            subTitle: "Déclaration et exécution",
            text: "Une fonction est un bloc de code réutilisable. Elle prend des entrées (paramètres) et retourne un résultat.",
            code: `function saluer(prenom) {\n  return \`Bonjour \${prenom} !\`;\n}\n\nconst message = saluer('Alice'); // Appel de la fonction`,
            tips: "Les fonctions fléchées (Arrow Functions) sont une syntaxe moderne et concise très utilisée aujourd'hui."
          },
          {
            subTitle: "Fonctions fléchées",
            text: "Plus courtes et pratiques, surtout pour les fonctions simples.",
            code: "const additionner = (a, b) => a + b;\nconsole.log(additionner(5, 3)); // Affiche 8"
          }
        ]
      },
      {
        id: "tableaux",
        title: "3. Tableaux et Listes",
        content: [
          {
            subTitle: "Gérer des collections",
            text: "Les tableaux permettent de stocker plusieurs valeurs dans une seule variable. C'est la base pour gérer des listes de produits, d'utilisateurs ou de messages.",
            code: "const fruits = ['Pomme', 'Banane', 'Orange'];\n\n// Accéder au premier élément (index 0)\nconsole.log(fruits[0]); // 'Pomme'\n\n// Ajouter un élément\nfruits.push('Fraise');",
            tips: "La propriété .length vous donne instantanément le nombre d'éléments dans votre tableau."
          }
        ]
      },
      {
        id: "dom",
        title: "4. Le DOM (Interactivité)",
        content: [
          {
            subTitle: "Cibler et modifier le HTML",
            text: "Le DOM est la représentation de votre page HTML en JavaScript. Vous pouvez modifier le texte, les styles ou écouter des clics.",
            code: "// Sélectionner un élément par son ID\nconst titre = document.querySelector('#mon-titre');\n\n// Modifier le contenu\ntitre.textContent = 'Nouveau Titre';\n\n// Modifier le style\ntitre.style.color = 'cyan';",
            tips: "Utilisez querySelector pour sa polyvalence : il accepte les mêmes sélecteurs que le CSS."
          },
          {
            subTitle: "Écouter les événements",
            text: "C'est ainsi que vous rendez votre site vivant en réagissant aux actions de l'utilisateur.",
            code: "const bouton = document.querySelector('button');\n\nbouton.addEventListener('click', () => {\n  alert('Vous avez cliqué !');\n});"
          }
        ]
      }
    ],
    knowledgeCheck: [
      "Pourquoi doit-on privilégier 'const' sur 'let' ?",
      "Quelle est la différence entre une String et un Number ?",
      "Comment ajouter un élément à la fin d'un tableau ?",
      "À quoi sert la méthode addEventListener ?"
    ],
    resources: [
      { name: "MDN Web Docs - JavaScript Fondamentaux", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
      { name: "JavaScript.info - Guide Complet", url: "https://fr.javascript.info/" },
      { name: "Guide de style Airbnb (Standard industrie)", url: "https://github.com/airbnb/javascript" }
    ]
  };

  const toggleComplete = (id) => {
    const newSet = new Set(completedSteps);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompletedSteps(newSet);
    setProgress(Math.round((newSet.size / (lessonData.sections.length + 1)) * 100));
  };

  return (
    <div className="flex h-screen bg-gray-950 font-sans text-white overflow-hidden selection:bg-blue-500/30">
      {/* SIDEBAR */}
      <motion.aside
        initial={false}
        animate={{ width: true ? 280 : 0 }} // Assuming sidebar is always open for this component
        className="flex flex-col border-r border-blue-950 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-950">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1 rounded text-white">
              <FaHtml5 size={16} /> {/* Using FaHtml5 as a placeholder icon */}
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-orange-500">JavaScript</span>
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
              // value={searchQuery} // No search functionality in original JS file
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-blue-900/50 rounded py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="mt-2">
            <div className="px-4 py-1.5 text-[10px] font-bold text-orange-400/70 uppercase tracking-widest flex items-center justify-between">
              <span>Chapitres</span>
            </div>
            <ul className="mt-1">
              {['Introduction', 'Aperçu', ...lessonData.sections.map(s => s.title.split('. ')[1]), 'Validation', 'Ressources'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group text-gray-400 hover:bg-slate-800 hover:text-gray-200"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="truncate flex-1">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="p-2 border-t border-blue-950 bg-gray-950 flex items-center justify-around text-gray-500">
          <button title="Aide" className="hover:text-orange-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-orange-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-orange-400 transition-colors"><FaGithub size={14} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative">
        <header className="h-10 border-b border-blue-950 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-1 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
              <span className="hover:text-orange-400 cursor-pointer transition-colors">JavaScript</span>
              <ChevronRight size={12} className="text-gray-700" />
              <span className="text-orange-400 font-bold">Fondamentaux</span>
              {/* <ChevronRight size={12} className="text-gray-700" />
              <span className="text-white lowercase">{selectedLesson.title}</span> */}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" // Changed to orange
                />
              </div>
              <span className="text-xs font-bold text-gray-500">{progress}%</span>
            </div>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/20">
              Mon Profil
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12">
          <motion.article
            key="javascript-fundamentals"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl"
          >
            <header id="introduction" className="mb-12">
              <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                Cours Débutant
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight mb-6 leading-tight">
                {lessonData.title}
              </h1>
              <p className="text-gray-400 leading-relaxed text-sm">
                {lessonData.intro}
              </p>
            </header>

            {/* Lesson Overview */}
            <section id="aperçu" className="mb-16 p-8 bg-slate-900/50 rounded-2xl border border-blue-950 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <ListChecks className="text-orange-400" />
                Objectifs d'apprentissage
              </h2>
              <ul className="grid gap-4">
                {lessonData.overview.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Main Lesson Content */}
            {lessonData.sections.map((section) => (
              <section key={section.id} id={section.title.split('. ')[1].toLowerCase().replace(/ /g, '-')}
                className="mb-20"
              >
                <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-600/20 text-orange-400 border border-orange-600/30 rounded-lg text-lg">
                    {section.id === 'variables' && <Code2 size={20} />}
                    {section.id === 'fonctions' && <Terminal size={20} />}
                    {section.id === 'tableaux' && <Layers size={20} />}
                    {section.id === 'dom' && <MousePointer2 size={20} />}
                  </span>
                  {section.title}
                </h2>

                {section.content.map((block, i) => (
                  <div key={i} className="mb-12 group">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-orange-900 rounded-full group-hover:bg-orange-500 transition-colors" />
                      {block.subTitle}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {block.text}
                    </p>

                    {block.code && (
                      <div className="relative rounded-xl overflow-hidden bg-gray-900 my-8 shadow-2xl border border-orange-900/30">
                        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 text-gray-500 text-xs font-mono">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
                          </div>
                          <span className="flex items-center gap-1.5">
                            <FileCode size={14} />
                            index.js
                          </span>
                        </div>
                        <pre className="p-6 text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
                          <code>{block.code}</code>
                        </pre>
                      </div>
                    )}

                    {block.tips && (
                      <div className="flex gap-4 p-6 bg-orange-500/5 border-l-4 border-orange-500 rounded-r-2xl">
                        <div className="mt-1">
                          <Lightbulb className="text-orange-400 flex-shrink-0" size={24} />
                        </div>
                        <div>
                          <span className="font-bold uppercase text-[10px] tracking-widest text-orange-500 block mb-1">Conseil d'expert</span>
                          <p className="text-sm text-orange-100/80 leading-relaxed font-medium">
                            {block.tips}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => toggleComplete(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    completedSteps.has(section.id)
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-slate-900 text-gray-400 border border-slate-800 hover:border-orange-500/50 hover:text-orange-400'
                  }`}
                >
                  {completedSteps.has(section.id) ? <CheckCircle2 size={16} /> : <div className="w-4 h-4 border-2 border-current rounded-full" />}
                  {completedSteps.has(section.id) ? 'Section terminée' : 'Marquer comme lu'}
                </button>
              </section>
            ))}

            {/* Knowledge Check Section */}
            <section id="validation" className="mb-20 p-10 bg-slate-900 border border-blue-950 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-5 rounded-full -mr-32 -mt-32" />
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                <BookOpen className="text-orange-400" />
                Récapitulatif
              </h2>
              <p className="text-gray-400 mb-8 font-medium">
                Assurez-vous de pouvoir répondre à ces questions avant de passer à la suite :
              </p>
              <div className="space-y-6">
                {lessonData.knowledgeCheck.map((q, i) => (
                  <div key={i} className="flex gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                    <p className="text-gray-300 text-lg group-hover:text-white transition-colors">{q}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Resources */}
            <section id="ressources" className="mb-24">
              <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
                <ExternalLink className="text-orange-400" />
                Ressources Complémentaires
              </h2>
              <ul className="space-y-4">
                {lessonData.resources.map((resource, i) => (
                  <li key={i}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      <span className="font-medium">{resource.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </motion.article>
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
};

export default JavascriptFondamentaux;
