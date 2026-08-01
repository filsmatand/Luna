import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Database, Server, ShieldCheck, Zap, GitBranch, Sparkles, 
  GraduationCap, Cloud, Cpu, ServerCog, HardDrive, Globe, 
  Lock, Lightbulb, Box, Layers, Workflow, Activity, Terminal
} from "lucide-react";
import { 
  FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaJava 
} from "react-icons/fa";
import { 
  SiPostgresql, SiRedis, SiMongodb, SiKubernetes, SiGraphql, SiTypescript, SiGo 
} from "react-icons/si";

const modules = [
  // --- NIVEAU DÉBUTANT ---
  {
    title: "Fondamentaux du Backend & HTTP",
    description: "Comprendre le cycle Requête-Réponse, les codes de statut HTTP, et le fonctionnement des serveurs web.",
    icon: Globe,
    level: "Débutant",
    path: "/backend-basics",
  },
  {
    title: "Maîtrise du SQL & Modélisation",
    description: "Apprendre à concevoir des schémas relationnels, gérer les clés étrangères et optimiser les requêtes SQL.",
    icon: FaDatabase,
    level: "Débutant",
    path: "/sql-mastery",
  },
  {
    title: "Node.js & Express Fondamentaux",
    description: "Créer votre premier serveur, gérer le routage, les middlewares et le traitement des données.",
    icon: FaNodeJs,
    level: "Débutant",
    path: "/nodejs-basics",
  },
  {
    title: "Gestion d'Environnement & Git",
    description: "Maîtriser les variables d'environnement, le versioning de code et les workflows de collaboration.",
    icon: GitBranch,
    level: "Débutant",
    path: "/git-backend",
  },
  {
    title: "Authentification de Base",
    description: "Implémenter l'inscription, la connexion et le hachage sécurisé des mots de passe (bcrypt).",
    icon: Lock,
    level: "Débutant",
    path: "/auth-basics",
  },
  {
    title: "Introduction aux APIs REST",
    description: "Concevoir des points de terminaison clairs en suivant les conventions RESTful standards.",
    icon: Zap,
    level: "Débutant",
    path: "/rest-intro",
  },

  // --- NIVEAU INTERMÉDIAIRE ---
  {
    title: "Architecture & Design Patterns",
    description: "Apprendre l'architecture en couches (Clean Architecture), le Repository Pattern et les Singletons.",
    icon: Layers,
    level: "Intermédiaire",
    path: "/architecture",
  },
  {
    title: "Bases de Données NoSQL & Redis",
    description: "Utiliser MongoDB pour les données flexibles et Redis pour la mise en cache haute performance.",
    icon: SiRedis,
    level: "Intermédiaire",
    path: "/nosql-redis",
  },
  {
    title: "Sécurité Avancée & JWT",
    description: "Sécuriser les APIs avec JSON Web Tokens, gérer les Refresh Tokens et prévenir les failles OWASP.",
    icon: ShieldCheck,
    level: "Intermédiaire",
    path: "/advanced-security",
  },
  {
    title: "Docker & Conteneurisation",
    description: "Isoler vos applications et bases de données dans des conteneurs pour un déploiement reproductible.",
    icon: FaDocker,
    level: "Intermédiaire",
    path: "/docker",
  },
  {
    title: "Tests Unitaires & Intégration",
    description: "Garantir la fiabilité du code avec Jest, Mocha ou PyTest et automatiser la validation.",
    icon: Activity,
    level: "Intermédiaire",
    path: "/testing",
  },
  {
    title: "GraphQL & APIs Modernes",
    description: "Dépasser le REST avec GraphQL pour permettre aux clients de demander exactement les données nécessaires.",
    icon: SiGraphql,
    level: "Intermédiaire",
    path: "/graphql",
  },

  // --- NIVEAU EXPERT ---
  {
    title: "Architecture Microservices",
    description: "Découper un monolithe en services indépendants communiquant via gRPC ou courtiers de messages.",
    icon: ServerCog,
    level: "Expert",
    path: "/microservices",
  },
  {
    title: "DevOps & CI/CD Avancé",
    description: "Automatiser le déploiement avec GitHub Actions, Jenkins et orchestrer avec Kubernetes.",
    icon: SiKubernetes,
    level: "Expert",
    path: "/devops-cicd",
  },
  {
    title: "Systèmes Distribués & Kafka",
    description: "Gérer la communication asynchrone à grande échelle avec Apache Kafka ou RabbitMQ.",
    icon: Workflow,
    level: "Expert",
    path: "/distributed-systems",
  },
  {
    title: "Cloud Computing & Serverless",
    description: "Maîtriser AWS Lambda, S3, et les architectures Event-Driven dans le cloud.",
    icon: FaAws,
    level: "Expert",
    path: "/cloud-expert",
  },
  {
    title: "Optimisation & Scalabilité",
    description: "Load balancing, Database Sharding, et techniques d'optimisation de performance extrême.",
    icon: Box,
    level: "Expert",
    path: "/scaling",
  },
  {
    title: "Monitoring & Observabilité",
    description: "Tracer les erreurs et surveiller la santé des systèmes avec Prometheus, Grafana et ELK Stack.",
    icon: HardDrive,
    level: "Expert",
    path: "/monitoring",
  },
];

export default function BackendMastery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 md:px-24 bg-gray-950 font-sans text-slate-100 selection:bg-blue-500/30">
      
      {/* --- SECTION HERO --- */}
      <div className="mx-auto px-4 pt-16 mb-16 max-w-5xl text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-5 py-2 text-sm font-semibold text-blue-400 mb-8"
        >
          <Sparkles size={18} />
          Parcours Expert Backend 2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
        >
          Maîtrisez l'Art du <span className="text-blue-500">Backend</span>
        </motion.h1>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          De la conception de bases de données à l'orchestration de microservices, devenez l'architecte des systèmes de demain.
        </p>

        {/* Technologies Backend */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
            { name: "Docker", icon: FaDocker, color: "text-blue-500" },
            { name: "Python", icon: FaPython, color: "text-yellow-500" },
            { name: "Go", icon: SiGo, color: "text-cyan-400" },
            { name: "Redis", icon: SiRedis, color: "text-red-500" },
            { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
            { name: "AWS", icon: FaAws, color: "text-orange-400" }
          ].map((tech) => (
            <div key={tech.name} className="group flex items-center gap-3 rounded-xl border border-blue-900/50 bg-zinc-900/50 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-blue-500/10">
              <tech.icon className={`text-xl ${tech.color}`} />
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- COURS PAR NIVEAU --- */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          {['Débutant', 'Intermédiaire', 'Expert'].map((level, levelIdx) => (
            <div key={level} className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white">{level}</h3>
                  <p className="text-gray-500 text-sm">Étape {levelIdx + 1} de votre apprentissage</p>
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
                      className="group relative rounded-2xl border border-gray-800 bg-gray-900/50 p-6 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
                    >
                      {/* Badge de niveau */}
                      <div className="absolute top-6 right-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          level === 'Débutant' ? 'border-green-500/30 text-green-400 bg-green-500/5' :
                          level === 'Intermédiaire' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
                          'border-purple-500/30 text-purple-400 bg-purple-500/5'
                        }`}>
                          {level}
                        </span>
                      </div>

                      {/* Icône */}
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {IconComponent && <IconComponent size={24} />}
                      </div>

                      {/* Contenu */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        {module.description}
                      </p>

                      {/* Action */}
                      <button
                        onClick={() => navigate(module.path)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-sm font-bold text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                      >
                        Commencer le module
                        <Zap size={16} className="fill-current" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="pb-20 text-center">
        <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="bg-gray-950 rounded-2xl px-12 py-8">
            <h4 className="text-2xl font-bold mb-2 text-white">Prêt à coder ?</h4>
            <p className="text-gray-400 mb-6">Le monde du backend n'attend que vous.</p>
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all">
              Télécharger la Roadmap PDF
            </button>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        :root { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
}
