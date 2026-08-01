import {
  Globe,
  Network,
  Monitor,
  ShieldCheck,
  Server,
  FileCode,
  Palette,
  Braces,
  Smartphone,
  GitBranch,
  Link,
  ArrowLeftRight,
  FileWarning,
  Code2,
  Rocket,
  Trophy,
  RotateCcw,
  Eye,
  X,
  CheckCircle2, 
  XCircle
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const finalQuiz = [
  {
    icon: Globe,
    question: "Quelle est la différence entre Internet et le Web ?",
    options: [
      "Ils sont exactement identiques.",
      "Internet est un navigateur.",
      "Internet est le réseau mondial, le Web est un service qui fonctionne dessus.",
      "Le Web est plus ancien qu'Internet.",
    ],
    answer: 2,
    explanation:
      "Internet est un immense réseau mondial, tandis que le Web est un ensemble de pages accessibles via Internet.",
  },

  {
    icon: Network,
    question: "Quel est le rôle du DNS ?",
    options: [
      "Créer des pages HTML.",
      "Transformer un nom de domaine en adresse IP.",
      "Protéger les sites Internet.",
      "Afficher les images.",
    ],
    answer: 1,
    explanation:
      "Le DNS traduit un nom de domaine en adresse IP afin que le navigateur puisse trouver le serveur.",
  },

  {
    icon: Monitor,
    question: "À quoi sert un navigateur ?",
    options: [
      "Créer des sites Web.",
      "Afficher les pages Web.",
      "Programmer en Java.",
      "Héberger des sites.",
    ],
    answer: 1,
    explanation:
      "Le navigateur interprète le HTML, le CSS et le JavaScript pour afficher les pages.",
  },

  {
    icon: ShieldCheck,
    question: "Pourquoi HTTPS est-il plus sécurisé que HTTP ?",
    options: [
      "Parce qu'il est plus rapide.",
      "Parce qu'il chiffre les données.",
      "Parce qu'il fonctionne uniquement avec Chrome.",
      "Parce qu'il bloque les publicités.",
    ],
    answer: 1,
    explanation:
      "HTTPS protège les données échangées entre le navigateur et le serveur grâce au chiffrement.",
  },

  {
    icon: Server,
    question: "Quel est le rôle d'un serveur ?",
    options: [
      "Afficher les pages à l'écran.",
      "Stocker et envoyer les fichiers demandés.",
      "Créer des animations.",
      "Installer Windows.",
    ],
    answer: 1,
    explanation:
      "Le serveur reçoit les requêtes des clients et renvoie les fichiers ou les données demandées.",
  },

  {
    icon: FileCode,
    question: "Quel est le rôle de HTML ?",
    options: [
      "Ajouter du style.",
      "Créer la structure d'une page.",
      "Créer des animations.",
      "Communiquer avec une API.",
    ],
    answer: 1,
    explanation: "HTML sert à construire la structure d'une page Web.",
  },

  {
    icon: Palette,
    question: "Quel est le rôle de CSS ?",
    options: [
      "Créer la structure.",
      "Ajouter du style et la mise en page.",
      "Programmer la logique.",
      "Créer des bases de données.",
    ],
    answer: 1,
    explanation: "CSS permet de personnaliser l'apparence des pages Web.",
  },

  {
    icon: Braces,
    question: "Quel est le rôle de JavaScript ?",
    options: [
      "Créer des images.",
      "Ajouter des interactions à la page.",
      "Créer les balises HTML.",
      "Installer un navigateur.",
    ],
    answer: 1,
    explanation:
      "JavaScript rend les pages interactives : boutons, formulaires, animations...",
  },

  {
    icon: Smartphone,
    question: "Pourquoi un site doit-il être responsive ?",
    options: [
      "Pour fonctionner uniquement sur ordinateur.",
      "Pour s'adapter à tous les écrans.",
      "Pour être plus rapide.",
      "Pour remplacer JavaScript.",
    ],
    answer: 1,
    explanation:
      "Un site responsive s'adapte aux smartphones, tablettes et ordinateurs.",
  },

  {
    icon: GitBranch,
    question: "À quoi servent Git et GitHub ?",
    options: [
      "À dessiner des interfaces.",
      "À gérer et partager le code source.",
      "À créer des vidéos.",
      "À écrire du HTML.",
    ],
    answer: 1,
    explanation:
      "Git permet de suivre les versions du code et GitHub de partager les projets.",
  },

  {
    icon: Link,
    question: "Qu'est-ce qu'une URL ?",
    options: [
      "Une adresse permettant d'accéder à une ressource sur Internet.",
      "Une adresse IP.",
      "Un navigateur.",
      "Une base de données.",
    ],
    answer: 0,
    explanation: "Une URL indique l'emplacement d'une ressource sur le Web.",
  },

  {
    icon: ArrowLeftRight,
    question: "Quelle méthode HTTP permet de récupérer des données ?",
    options: ["POST", "DELETE", "GET", "PUT"],
    answer: 2,
    explanation:
      "GET est utilisée pour récupérer des données depuis un serveur.",
  },

  {
    icon: FileWarning,
    question: "Quel code HTTP signifie que la page est introuvable ?",
    options: ["200", "301", "404", "500"],
    answer: 2,
    explanation:
      "Le code 404 signifie que la ressource demandée est introuvable.",
  },

  {
    icon: FileCode, // Changed from Code2 to FileCode to match existing icons
    question: "Quel outil est principalement utilisé pour écrire du code ?",
    options: ["Google Chrome", "VS Code", "Photoshop", "PowerPoint"],
    answer: 1,
    explanation:
      "Visual Studio Code est l'un des éditeurs de code les plus populaires.",
  },

  {
    icon: Rocket,
    question:
      "Quelle est la première technologie à apprendre pour créer un site Web ?",
    options: ["React", "Node.js", "HTML", "MongoDB"],
    answer: 2,
    explanation:
      "HTML est la première technologie à maîtriser avant CSS et JavaScript.",
  },
];

export default function QuizFinal() {
  const [selected, setSelected] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);

  const score = finalQuiz.reduce((total, quiz, index) => {
    return selected[index] === quiz.answer ? total + 1 : total;
  }, 0);

  const resetQuiz = () => {
    setSelected({});
    setShowResult(false);
    setShowPopup(false);
    setShowCorrection(false);
  };

  const handleCorrectQuiz = () => {
    setShowResult(true);
    setShowPopup(true);
  };

  const handleViewCorrectAnswers = () => {
    setShowPopup(false);
    setShowCorrection(true);
  };

  return (
    <section className="min-h-screen bg-slate-900 py-10 px-4 sm:px-6 ">
      <div className="mx-auto max-w-5xl lg:px-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white">Quiz Final</h1>
          <p className="mt-4 text-gray-400">
            Vérifie si tu maîtrises les fondamentaux du Web.
          </p>
        </div>

        <div className="space-y-8 ">
          {finalQuiz.map((quiz, index) => {
            const Icon = quiz.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl border p-7 shadow-sm transition-all duration-300
                  ${showCorrection && selected[index] !== quiz.answer ? "border-blue-500/30 bg-slate-950/50" : "border-slate-800 bg-slate-950"}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon size={24} />
                  </div>
                  <h2 className="font-semibold text-xl text-white">
                    {index + 1}. {quiz.question}
                  </h2>
                </div>

                <div className="mt-6 space-y-3 text-slate-300">
                  {quiz.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => !showResult && setSelected({
                        ...selected,
                        [index]: i,
                      })}
                      className={`w-full rounded-xl border px-5 py-4 text-left transition duration-200
                        ${selected[index] === i
                          ? "border-blue-500 bg-blue-500/20 text-white"
                          : "hover:border-blue-500/50 border-slate-800"
                        }
                        ${showCorrection && i === quiz.answer
                          ? "border-green-500 bg-green-500/20 text-white"
                          : ""
                        }
                        ${showCorrection && selected[index] === i && i !== quiz.answer
                          ? "border-red-500 bg-red-500/20 text-white"
                          : ""
                        }
                        ${showResult ? "cursor-not-allowed" : ""}
                      `}
                    >
                      {option}
                      {showCorrection && i === quiz.answer && (
                        <CheckCircle2 size={18} className="inline-block ml-2 text-green-500" />
                      )}
                      {showCorrection && selected[index] === i && i !== quiz.answer && (
                        <XCircle size={18} className="inline-block ml-2 text-red-500" />
                      )}
                    </button>
                  ))}
                </div>

                {showCorrection && (
                  <div className="mt-6 text-slate-400">
                    <p className="text-sm">
                      <span className="font-bold text-blue-500">Explication :</span> {quiz.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          {!showResult ? (
            <button
              onClick={handleCorrectQuiz}
              className="rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-600"
            >
              Corriger le Quiz
            </button>
          ) : (
            <div className="space-y-4">
              {!showCorrection && (
                <div className="mb-4">
                  <h2 className="text-4xl font-bold text-white">
                    {score} / {finalQuiz.length}
                  </h2>
                  <p className="mt-3 text-gray-400">
                    Tu as répondu correctement à {score} questions sur{" "}
                    {finalQuiz.length}.
                  </p>
                </div>
              )}
              <button
                onClick={resetQuiz}
                className="inline-flex items-center rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 mr-4"
              >
                <RotateCcw size={20} className="mr-2" /> Recommencer
              </button>
              {!showCorrection && (
                <button
                  onClick={handleViewCorrectAnswers}
                  className="inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
                >
                  <Eye size={20} className="mr-2" /> Voir les bonnes réponses
                </button>
              )}
            </div>
          )}
        </div>

        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{
                  scale: 0.7,
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  scale: 0.7,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative w-full max-w-md rounded-3xl bg-slate-900 p-8 text-center shadow-2xl border border-slate-800"
              >
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-slate-800"
                >
                  <X size={20} />
                </button>

                <div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"
                >
                  <Trophy size={45} />
                </div>

                <h2 className="mt-6 text-3xl font-black text-white">
                  Résultat du Quiz
                </h2>

                <div className="mt-5 text-6xl font-black text-blue-500">
                  {score}
                  <span className="text-2xl text-gray-500">
                    /{finalQuiz.length}
                  </span>
                </div>

                <p className="mt-3 text-gray-400">
                  Tu as obtenu{" "}
                  <strong>
                    {Math.round((score / finalQuiz.length) * 100)}%
                  </strong>
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <div className="flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-green-500">
                    <CheckCircle2 size={20} />
                    {score} Bonnes
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-red-500">
                    <XCircle size={20} />
                    {finalQuiz.length - score} Mauvaises
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={handleViewCorrectAnswers}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
                  >
                    <Eye size={20} className="mr-2" /> Voir les bonnes réponses
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="w-full inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                  >
                    <RotateCcw size={20} className="mr-2" /> Recommencer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
