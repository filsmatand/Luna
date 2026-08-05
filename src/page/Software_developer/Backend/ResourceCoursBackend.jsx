import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Code2, Terminal, Database, GitBranch, Sparkles, GraduationCap, 
  Cloud, Zap, TrendingUp, Cpu, ServerCog, HardDrive, Globe, 
  Lock, Lightbulb, Search, ChevronRight, ExternalLink, Menu, X,
  Settings, Info, MessageSquare, ArrowLeft, Layers, Activity, Workflow, Box, ShieldCheck
} from "lucide-react";
import { 
  FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaJava, FaGithub, FaReact
} from "react-icons/fa";
import { 
  SiPostgresql, SiRedis, SiMongodb, SiKubernetes, SiGraphql, SiTypescript, SiGo 
} from "react-icons/si";

// --- DONNÉES DU BACKEND ---
const modules = [
  // --- NIVEAU DÉBUTANT ---
  {
    title: "Fondamentaux du Backend & HTTP",
    description: "Comprendre le cycle Requête-Réponse, les codes de statut HTTP, et le fonctionnement des serveurs web.",
    icon: Globe,
    level: "Débutant",
    path: "/backend-basics",
    keyPoints: ["Cycle Requête-Réponse", "Verbes HTTP (GET, POST, etc.)", "Codes d'état (200, 404, 500)", "Headers & Cookies"],
    startCode: "// Exemple de serveur HTTP simple\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200);\n  res.end('Hello Backend!');\n});",
    exercise: "Créez un serveur qui retourne un objet JSON différent selon l'URL consultée."
  },
  {
    title: "Maîtrise du SQL & Modélisation",
    description: "Apprendre à concevoir des schémas relationnels, gérer les clés étrangères et optimiser les requêtes SQL.",
    icon: FaDatabase,
    level: "Débutant",
    path: "/sql-mastery",
    keyPoints: ["Modélisation Entité-Relation", "Jointures (INNER, LEFT, RIGHT)", "Indexation & Performance", "Transactions ACID"],
    startCode: "-- Création d'une table utilisateur\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  username VARCHAR(50) UNIQUE,\n  created_at TIMESTAMP DEFAULT NOW()\n);",
    exercise: "Concevez un schéma pour un blog avec des articles, des auteurs et des commentaires."
  },
  {
    title: "Node.js & Express Fondamentaux",
    description: "Créer votre premier serveur, gérer le routage, les middlewares et le traitement des données.",
    icon: FaNodeJs,
    level: "Débutant",
    path: "/nodejs-basics",
    keyPoints: ["Middlewares Express", "Gestion du Routage", "Parsing de Body", "Gestion des erreurs"],
    startCode: "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('API Express Active');\n});",
    exercise: "Implémentez une route POST qui reçoit des données et les affiche dans la console."
  },
  {
    title: "Gestion d'Environnement & Git",
    description: "Maîtriser les variables d'environnement, le versioning de code et les workflows de collaboration.",
    icon: GitBranch,
    level: "Débutant",
    path: "/git-backend",
    keyPoints: ["Fichiers .env", "Git Flow & Branches", "Merge vs Rebase", "Sécurisation des secrets"],
    startCode: "# Fichier .env\nPORT=3000\nDATABASE_URL=postgres://user:pass@localhost:5432/db",
    exercise: "Configurez un projet Node.js pour utiliser différentes variables selon l'environnement (dev/prod)."
  },
  {
    title: "Authentification de Base",
    description: "Implémenter l'inscription, la connexion et le hachage sécurisé des mots de passe (bcrypt).",
    icon: Lock,
    level: "Débutant",
    path: "/auth-basics",
    keyPoints: ["Hachage avec Bcrypt", "Salage des mots de passe", "Sessions vs Tokens", "Validation des entrées"],
    startCode: "const bcrypt = require('bcrypt');\nconst hash = await bcrypt.hash(password, 10);\nconst match = await bcrypt.compare(password, hash);",
    exercise: "Créez une fonction d'inscription qui vérifie si l'utilisateur existe déjà avant de le créer."
  },
  {
    title: "Introduction aux APIs REST",
    description: "Concevoir des points de terminaison clairs en suivant les conventions RESTful standards.",
    icon: Zap,
    level: "Débutant",
    path: "/rest-intro",
    keyPoints: ["Ressources & URIs", "Statelessness", "HATEOAS", "Versioning d'API"],
    startCode: "GET /api/v1/users\nPOST /api/v1/users\nPUT /api/v1/users/:id\nDELETE /api/v1/users/:id",
    exercise: "Transformez une liste de fonctions désordonnées en une structure d'API REST cohérente."
  },

  // --- NIVEAU INTERMÉDIAIRE ---
  {
    title: "Architecture & Design Patterns",
    description: "Apprendre l'architecture en couches (Clean Architecture), le Repository Pattern et les Singletons.",
    icon: Layers,
    level: "Intermédiaire",
    path: "/architecture",
    keyPoints: ["Clean Architecture", "Dependency Injection", "Repository Pattern", "Separation of Concerns"],
    startCode: "class UserRepository {\n  async findById(id) {\n    return await db.user.findUnique({ where: { id } });\n  }\n}",
    exercise: "Refactorisez un contrôleur 'gros' en utilisant le pattern Service/Repository."
  },
  {
    title: "Bases de Données NoSQL & Redis",
    description: "Utiliser MongoDB pour les données flexibles et Redis pour la mise en cache haute performance.",
    icon: SiRedis,
    level: "Intermédiaire",
    path: "/nosql-redis",
    keyPoints: ["Documents MongoDB", "Agrégations", "Caching avec Redis", "Pub/Sub"],
    startCode: "// Cache Redis simple\nconst val = await redis.get('user:123');\nif (!val) {\n  const data = await db.fetch();\n  await redis.set('user:123', data);\n}",
    exercise: "Implémentez un système de cache pour une route API qui met 2 secondes à répondre."
  },
  {
    title: "Sécurité Avancée & JWT",
    description: "Sécuriser les APIs avec JSON Web Tokens, gérer les Refresh Tokens et prévenir les failles OWASP.",
    icon: ShieldCheck,
    level: "Intermédiaire",
    path: "/advanced-security",
    keyPoints: ["JWT Payload & Sign", "Refresh Tokens", "CORS & CSP", "Prévention SQLi & XSS"],
    startCode: "const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {\n  expiresIn: '15m'\n});",
    exercise: "Mettez en place un middleware qui vérifie la validité du JWT sur toutes les routes protégées."
  },
  {
    title: "Docker & Conteneurisation",
    description: "Isoler vos applications et bases de données dans des conteneurs pour un déploiement reproductible.",
    icon: FaDocker,
    level: "Intermédiaire",
    path: "/docker",
    keyPoints: ["Dockerfiles", "Docker Compose", "Images & Volumes", "Networking"],
    startCode: "FROM node:18\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nCMD [\"npm\", \"start\"]",
    exercise: "Créez un fichier docker-compose pour lancer une application Node.js et une base Postgres."
  },
  {
    title: "Tests Unitaires & Intégration",
    description: "Garantir la fiabilité du code avec Jest, Mocha ou PyTest et automatiser la validation.",
    icon: Activity,
    level: "Intermédiaire",
    path: "/testing",
    keyPoints: ["Jest & Supertest", "Mocks & Spies", "Couverture de code", "TDD (Test Driven Dev)"],
    startCode: "test('GET /api/users returns 200', async () => {\n  const res = await request(app).get('/api/users');\n  expect(res.statusCode).toBe(200);\n});",
    exercise: "Écrivez un test unitaire pour une fonction de validation d'email."
  },
  {
    title: "GraphQL & APIs Modernes",
    description: "Dépasser le REST avec GraphQL pour permettre aux clients de demander exactement les données nécessaires.",
    icon: SiGraphql,
    level: "Intermédiaire",
    path: "/graphql",
    keyPoints: ["Schemas & Types", "Resolvers", "Queries & Mutations", "Apollo Server"],
    startCode: "type Query {\n  user(id: ID!): User\n}\n\ntype User {\n  id: ID\n  name: String\n}",
    exercise: "Créez un resolver simple qui retourne une liste d'utilisateurs depuis un tableau statique."
  },

  // --- NIVEAU EXPERT ---
  {
    title: "Architecture Microservices",
    description: "Découper un monolithe en services indépendants communiquant via gRPC ou courtiers de messages.",
    icon: ServerCog,
    level: "Expert",
    path: "/microservices",
    keyPoints: ["Service Discovery", "API Gateway", "Communication Asynchrone", "Database per Service"],
    startCode: "// Communication via Message Broker\nchannel.sendToQueue('order_created', Buffer.from(orderData));",
    exercise: "Schématisez la communication entre un service 'Commande' et un service 'Paiement'."
  },
  {
    title: "DevOps & CI/CD Avancé",
    description: "Automatiser le déploiement avec GitHub Actions, Jenkins et orchestrer avec Kubernetes.",
    icon: SiKubernetes,
    level: "Expert",
    path: "/devops-cicd",
    keyPoints: ["Pipelines YAML", "Blue/Green Deployment", "Kubernetes Pods & Services", "Helm Charts"],
    startCode: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: backend-api\nspec:\n  replicas: 3",
    exercise: "Configurez un workflow GitHub Actions qui lance les tests à chaque Pull Request."
  },
  {
    title: "Systèmes Distribués & Kafka",
    description: "Gérer la communication asynchrone à grande échelle avec Apache Kafka ou RabbitMQ.",
    icon: Workflow,
    level: "Expert",
    path: "/distributed-systems",
    keyPoints: ["Event Sourcing", "CQRS", "Kafka Topics & Partitions", "Consistance Eventuelle"],
    startCode: "const producer = kafka.producer();\nawait producer.send({\n  topic: 'user-events',\n  messages: [{ value: 'User logged in' }]\n});",
    exercise: "Implémentez un consommateur Kafka qui traite les logs de connexion en temps réel."
  },
  {
    title: "Cloud Computing & Serverless",
    description: "Maîtriser AWS Lambda, S3, et les architectures Event-Driven dans le cloud.",
    icon: FaAws,
    level: "Expert",
    path: "/cloud-expert",
    keyPoints: ["AWS Lambda Functions", "S3 Bucket Storage", "DynamoDB NoSQL", "Infrastructure as Code"],
    startCode: "exports.handler = async (event) => {\n  return { statusCode: 200, body: 'Hello from Lambda!' };\n};",
    exercise: "Créez une fonction Lambda qui se déclenche lors de l'upload d'un fichier sur S3."
  },
  {
    title: "Optimisation & Scalabilité",
    description: "Load balancing, Database Sharding, et techniques d'optimisation de performance extrême.",
    icon: Box,
    level: "Expert",
    path: "/scaling",
    keyPoints: ["Vertical vs Horizontal Scaling", "Load Balancing (Nginx)", "Database Indexing", "Content Delivery Networks"],
    startCode: "upstream backend_servers {\n  server backend1.example.com;\n  server backend2.example.com;\n}",
    exercise: "Identifiez les goulots d'étranglement dans une application qui traite 1 million de requêtes/min."
  },
  {
    title: "Monitoring & Observabilité",
    description: "Tracer les erreurs et surveiller la santé des systèmes avec Prometheus, Grafana et ELK Stack.",
    icon: HardDrive,
    level: "Expert",
    path: "/monitoring",
    keyPoints: ["Métriques & Alerting", "Logging Centralisé (ELK)", "Distributed Tracing", "Grafana Dashboards"],
    startCode: "const counter = new client.Counter({\n  name: 'http_requests_total',\n  help: 'Total HTTP requests'\n});",
    exercise: "Configurez une alerte qui se déclenche si le taux d'erreur 500 dépasse 5% sur 5 minutes."
  }
];

const levels = ["Débutant", "Intermédiaire", "Expert"];

export default function BackendDashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Détection de la taille de l'écran pour le responsive
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      
      {/* OVERLAY POUR MOBILE */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR RESPONSIVE */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? 280 : 0,
          x: isMobile && !isSidebarOpen ? -280 : 0
        }}
        className={`flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden z-40 transition-all duration-300 ${
          isMobile ? 'fixed inset-y-0 left-0 shadow-2xl shadow-blue-900/20' : 'relative'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-900/30 shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1 rounded text-white shadow-lg shadow-blue-500/20">
              <Database size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">Backend Docs</span>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <Settings size={16} />
          </button>
        </div>

        <div className="p-2 bg-gray-950 shrink-0">
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

        <nav className="flex-1 overflow-y-auto custom-scrollbar pb-4">
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
                        onClick={() => {
                          setSelectedModule(module);
                          if (isMobile) setIsSidebarOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center gap-3 group ${
                          selectedModule?.title === module.title 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
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

        <div className="p-2 border-t border-blue-900/30 bg-gray-950 flex items-center justify-around text-gray-500 shrink-0">
          <button title="Aide" className="hover:text-blue-400 transition-colors"><Info size={14} /></button>
          <button title="Contact" className="hover:text-blue-400 transition-colors"><MessageSquare size={14} /></button>
          <button title="Github" className="hover:text-blue-400 transition-colors"><FaGithub size={14} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT RESPONSIVE */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative overflow-hidden">
        <header className="h-12 sm:h-10 border-b border-blue-900/30 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            {/* BACK ARROW BUTTON */}
            <button 
              onClick={() => navigate('/')} 
              className="p-1.5 hover:bg-slate-800 rounded text-blue-400 hover:text-blue-300 transition-colors flex items-center shrink-0"
              title="Retour à l'accueil"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="h-4 w-[1px] bg-blue-900/50 mx-0.5 sm:mx-1 shrink-0"></div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors shrink-0"
            >
              {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            
            {/* Breadcrumbs responsive */}
            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wider truncate">
              <span className="hidden sm:inline hover:text-blue-400 cursor-pointer transition-colors">Backend</span>
              {selectedModule && (
                <>
                  <ChevronRight size={10} className="text-gray-700 hidden sm:inline" />
                  <span className="text-blue-400 font-bold shrink-0">{selectedModule.level}</span>
                  <ChevronRight size={10} className="text-gray-700" />
                  <span className="text-white lowercase truncate">{selectedModule.title}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] sm:text-[11px] shrink-0 ml-2">
            <a href="https://devdocs.io/javascript/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
              <span className="hidden xs:inline">Source</span> <ExternalLink size={10} />
            </a>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-12">
          <AnimatePresence mode="wait">
            {selectedModule ? (
              <motion.article
                key={selectedModule.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-3xl mx-auto lg:mx-0"
              >
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded bg-blue-950 border border-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                      {React.createElement(selectedModule.icon, { size: 24 })}
                    </div>
                    <div className="min-w-0">
                      <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight truncate">{selectedModule.title}</h1>
                      <p className="text-[10px] sm:text-xs text-blue-400 font-mono mt-1 uppercase tracking-widest">level: {selectedModule.level}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-base sm:text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <Info size={18} /> Description
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {selectedModule.description}
                    </p>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-xl p-4 sm:p-6">
                    <h2 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-blue-400" /> Points clés
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {selectedModule.keyPoints.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-base sm:text-lg font-bold text-white mb-4">Exemple de code</h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded-lg p-4 font-mono text-[10px] sm:text-[11px] text-gray-300 overflow-x-auto">
                      <pre className="whitespace-pre">{selectedModule.startCode}</pre>
                    </div>
                  </section>

                  <section className="bg-blue-950/20 border border-blue-900/30 rounded-xl p-4 sm:p-6">
                    <h2 className="text-base sm:text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <Zap size={18} /> Exercice pratique
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                      "{selectedModule.exercise}"
                    </p>
                  </section>

                  <div className="pt-10 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => navigate(selectedModule.path)}
                      className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                    >
                      Démarrer le module
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs font-black uppercase tracking-widest rounded-xl transition-all border border-slate-700 active:scale-95">
                      Documentation
                    </button>
                  </div>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-blue-900/20 rounded-3xl flex items-center justify-center mb-6 border border-blue-500/20">
                  <Database size={40} className="text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Bienvenue sur Backend Docs</h2>
                <p className="text-gray-500 text-sm max-w-sm">
                  Sélectionnez un module dans la barre latérale pour explorer les concepts fondamentaux et avancés du développement Backend.
                </p>
                {isMobile && !isSidebarOpen && (
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="mt-6 px-6 py-2 bg-blue-600 rounded-full text-xs font-bold text-white"
                  >
                    Ouvrir le menu
                  </button>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
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
        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 0px;
          }
        }
      `}} />
    </div>
  );
}
