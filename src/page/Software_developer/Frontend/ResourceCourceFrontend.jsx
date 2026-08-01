import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Terminal, Database, GitBranch, Sparkles, GraduationCap, Cloud, Zap, TrendingUp, Cpu, ServerCog, HardDrive, Globe, Lock, Lightbulb} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaAws, } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiKubernetes,  } from "react-icons/si";

const modules = [
  // Cours Débutant
  {
    title: "Les fondamentaux du Web",
    description:
      "Comprendre comment fonctionne Internet, les navigateurs et les bases du développement web.",
    icon: Globe,
    level: "Débutant",
    path: "/fondamentaux",
  },
  {
    title: "HTML & CSS Essentiels",
    description:
      "Créer des pages web structurées et stylisées avec HTML5 et CSS3, incluant le responsive design.",
    icon: Code2,
    level: "Débutant",
    path: "/htmlcss",
  },
  {
    title: "JavaScript Fondamental",
    description:
      "Apprendre la logique de programmation, les variables, fonctions, conditions et la manipulation du DOM.",
    icon: Terminal,
    level: "Débutant",
    path: "/javascript",
  },
  {
    title: "Git & GitHub pour Débutants",
    description:
      "Maîtriser le contrôle de version et la collaboration sur des projets de code.",
    icon: GitBranch,
    level: "Débutant",
    path: "/github",
  },
  {
    title: "Introduction aux bases de données",
    description:
      "Comprendre les concepts clés des bases de données relationnelles et NoSQL.",
    icon: Database,
    level: "Débutant",
    path: "/introbase",
  },
  {
    title: "Tailwind CSS Rapide",
    description:
      "Développer des interfaces modernes et responsives rapidement avec Tailwind CSS.",
    icon: SiTailwindcss,
    level: "Débutant",
    path: "/tailwindcss",
  },

  // Cours Intermédiaire
  {
    title: "React.js: Composants et Hooks",
    description:
      "Construire des applications web interactives avec React, ses composants et ses hooks.",
    icon: FaReact,
    level: "Intermédiaire",
    path: "/reactjs",
  },
  {
    title: "Node.js & Express.js",
    description:
      "Développer des backends robustes et des APIs RESTful avec Node.js et Express.",
    icon: FaNodeJs,
    level: "Intermédiaire",
    path: "/nodejs",
  },
  {
    title: "Bases de TypeScript",
    description:
      "Améliorer la qualité et la maintenabilité du code JavaScript avec TypeScript.",
    icon: SiTypescript,
    level: "Intermédiaire",
    path: "/typescript",
  },
  {
    title: "Déploiement Cloud (AWS/Azure)",
    description:
      "Déployer des applications sur des plateformes cloud comme AWS ou Azure.",
    icon: Cloud,
    level: "Intermédiaire",
    path: "/cloud-deployment",
  },
  {
    title: "API RESTful Design",
    description:
      "Concevoir et implémenter des APIs RESTful efficaces et sécurisées.",
    icon: Zap,
    level: "Intermédiaire",
    path: "/api-design",
  },
  {
    title: "Sécurité Web Essentielle",
    description:
      "Apprendre les principes fondamentaux de la sécurité web pour protéger les applications.",
    icon: Lock,
    level: "Intermédiaire",
    path: "/web-security",
  },

  // Cours Expert
  {
    title: "Architecture Microservices",
    description:
      "Concevoir et implémenter des architectures basées sur les microservices.",
    icon: ServerCog,
    level: "Expert",
    path: "/microservices",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Mettre en place des pipelines d'intégration et de déploiement continus avec Docker et Kubernetes.",
    icon: SiKubernetes,
    level: "Expert",
    path: "/devops",
  },
  {
    title: "Machine Learning avec Python",
    description:
      "Développer des modèles de Machine Learning avec Python, TensorFlow et PyTorch.",
    icon: Cpu,
    level: "Expert",
    path: "/machine-learning",
  },
  {
    title: "Optimisation des Performances Web",
    description:
      "Techniques avancées pour améliorer la vitesse et la réactivité des applications web.",
    icon: TrendingUp,
    level: "Expert",
    path: "/web-perf",
  },
  {
    title: "Blockchain et Web3",
    description:
      "Explorer les concepts de la blockchain, des contrats intelligents et du développement Web3.",
    icon: HardDrive,
    level: "Expert",
    path: "/blockchain",
  },
  {
    title: "UI/UX Avancé & Accessibilité",
    description:
      "Maîtriser les principes d'UI/UX avancés et l'accessibilité pour des interfaces inclusives.",
    icon: Lightbulb,
    level: "Expert",
    path: "/ui-ux-advanced",
  },
];

export default function Debutant() {
  const Navigate = useNavigate();

  return (
    <div className="min-h-screen lg:px-24 bg-gray-950 font-sans text-slate-900 selection:bg-blue-100 ">

      {/* HERO */}
      <div className="mx-auto lg:px-24 mb-16 max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex mt-6 items-center gap-2 rounded-full border border-slate-200 bg-blue-950 px-4 py-2 text-sm font-semibold text-white">
          <Sparkles size={18} />
          Parcours Frontend 2026
        </div>

  

        {/* Technologies */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <FaHtml5 className="text-xl text-orange-500" />
            <span>HTML5</span>
          </div>

          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <FaCss3Alt className="text-xl text-blue-500" />
            <span>CSS3</span>
          </div>

          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <FaJs className="text-xl text-yellow-400" />
            <span>JavaScript</span>
          </div>

          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <FaReact className="text-xl text-cyan-400" />
            <span>React.js</span>
          </div>

          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <SiNextdotjs className="text-xl text-white" />
            <span>Next.js</span>
          </div>

          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <FaNodeJs className="text-xl text-green-500" />
            <span>Node.js</span>
          </div>

          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <FaPython className="text-xl text-blue-400" />
            <span>Python</span>
          </div>

          <div className="group flex w-full items-center justify-center gap-3 rounded-lg border border-blue-900 bg-zinc-900 px-10 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/20 lg:w-auto">
            <FaAws className="text-xl text-orange-400" />
            <span>AWS</span>
          </div>
        </div>
      </div>

      {/* OBJECTIFS - COURS PAR NIVEAU */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
         

          {['Débutant', 'Intermédiaire', 'Expert'].map(level => (
            <div key={level} className="mb-16">
              <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                <GraduationCap size={28} /> {level}
              </h3>
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {modules.filter(module => module.level === level).map((module, index) => {
                  const IconComponent = module.icon; // Renommer pour éviter la confusion

                  return (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-xl border border-blue-950 bg-slate-900 p-5 hover:border-blue-400 hover:shadow-md transition"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950 text-white">
                          {/* Rendu de l'icône en tant que composant React */}
                          {IconComponent && <IconComponent size={20} />}
                        </div>

                        <span className="rounded-lg border border-blue-300 bg-transparent px-3 py-1 text-xs font-medium text-gray-200">
                          {module.level}
                        </span>
                      </div>

                      {/* Titre */}
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {module.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {module.description}
                      </p>

                      {/* Bouton */}
                      <button
                        onClick={() => Navigate(module.path)}
                        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 hover:text-white transition"
                      >
                        Explorer
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
