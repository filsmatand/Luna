import React, { useState } from 'react';

const FullstackRoadmapSH = () => {
  const [completed, setCompleted] = useState(new Set());

  const toggleNode = (id) => {
    const newSet = new Set(completed);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompleted(newSet);
  };

  const sections = [
    {
      id: "internet-basics",
      title: "1. Fondamentaux du Web",
      color: "bg-yellow-400",
      items: [
        { id: "http3", label: "HTTP/3 & DNS", type: "essential" },
        { id: "browsers", label: "Moteurs de rendu", type: "essential" },
        { id: "security", label: "CORS, CSP, HTTPS", type: "essential" }
      ]
    },
    {
      id: "frontend-core",
      title: "2. Frontend Core",
      color: "bg-orange-500",
      items: [
        { id: "html-semantic", label: "HTML5 Sémantique", type: "essential" },
        { id: "css-next", label: "CSS (Grid, :has, Layers)", type: "essential" },
        { id: "tailwind", label: "Tailwind CSS v4", type: "essential" },
        { id: "ts-js", label: "TypeScript & JS Moderne", type: "essential" }
      ]
    },
    {
      id: "backend-core",
      title: "3. Backend Core",
      color: "bg-emerald-500",
      items: [
        { id: "node-bun", label: "Node.js / Bun Runtime", type: "essential" },
        { id: "go-lang", label: "Go (Microservices)", type: "recommended" },
        { id: "sql-pg", label: "PostgreSQL Expert", type: "essential" },
        { id: "nosql-mongo", label: "MongoDB / Redis", type: "recommended" }
      ]
    },
    {
      id: "meta-frameworks",
      title: "4. Fullstack Frameworks",
      color: "bg-blue-600",
      items: [
        { id: "nextjs", label: "Next.js (App Router)", type: "essential" },
        { id: "nuxt", label: "Nuxt 3", type: "alternative" },
        { id: "astro", label: "Astro (Islands Arch)", type: "recommended" },
        { id: "trpc", label: "tRPC & Type-safety", type: "essential" }
      ]
    },
    {
      id: "state-data",
      title: "5. State & Data Management",
      color: "bg-purple-600",
      items: [
        { id: "tanstack", label: "TanStack Query", type: "essential" },
        { id: "zustand", label: "Zustand / Signals", type: "essential" },
        { id: "drizzle", label: "Drizzle / Prisma ORM", type: "essential" }
      ]
    },
    {
      id: "auth-security",
      title: "6. Auth & Sécurité Avancée",
      color: "bg-red-500",
      items: [
        { id: "oauth-oidc", label: "OAuth2 / OIDC", type: "essential" },
        { id: "auth-providers", label: "Clerk / Kinde / Auth.js", type: "essential" },
        { id: "rbac", label: "RBAC & Permissions", type: "essential" }
      ]
    },
    {
      id: "ai-engineering",
      title: "7. AI & Vector Stack",
      color: "bg-fuchsia-500",
      items: [
        { id: "vector-db", label: "pgvector / Pinecone", type: "essential" },
        { id: "llm-integration", label: "Vercel AI SDK / RAG", type: "essential" },
        { id: "agents", label: "AI Agents (LangChain)", type: "recommended" }
      ]
    },
    {
      id: "devops-infra",
      title: "8. DevOps & Déploiement",
      color: "bg-cyan-500",
      items: [
        { id: "docker", label: "Docker & Containers", type: "essential" },
        { id: "cicd", label: "GitHub Actions", type: "essential" },
        { id: "edge", label: "Edge Computing / Vercel", type: "essential" },
        { id: "monitoring", label: "Sentry / OpenTelemetry", type: "recommended" }
      ]
    }
  ];

  const Node = ({ item, color }) => (
    <div 
      onClick={() => toggleNode(item.id)}
      className={`
        relative group cursor-pointer p-4 rounded-xl border-2 transition-all duration-200
        ${completed.has(item.id) 
          ? 'bg-green-50/50 border-green-500 scale-[0.98]' 
          : 'bg-white border-gray-100 hover:border-blue-400 hover:shadow-lg'}
      `}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`text-sm font-bold ${completed.has(item.id) ? 'text-green-700' : 'text-slate-700'}`}>
          {item.label}
        </span>
        <div className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
          ${completed.has(item.id) ? 'bg-green-500 border-green-500' : 'bg-white border-gray-200 group-hover:border-blue-300'}
        `}>
          {completed.has(item.id) && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      {item.type !== 'essential' && (
        <span className={`
          absolute -top-2.5 -right-2 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider text-white shadow-sm
          ${item.type === 'recommended' ? 'bg-blue-500' : item.type === 'alternative' ? 'bg-purple-500' : 'bg-gray-400'}
        `}>
          {item.type}
        </span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-4 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4">
            Full Stack Expert 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Full Stack <span className="text-blue-600">Roadmap</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Le parcours ultime pour maîtriser le web de bout en bout. 
            De l'interface utilisateur à l'infrastructure cloud et l'IA.
          </p>
          
          {/* Legend */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div> Appris
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div> Recommandé
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"></div> Alternative
            </div>
          </div>
        </div>

        {/* Roadmap Path */}
        <div className="relative space-y-20">
          {sections.map((section, sIdx) => (
            <div key={section.id} className="relative">
              {/* Vertical Connector */}
              {sIdx !== sections.length - 1 && (
                <div className="absolute left-1/2 top-full h-20 w-1 bg-gradient-to-b from-slate-200 to-slate-100 -translate-x-1/2"></div>
              )}

              {/* Section Header */}
              <div className="flex flex-col items-center mb-10">
                <div className={`${section.color} px-8 py-3 rounded-2xl shadow-xl shadow-black/5 z-10 transform hover:scale-105 transition-transform`}>
                  <h2 className="text-white font-black text-xl tracking-tight">{section.title}</h2>
                </div>
              </div>

              {/* Grid of items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {section.items.map((item) => (
                  <Node key={item.id} item={item} color={section.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final Goal */}
        <div className="mt-32 text-center">
          <div className="inline-block p-10 bg-white  shadow-xl rounded-3xl relative overflow-hidden group">
            <h3 className="text-3xl font-black text-blue-600 mb-3 tracking-tighter"> FULL STACK ENGINEER</h3>
            <p className="text-slate-500 font-medium">Vous êtes maintenant capable de bâtir le futur du web.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullstackRoadmapSH;
