import React, { useMemo, useState } from "react";
import { 
  Crown, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Code, 
  PenTool, 
  Brain, 
  ShieldCheck, 
  BarChart3, 
  GitBranch, 
  ServerCrash,
  Sparkles
} from "lucide-react";

/**
 * Composant Expert
 * Un parcours de haute expertise axé sur l'architecture, l'IA et la performance.
 */
export default function Expert() {
  const [completed, setCompleted] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const lessons = useMemo(
    () => [
      {
        title: "Architecture logicielle & Design Patterns",
        icon: <GitBranch className="text-violet-500" size={20} />,
        course: "À ce niveau, coder ne suffit plus, il faut architecturer. Maîtrisez les Design Patterns (Singleton, Factory, Observer) et les architectures propres (Clean Architecture) pour des systèmes scalables et maintenables.",
        code: "// Exemple Pattern Singleton en JS\nclass Database {\n  constructor() {\n    if (Database.instance) return Database.instance;\n    Database.instance = this;\n  }\n}\nconst db1 = new Database();",
        exercise: "Implémentez un pattern 'Observer' pour gérer les notifications en temps réel dans une application de chat."
      },
      {
        title: "Intégration de l'Intelligence Artificielle",
        icon: <Brain className="text-fuchsia-500" size={20} />,
        course: "Apprenez à intégrer des modèles de langage (LLM) via API (OpenAI, Anthropic) et à utiliser le 'Prompt Engineering' programmatique pour créer des fonctionnalités intelligentes.",
        code: "const response = await openai.chat.completions.create({\n  model: 'gpt-4',\n  messages: [{ role: 'user', content: prompt }],\n  temperature: 0.7,\n});\nconsole.log(response.choices[0].message);",
        exercise: "Créez un script qui analyse le sentiment d'un commentaire utilisateur en utilisant une API d'IA."
      },
      {
        title: "Sécurité Avancée & Authentification",
        icon: <ShieldCheck className="text-emerald-500" size={20} />,
        course: "Sécurisez vos applications contre les failles XSS, CSRF et SQL Injection. Maîtrisez l'authentification OAuth2, les JWT (JSON Web Tokens) et la gestion sécurisée des sessions.",
        code: "// Vérification JWT (Node/Express)\nconst token = req.headers['authorization'];\njwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {\n  if (err) return res.status(401).send('Accès refusé');\n  req.user = decoded;\n});",
        exercise: "Configurez une stratégie d'authentification à deux facteurs (2FA) théorique pour une application sensible."
      },
      {
        title: "Optimisation des Performances & Web Vitals",
        icon: <BarChart3 className="text-indigo-500" size={20} />,
        course: "Analysez et optimisez le LCP, FID et CLS. Apprenez le Code Splitting, le Lazy Loading avancé et l'optimisation critique du rendu (Critical Rendering Path).",
        code: "// React Lazy Loading\nconst HeavyComponent = React.lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loader />}>\n      <HeavyComponent />\n    </Suspense>\n  );\n}",
        exercise: "Utilisez Lighthouse pour auditer un site existant et proposez 3 optimisations concrètes pour améliorer le score de performance."
      },
      {
        title: "DevOps & CI/CD pour le Web",
        icon: <ServerCrash className="text-rose-500" size={20} />,
        course: "Automatisez vos déploiements avec GitHub Actions ou GitLab CI. Apprenez la conteneurisation avec Docker et la gestion d'infrastructure de base.",
        code: "# Exemple Workflow GitHub Actions\nname: Deploy\non: [push]\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - run: npm install && npm run build",
        exercise: "Créez un fichier de configuration YAML pour automatiser les tests unitaires à chaque 'push' sur votre dépôt."
      },
      {
        title: "Projet Final : Application Full-Stack IA",
        icon: <Sparkles className="text-amber-500" size={20} />,
        course: "Le summum de l'expertise : concevez une application complète intégrant une base de données, une authentification sécurisée et une couche d'intelligence artificielle.",
        code: "// Architecture Full-Stack\n// Client (React) <-> API (Node/Python) <-> DB (PostgreSQL) <-> AI Service",
        exercise: "Déployez une application MVP qui résout un problème local en utilisant au moins une technologie d'IA."
      }
    ],
    []
  );

  const progress = Math.round((completed.length / lessons.length) * 100);

  const toggleLesson = (index, e) => {
    e.stopPropagation();
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-violet-50/30 font-sans text-slate-900 selection:bg-violet-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1 text-sm font-bold text-violet-700 uppercase tracking-wider">
            <Crown size={16} />
            <span>Niveau Expert</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            L'Élite de la <span className="text-violet-600">Technologie</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Dominez le marché en maîtrisant les architectures complexes, l'intelligence artificielle 
            et les standards de sécurité les plus élevés de l'industrie.
          </p>
        </header>

        {/* Progress Card */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-violet-200/20 ring-1 ring-violet-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Statut de Maîtrise</h2>
              <p className="text-slate-500 text-sm">{completed.length} sur {lessons.length} piliers d'expertise validés</p>
            </div>
            <span className="text-3xl font-black text-violet-600">{progress}%</span>
          </div>
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-700 ease-out"
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
                    ? "border-violet-200 bg-white shadow-lg ring-1 ring-violet-50" 
                    : "border-slate-200 bg-white/50 hover:border-violet-300 hover:bg-white"
                }`}
              >
                {/* Lesson Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isCompleted ? "bg-green-100" : "bg-slate-100 group-hover:bg-violet-50"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="text-green-600" size={22} />
                      ) : (
                        lesson.icon
                      )}
                    </div>
                    <span className={`text-lg font-semibold ${isExpanded ? "text-violet-700" : "text-slate-700"}`}>
                      {lesson.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => toggleLesson(index, e)}
                      className={`hidden sm:flex items-center gap-2 rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                        isCompleted 
                          ? "bg-green-50 text-green-700" 
                          : "bg-slate-100 text-slate-500 hover:bg-violet-600 hover:text-white"
                      }`}
                    >
                      {isCompleted ? "Expertise Validée" : "Valider l'expertise"}
                    </button>
                    {isExpanded ? <ChevronUp size={20} className="text-violet-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                  </div>
                </button>

                {/* Lesson Content */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-white p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid gap-8 md:grid-cols-2">
                      {/* Course Part */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-violet-600">
                          <BookOpen size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">Théorie de Haut Niveau</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {lesson.course}
                        </p>
                        
                        <div className="flex items-center gap-2 text-fuchsia-500 pt-2">
                          <PenTool size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">Mission Critique</h3>
                        </div>
                        <div className="rounded-xl bg-fuchsia-50 p-4 text-fuchsia-800 text-sm border border-fuchsia-100">
                          {lesson.exercise}
                        </div>
                      </div>

                      {/* Code Part */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Code size={18} />
                          <h3 className="font-bold uppercase tracking-wider text-sm">Architecture Code</h3>
                        </div>
                        <div className="relative group/code">
                          <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-violet-200 font-mono leading-relaxed shadow-inner">
                            <code>{lesson.code}</code>
                          </pre>
                          <div className="absolute top-3 right-3 opacity-0 group-hover/code:opacity-100 transition-opacity">
                             <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-700 uppercase">Architecture / IA / Security</span>
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
                            : "bg-violet-600 text-white shadow-lg shadow-violet-200"
                        }`}
                      >
                        {isCompleted ? "Expertise acquise ✓" : "Certifier ce pilier"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <footer className="mt-16 text-center text-slate-400 text-sm">
          <p>© 2026 Sommet de la Technologie Africaine · Leadership & Innovation</p>
        </footer>
      </div>
    </div>
  );
}
