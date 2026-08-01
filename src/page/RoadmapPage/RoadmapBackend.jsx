import React, { useState } from 'react';

const BackendRoadmapSH = () => {
  const [completed, setCompleted] = useState(new Set());

  const toggleNode = (id) => {
    const newSet = new Set(completed);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompleted(newSet);
  };

  const sections = [
    {
      id: "languages",
      title: "Langages & Runtimes",
      color: "bg-emerald-500",
      items: [
        { id: "node-js", label: "Node.js (LTS)", type: "essential" },
        { id: "go", label: "Go (Golang)", type: "essential" },
        { id: "rust", label: "Rust", type: "recommended" },
        { id: "python-fastapi", label: "Python & FastAPI", type: "recommended" },
        { id: "bun", label: "Bun Runtime", type: "alternative" }
      ]
    },
    {
      id: "databases",
      title: "Bases de Données",
      color: "bg-indigo-500",
      items: [
        { id: "postgresql", label: "PostgreSQL", type: "essential" },
        { id: "mongodb", label: "MongoDB", type: "recommended" },
        { id: "redis", label: "Redis (Caching)", type: "essential" },
        { id: "drizzle", label: "Drizzle ORM", type: "essential" },
        { id: "prisma", label: "Prisma ORM", type: "recommended" }
      ]
    },
    {
      id: "api-arch",
      title: "Architecture d'API",
      color: "bg-blue-600",
      items: [
        { id: "rest", label: "RESTful APIs", type: "essential" },
        { id: "graphql", label: "GraphQL", type: "recommended" },
        { id: "grpc", label: "gRPC", type: "essential" },
        { id: "trpc", label: "tRPC", type: "essential" }
      ]
    },
    {
      id: "auth-sec",
      title: "Authentification & Sécurité",
      color: "bg-red-500",
      items: [
        { id: "oauth2", label: "OAuth2 / OIDC", type: "essential" },
        { id: "jwt", label: "JWT (JSON Web Tokens)", type: "essential" },
        { id: "clerk", label: "Clerk / Auth.js", type: "essential" },
        { id: "argon2", label: "Hashing (Argon2)", type: "essential" }
      ]
    },
    {
      id: "devops-cloud",
      title: "DevOps & Infrastructure",
      color: "bg-cyan-500",
      items: [
        { id: "docker", label: "Docker", type: "essential" },
        { id: "k8s", label: "Kubernetes", type: "recommended" },
        { id: "github-actions", label: "GitHub Actions (CI/CD)", type: "essential" },
        { id: "aws", label: "AWS / GCP", type: "essential" },
        { id: "terraform", label: "Terraform (IaC)", type: "recommended" }
      ]
    },
    {
      id: "messaging",
      title: "Messaging & Real-time",
      color: "bg-purple-600",
      items: [
        { id: "kafka", label: "Apache Kafka", type: "recommended" },
        { id: "rabbitmq", label: "RabbitMQ", type: "recommended" },
        { id: "websockets", label: "WebSockets", type: "essential" },
        { id: "sse", label: "Server-Sent Events", type: "essential" }
      ]
    },
    {
      id: "ai-backend",
      title: "AI & Vector Engineering",
      color: "bg-fuchsia-500",
      items: [
        { id: "pgvector", label: "pgvector / Pinecone", type: "essential" },
        { id: "langchain", label: "LangChain / Agents", type: "recommended" },
        { id: "rag", label: "RAG Architecture", type: "essential" }
      ]
    },
    {
      id: "observability",
      title: "Tests & Observabilité",
      color: "bg-orange-500",
      items: [
        { id: "vitest", label: "Vitest / Jest", type: "essential" },
        { id: "prometheus", label: "Prometheus / Grafana", type: "recommended" },
        { id: "sentry", label: "Sentry (Error Tracking)", type: "essential" },
        { id: "otel", label: "OpenTelemetry", type: "recommended" }
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
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
            Expert Roadmap 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Backend <span className="text-emerald-600">Roadmap</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Suivez le chemin pour devenir un expert Backend. 
            Maîtrisez les systèmes distribués, les bases de données et l'IA.
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
          <div className="inline-block p-10 bg-white rounded-3xl shadow-xl  relative overflow-hidden group">
            <h3 className="text-3xl font-black text-emerald-600 mb-3 tracking-tighter">ARCHITECTE BACKEND PRÊT</h3>
            <p className="text-slate-500 font-medium">Continuez à construire des systèmes robustes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendRoadmapSH;
