import { motion } from "framer-motion";
import { Code2, Layers3, Rocket } from "lucide-react";

const steps = [
  {
    title: "Débutant",
    icon: Code2,
    topics: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    title: "Intermédiaire",
    icon: Layers3,
    topics: ["React", "API REST", "SQL", "Tests"],
  },
  {
    title: "Expert",
    icon: Rocket,
    topics: ["Architecture", "Performance", "Sécurité", "IA"],
  },
];

export default function RoadmapSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            ROADMAP
          </span>
          <h2 className="mt-3 text-4xl font-serif font-bold text-gray-900">
            Votre parcours d’apprentissage
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <ul className="mt-4 space-y-2 text-gray-600">
                  {step.topics.map((topic) => (
                    <li key={topic}>✓ {topic}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}