import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Code2, Terminal, Database, GitBranch, Sparkles, GraduationCap, 
  Cloud, Zap, TrendingUp, Cpu, ServerCog, HardDrive, Globe, 
  Lock, Lightbulb, Search, ChevronRight, ExternalLink, Menu, X,
  Settings, Info, MessageSquare, ArrowLeft, Layers, Activity, Workflow, Box, ShieldCheck,
  Smartphone, Brain, Bot, Layout, Server
} from "lucide-react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaAws, FaDocker, FaGithub
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTypescript, SiNextdotjs, SiKubernetes, SiPostgresql, 
  SiPrisma, SiGraphql, SiVercel 
} from "react-icons/si";

// --- DONNÉES FULLSTACK (STRUCTURE HARMONISÉE) ---
const modules = [
  // --- NIVEAU DÉBUTANT ---
  {
    title: "Fondamentaux du Web Moderne",
    description: "Maîtriser HTML5 sémantique, CSS3 (Grid/Flexbox) et les bases de l'accessibilité web.",
    icon: Globe,
    level: "Débutant",
    path: "/web-fundamentals",
    keyPoints: ["HTML5 Sémantique", "CSS Grid & Flexbox", "Accessibilité (A11y)", "Responsive Design"],
    startCode: "<!-- Structure Sémantique -->\n<main>\n  <article>\n    <h1>Titre Article</h1>\n    <p>Contenu...</p>\n  </article>\n</main>",
    exercise: "Créez une mise en page responsive avec une barre latérale et un contenu principal en utilisant CSS Grid."
  },
  {
    title: "JavaScript ES2026+",
    description: "Logique de programmation, manipulation du DOM, promesses et programmation asynchrone.",
    icon: Terminal,
    level: "Débutant",
    path: "/javascript-mastery",
    keyPoints: ["ES6+ Syntax", "Asynchronisme (Async/Await)", "Manipulation du DOM", "Fetch API"],
    startCode: "// Programmation Asynchrone Moderne\nconst fetchData = async () => {\n  const res = await fetch('https://api.luna.dev/data');\n  const data = await res.json();\n  console.log(data);\n};",
    exercise: "Utilisez l'API Fetch pour récupérer une liste d'utilisateurs et les afficher dans le DOM."
  },
  {
    title: "React & Next.js Essentials",
    description: "Comprendre les composants, les hooks, et le routage avec l'App Router de Next.js.",
    icon: FaReact,
    level: "Débutant",
    path: "/react-next-basics",
    keyPoints: ["Composants & Props", "Hooks (useState, useEffect)", "App Router Navigation", "Server vs Client Components"],
    startCode: "// Next.js Server Component\nexport default async function Page() {\n  const data = await getData();\n  return <main>{data.title}</main>;\n}",
    exercise: "Créez un compteur interactif en utilisant le hook useState dans un Client Component."
  },
  {
    title: "Tailwind CSS & Design Systems",
    description: "Concevoir des interfaces professionnelles et responsives ultra-rapidement.",
    icon: SiTailwindcss,
    level: "Débutant",
    path: "/tailwind-design",
    keyPoints: ["Utility-First CSS", "Design Tokens", "Dark Mode Implementation", "Custom Configurations"],
    startCode: "<div className=\"flex items-center justify-between p-4 bg-slate-900 rounded-xl shadow-lg\">\n  <h2 className=\"text-white font-bold\">Card Title</h2>\n</div>",
    exercise: "Reproduisez un bouton 'Glassmorphism' en utilisant uniquement des classes Tailwind CSS."
  },
  {
    title: "Git, GitHub & Open Source",
    description: "Workflow de collaboration, Pull Requests, et gestion des versions de code.",
    icon: GitBranch,
    level: "Débutant",
    path: "/git-collaboration",
    keyPoints: ["Version Control", "Pull Request Workflow", "Resolving Conflicts", "GitHub Actions Intro"],
    startCode: "git checkout -b feature/new-module\ngit add .\ngit commit -m \"feat: add new dashboard\"\ngit push origin feature/new-module",
    exercise: "Simulez une Pull Request et expliquez comment résoudre un conflit de fusion simple."
  },
  {
    title: "Bases de Données SQL (PostgreSQL)",
    description: "Introduction au relationnel, schémas, tables et requêtes fondamentales.",
    icon: Database,
    level: "Débutant",
    path: "/sql-intro",
    keyPoints: ["Relationnel vs NoSQL", "CRUD Operations", "Table Schemas", "Foreign Keys"],
    startCode: "CREATE TABLE posts (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  title TEXT NOT NULL,\n  content TEXT,\n  author_id UUID REFERENCES users(id)\n);",
    exercise: "Écrivez une requête SQL pour récupérer tous les articles d'un auteur spécifique."
  },

  // --- NIVEAU INTERMÉDIAIRE ---
  {
    title: "TypeScript pour le Full Stack",
    description: "Sécuriser vos applications avec le typage statique côté client et serveur.",
    icon: SiTypescript,
    level: "Intermédiaire",
    path: "/typescript-fullstack",
    keyPoints: ["Interfaces & Types", "Generics", "API Response Typing", "Strict Mode Benefits"],
    startCode: "interface User {\n  id: string;\n  email: string;\n  role: 'admin' | 'user';\n}\n\nconst getUser = (id: string): Promise<User> => { ... };",
    exercise: "Créez une interface pour un produit et utilisez-la pour typer une fonction de filtrage."
  },
  {
    title: "Backend avec Node.js & Bun",
    description: "Créer des serveurs robustes, gérer les middlewares et les flux de données.",
    icon: FaNodeJs,
    level: "Intermédiaire",
    path: "/backend-runtimes",
    keyPoints: ["Runtime Differences", "Stream Processing", "File System API", "Security Best Practices"],
    startCode: "// Bun.serve - Ultra rapide\nBun.serve({\n  fetch(req) {\n    return new Response(\"Welcome to Luna Backend!\");\n  },\n});",
    exercise: "Implémentez un middleware de logging qui enregistre le temps de réponse de chaque requête."
  },
  {
    title: "Next.js Avancé (RSC & Actions)",
    description: "Maîtriser les Server Components et les Server Actions pour une performance optimale.",
    icon: SiNextdotjs,
    level: "Intermédiaire",
    path: "/nextjs-advanced",
    keyPoints: ["React Server Components", "Server Actions", "Incremental Static Regeneration", "Streaming & Suspense"],
    startCode: "// Server Action\nasync function createPost(formData: FormData) {\n  'use server';\n  const title = formData.get('title');\n  await db.post.create({ data: { title } });\n}",
    exercise: "Utilisez une Server Action pour gérer la soumission d'un formulaire sans API route séparée."
  },
  {
    title: "ORMs (Prisma / Drizzle)",
    description: "Interagir avec vos bases de données de manière typée et sécurisée.",
    icon: SiPrisma,
    level: "Intermédiaire",
    path: "/orm-databases",
    keyPoints: ["Schema Definition", "Type Safety", "Migrations", "Query Optimization"],
    startCode: "const user = await prisma.user.findUnique({\n  where: { email: 'user@luna.dev' },\n  include: { posts: true }\n});",
    exercise: "Définissez une relation 'One-to-Many' dans un schéma Prisma et générez la migration."
  },
  {
    title: "Authentification & Sécurité",
    description: "Implémenter Auth.js (NextAuth), Clerk, et protéger vos routes sensibles.",
    icon: Lock,
    level: "Intermédiaire",
    path: "/auth-security",
    keyPoints: ["OAuth & Providers", "JWT vs Sessions", "RBAC (Role-Based Access)", "CSRF & XSS Protection"],
    startCode: "import { auth } from \"@/auth\";\n\nexport default async function ProtectedPage() {\n  const session = await auth();\n  if (!session) return <div>Accès refusé</div>;\n}",
    exercise: "Configurez une route protégée qui redirige l'utilisateur s'il n'est pas connecté."
  },
  {
    title: "API Design (REST & GraphQL)",
    description: "Concevoir des architectures d'API évolutives et documentées.",
    icon: Zap,
    level: "Intermédiaire",
    path: "/api-architecture",
    keyPoints: ["Endpoint Versioning", "GraphQL Resolvers", "Error Handling", "Documentation (Swagger)"],
    startCode: "type Query {\n  me: User\n  posts(limit: Int): [Post]\n}",
    exercise: "Concevez un endpoint REST pour la gestion des favoris d'un utilisateur."
  },

  // --- NIVEAU EXPERT ---
  {
    title: "IA & LLM Integration",
    description: "Intégrer l'IA générative (OpenAI, Anthropic) via Vercel AI SDK et bases vectorielles.",
    icon: Brain,
    level: "Expert",
    path: "/ai-integration",
    keyPoints: ["Vercel AI SDK", "Prompt Engineering", "Vector Databases (Pinecone)", "RAG (Retrieval Augmented Gen)"],
    startCode: "import { streamText } from 'ai';\nimport { openai } from '@ai-sdk/openai';\n\nconst { textStream } = await streamText({\n  model: openai('gpt-4o'),\n  prompt: 'Explique le Fullstack...',\n});",
    exercise: "Créez un composant de chat simple qui utilise le streaming pour afficher les réponses de l'IA."
  },
  {
    title: "Architecture Microservices",
    description: "Concevoir des systèmes distribués, scalables et résilients.",
    icon: ServerCog,
    level: "Expert",
    path: "/microservices-expert",
    keyPoints: ["Event-Driven Architecture", "API Gateways", "Message Brokers (Kafka)", "Service Mesh"],
    startCode: "// Communication inter-services\nawait kafka.send({\n  topic: 'order-processed',\n  messages: [{ value: JSON.stringify(order) }]\n});",
    exercise: "Schématisez la communication entre un service Auth et un service Notification via RabbitMQ."
  },
  {
    title: "DevOps, Docker & K8s",
    description: "Conteneurisation, orchestration et pipelines CI/CD automatisés.",
    icon: SiKubernetes,
    level: "Expert",
    path: "/devops-mastery",
    keyPoints: ["Docker Multi-stage Builds", "Kubernetes Orchestration", "CI/CD Pipelines", "Infrastructure as Code"],
    startCode: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: fullstack-app\nspec:\n  replicas: 5",
    exercise: "Écrivez un Dockerfile optimisé pour une application Next.js en production."
  },
  {
    title: "Cloud Native & Serverless (AWS)",
    description: "Déploiement à l'échelle mondiale avec AWS Lambda, S3 et Edge Functions.",
    icon: FaAws,
    level: "Expert",
    path: "/cloud-native",
    keyPoints: ["Edge Computing", "Serverless Functions", "Global Distribution", "Cold Starts Optimization"],
    startCode: "// AWS Lambda Handler\nexport const handler = async (event) => {\n  return { statusCode: 200, body: \"Luna Cloud!\" };\n};",
    exercise: "Déployez une fonction Edge qui personnalise le contenu selon la géolocalisation de l'utilisateur."
  },
  {
    title: "Performance & Observabilité",
    description: "Optimisation du Core Web Vitals, monitoring (Sentry) et analytics avancés.",
    icon: TrendingUp,
    level: "Expert",
    path: "/web-performance",
    keyPoints: ["Core Web Vitals", "Real User Monitoring", "Distributed Tracing", "Performance Budgets"],
    startCode: "import * as Sentry from \"@sentry/nextjs\";\n\nSentry.init({\n  dsn: \"https://luna@sentry.io/123\",\n  tracesSampleRate: 1.0,\n});",
    exercise: "Utilisez Chrome DevTools pour identifier et corriger un problème de Layout Shift (CLS)."
  },
  {
    title: "Real-time & WebSockets",
    description: "Systèmes de chat, notifications et collaboration en temps réel (Socket.io/Redis).",
    icon: Activity,
    level: "Expert",
    path: "/real-time-systems",
    keyPoints: ["WebSocket Protocol", "Pub/Sub Patterns", "Conflict Resolution", "Scalable Real-time"],
    startCode: "io.on('connection', (socket) => {\n  socket.on('message', (msg) => {\n    io.emit('broadcast', msg);\n  });\n});",
    exercise: "Implémentez un système de présence qui affiche quels utilisateurs sont en ligne en temps réel."
  }
];

const levels = ["Débutant", "Intermédiaire", "Expert"];

export default function FullstackDashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const filteredModules = useMemo(() => {
    return modules.filter(m => 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const modulesByLevel = useMemo(() => {
    const grouped = {};
    levels.forEach(level => {
      grouped[level] = filteredModules.filter(m => m.level === level);
    });
    return grouped;
  }, [filteredModules]);

  return (
    <div className="flex h-screen bg-gray-950 font-sans text-white overflow-hidden selection:bg-blue-500/30">
      
      {/* SIDEBAR (STYLE HARMONISÉ) */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-900/30">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded text-white shadow-lg shadow-purple-500/20">
              <Sparkles size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">Fullstack Mastery</span>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <Settings size={16} />
          </button>
        </div>

        <div className="p-2 bg-gray-950">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
            <input
              type="text"
              placeholder="Rechercher un module..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-blue-900/20 rounded py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          {levels.map(level => (
            modulesByLevel[level] && modulesByLevel[level].length > 0 && (
              <div key={level} className="mt-2">
                <div className="px-4 py-1.5 text-[10px] font-bold text-blue-400/70 uppercase tracking-widest flex items-center justify-between">
                  <span>{level}</span>
                  <span className="text-gray-600">{modulesByLevel[level].length}</span>
                </div>
                <ul className="mt-1">
                  {modulesByLevel[level].map((module) => (
                    <li key={module.title}>
                      <button
                        onClick={() => setSelectedModule(module)}
                        className={`w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group ${
                          selectedModule?.title === module.title 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                            : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                        }`}
                      >
                        {React.createElement(module.icon, { size: 14, className: selectedModule?.title === module.title ? 'text-white' : 'text-gray-500' })}
                        <span className="truncate flex-1">{module.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </nav>

        <div className="p-2 border-t border-blue-900/30 bg-gray-950 flex items-center justify-around text-gray-500">
          <button title="Aide" className="hover:text-blue-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-blue-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-blue-400 transition-colors"><FaGithub size={14} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT (STYLE HARMONISÉ) */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative">
        <header className="h-10 border-b border-blue-900/30 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')} 
              className="p-1 hover:bg-slate-800 rounded text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              title="Retour à l'accueil"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="h-4 w-[1px] bg-blue-900/50 mx-1"></div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
              <span className="hover:text-blue-400 cursor-pointer transition-colors font-medium">Fullstack</span>
              {selectedModule && (
                <>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">{selectedModule.level}</span>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-white lowercase">{selectedModule.title}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
              Docs <ExternalLink size={10} />
            </a>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12">
          <AnimatePresence mode="wait">
            {selectedModule ? (
              <motion.article
                key={selectedModule.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl"
              >
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-900/50 flex items-center justify-center text-white shadow-inner">
                      {React.createElement(selectedModule.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedModule.title}</h1>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-blue-400 font-mono uppercase tracking-widest bg-blue-900/20 px-2 py-0.5 rounded">level: {selectedModule.level.toLowerCase()}</span>
                        <span className="text-[10px] text-gray-600 font-mono italic">Fullstack Engineering 2027</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <section className="bg-slate-900/30 p-6 rounded-xl border border-blue-900/10">
                    <h2 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                      <Info size={20} /> Présentation du Module
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {selectedModule.description}
                    </p>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-xl p-8 relative overflow-hidden group">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <Terminal size={20} className="text-purple-400" /> Maîtrise Technique
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedModule.keyPoints.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-gray-400 bg-gray-950/50 p-3 rounded-lg border border-blue-900/10 hover:border-purple-500/30 transition-all">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-[0.2em]">
                      <Code2 size={16} className="text-blue-400" /> Code Snippet
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded-xl p-6 font-mono text-[11px] text-blue-100/80 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 opacity-5"><Layers size={40} /></div>
                      <pre className="whitespace-pre-wrap leading-relaxed">{selectedModule.startCode}</pre>
                    </div>
                  </section>

                  <section className="bg-gradient-to-br from-purple-900/20 to-slate-900/50 border border-blue-900/30 rounded-xl p-8 relative overflow-hidden group">
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform"><Zap size={120} /></div>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Sparkles size={20} className="text-yellow-400" /> Challenge Pratique
                    </h2>
                    <div className="bg-gray-950/60 border border-blue-900/20 p-5 rounded-lg text-sm text-gray-300 leading-relaxed shadow-inner border-l-4 border-l-purple-500">
                      {selectedModule.exercise}
                    </div>
                  </section>

                  <div className="pt-6 flex gap-4">
                    <button
                      onClick={() => navigate(selectedModule.path)}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-purple-600/20 active:scale-95"
                    >
                      Démarrer le module
                    </button>
                    <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs font-bold rounded-lg transition-all border border-slate-700">
                      Roadmap Fullstack
                    </button>
                  </div>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="w-24 h-24 rounded-3xl bg-slate-900 border border-blue-900/30 flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/10"
                >
                  <Sparkles size={48} className="text-purple-500/50" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Fullstack Mastery 2027</h2>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed">
                  L'écosystème complet pour devenir un ingénieur Fullstack d'élite. Sélectionnez un module pour explorer l'intégration du Front, du Back et de l'IA.
                </p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-blue-900/10">
                    <div className="text-blue-400 font-bold text-lg">18</div>
                    <div className="text-[9px] text-gray-600 uppercase tracking-widest">Modules</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-blue-900/10">
                    <div className="text-purple-400 font-bold text-lg">3</div>
                    <div className="text-[9px] text-gray-600 uppercase tracking-widest">Niveaux</div>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-blue-900/10">
                    <div className="text-emerald-400 font-bold text-lg">AI</div>
                    <div className="text-[9px] text-gray-600 uppercase tracking-widest">Ready</div>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}} />
    </div>
  );
}
