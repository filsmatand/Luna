import React, { useMemo, useState } from "react";
import {
  Layout,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Code,
  PenTool,

  Eye,
  Smartphone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


/**
 * Composant Fondamentaux du Web
 * Une interface interactive et moderne pour apprendre les bases du développement web.
 */
export default function HtmlCss() {
  const [completed, setCompleted] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const navigate = useNavigate();

  const lessons = useMemo(
    () => [
      {
        title: "Structure d’une page HTML",
        icon: <Layout className="text-orange-500" size={20} />,
        course:
          "HTML5 définit la structure. Une page commence par <!DOCTYPE html>, suivie de <html>, <head> (métadonnées) et <body> (contenu visible).",
        code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Ma Page</title>\n</head>\n<body>\n  <h1>Bonjour le monde</h1>\n</body>\n</html>",
        exercise:
          "Créez un fichier index.html avec la structure de base et ouvrez-le dans votre navigateur.",
      },
      {
        title: "Les balises essentielles",
        icon: <PenTool className="text-green-500" size={20} />,
        course:
          "Les balises sémantiques comme <header>, <nav>, <main>, <footer> et les balises de contenu comme <h1>, <p>, <a>, <img> sont la base du SEO et de l'accessibilité.",
        code: "<main>\n  <article>\n    <h2>Titre de l'article</h2>\n    <p>Contenu textuel...</p>\n    <a href='#'>Lire la suite</a>\n  </article>\n</main>",
        exercise:
          "Listez 5 balises HTML que vous utiliseriez pour créer un blog.",
      },
      {
        title: "Premiers pas en CSS",
        icon: <Code className="text-cyan-500" size={20} />,
        course:
          "CSS (Cascading Style Sheets) gère la présentation. On utilise des sélecteurs pour appliquer des propriétés (color, margin, font-size) aux éléments HTML.",
        code: "h1 {\n  color: #2563eb;\n  font-size: 2rem;\n  text-align: center;\n}",
        exercise:
          "Changez la couleur de fond de votre page HTML en bleu ciel en utilisant du CSS interne.",
      },
      {
        title: "Accessibilité et Responsive Design",
        icon: <Smartphone className="text-indigo-500" size={20} />,
        course:
          "Le Web doit être accessible à tous. Le responsive design utilise les Media Queries pour adapter l'affichage selon la taille de l'écran (mobile, tablette, desktop).",
        code: "@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}",
        exercise:
          "Testez le mode 'Responsive' dans les outils de développement de votre navigateur sur votre site préféré.",
      },
      {
        title: "Mini-projet : Ma première page Web",
        icon: <Eye className="text-rose-500" size={20} />,
        course:
          "C'est l'heure de tout assembler ! Créez une page de profil personnel incluant une photo, une bio et des liens vers vos réseaux sociaux.",
        code: "<!-- Combinez HTML pour la structure et CSS pour le style -->\n<section class='profile-card'>\n  <img src='photo.jpg' alt='Ma Photo'>\n  <h1>Mon Nom</h1>\n</section>",
        exercise:
          "Publiez votre mini-projet sur une plateforme comme GitHub Pages ou Netlify.",
      },
      {
        title: "Le CSS Box Model",
        icon: <Layout className="text-blue-500" size={20} />,
        course:
          "Tous les éléments HTML sont des boîtes. Chaque boîte possède un contenu (content), un espace intérieur (padding), une bordure (border) et un espace extérieur (margin). Comprendre le Box Model est indispensable pour créer des interfaces propres.",

        code: `.card{
        width:300px;
        padding:20px;
        border:2px solid #ddd;
        margin:20px;
        }`,

        exercise:
          "Crée une carte avec une marge de 30px, un padding de 20px et une bordure noire.",
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
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1 text-sm font-bold text-indigo-600 uppercase tracking-wider">
            <Layout size={16} />
            <span>Module Fondamentaux</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Maîtriser le <span className="text-indigo-600">Web</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Un parcours structuré pour comprendre l'architecture d'Internet,
            maîtriser la structure HTML et styliser vos premières interfaces.
          </p>
        </header>

        {/* Progress Card */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Votre Progression</h2>
              <p className="text-slate-500 text-sm">
                {completed.length} sur {lessons.length} étapes complétées
              </p>
            </div>
            <span className="text-3xl font-black text-indigo-600">
              {progress}%
            </span>
          </div>
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out"
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
                            : "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
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
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 p-10 text-white shadow-2xl">

  <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

    <div>

      <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">

        <Code size={18}/>

        Mise en pratique

      </div>

      <h2 className="mt-5 text-4xl font-bold">

        Il est temps de coder.

      </h2>

      <p className="mt-4 max-w-2xl text-indigo-100 leading-8">

        Tu connais maintenant les bases de HTML et CSS.
        Passe à la pratique en réalisant plusieurs exercices
        progressifs qui te permettront de construire tes
        premières pages Web comme un véritable développeur.

      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full bg-white/20 px-4 py-2">
          HTML
        </span>

        <span className="rounded-full bg-white/20 px-4 py-2">
          CSS
        </span>

        <span className="rounded-full bg-white/20 px-4 py-2">
          Responsive
        </span>

        <span className="rounded-full bg-white/20 px-4 py-2">
          Mini Projet
        </span>

      </div>

    </div>

    <button
      onClick={() => navigate("/html-css/pratique")}
      className="rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 transition hover:scale-105"
    >
      Commencer les exercices →
    </button>

  </div>

</div>
    </div>
  );
}
