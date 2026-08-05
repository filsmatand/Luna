import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Cloud,
  Search,
  ChevronRight,
  Menu,
  X,
  Settings,
  Info,
  MessageSquare,
  BookOpen,
  Terminal,
  Zap,
  ArrowLeft,
  UploadCloud,
  GitBranch,
  Globe,
  Cpu,
  Activity,
  Database,
  Lock,
  Server,
  Code2,
  Split,
  LayoutGrid,
  Network,
  Container,
  Shield,
  Layers
} from "lucide-react";

import { FaGithub, FaAws, FaDocker } from "react-icons/fa";

const lessons = [
  {
    title: "CI/CD Avancé : GitHub Actions & Workflows",
    category: "Automation",
    icon: GitBranch,
    color: "text-blue-400",
    course: "Le CI/CD (Continuous Integration / Continuous Deployment) est le pilier du développement moderne. GitHub Actions permet d'automatiser tout votre cycle de vie logiciel directement depuis votre dépôt. Pour un développeur frontend, cela signifie automatiser le linting, les tests unitaires (Jest/Vitest), les tests end-to-end (Cypress/Playwright), le build de production et enfin le déploiement sur des plateformes comme Vercel, Netlify ou AWS S3. Un workflow bien configuré garantit que seul un code de haute qualité atteint la production, réduisant ainsi drastiquement les régressions.",
    code: `name: Frontend CI/CD
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Dependencies
        run: npm ci
      - name: Run Tests
        run: npm test
      - name: Build Production
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'`,
    exercise: "Configurez un workflow GitHub Action qui s'exécute uniquement sur les Pull Requests vers la branche 'main', installe les dépendances avec 'npm ci', et exécute 'npm run lint'.",
  },
  {
    title: "Hébergement Statique & CDN (CloudFront/Vercel)",
    category: "Hosting",
    icon: Globe,
    color: "text-indigo-500",
    course: "Les frameworks modernes (React, Vue, Svelte) génèrent des fichiers statiques (HTML, CSS, JS). L'hébergement optimal consiste à placer ces fichiers dans un bucket de stockage (comme AWS S3) et à les servir via un Content Delivery Network (CDN) comme AWS CloudFront. Le CDN distribue votre contenu sur des serveurs 'Edge' situés partout dans le monde, réduisant la latence pour l'utilisateur final. De plus, un CDN gère le SSL (HTTPS), la compression Brotli/Gzip, et les politiques de mise en cache (Cache-Control) qui sont cruciales pour les performances Web Vitals.",
    code: `# Déploiement vers S3 et Invalidation CloudFront
aws s3 sync ./dist s3://my-frontend-bucket --delete

# Invalider le cache pour forcer la mise à jour
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths: "/*"`,
    exercise: "Rédigez une politique de cache-control pour vos fichiers JS (hachés) afin qu'ils soient mis en cache pendant 1 an, et pour votre index.html afin qu'il ne soit jamais mis en cache.",
  },
  {
    title: "Serverless Functions & BFF (Backend-for-Frontend)",
    category: "Compute",
    icon: Cpu,
    color: "text-cyan-500",
    course: "Le Serverless permet aux développeurs frontend d'écrire du code côté serveur sans gérer d'infrastructure. Les fonctions AWS Lambda ou les Edge Functions de Vercel sont parfaites pour créer un pattern BFF. Ce pattern permet de transformer, filtrer ou agréger des données provenant de plusieurs API tierces avant qu'elles n'atteignent votre client. C'est idéal pour gérer l'authentification (JWT), l'envoi de mails, ou le traitement d'images à la volée, tout en gardant votre frontend léger et sécurisé.",
    code: `// Exemple de fonction Serverless (Node.js)
export default async function handler(req, res) {
  const { userId } = req.query;
  
  // Appel à une API interne sécurisée avec une clé secrète
  const userData = await fetch(\`https://api.internal.com/users/\${userId}\`, {
    headers: { 'Authorization': \`Bearer \${process.env.INTERNAL_API_KEY}\` }
  });
  
  const data = await userData.json();
  
  // Retourner uniquement les données nécessaires au frontend
  res.status(200).json({ name: data.name, avatar: data.profile_pic });
}`,
    exercise: "Créez un pseudo-code pour une fonction Serverless qui reçoit un formulaire de contact et l'envoie vers une API de messagerie externe.",
  },
  {
    title: "Sécurité Cloud : Secrets & IAM",
    category: "Sécurité",
    icon: Lock,
    color: "text-red-400",
    course: "La sécurité dans le cloud repose sur le principe du moindre privilège. Pour un frontend, cela signifie ne jamais exposer de clés API sensibles (comme des clés privées Stripe ou des accès AWS) dans le code client. Utilisez des variables d'environnement injectées au moment du build ou au runtime via des fonctions serverless. Sur AWS, IAM (Identity and Access Management) permet de définir précisément qui (ou quel service) peut accéder à quelle ressource. Apprenez à utiliser les rôles IAM plutôt que des clés d'accès statiques pour vos déploiements.",
    code: `// NE PAS FAIRE : 
// const AWS_KEY = 'AKIA...'; 

// À FAIRE : Utiliser les variables d'environnement
const apiKey = process.env.NEXT_PUBLIC_ANALYTICS_KEY; // Public
const secretKey = process.env.STRIPE_SECRET_KEY; // Uniquement côté serveur`,
    exercise: "Listez trois types de secrets qui ne devraient JAMAIS apparaître dans votre code frontend compilé.",
  },
  {
    title: "Infrastructure as Code (IaC) pour Frontend",
    category: "Automation",
    icon: Code2,
    color: "text-emerald-400",
    course: "L'Infrastructure as Code permet de définir votre infrastructure cloud (Buckets S3, distributions CloudFront, bases de données) via des fichiers de configuration. Des outils comme Terraform, AWS CDK ou Pulumi permettent de versionner votre infrastructure comme votre code. Pour une équipe frontend, cela garantit que les environnements de staging et de production sont identiques et reproductibles en un clic. C'est une compétence de plus en plus demandée pour les profils 'Frontend Engineer' ou 'Fullstack'.",
    code: `# Exemple Terraform pour un bucket S3
resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "my-app-frontend-prod"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}`,
    exercise: "Expliquez l'avantage d'utiliser l'IaC par rapport à la création manuelle de ressources via la console AWS.",
  },
  {
    title: "Observabilité & Monitoring Frontend",
    category: "Compute",
    icon: Activity,
    color: "text-orange-400",
    course: "Une fois votre application déployée, vous devez savoir comment elle se comporte. L'observabilité cloud pour le frontend inclut le Real User Monitoring (RUM), le suivi des erreurs (Sentry, LogRocket) et les métriques de performance. Sur AWS, CloudWatch permet de surveiller les logs de vos fonctions serverless et les performances de votre CDN. Comprendre comment lire des logs et configurer des alertes est essentiel pour réagir rapidement en cas d'incident en production.",
    code: `// Intégration simple de monitoring d'erreurs
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});

// Capturer une erreur spécifique
try {
  doSomethingDangerous();
} catch (error) {
  Sentry.captureException(error);
}`,
    exercise: "Identifiez les trois métriques Core Web Vitals que vous devriez surveiller en priorité sur votre dashboard de monitoring.",
  },
  {
    title: "Déploiement Blue/Green & Canary",
    category: "Deployment Strategies",
    icon: Split,
    color: "text-purple-400",
    course: "Les stratégies de déploiement Blue/Green et Canary sont essentielles pour minimiser les risques lors des mises à jour en production. Le Blue/Green implique de maintenir deux environnements identiques (Blue et Green) et de basculer le trafic d'un coup. Le Canary déploie la nouvelle version à un petit sous-ensemble d'utilisateurs, puis augmente progressivement le trafic si aucune erreur n'est détectée.",
    code: `# Pseudo-code pour un déploiement Canary
update_load_balancer_rules(
  route: "/",
  target_group_blue: 90,
  target_group_green: 10
);`,
    exercise: "Décrivez un scénario où un déploiement Blue/Green serait plus approprié qu'un déploiement Canary.",
  },
  {
    title: "Edge Computing & Personnalisation",
    category: "Performance",
    icon: Network,
    color: "text-pink-400",
    course: "L'Edge Computing permet d'exécuter du code au plus près de l'utilisateur final. Des services comme CloudFront Functions ou Vercel Edge Functions permettent de modifier les requêtes HTTP à la volée pour personnaliser le contenu sans latence.",
    code: `// Exemple Edge Function (Vercel)
export const config = { runtime: 'edge' };

export default function handler(req) {
  const country = req.headers.get('x-vercel-ip-country');
  return new Response(\`Hello from \${country}!\`);
}`,
    exercise: "Proposez un cas d'utilisation pour l'Edge Computing afin d'améliorer l'expérience utilisateur.",
  },
  {
    title: "Micro-Frontends & Orchestration",
    category: "Architecture",
    icon: LayoutGrid,
    color: "text-yellow-400",
    course: "Les Micro-Frontends décomposent une application monolithique en plusieurs applications indépendantes. Cela permet à de grandes équipes de travailler sur différentes parties de l'UI sans conflits, améliorant la scalabilité.",
    code: `// Module Federation (Webpack)
new ModuleFederationPlugin({
  name: 'app1',
  remotes: {
    app2: 'app2@http://localhost:3002/remoteEntry.js',
  },
});`,
    exercise: "Quels sont les principaux défis techniques liés à l'adoption d'une architecture Micro-Frontends ?",
  },
  {
    title: "Conteneurisation (Docker) pour Frontend",
    category: "Deployment",
    icon: Container,
    color: "text-blue-500",
    course: "Docker permet d'empaqueter votre application et ses dépendances dans une image portable. Pour un frontend, cela signifie souvent servir les fichiers statiques via un serveur Nginx à l'intérieur du conteneur.",
    code: `FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
    exercise: "Créez un Dockerfile simple pour une application React.",
  },
  {
    title: "Conformité & RGPD dans le Cloud",
    category: "Sécurité",
    icon: Shield,
    color: "text-green-500",
    course: "La conformité RGPD est obligatoire pour toute application traitant des données personnelles. Cela implique de comprendre où les données sont stockées et comment elles sont protégées.",
    code: `// Consentement des cookies
if (userConsent.granted) {
  loadAnalytics();
}`,
    exercise: "Quelles sont les implications du RGPD pour le stockage des données utilisateur dans un bucket S3 ?",
  },
  {
    title: "Architecture Fullstack (GraphQL/BaaS)",
    category: "Architecture",
    icon: Layers,
    color: "text-teal-400",
    course: "Utiliser GraphQL ou des services BaaS (Supabase, Firebase) simplifie la gestion des données et de l'authentification, permettant aux frontends de construire des applications complètes rapidement.",
    code: `const { data } = useQuery(GET_PRODUCTS);`,
    exercise: "Comparez les avantages de GraphQL par rapport à une API REST.",
  },
];

const categories = ["Automation", "Hosting", "Compute", "Sécurité", "Deployment Strategies", "Performance", "Architecture", "Deployment"];

export default function CloudDeploymentResources() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const filteredLessons = useMemo(() => {
    return lessons.filter(l =>
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.course.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const lessonsByCategory = useMemo(() => {
    const grouped = {};
    categories.forEach(cat => {
      grouped[cat] = filteredLessons.filter(l => l.category === cat);
    });
    return grouped;
  }, [filteredLessons]);

  return (
    <div className="flex h-screen bg-gray-950 font-sans text-white overflow-hidden selection:bg-blue-500/30">
      
      {/* SIDEBAR */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 300 : 0 }}
        className="flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-4 bg-gray-950 border-b border-blue-900/30">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded text-white shadow-lg shadow-blue-500/20">
              <Cloud size={18} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">Cloud & Deploy Master</span>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <Settings size={18} />
          </button>
        </div>

        <div className="p-3 bg-gray-950">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
            <input
              type="text"
              placeholder="Rechercher un cours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-blue-900/20 rounded-md py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          {categories.map(cat => (
            lessonsByCategory[cat] && lessonsByCategory[cat].length > 0 && (
              <div key={cat} className="mt-4">
                <div className="px-4 py-1.5 text-[10px] font-bold text-blue-400/70 uppercase tracking-widest flex items-center justify-between">
                  <span>{cat}</span>
                  <span className="bg-blue-900/30 px-1.5 py-0.5 rounded text-[8px]">{lessonsByCategory[cat].length}</span>
                </div>
                <ul className="mt-1">
                  {lessonsByCategory[cat].map((lesson) => (
                    <li key={lesson.title}>
                      <button
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full text-left px-4 py-2.5 text-xs transition-all flex items-center gap-3 group ${
                          selectedLesson?.title === lesson.title 
                            ? 'bg-blue-900/40 text-white border-l-4 border-blue-500' 
                            : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                        }`}
                      >
                        {React.createElement(lesson.icon, { size: 16, className: selectedLesson?.title === lesson.title ? 'text-blue-400' : lesson.color })}
                        <span className="truncate flex-1 font-medium">{lesson.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </nav>

        <div className="p-3 border-t border-blue-900/30 bg-gray-950 flex items-center justify-around text-gray-500">
          <button title="Aide" className="hover:text-blue-400 transition-colors"><Info size={16} /></button>
          <button title="Contact" className="hover:text-blue-400 transition-colors"><MessageSquare size={16} /></button>
          <button title="Github" className="hover:text-blue-400 transition-colors"><FaGithub size={16} /></button>
          <button title="Docker" className="hover:text-blue-400 transition-colors"><FaDocker size={16} /></button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative">
        <header className="h-12 border-b border-blue-900/30 flex items-center justify-between px-6 bg-slate-900/30 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/resourcecourcefrontend')} 
              className="p-1.5 hover:bg-slate-800 rounded-md text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              title="Retour au tableau de bord"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="h-5 w-[1px] bg-blue-900/50 mx-1"></div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 hover:bg-slate-800 rounded-md text-gray-500 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div className="flex items-center gap-2 text-[12px] text-gray-500 uppercase tracking-wider font-semibold">
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Curriculum</span>
              {selectedLesson && (
                <>
                  <ChevronRight size={14} className="text-gray-700" />
                  <span className="text-blue-400">{selectedLesson.category}</span>
                  <ChevronRight size={14} className="text-gray-700" />
                  <span className="text-white normal-case font-normal">{selectedLesson.title}</span>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-16">
          <AnimatePresence mode="wait">
            {selectedLesson ? (
              <motion.article
                key={selectedLesson.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto"
              >
                <div className="border-b border-blue-900/30 pb-8 mb-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`h-16 w-16 rounded-xl bg-blue-950 border border-blue-900/50 flex items-center justify-center shadow-2xl shadow-blue-500/10 ${selectedLesson.color}`}>
                      {React.createElement(selectedLesson.icon, { size: 32 })}
                    </div>
                    <div>
                      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">{selectedLesson.title}</h1>
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-blue-900/30 text-[10px] text-blue-400 font-bold uppercase tracking-widest border border-blue-800/30">
                          {selectedLesson.category}
                        </span>
                        <span className="text-xs text-gray-500 font-mono italic">Expertise Frontend Cloud</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  <section className="bg-slate-900/20 p-6 rounded-2xl border border-blue-900/10">
                    <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                      <BookOpen size={22} /> Le Cours Magistral
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base font-light">
                      {selectedLesson.course}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                      <Terminal size={22} className="text-blue-400" /> Implémentation Technique
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/40 rounded-xl overflow-hidden shadow-2xl">
                      <div className="bg-slate-800/50 px-4 py-2 border-b border-blue-900/30 flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">deployment_config.yaml</span>
                      </div>
                      <div className="p-6 font-mono text-[13px] text-gray-300 leading-relaxed">
                        <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                      </div>
                    </div>
                  </section>

                  <section className="bg-blue-600/5 border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                      <Zap size={80} className="text-blue-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <UploadCloud size={22} className="text-blue-300" /> Défi Pratique
                    </h2>
                    <div className="bg-gray-950/60 border border-blue-900/30 p-6 rounded-xl text-sm text-gray-300 leading-relaxed shadow-inner">
                      <p className="font-medium text-blue-200 mb-2">Objectif de la mission :</p>
                      {selectedLesson.exercise}
                    </div>
                  </section>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-24 h-24 rounded-3xl bg-slate-900 border border-blue-900/30 flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20"
                >
                  <Cloud size={48} className="text-blue-500" />
                </motion.div>
                <h2 className="text-3xl font-extrabold text-white mb-4">Cloud Deployment for Frontend Masters</h2>
                <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                  Devenez un ingénieur frontend complet en maîtrisant l'écosystème Cloud. Apprenez à déployer, sécuriser et monitorer vos applications sur AWS, Azure et Vercel avec les standards de l'industrie.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {[FaAws, FaGithub, FaDocker, Cloud, Server, Database].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, color: '#60a5fa' }}
                      className="text-2xl text-gray-600 cursor-pointer transition-colors"
                    >
                      <Icon />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}} />
    </div>
  );
}
