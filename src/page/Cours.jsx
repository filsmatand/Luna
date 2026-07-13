import { motion } from "framer-motion";
import { BookOpen, Code2, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Cours Clairs",
    description:
      "Des leçons courtes et structurées pour maîtriser chaque notion rapidement.",
  },
  {
    icon: Code2,
    title: "Exercices Pratiques",
    description:
      "Mettez immédiatement en pratique ce que vous apprenez avec des défis concrets.",
  },
  {
    icon: CheckCircle2,
    title: "Corrections Détaillées",
    description:
      "Comparez vos solutions et progressez grâce à des explications pas à pas.",
  },
];

export default function CoursesAndExercises() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            APPRENDRE EN PRATIQUANT
          </span>
          <h2 className="mt-3 text-4xl font-serif font-bold text-stone-900">
            Cours & Exercices Pratiques
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-stone-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}