import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  PlayCircle, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Trophy,
  ArrowLeft,
  ChevronDown,
  BookOpen
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const JavascriptCourses = () => {
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
      title: "Introduction au JavaScript",
      topics: [
        { 
          id: "js-intro", 
          title: "Qu'est-ce que le JavaScript ?", 
          duration: "15 min", 
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>Le <strong>JavaScript</strong> est un langage de programmation léger, interprété ou compilé juste-à-temps (JIT), et doté de fonctions de première classe. Il est surtout connu comme le langage de script pour les pages web.</p>
              <h4 class="text-blue-400 font-bold mt-4">Histoire et Évolution</h4>
              <p>Créé en 1995 par Brendan Eich chez Netscape, il a été conçu pour ajouter de l'interactivité aux pages web. Il est standardisé par Ecma International sous le nom d'ECMAScript.</p>
              <h4 class="text-blue-400 font-bold mt-4">Rôle dans le Développement Web</h4>
              <p>C'est l'un des trois piliers du web avec HTML (structure) et CSS (style). Il permet de rendre les pages dynamiques : manipuler le contenu, répondre aux actions utilisateur, etc.</p>
              <h4 class="text-blue-400 font-bold mt-4">Caractéristiques Clés</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Langage de script côté client</li>
                <li>Orienté objet (prototypes)</li>
                <li>Faiblement typé</li>
                <li>Asynchrone (non bloquant)</li>
              </ul>
            </div>
          `
        },
        { 
          id: "js-setup", 
          title: "Configuration de l'environnement", 
          duration: "20 min", 
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Pour développer en JavaScript, vous avez besoin de trois outils principaux :</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-3 bg-slate-800/50 rounded-lg border border-white/5">
                  <strong class="text-blue-400">Le Navigateur</strong>
                  <p class="text-sm mt-1">Chrome, Firefox ou Edge. Utilisez les "Outils de développement" (F12) pour déboguer.</p>
                </div>
                <div class="p-3 bg-slate-800/50 rounded-lg border border-white/5">
                  <strong class="text-blue-400">L'Éditeur (IDE)</strong>
                  <p class="text-sm mt-1">Visual Studio Code est le standard actuel. Installez des extensions comme ESLint.</p>
                </div>
              </div>
              <h4 class="text-blue-400 font-bold mt-4">Node.js</h4>
              <p>C'est l'environnement d'exécution JS côté serveur. Il permet d'utiliser npm pour gérer les bibliothèques.</p>
            </div>
          `
        },
        { 
          id: "js-hello", 
          title: "Votre premier 'Hello World'", 
          duration: "10 min", 
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Il existe trois façons principales d'afficher un message en JavaScript :</p>
              <ol class="list-decimal ml-5 space-y-2">
                <li><strong>console.log("Hello!");</strong> : Affiche dans la console (idéal pour le débogage).</li>
                <li><strong>alert("Hello!");</strong> : Affiche une boîte de dialogue (bloquant).</li>
                <li><strong>Modification du DOM</strong> : Injecte du texte dans une balise HTML via <code>textContent</code>.</li>
              </ol>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>const h1 = document.querySelector("h1");\nh1.textContent = "Hello World!";</code></pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Les Bases de la Syntaxe",
      topics: [
        { 
          id: "js-vars", 
          title: "Variables (let, const, var)", 
          duration: "30 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>En JS, on utilise trois mots-clés pour déclarer des variables :</p>
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr class="text-left border-b border-white/10">
                    <th class="py-2">Mot-clé</th>
                    <th class="py-2">Portée</th>
                    <th class="py-2">Mutable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-white/5">
                    <td class="py-2"><code>const</code></td>
                    <td class="py-2">Bloc</td>
                    <td class="py-2">Non</td>
                  </tr>
                  <tr class="border-b border-white/5">
                    <td class="py-2"><code>let</code></td>
                    <td class="py-2">Bloc</td>
                    <td class="py-2">Oui</td>
                  </tr>
                  <tr>
                    <td class="py-2"><code>var</code></td>
                    <td class="py-2">Fonction</td>
                    <td class="py-2">Oui</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-sm italic text-slate-400">Note : Préférez toujours const par défaut, puis let si nécessaire. Évitez var.</p>
            </div>
          `
        },
        { 
          id: "js-types", 
          title: "Types de données & Opérateurs", 
          duration: "45 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>JavaScript possède 7 types primitifs :</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">String</span>
                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Number</span>
                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Boolean</span>
                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Undefined</span>
                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Null</span>
                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Symbol</span>
                <span class="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">BigInt</span>
              </div>
              <h4 class="text-blue-400 font-bold mt-4">Opérateurs de comparaison</h4>
              <p>Utilisez toujours <code>===</code> (égalité stricte) au lieu de <code>==</code> pour éviter les conversions de type imprévues.</p>
            </div>
          `
        },
        { 
          id: "js-strings", 
          title: "Manipulation des chaînes", 
          duration: "25 min", 
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Les Template Literals (backticks \` \`) permettent l'interpolation de variables :</p>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm"><code>const nom = "Alice";\nconsole.log(\`Bonjour \${nom}\`);</code></pre>
              <h4 class="text-blue-400 font-bold mt-4">Méthodes utiles</h4>
              <ul class="list-disc ml-5 text-sm space-y-1">
                <li><code>.length</code> : Longueur</li>
                <li><code>.toUpperCase()</code> : Majuscules</li>
                <li><code>.includes()</code> : Vérifie la présence</li>
                <li><code>.slice(début, fin)</code> : Extrait une partie</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      title: "Structures de Contrôle",
      topics: [
        { 
          id: "js-cond", 
          title: "Conditions (if, else, switch)", 
          duration: "40 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Permettent de diriger le flux d'exécution :</p>
              <h4 class="text-blue-400 font-bold">If / Else</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm"><code>if (age >= 18) {\n  // Majeur\n} else {\n  // Mineur\n}</code></pre>
              <h4 class="text-blue-400 font-bold">L'opérateur ternaire</h4>
              <p><code>const statut = age >= 18 ? "Adulte" : "Enfant";</code></p>
            </div>
          `
        },
        { 
          id: "js-loops", 
          title: "Boucles (for, while, do while)", 
          duration: "50 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Répètent un bloc de code :</p>
              <ul class="list-disc ml-5 space-y-2">
                <li><strong>for</strong> : Nombre d'itérations connu.</li>
                <li><strong>while</strong> : Tant qu'une condition est vraie.</li>
                <li><strong>for...of</strong> : Itérer sur les valeurs d'un tableau.</li>
                <li><strong>for...in</strong> : Itérer sur les clés d'un objet.</li>
              </ul>
            </div>
          `
        },
        { 
          id: "js-errors", 
          title: "Gestion des erreurs (try...catch)", 
          duration: "30 min", 
          type: "recommended",
          content: `
            <div class="space-y-4">
              <p>Empêche le crash de l'application en cas d'erreur :</p>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm"><code>try {\n  // Code risqué\n} catch (err) {\n  console.error(err.message);\n} finally {\n  // S'exécute toujours\n}</code></pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Fonctions & Objets",
      topics: [
        { 
          id: "js-func", 
          title: "Déclarations & Arrow Functions", 
          duration: "55 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <h4 class="text-blue-400 font-bold">Fonction classique</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm"><code>function saluer(nom) { return "Salut " + nom; }</code></pre>
              <h4 class="text-blue-400 font-bold">Fonction fléchée (Arrow)</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm"><code>const saluer = (nom) => \`Salut \${nom}\`;</code></pre>
              <p class="text-sm italic text-slate-400">Les fonctions fléchées ne lient pas leur propre 'this'.</p>
            </div>
          `
        },
        { 
          id: "js-obj", 
          title: "Objets & Tableaux", 
          duration: "60 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <h4 class="text-blue-400 font-bold">Objets</h4>
              <p>Collections de paires clé-valeur. Accès via <code>objet.cle</code>.</p>
              <h4 class="text-blue-400 font-bold">Tableaux</h4>
              <p>Listes ordonnées. Premier index à 0. Utilisez <code>.push()</code>, <code>.pop()</code>, <code>.length</code>.</p>
            </div>
          `
        },
        { 
          id: "js-methods", 
          title: "Méthodes de tableaux (map, filter)", 
          duration: "45 min", 
          type: "recommended",
          content: `
            <div class="space-y-4">
              <p>Méthodes essentielles pour manipuler les données :</p>
              <ul class="list-disc ml-5 space-y-2">
                <li><strong>.map()</strong> : Transforme chaque élément et retourne un nouveau tableau.</li>
                <li><strong>.filter()</strong> : Sélectionne les éléments selon une condition.</li>
                <li><strong>.reduce()</strong> : Réduit le tableau à une seule valeur.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      title: "Le DOM & Événements",
      topics: [
        { 
          id: "js-dom", 
          title: "Sélectionner & Modifier des éléments", 
          duration: "50 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <h4 class="text-blue-400 font-bold">Sélection</h4>
              <p><code>document.querySelector(".ma-classe")</code> ou <code>getElementById("mon-id")</code>.</p>
              <h4 class="text-blue-400 font-bold">Modification</h4>
              <p>Changez le texte avec <code>.textContent</code> ou le style avec <code>.style.color</code>.</p>
            </div>
          `
        },
        { 
          id: "js-events", 
          title: "Écouter les événements (Click, Input)", 
          duration: "45 min", 
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Réagissez aux actions de l'utilisateur :</p>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm"><code>element.addEventListener("click", (e) => {\n  console.log("Cliqué !");\n});</code></pre>
            </div>
          `
        },
        { 
          id: "js-forms", 
          title: "Validation de formulaires", 
          duration: "40 min", 
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Vérifiez les données avant l'envoi :</p>
              <ol class="list-decimal ml-5 space-y-1">
                <li>Interceptez le <code>submit</code>.</li>
                <li>Utilisez <code>e.preventDefault()</code>.</li>
                <li>Vérifiez les valeurs.</li>
                <li>Affichez les erreurs si nécessaire.</li>
              </ol>
            </div>
          `
        }
      ]
    }
  ];

  const totalTopics = courseSections.reduce((acc, section) => acc + section.topics.length, 0);
  const progress = Math.round((completedTopics.size / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Top Progress Bar */}
      <div className="sticky top-0 z-50 w-full h-1.5 bg-slate-900">
        <motion.div 
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
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
            <div className="p-3 rounded-2xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              <Terminal size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                JavaScript <span className="text-blue-500">Débutant</span>
              </h1>
              <p className="text-slate-400 font-medium mt-1">Apprenez le langage qui alimente le web moderne.</p>
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
              <div className="text-2xl font-black text-white">~8h</div>
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
              {/* Vertical Path Line */}
              {sIdx !== courseSections.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-800" />
              )}

              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20 z-10">
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
                          : 'bg-slate-900/40 border-white/5 hover:border-blue-500/50 hover:bg-slate-900/60'}
                        ${expandedTopic === topic.id ? 'border-blue-500/50 bg-slate-900/60 rounded-b-none' : ''}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => toggleTopic(topic.id, e)}
                          className={`
                            w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                            ${completedTopics.has(topic.id) 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-slate-700 group-hover:border-blue-500'}
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
                        <div className={`p-2 rounded-xl bg-white/5 text-slate-400 transition-all ${expandedTopic === topic.id ? 'rotate-180 text-blue-500' : ''}`}>
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Expandable Theory Content */}
                    <AnimatePresence>
                      {expandedTopic === topic.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-slate-900/60 border-x border-b border-blue-500/50 rounded-b-2xl"
                        >
                          <div className="p-6 pt-2 text-slate-300 leading-relaxed text-sm">
                            <div className="flex items-center gap-2 mb-4 text-blue-400">
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
                                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'}
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
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-purple-600/10 border border-blue-500/20 text-center relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Trophy size={200} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Prêt pour la suite ?</h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8 font-medium">
            Une fois ce module terminé, vous aurez les bases solides pour attaquer les frameworks comme React.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 mx-auto">
            Module Suivant <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavascriptCourses;
