import React, { useMemo, useState } from "react";
import {  Rocket, CheckCircle,  ChevronDown, ChevronUp, BookOpen, Code, PenTool, Cpu, Database, Layers, Wind, Zap, Terminal} from "lucide-react";

/**
 * Composant Intermediaire
 * Un parcours pour approfondir les connaissances en JavaScript, frameworks et gestion de données.
 */
export default function Intermediaire() {
  const [completed, setCompleted] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const lessons = useMemo(
    () => [
      {
        title: "Maîtrise de JavaScript ES6+",
        icon: <Zap className="text-yellow-500" size={20} />,
        course: "Le JavaScript moderne (ES6+) a introduit des concepts puissants comme la décomposition (destructuring), les fonctions fléchées, les templates literals et les modules. C'est la base de tout framework moderne.",
       code: `// Destructuring & Arrow Functions const user = { name: 'Ali', age: 25 }; const { name } = user; const greet = (name) => \`Bonjour \${name}!\`; console.log(greet(name));`,
        exercise: "Transformez une fonction classique utilisant 'var' en une fonction fléchée utilisant 'const' et des templates literals."
      },
      {
        title: "Manipulation avancée du DOM",
        icon: <Layers className="text-blue-500" size={20} />,
        course: "Au-delà de getElementById, le niveau intermédiaire consiste à gérer les événements de manière performante (delegation), à manipuler les classes dynamiquement et à créer des éléments à la volée.",
        code: "const btn = document.querySelector('.btn');\nbtn.addEventListener('click', (e) => {\n  e.target.classList.toggle('active');\n  const newDiv = document.createElement('div');\n  newDiv.textContent = 'Ajouté !';\n  document.body.appendChild(newDiv);\n});",
        exercise: "Créez une liste de tâches où chaque élément peut être supprimé au clic en utilisant la délégation d'événements."
      },
      {
        title: "Introduction aux Frameworks (React)",
        icon: <Cpu className="text-cyan-500" size={20} />,
        course: "React permet de construire des interfaces basées sur des composants. Le concept clé est l'état (State) et les propriétés (Props) pour rendre l'UI réactive aux changements de données.",
        code: "function Counter() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Score: {count}\n    </button>\n  );\n}",
        exercise: "Créez un composant React simple qui affiche un message différent selon si un utilisateur est connecté ou non."
      },
      {
        title: "API Fetch et Asynchronisme",
        icon: <Terminal className="text-purple-500" size={20} />,
        course: "Le web moderne est asynchrone. Utiliser async/await avec Fetch permet de récupérer des données depuis des serveurs externes sans bloquer l'interface utilisateur.",
        code: "async function getData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Erreur:', error);\n  }\n}",
        exercise: "Utilisez l'API JSONPlaceholder pour récupérer une liste d'utilisateurs et les afficher dans une liste HTML."
      },
      {
        title: "CSS Moderne : Flexbox & Grid",
        icon: <Wind className="text-emerald-500" size={20} />,
        course: "Pour des designs complexes, Flexbox gère les alignements unidimensionnels, tandis que CSS Grid est parfait pour les mises en page bidimensionnelles (lignes et colonnes).",
        code: ".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  align-items: center;\n}",
        exercise: "Réalisez une grille de galerie d'images responsive qui s'adapte automatiquement au nombre d'images."
      },
      {
        title: "Gestion d'État et Stockage Local",
        icon: <Database className="text-rose-500" size={20} />,
        course: "Apprenez à persister les données utilisateur dans le navigateur en utilisant localStorage. C'est essentiel pour sauvegarder des préférences ou des paniers d'achat.",
        code: "// Sauvegarder\nlocalStorage.setItem('theme', 'dark');\n\n// Récupérer\nconst theme = localStorage.getItem('theme');\nconsole.log(theme); // 'dark'",
        exercise: "Créez un formulaire qui sauvegarde le nom de l'utilisateur et le réaffiche automatiquement lors du rechargement de la page."
      }
    ],
    []
  );

  const progress = Math.round((completed.length / lessons.length) * 100);

  const toggleLesson = (index, e) => {
    e.stopPropagation();
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-amber-50/30 font-sans text-slate-900 selection:bg-amber-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-bold text-amber-700 uppercase tracking-wider">
            <Rocket size={16} />
            <span>Niveau Intermédiaire</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Passez à la <span className="text-amber-600">Vitesse Supérieure</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Approfondissez vos compétences en JavaScript moderne, maîtrisez les frameworks 
            et apprenez à gérer des données dynamiques pour créer des applications web interactives.
          </p>
        </header>

        {/* Progress Card */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-amber-200/20 ring-1 ring-amber-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Avancement du Parcours</h2>
              <p className="text-slate-500 text-sm">{completed.length} sur {lessons.length} modules maîtrisés</p>
            </div>
            <span className="text-3xl font-black text-amber-600">{progress}%</span>
          </div>
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const isExpanded = expandedIndex === index;
            const isCompleted = completed.includes(index);

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isExpanded 
                    ? "border-amber-200 bg-white shadow-lg ring-1 ring-amber-50" 
                    : "border-slate-200 bg-white/50 hover:border-amber-300 hover:bg-white"
                }`}
              >
                {/* Lesson Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isCompleted ? "bg-green-100" : "bg-slate-100 group-hover:bg-amber-50"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="text-green-600" size={22} />
                      ) : (
                        lesson.icon
                      )}
                    </div>
                    <span className={`text-lg font-semibold ${isExpanded ? "text-amber-700" : "text-slate-700"}`}>
                      {lesson.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => toggleLesson(index, e)}
                      className={`hidden sm:flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                        isCompleted 
                          ? "bg-green-50 text-green-700" 
                          : "bg-slate-100 text-slate-500 hover:bg-amber-600 hover:text-white"
                      }`}
                    >
                      {isCompleted ? "Acquis" : "Marquer comme acquis"}
                    </button>
                    {isExpanded ? <ChevronUp size={20} className="text-amber-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                  </div>
                </button>

                {/* Lesson Content */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-white p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid gap-8 md:grid-cols-2">
                      {/* Course Part */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-amber-600">
                          <BookOpen size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">Concept Avancé</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {lesson.course}
                        </p>
                        
                        <div className="flex items-center gap-2 text-orange-500 pt-2">
                          <PenTool size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">Défi Pratique</h3>
                        </div>
                        <div className="rounded-xl bg-orange-50 p-4 text-orange-800 text-sm border border-orange-100">
                          {lesson.exercise}
                        </div>
                      </div>

                      {/* Code Part */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Code size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">Code Application</h3>
                        </div>
                        <div className="relative group/code">
                          <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-amber-200 font-mono leading-relaxed shadow-inner">
                            <code>{lesson.code}</code>
                          </pre>
                          <div className="absolute top-3 right-3 opacity-0 group-hover/code:opacity-100 transition-opacity">
                             <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-700 uppercase">JavaScript / React</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile toggle button */}
                    <div className="mt-6 sm:hidden">
                      <button
                        onClick={(e) => toggleLesson(index, e)}
                        className={`w-full py-3 rounded-xl font-bold transition-all ${
                          isCompleted 
                            ? "bg-green-100 text-green-700" 
                            : "bg-amber-600 text-white shadow-lg shadow-amber-200"
                        }`}
                      >
                        {isCompleted ? "Module acquis ✓" : "Valider ce module"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
