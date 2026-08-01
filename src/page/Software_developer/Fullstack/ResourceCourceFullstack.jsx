import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Code2, Terminal, Database, GitBranch, Sparkles, GraduationCap, 
  Cloud, Zap, TrendingUp, Cpu, ServerCog, HardDrive, Globe, 
  Lock, Lightbulb, Box, Layers, Workflow, Activity, Smartphone,
  Brain, Bot, Layout, Server, ShieldCheck, Search
} from "lucide-react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaAws, FaDocker 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTypescript, SiNextdotjs, SiKubernetes, SiPostgresql, 
  SiPrisma, SiGraphql, SiVercel 
} from "react-icons/si";

const modules = [
  // --- NIVEAU DÉBUTANT (Fondations Solides) ---
  {
    title: "Fondamentaux du Web Moderne",
    description: "Maîtriser HTML5 sémantique, CSS3 (Grid/Flexbox) et les bases de l'accessibilité web.",
    icon: Globe,
    level: "Débutant",
    path: "/web-fundamentals",
  },
  {
    title: "JavaScript ES2026+",
    description: "Logique de programmation, manipulation du DOM, promesses et programmation asynchrone.",
    icon: Terminal,
    level: "Débutant",
    path: "/javascript-mastery",
  },
  {
    title: "React & Next.js Essentials",
    description: "Comprendre les composants, les hooks, et le routage avec l'App Router de Next.js.",
    icon: FaReact,
    level: "Débutant",
    path: "/react-next-basics",
  },
  {
    title: "Tailwind CSS & Design Systems",
    description: "Concevoir des interfaces professionnelles et responsives ultra-rapidement.",
    icon: SiTailwindcss,
    level: "Débutant",
    path: "/tailwind-design",
  },
  {
    title: "Git, GitHub & Open Source",
    description: "Workflow de collaboration, Pull Requests, et gestion des versions de code.",
    icon: GitBranch,
    level: "Débutant",
    path: "/git-collaboration",
  },
  {
    title: "Bases de Données SQL (PostgreSQL)",
    description: "Introduction au relationnel, schémas, tables et requêtes fondamentales.",
    icon: Database,
    level: "Débutant",
    path: "/sql-intro",
  },

  // --- NIVEAU INTERMÉDIAIRE (Développement Full Stack) ---
  {
    title: "TypeScript pour le Full Stack",
    description: "Sécuriser vos applications avec le typage statique côté client et serveur.",
    icon: SiTypescript,
    level: "Intermédiaire",
    path: "/typescript-fullstack",
  },
  {
    title: "Backend avec Node.js & Bun",
    description: "Créer des serveurs robustes, gérer les middlewares et les flux de données.",
    icon: FaNodeJs,
    level: "Intermédiaire",
    path: "/backend-runtimes",
  },
  {
    title: "Next.js Avancé (RSC & Actions)",
    description: "Maîtriser les Server Components et les Server Actions pour une performance optimale.",
    icon: SiNextdotjs,
    level: "Intermédiaire",
    path: "/nextjs-advanced",
  },
  {
    title: "ORMs (Prisma / Drizzle)",
    description: "Interagir avec vos bases de données de manière typée et sécurisée.",
    icon: SiPrisma,
    level: "Intermédiaire",
    path: "/orm-databases",
  },
  {
    title: "Authentification & Sécurité",
    description: "Implémenter Auth.js (NextAuth), Clerk, et protéger vos routes sensibles.",
    icon: Lock,
    level: "Intermédiaire",
    path: "/auth-security",
  },
  {
    title: "API Design (REST & GraphQL)",
    description: "Concevoir des architectures d'API évolutives et documentées.",
    icon: Zap,
    level: "Intermédiaire",
    path: "/api-architecture",
  },

  // --- NIVEAU EXPERT (Ingénierie de Haut Niveau) ---
  {
    title: "IA & LLM Integration",
    description: "Intégrer l'IA générative (OpenAI, Anthropic) via Vercel AI SDK et bases vectorielles.",
    icon: Brain,
    level: "Expert",
    path: "/ai-integration",
  },
  {
    title: "Architecture Microservices",
    description: "Concevoir des systèmes distribués, scalables et résilients.",
    icon: ServerCog,
    level: "Expert",
    path: "/microservices-expert",
  },
  {
    title: "DevOps, Docker & K8s",
    description: "Conteneurisation, orchestration et pipelines CI/CD automatisés.",
    icon: SiKubernetes,
    level: "Expert",
    path: "/devops-mastery",
  },
  {
    title: "Cloud Native & Serverless (AWS)",
    description: "Déploiement à l'échelle mondiale avec AWS Lambda, S3 et Edge Functions.",
    icon: FaAws,
    level: "Expert",
    path: "/cloud-native",
  },
  {
    title: "Performance & Observabilité",
    description: "Optimisation du Core Web Vitals, monitoring (Sentry) et analytics avancés.",
    icon: TrendingUp,
    level: "Expert",
    path: "/web-performance",
  },
  {
    title: "Real-time & WebSockets",
    description: "Systèmes de chat, notifications et collaboration en temps réel (Socket.io/Redis).",
    icon: Activity,
    level: "Expert",
    path: "/real-time-systems",
  },
];

export default function FullStackMastery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 md:px-24 bg-gray-950 font-sans text-slate-100 selection:bg-blue-500/30">
      
      {/* --- HERO SECTION --- */}
      <div className="mx-auto px-4 pt-20 mb-16 max-w-5xl text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-5 py-2 text-sm font-semibold text-blue-400 mb-8"
        >
          <Sparkles size={18} />
          Parcours Full Stack 2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
        >
          Devenez un Développeur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Full Stack</span> d'Élite
        </motion.h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Maîtrisez l'ensemble de la pile technologique, de l'interface utilisateur intuitive aux infrastructures cloud complexes et à l'intelligence artificielle.
        </p>

        {/* Technologies Full Stack Icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
            { name: "AI Integration", icon: Brain, color: "text-emerald-400" },
            { name: "AWS", icon: FaAws, color: "text-orange-400" }
          ].map((tech) => (
            <div key={tech.name} className="group flex items-center gap-3 rounded-2xl border border-gray-800 bg-zinc-900/50 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-blue-500/10">
              <tech.icon className={`text-xl ${tech.color}`} />
              <span className="font-bold text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- LEARNING PATH SECTION --- */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          {['Débutant', 'Intermédiaire', 'Expert'].map((level, levelIdx) => (
            <div key={level} className="mb-24">
              <div className="flex items-center gap-5 mb-12">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-2xl ${
                  level === 'Débutant' ? 'bg-blue-600 shadow-blue-600/20' :
                  level === 'Intermédiaire' ? 'bg-purple-600 shadow-purple-600/20' :
                  'bg-emerald-600 shadow-emerald-600/20'
                }`}>
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white">{level}</h3>
                  <p className="text-gray-500 font-medium">Phase {levelIdx + 1} : {
                    level === 'Débutant' ? 'Construire les fondations' :
                    level === 'Intermédiaire' ? 'Connecter le Front et le Back' :
                    'Architecturer pour l\'échelle et l\'IA'
                  }</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.filter(module => module.level === level).map((module, index) => {
                  const IconComponent = module.icon;

                  return (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative rounded-3xl border border-gray-800 bg-gray-900/40 p-7 hover:border-blue-500/40 hover:bg-gray-800/40 transition-all duration-500"
                    >
                      {/* Floating Level Badge */}
                      <div className="absolute top-7 right-7">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          level === 'Débutant' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
                          level === 'Intermédiaire' ? 'border-purple-500/30 text-purple-400 bg-purple-500/5' :
                          'border-emerald-500/30 text-emerald-400 bg-emerald-500/5'
                        }`}>
                          {level}
                        </span>
                      </div>

                      {/* Icon Circle */}
                      <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                        level === 'Débutant' ? 'bg-blue-950 text-blue-400 group-hover:bg-blue-600' :
                        level === 'Intermédiaire' ? 'bg-purple-950 text-purple-400 group-hover:bg-purple-600' :
                        'bg-emerald-950 text-emerald-400 group-hover:bg-emerald-600'
                      } group-hover:text-white group-hover:rotate-6 group-hover:scale-110`}>
                        {IconComponent && <IconComponent size={28} />}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-10 min-h-[60px]">
                        {module.description}
                      </p>

                      {/* Interactive Button */}
                      <button
                        onClick={() => navigate(module.path)}
                        className={`w-full inline-flex items-center justify-center gap-3 rounded-2xl border px-5 py-4 text-sm font-black text-white transition-all duration-300 ${
                          level === 'Débutant' ? 'border-blue-900 hover:bg-blue-600 hover:border-blue-600' :
                          level === 'Intermédiaire' ? 'border-purple-900 hover:bg-purple-600 hover:border-purple-600' :
                          'border-emerald-900 hover:bg-emerald-600 hover:border-emerald-600'
                        }`}
                      >
                        Démarrer le module
                        <Zap size={18} className="fill-current" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA / FOOTER --- */}
      <footer className="pb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative inline-block p-[2px] rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 shadow-2xl shadow-purple-500/20"
        >
          <div className="bg-gray-950 rounded-[22px] px-16 py-12 md:px-24">
            <h4 className="text-3xl md:text-4xl font-black mb-4 text-white">Prêt pour le voyage ?</h4>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">Rejoignez des milliers de développeurs et commencez votre ascension vers le Full Stack Élite.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all transform hover:scale-105">
                S'inscrire Maintenant
              </button>
              <button className="px-10 py-4 bg-gray-900 text-white border border-gray-800 font-black rounded-2xl hover:bg-gray-800 transition-all">
                Voir la Roadmap 2026
              </button>
            </div>
          </div>
        </motion.div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        :root { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
    </div>
  );
}
