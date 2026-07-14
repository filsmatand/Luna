import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Terminal,
  Layout,
  Database,
  GitBranch,
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";


const modules = [
  {
    title: "Les fondamentaux du Web",
    description:
      "Comprendre comment fonctionne Internet, les navigateurs et les bases du développement.",
    icon: Layout,
    lessons: "12 leçons"
  },

  {
    title: "HTML & CSS",
    description:
      "Créer des pages modernes avec une structure propre et des designs responsives.",
    icon: Code2,
    lessons: "18 leçons"
  },

  {
    title: "JavaScript Fondamental",
    description:
      "Apprendre la logique, les variables, fonctions, conditions et manipuler le DOM.",
    icon: Terminal,
    lessons: "25 leçons"
  },

  {
    title: "Git & GitHub",
    description:
      "Apprendre à gérer tes projets comme un développeur professionnel.",
    icon: GitBranch,
    lessons: "10 leçons"
  },

  {
    title: "Introduction aux bases de données",
    description:
      "Comprendre comment les applications stockent et organisent les données.",
    icon: Database,
    lessons: "8 leçons"
  }
];



const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "GitHub"
];



export default function Debutant(){
    
const Navigate = useNavigate()

const handlego = () => {
    Navigate("/Fondamentaux")
}


return (

<div className="min-h-screen bg-stone-50">


{/* HERO */}


<section className="relative overflow-hidden px-6 py-24">

<div className=" mx-auto max-w-6xl text-center">

<motion.span

initial={{opacity:0}}

animate={{opacity:1}}

className="text-smfont-semi bold uppercase tracking-[0.3em] text-amber-500">

Parcours Débutant

</motion.span>

<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

className="mt-6 text-4xl font-bold text-stone-900 sm:text-6xl">

De zéro à développeur Web

</motion.h1>




<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">

    Un parcours progressif pour apprendre les bases du développement
    et construire tes premiers projets professionnels.

</p>

<motion.button onClick={handlego} whileHover={{scale:1.05}}
        whileTap={{scale:.95}} className="mt-10 inline-flex items-center gap-3 rounded-tr-full rounded-tl-full rounded-bl-full
                bg-black px-8 py-4 font-semibold text-white hover:bg-amber-500 transition">

            Commencer maintenant

            <Rocket size={20}/>

</motion.button>

</div>

</section>

{/* OBJECTIFS */}

<section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-stone-900">
                 Ce que tu vas apprendre
             </h2>

        <div className=" mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {
            modules.map((module,index)=>{

            const Icon = module.icon;

return (

        <motion.div key={module.title}
        initial={{opacity:0, y:30}}

        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{delay:index*0.1}}
        whileHover={{y:-8}}
        className="rounded-3xl bg-white p-6 shadow-smborder border-stone-200">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
             <Icon size={25}/>
        </div>

            <h3 className="mt-5 font-bold text-xl">
                    {module.title}
            </h3>

        <p className="mt-3 text-sm leading-relaxed text-stone-500">
            {module.description}
        </p>

                <div className="mt-5 text-sm font-medium text-amber-500">
                    {module.lessons}
                </div>
                </motion.div>
                )})}

                </div>
                </div>
                </section>

{/* TECHNOLOGIES */}

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">

            <h2 className=" text-3xl font-bold">
                 Technologies maîtrisées
            </h2>

                <div className=" mt-8 flex flex-wrap gap-4">
                         {technologies.map((tech)=>(

                <div key={tech}className=" flex items-center gap-2 rounded-full bg-stone-100 px-5 py-3 font-medium">
                        <CheckCircle size={18}/> {tech}
            </div>))}
            </div>

            </div>
            </section>


{/* FOOTER CTA */}

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
      </section>

      </div>

)}