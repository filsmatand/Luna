import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/ecolier.png"
import img2 from "../assets/ecolier2.png"
import img3 from "../assets/ecolier3.png"
import {
  Code2,
  Database,
  Palette,
  ArrowRight,
} from "lucide-react";

export default function ImpactSection() {
  const navigate = useNavigate();

 const handleLogin = () => {
  navigate("/software");
};
  return (
   
    <section className="overflow-hidden bg-stone-50 py-16 sm:py-10">
      <div className="mx-auto grid max-w-7xl max-h-4xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]">
            <div className="absolute inset-0 rounded-full border border-dashed border-stone-300" />

            <img
              src={img1}
              alt=""
              className="absolute left-[15%] top-[12%] h-40 w-40 rounded-full object-cover shadow-xl sm:h-56 sm:w-56"
            />

            <img
              src={img3}
              alt=""
              className="absolute right-0 top-[15%] h-20 w-20 rounded-full object-cover shadow-lg sm:h-28 sm:w-28"
            />

            <img
              src={img2}
              alt=""
              className="absolute bottom-6 left-0 h-16 w-16 rounded-full object-cover shadow-lg sm:h-20 sm:w-20"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Qu'est ce que tu doit Apprendre
          </span>

          <h2 className="mt-4 text-3xl font-serif font-bold text-stone-900 sm:text-4xl lg:text-5xl">
            Apprentissage structuré
          </h2>

          <p className="mt-6 text-base leading-relaxed text-stone-600">
            quel metier je choisis ?
          </p>

         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

  {/* Software */}
  <motion.button
    whileHover={{ y: -8, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={handleLogin}
    className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
      <Code2 size={28} />
    </div>

    <h3 className="mt-5 text-lg font-bold text-gray-900">
      Software Development
    </h3>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      Développez des applications web, mobiles et desktop avec les
      technologies les plus demandées.
    </p>

    <div className="mt-5 flex items-center gap-2 font-semibold text-yellow-500">
      Commencer
      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-2"
      />
    </div>
  </motion.button>

  {/* Data Science */}
  <motion.button
    whileHover={{ y: -8, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-blue-400 hover:shadow-2xl"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
      <Database size={28} />
    </div>

    <h3 className="mt-5 text-lg font-bold text-gray-900">
      Data Science
    </h3>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      Analysez les données, créez des modèles d'IA et prenez des décisions
      grâce aux statistiques.
    </p>

    <div className="mt-5 flex items-center gap-2 font-semibold text-sky-600">
      Explorer
      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-2"
      />
    </div>
  </motion.button>

  {/* Design */}
  <motion.button
    whileHover={{ y: -8, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-pink-400 hover:shadow-2xl"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
      <Palette size={28} />
    </div>

    <h3 className="mt-5 text-lg font-bold text-gray-900">
      UI / UX Design
    </h3>

    <p className="mt-2 text-sm leading-6 text-gray-500">
      Concevez des interfaces modernes et des expériences utilisateur
      exceptionnelles.
    </p>

    <div className="mt-5 flex items-center gap-2 font-semibold text-pink-600">
      Découvrir
      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-2"
      />
    </div>
  </motion.button>

</div>
        </motion.div>
      </div>
    </section>
  );
}