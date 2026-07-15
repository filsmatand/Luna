import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {Code2, Terminal, Layout, Database, GitBranch,} from "lucide-react";
import { Sparkles, BookOpen, GraduationCap } from "lucide-react";

import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact } from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const modules = [
  {
    title: "Les fondamentaux du Web",
    description:
      "Comprendre comment fonctionne Internet, les navigateurs et les bases du développement.",
    icon: Layout,
    lessons: "12 leçons",
    path: "/fondamentaux",
  },
  {
    title: "HTML & CSS",
    description:
      "Créer des pages modernes avec une structure propre et des designs responsives.",
    icon: Code2,
    lessons: "18 leçons",
    path: "/htmlcss",
  },
  {
    title: "JavaScript Fondamental",
    description:
      "Apprendre la logique, les variables, fonctions, conditions et manipuler le DOM.",
    icon: Terminal,
    lessons: "25 leçons",
    path: "/javascript",
  },
  {
    title: "Git & GitHub",
    description:
      "Apprendre à gérer tes projets comme un développeur professionnel.",
    icon: GitBranch,
    lessons: "10 leçons",
    path: "/git",
  },
  {
    title: "Introduction aux bases de données",
    description:
      "Comprendre comment les applications stockent et organisent les données.",
    icon: Database,
    lessons: "8 leçons",
    path: "/database",
  },
];



export default function Debutant() {
  const Navigate = useNavigate();



  return (
    <div className="min-h-screen bg-stone-50">
      {/* HERO */}

      <div className="mx-auto mb-16 max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex mt-6 items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-600">
          <Sparkles size={18} />
          Parcours Débutant
        </div>

        {/* Titre */}
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
          Maîtrise les bases du
          <span className="block text-amber-500">Développement Web</span>
        </h2>

        {/* Description */}
        <p className=" p-6 mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          <BookOpen size={18} className="mr-2 inline text-amber-500" />
          Découvre les technologies essentielles du Web grâce à des cours
          structurés, des exercices pratiques et des projets concrets pour
          construire de solides compétences.
        </p>

        {/* Technologies */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <FaHtml5 className="text-xl text-orange-600" />
            <span>HTML</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <FaCss3Alt className="text-xl text-blue-600" />
            <span>CSS</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <FaJs className="text-xl text-yellow-500" />
            <span>JavaScript</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <FaReact className="text-xl text-cyan-500" />
            <span>React</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <SiTailwindcss className="text-xl text-sky-500" />
            <span>Tailwind</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <FaGitAlt className="text-xl text-red-500" />
            <span>Git</span>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-10 flex justify-center gap-10">
          <div className="text-center">
            <GraduationCap className="mx-auto mb-2 text-amber-500" size={28} />
            <h3 className="text-2xl font-bold">70+</h3>
            <p className="text-sm text-gray-500">Leçons</p>
          </div>

          <div className="text-center">
            <BookOpen className="mx-auto mb-2 text-amber-500" size={28} />
            <h3 className="text-2xl font-bold">5</h3>
            <p className="text-sm text-gray-500">Modules</p>
          </div>

          <div className="text-center">
            <Sparkles className="mx-auto mb-2 text-amber-500" size={28} />
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="text-sm text-gray-500">Pratique</p>
          </div>
        </div>
      </div>

      {/* OBJECTIFS */}

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-stone-900">
            Ce que tu vas apprendre
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-yellow-400 hover:shadow-md transition"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                      <Icon size={20} />
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {module.lessons}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {module.description}
                  </p>

                  {/* Bouton */}
                  <button
                    onClick={() => Navigate(module.path)}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-yellow-400 px-4 py-2 text-sm font-medium text-yellow-600 hover:bg-yellow-400 hover:text-white transition"
                  >
                    Explorer
                   
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}

      {/* <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className=" text-3xl font-bold">Technologies maîtrisées</h2>

          <div className=" mt-8 flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className=" flex items-center gap-2 rounded-full bg-stone-100 px-5 py-3 font-medium"
              >
                <CheckCircle size={18} /> {tech}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      

      {/* FOOTER CTA */}
      {/* 
      <section className=" px-6 py-20">
              <div className=" mx-auto max-w-4xl rounded-3xl bg-black p-10 text-center text-white">
                
                  <h2 className=" text-3xl font-bold">
                      Prêt à commencer ton aventure ?
                  </h2>

                  <p className=" mt-4 text-stone-300">Construis tes premières applications et développe les compétences recherchées par les entreprises.</p>
                      <button onClick={handlego}  className="mt-8 inline-flex items-center gap-3 rounded-tr-full rounded-tl-full rounded-bl-full bg-amber-500 px-8 py-4 font-semibold text-black">
                                  Voir le premier cours
                      <ArrowRight size={20}/>
                      </button>
              </div>
      </section> */}
    </div>
  );
}
