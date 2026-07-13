import { useMemo, useState } from "react";
import { Layout, CheckCircle } from "lucide-react";

export default function Fondamentaux() {
  const lessons = useMemo(
    () => [
      "Introduction au Web et à Internet",
      "Le fonctionnement d’une requête HTTP",
      "Les navigateurs et leur rôle",
      "URL, domaines et DNS",
      "Serveurs et hébergement",
      "Structure d’une page HTML",
      "Les balises essentielles",
      "Premiers pas en CSS",
      "Les outils de développement",
      "Bonnes pratiques du Web",
      "Accessibilité et responsive design",
      "Mini-projet : ma première page Web",
    ],
    []
  );

  const [completed, setCompleted] = useState([]);

  const progress = Math.round(
    (completed.length / lessons.length) * 100
  );

  const toggleLesson = (index) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-amber-100 p-4">
              <Layout className="text-amber-500" size={32} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                Module 1 · 12 leçons
              </p>
              <h1 className="text-4xl font-bold text-stone-900">
                Les fondamentaux du Web
              </h1>
            </div>
          </div>

          <p className="mt-6 text-stone-600">
            Comprends comment fonctionne Internet, les navigateurs et les bases
            du développement web.
          </p>

          <div className="mt-8">
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>Progression</span>
              <span>{progress}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-amber-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {lessons.map((lesson, index) => (
              <button
                key={lesson}
                onClick={() => toggleLesson(index)}
                className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-left transition hover:border-amber-500"
              >
                <CheckCircle
                  className={
                    completed.includes(index)
                      ? "text-green-500"
                      : "text-stone-300"
                  }
                />
                <span>{lesson}</span>
              </button>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-amber-50 p-6">
            <h2 className="text-2xl font-bold text-stone-900">
              Exercices pratiques
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              <li>Expliquer le rôle d’un navigateur web.</li>
              <li>Identifier les parties d’une URL.</li>
              <li>Créer une page HTML contenant un titre et un paragraphe.</li>
              <li>Appliquer un style CSS simple à cette page.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}