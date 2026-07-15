import React, { useMemo, useState } from "react";
import {
  Layout,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Code,
  PenTool,
  Server,
  Zap,
  Eye,
  Smartphone,
} from "lucide-react";

import { ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * Composant Fondamentaux du Web
 * Une interface interactive et moderne pour apprendre les bases du développement web.
 */
export default function Fondamentaux() {
  const [completed, setCompleted] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const navigate = useNavigate();
  const lessons = useMemo(
    () => [
      {
        title: "Architecture Client / Serveur",
        icon: <Server className="text-cyan-500" size={20} />,
        course:
          "Lorsque tu visites un site web, ton navigateur (le client) envoie une requête à un serveur. Le serveur traite cette demande puis renvoie une réponse contenant les fichiers HTML, CSS, JavaScript ou des données.",

        code: `Client (Navigateur)
        │
        ▼
   Requête HTTP
        │
        ▼
      Serveur
        │
        ▼
Réponse (HTML/CSS/JS)
        │
        ▼
Affichage de la page`,

        exercise:
          "Explique avec tes propres mots le rôle du client et celui du serveur.",

        questions: [
          {
            question: "Qui envoie la requête ?",
            answer: "Le client (le navigateur).",
          },
          {
            question: "Qui répond à la requête ?",
            answer: "Le serveur.",
          },
          {
            question: "Que renvoie généralement le serveur ?",
            answer: "Des fichiers HTML, CSS, JavaScript ou des données.",
          },
        ],
      },

      {
        title: "Les Navigateurs Web",
        icon: <Eye className="text-green-500" size={20} />,
        course:
          "Un navigateur est un logiciel permettant d'afficher des pages Web. Les plus connus sont Google Chrome, Firefox, Microsoft Edge et Safari.",

        code: `Google Chrome
Firefox
Microsoft Edge
afari`,

        exercise:
          "Installe un navigateur de ton choix puis ouvre https://developer.mozilla.org",

        questions: [
          {
            question: "Quel est le rôle d'un navigateur ?",
            answer: "Afficher les pages Web.",
          },
          {
            question: "Le navigateur comprend-il le HTML ?",
            answer: "Oui.",
          },
          {
            question: "Le navigateur exécute-t-il JavaScript ?",
            answer: "Oui.",
          },
        ],
      },

      {
        title: "HTTP & HTTPS",
        icon: <Zap className="text-yellow-500" size={20} />,
        course:
          "HTTP est le protocole utilisé pour communiquer sur le Web. HTTPS est sa version sécurisée qui chiffre les données échangées entre le navigateur et le serveur.",

        code: `GET /index.html HTTP/1.1

    200 OK

    404 Not Found

    500 Internal Server Error`,

        exercise:
          "Ouvre trois sites Internet et vérifie qu'ils utilisent HTTPS.",

        questions: [
          {
            question: "Que signifie HTTPS ?",
            answer: "HTTP sécurisé grâce au chiffrement SSL/TLS.",
          },
          {
            question: "Que signifie le code 404 ?",
            answer: "Page introuvable.",
          },
          {
            question: "Le HTTPS est-il plus sécurisé que HTTP ?",
            answer: "Oui.",
          },
        ],
      },

      {
        title: "Les fichiers d'un site Web",
        icon: <Layout className="text-indigo-500" size={20} />,
        course:
          "Un site Web est constitué de plusieurs fichiers. HTML construit la structure, CSS ajoute le design et JavaScript apporte les interactions.",

        code: `index.html

style.css

script.js`,

        exercise: "Crée un dossier contenant ces trois fichiers.",

        questions: [
          {
            question: "Quel fichier contient la structure ?",
            answer: "HTML.",
          },
          {
            question: "Quel fichier contient le style ?",
            answer: "CSS.",
          },
          {
            question: "Quel fichier contient les interactions ?",
            answer: "JavaScript.",
          },
        ],
      },

      {
        title: "Les outils du développeur",
        icon: <Code className="text-orange-500" size={20} />,
        course:
          "Un développeur Web utilise plusieurs outils : VS Code pour écrire le code, Git pour gérer les versions, GitHub pour partager ses projets et Chrome DevTools pour déboguer.",

        code: `VS Code

Git

GitHub

Chrome DevTools`,

        exercise: "Installe VS Code et ouvre ton premier dossier de projet.",

        questions: [
          {
            question: "Quel logiciel permet d'écrire du code ?",
            answer: "VS Code.",
          },
          {
            question: "À quoi sert Git ?",
            answer: "À gérer les versions du projet.",
          },
          {
            question: "À quoi sert GitHub ?",
            answer: "À héberger et partager les projets.",
          },
        ],
      },

      {
        title: "Le Responsive Design",
        icon: <Smartphone className="text-pink-500" size={20} />,
        course:
          "Aujourd'hui, un site doit fonctionner sur ordinateur, tablette et téléphone. Le Responsive Design permet d'adapter automatiquement l'affichage.",

        code: `Desktop

    ↓

  Tablet

    ↓
  Mobile`,

        exercise:
          "Ouvre ton site sur ton téléphone et observe les différences.",

        questions: [
          {
            question: "Pourquoi rendre un site responsive ?",
            answer: "Pour qu'il soit utilisable sur tous les écrans.",
          },
          {
            question: "Quel appareil est le plus utilisé aujourd'hui ?",
            answer: "Le smartphone.",
          },
        ],
      },
    ],
    [],
  );

  const progress = Math.round((completed.length / lessons.length) * 100);

  const toggleLesson = (index, e) => {
    e.stopPropagation();
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {/* Header Section */}
        <header className="relative mb-12 px-4 text-center sm:mb-16 sm:px-6 lg:px-0">
          {/* Glow background */}
          <div className="absolute left-1/2 top-10 -z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl sm:h-72 sm:w-72" />

          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur-md sm:px-5 sm:text-xs">
            <Layout size={14} className="sm:h-4 sm:w-4" />
            <span>Module Fondamentaux</span>
          </div>

          {/* Title */}
          <h1 className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Comprendre le{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Web Moderne
            </span>
            <br />
            <span className="block sm:inline">de zéro à expert</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-8 sm:text-lg lg:text-xl">
            Apprenez les bases essentielles du développement web :
            <span className="font-semibold text-slate-800">
              {" "}
              Internet, HTML, CSS, serveurs et conception d'interfaces modernes.
            </span>
            <br className="hidden sm:block" />
            Construisez une vraie compréhension du Web, étape par étape.
          </p>

          
        </header>
        {/* Progress Card */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Votre Progression</h2>
              <p className="text-slate-500 text-sm">
                {completed.length} sur {lessons.length} étapes complétées
              </p>
            </div>
            <span className="text-3xl font-black text-yellow-600">
              {progress}%
            </span>
          </div>
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-500 transition-all duration-700 ease-out"
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
                    ? "border-indigo-200 bg-white shadow-lg ring-1 ring-indigo-50"
                    : "border-slate-200 bg-white/50 hover:border-indigo-300 hover:bg-white"
                }`}
              >
                {/* Lesson Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                        isCompleted
                          ? "bg-green-100"
                          : "bg-slate-100 group-hover:bg-indigo-50"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="text-green-600" size={22} />
                      ) : (
                        lesson.icon
                      )}
                    </div>
                    <span
                      className={`text-lg font-semibold ${isExpanded ? "text-indigo-700" : "text-slate-700"}`}
                    >
                      {lesson.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => toggleLesson(index, e)}
                      className={`hidden sm:flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                        isCompleted
                          ? "bg-green-50 text-green-700"
                          : "bg-slate-100 text-slate-500 hover:bg-indigo-600 hover:text-white"
                      }`}
                    >
                      {isCompleted ? "Complété" : "Marquer comme fini"}
                    </button>
                    {isExpanded ? (
                      <ChevronUp size={20} className="text-indigo-400" />
                    ) : (
                      <ChevronDown size={20} className="text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Lesson Content */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-white p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid gap-8 md:grid-cols-2">
                      {/* Course Part */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-indigo-600">
                          <BookOpen size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">
                            Cours Essentiel
                          </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {lesson.course}
                        </p>

                        <div className="flex items-center gap-2 text-rose-500 pt-2">
                          <PenTool size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">
                            Exercice
                          </h3>
                        </div>
                        <div className="rounded-xl bg-rose-50 p-4 text-rose-800 text-sm border border-rose-100">
                          {lesson.exercise}
                        </div>
                      </div>

                      {/* Code Part */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Code size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">
                            Code Concret
                          </h3>
                        </div>
                        <div className="relative group/code">
                          <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-indigo-300 font-mono leading-relaxed shadow-inner">
                            <code>{lesson.code}</code>
                          </pre>
                          <div className="absolute top-3 right-3 opacity-0 group-hover/code:opacity-100 transition-opacity">
                            <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-700 uppercase">
                              JSX / Code
                            </span>
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
                            : "bg-yellow-400 text-white shadow-lg shadow-indigo-200"
                        }`}
                      >
                        {isCompleted
                          ? "Leçon terminée ✓"
                          : "Valider cette étape"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-5xl px-4 sm:mt-20 sm:px-0"
        >
          <div className="relative overflow-hidden rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-white  p-5 shadow-lg sm:p-8">
            {/* Cercle décoratif */}
            <div className=" absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-200/30 blur-3xl sm:-right-10 sm:-top-10"/>

            <div className="relative flex flex-col  gap-6 md:flex-row  md:items-center md:justify-between md:gap-8" >
              {/* Texte */}
      <div className=" flex flex-col  gap-4 sm:flex-row  sm:items-start">
                {/* Icon */}
         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-white shadow-lg sm:h-16 sm:w-16">
              <ClipboardCheck size={28} className="sm:h-8 sm:w-8" />
              </div>

                <div>
                  {/* Badge */}
                  <span className="inline-block  rounded-full bg-yellow-100 px-3 py-1 text-[10px]  font-semibold uppercase tracking-wider text-yellow-700 sm:text-xs ">
                    Validation
                  </span>

                  {/* Title */}
                  <h2 className=" mt-3  text-2xl  font-bold  leading-tight  text-stone-900 sm:text-3xl">
                    Quiz Final des Fondamentaux
                  </h2>

                  {/* Description */}
                  <p className="mt-3  max-w-2xl  text-sm leading-relaxed text-stone-600 sm:text-base" >
                    Teste tes connaissances sur Internet, le Web, HTML, CSS,
                    JavaScript, HTTP, DNS, Git et les autres notions
                    essentielles. Obtiens ton score et valide ce premier module
                    avant de continuer.
                  </p>
                </div>
              </div>

              {/* Bouton */}
              <button
                onClick={() => navigate("/quiz")}
                className=" group inline-flex w-full items-center  justify-center  gap-3  rounded-xl  bg-yellow-500  px-7 py-3 font-semibold 
                  text-white transition  hover:bg-yellow-600 sm:w-auto md:shrink-0 ">
                Commencer
                <ArrowRight size={20}className="transition-transform  group-hover:translate-x-1"/>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
