import React, { useState, useMemo, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Layout, Search, ChevronRight, Menu, X,
  Settings, Info, MessageSquare, BookOpen,
  Terminal, Zap, MousePointer2, CheckCircle2, ArrowLeft,
  Layers, Code2, Sparkles, RefreshCw,
  Cpu, Database, ShieldCheck,Eye, Share2, Globe, Monitor,Activity
} from "lucide-react";
import { FaGithub, FaReact } from "react-icons/fa";

// --- SIMULATIONS DE RENDU POUR CHAQUE MODULE ---
const PreviewJSX = () => (
  <div className="p-4 bg-slate-900 rounded-lg border border-blue-500/20 shadow-lg">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">JD</div>
      <div>
        <h4 className="text-sm font-bold text-white">Jane Doe</h4>
        <p className="text-[10px] text-blue-400">Architecte Frontend</p>
      </div>
    </div>
    <p className="mt-2 text-[11px] text-gray-400">Ceci est un rendu JSX sémantique.</p>
  </div>
);

const PreviewState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 bg-slate-900 rounded-lg border border-indigo-500/20 text-center">
      <div className="text-2xl font-bold text-white mb-2">{count}</div>
      <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 bg-indigo-600 text-white rounded text-[10px] font-bold">Incrémenter</button>
    </div>
  );
};

const PreviewCart = () => (
  <div className="p-4 bg-slate-900 rounded-lg border border-purple-500/20">
    <div className="flex justify-between text-[10px] text-gray-300 mb-1"><span>Article A</span><span>20€</span></div>
    <div className="flex justify-between text-[10px] text-gray-300 mb-1"><span>Article B</span><span>15€</span></div>
    <div className="mt-2 pt-2 border-t border-slate-800 text-right font-bold text-white text-xs">Total: 35€</div>
  </div>
);

const PreviewForm = () => (
  <div className="p-4 bg-slate-900 rounded-lg border border-green-500/20">
    <input type="text" placeholder="Nom..." className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[10px] mb-2 text-white" />
    <button className="w-full py-1.5 bg-green-600 text-white rounded text-[10px] font-bold">Soumettre</button>
  </div>
);

const lessons = [
  {
    title: "Composants et JSX Moderne",
    category: "Fondamentaux",
    icon: Layout,
    color: "text-blue-400",
    course: "En 2027, les composants sont les atomes de votre application. Imaginez un jeu de LEGO : chaque pièce est un composant indépendant avec sa propre forme (structure) et couleur (style). JSX est le langage qui permet de décrire cet assemblage. Au quotidien, quand vous voyez un bouton, une barre de navigation ou une carte de produit sur Amazon, vous voyez des composants. La théorie veut que chaque composant soit 'pur' : pour les mêmes données en entrée (props), il doit toujours afficher la même chose en sortie. Cela rend votre code prévisible et facile à tester.",
    code: "const Welcome = ({ name }) => (\n  <section className=\"welcome-box\">\n    <h1>Bonjour, {name} !</h1>\n    <p>Prêt à coder en 2027 ?</p>\n  </section>\n);",
    preview: <PreviewJSX />,
    exercise: "Créez un composant 'Header' qui affiche un titre et un sous-titre passés en props.",
  },
  {
    title: "Hooks Essentiels (useState)",
    category: "Hooks",
    icon: Zap,
    color: "text-indigo-500",
    course: "Le hook useState est la mémoire vive de votre composant. Dans la vie réelle, c'est comme votre cerveau qui se souvient si une lumière est allumée ou éteinte. Sans état, React serait une simple page statique. Quand un utilisateur clique sur un bouton 'Like' ou tape dans un champ de recherche, c'est useState qui capture et stocke cette information. Chaque fois que l'état change, React redessine intelligemment la partie de l'écran concernée. C'est la base de toute interactivité moderne.",
    code: "const [isActive, setIsActive] = useState(false);\n\nreturn (\n  <button onClick={() => setIsActive(!isActive)}>\n    {isActive ? 'Activé' : 'Désactivé'}\n  </button>\n);",
    preview: <PreviewState />,
    exercise: "Ajoutez un bouton 'Reset' qui remet le compteur à zéro.",
  },
  {
    title: "Gestion d'Effets (useEffect)",
    category: "Hooks",
    icon: RefreshCw,
    color: "text-cyan-500",
    course: "useEffect permet de synchroniser votre composant avec le monde extérieur. C'est comme un majordome qui attend qu'un événement se produise pour agir. Par exemple, charger vos messages dès que vous ouvrez une application, ou changer le titre de l'onglet du navigateur. On l'utilise pour les appels API, les abonnements à des flux de données ou la manipulation directe du DOM. Il est crucial de bien gérer le tableau de dépendances pour éviter que votre majordome ne travaille sans arrêt inutilement.",
    code: "useEffect(() => {\n  console.log('Composant monté !');\n  return () => console.log('Nettoyage...');\n}, []);",
    preview: <div className="p-4 bg-slate-900 rounded border border-cyan-500/20 text-[10px] text-cyan-400 italic">Surveillance des effets active...</div>,
    exercise: "Utilisez useEffect pour afficher une alerte 'Bienvenue' uniquement au premier chargement de la page.",
  },
  {
    title: "Logique avec useReducer",
    category: "Hooks",
    icon: Database,
    color: "text-purple-400",
    course: "Quand la logique devient trop complexe pour un simple useState (comme un panier d'achat avec ajout, suppression et calcul de total), useReducer entre en scène. C'est comme une recette de cuisine : vous envoyez une 'action' (ex: 'ajouter du sel') et le 'reducer' calcule le nouvel état du plat. Cela centralise toute la logique de modification de données en un seul endroit, rendant le code beaucoup plus robuste et facile à déboguer dans de grandes applications.",
    code: "const reducer = (state, action) => {\n  switch(action.type) {\n    case 'ADD': return { count: state.count + 1 };\n    default: return state;\n  }\n};",
    preview: <PreviewCart />,
    exercise: "Ajoutez une action 'CLEAR_CART' pour vider tous les articles d'un coup.",
  },
  {
    title: "Optimisation avec useMemo",
    category: "Performance",
    icon: Cpu,
    color: "text-yellow-400",
    course: "useMemo est le coffre-fort de vos calculs. Si vous avez une opération très longue (comme filtrer 10 000 produits), useMemo se souvient du résultat. Tant que vos critères de recherche ne changent pas, il vous redonne instantanément la valeur stockée au lieu de tout recalculer. C'est comme apprendre une table de multiplication par cœur au lieu de refaire l'addition à chaque fois. C'est vital pour garder une application fluide et rapide, surtout sur mobile.",
    code: "const expensiveValue = useMemo(() => {\n  return heavyCalculation(data);\n}, [data]);",
    preview: <div className="p-4 bg-slate-900 rounded border border-yellow-500/20 text-[10px] text-yellow-400">Calcul mémorisé : 42ms</div>,
    exercise: "Mémorisez le résultat d'une fonction qui trie une liste de noms par ordre alphabétique.",
  },
  {
    title: "Stabilité avec useCallback",
    category: "Performance",
    icon: MousePointer2,
    color: "text-blue-500",
    course: "useCallback sert à mémoriser une fonction. En JavaScript, chaque fois qu'un composant se re-rend, les fonctions à l'intérieur sont recréées. Si vous passez cette fonction à un composant enfant, il risque de se re-rendre inutilement. useCallback empêche cela en gardant la même instance de fonction. C'est comme donner une clé physique à quelqu'un : tant que la serrure ne change pas, vous n'avez pas besoin de lui refabriquer une nouvelle clé à chaque fois qu'il vient chez vous.",
    code: "const handleClick = useCallback(() => {\n  doSomething(id);\n}, [id]);",
    preview: <div className="p-4 bg-slate-900 rounded border border-blue-500/20 text-[10px] text-blue-300">Fonction stable en mémoire.</div>,
    exercise: "Utilisez useCallback pour une fonction de suppression passée à une liste d'éléments.",
  },
  {
    title: "Accès DOM avec useRef",
    category: "Hooks",
    icon: Terminal,
    color: "text-slate-400",
    course: "useRef est votre passerelle directe vers les éléments HTML. React préfère que vous gériez tout via l'état, mais parfois vous devez 'toucher' l'élément (ex: mettre le focus sur un champ, démarrer une vidéo, ou mesurer la taille d'une div). C'est aussi un tiroir secret : vous pouvez y stocker n'importe quelle valeur qui ne doit pas déclencher de rendu quand elle change. C'est l'outil parfait pour intégrer des bibliothèques externes qui ne sont pas faites pour React.",
    code: "const inputRef = useRef(null);\nconst focusInput = () => inputRef.current.focus();",
    preview: <div className="p-4 bg-slate-900 rounded border border-slate-700"><input disabled placeholder="Focus via Ref..." className="bg-slate-800 rounded px-2 py-1 text-[10px]" /></div>,
    exercise: "Utilisez useRef pour scroller automatiquement en bas d'une liste de messages.",
  },
  {
    title: "Partage avec Context API",
    category: "Architecture",
    icon: Layers,
    color: "text-orange-400",
    course: "Le Context est le haut-parleur de votre application. Au lieu de passer une information (comme le thème sombre ou l'utilisateur connecté) de parent en enfant sur 10 niveaux (ce qu'on appelle le 'prop drilling'), vous la diffusez globalement. N'importe quel composant, peu importe où il se trouve, peut 'écouter' ce haut-parleur et récupérer l'info. C'est indispensable pour les paramètres globaux, mais attention à ne pas en abuser pour ne pas rendre vos composants trop dépendants du système global.",
    code: "const UserContext = createContext();\n// ... plus loin ...\nconst user = useContext(UserContext);",
    preview: <div className="p-4 bg-slate-900 rounded border border-orange-500/20 flex gap-2"><div className="w-4 h-4 rounded-full bg-orange-500"></div><span className="text-[10px] text-orange-400 font-bold">Thème Global Actif</span></div>,
    exercise: "Créez un ThemeContext et utilisez-le pour changer la couleur de fond d'un bouton.",
  },
  {
    title: "Server Components (RSC)",
    category: "Moderne 2027",
    icon: Cpu,
    color: "text-emerald-400",
    course: "La plus grande révolution de 2027. Les Server Components permettent d'exécuter du code React directement sur le serveur. Pourquoi ? Pour ne pas envoyer de JavaScript inutile au navigateur de l'utilisateur. C'est comme commander un plat déjà préparé au restaurant plutôt que de recevoir tous les ingrédients et de devoir cuisiner vous-même à table. Le résultat est une application qui s'affiche instantanément, même sur une connexion lente, car le travail lourd est fait par des serveurs puissants.",
    code: "async function ProductPage() {\n  const products = await db.fetch();\n  return <List items={products} />;\n}",
    preview: <div className="p-4 bg-slate-900 rounded border border-emerald-500/20 text-[10px] text-emerald-400 font-mono">Chargé depuis le serveur (0ms JS)</div>,
    exercise: "Expliquez pourquoi on ne peut pas utiliser 'useState' dans un Server Component.",
  },
  {
    title: "Server Actions",
    category: "Moderne 2027",
    icon: Sparkles,
    color: "text-blue-600",
    course: "Les Server Actions simplifient radicalement la communication avec votre base de données. Plus besoin de créer des API compliquées. Vous écrivez une fonction normale, et React s'occupe de faire le pont entre le clic du bouton client et l'exécution sécurisée sur le serveur. C'est la fin du casse-tête des requêtes HTTP manuelles. C'est sécurisé, rapide, et cela permet de gérer les formulaires même si le JavaScript n'est pas encore totalement chargé sur le téléphone de l'utilisateur.",
    code: "async function updateProfile(formData) {\n  'use server';\n  await db.user.update(formData.get('name'));\n}",
    preview: <PreviewForm />,
    exercise: "Créez une Server Action simple pour enregistrer un email dans une liste d'attente.",
  },
  {
    title: "Suspense & Streaming",
    category: "Moderne 2027",
    icon: Activity,
    color: "text-red-400",
    course: "Le Streaming permet d'afficher votre page morceau par morceau au fur et à mesure qu'ils sont prêts. Suspense est le gardien qui affiche un écran de chargement (skeleton) pour les parties lentes. Imaginez regarder une vidéo en streaming : vous n'attendez pas que tout le film soit téléchargé pour commencer à regarder. En React, c'est pareil : l'utilisateur voit le menu tout de suite, puis la liste des produits arrive une seconde plus tard. Cela donne une sensation de vitesse incroyable.",
    code: "<Suspense fallback={<Skeleton />}>\n  <HeavyComponent />\n</Suspense>",
    preview: <div className="p-4 bg-slate-900 rounded border border-red-500/20 animate-pulse text-[10px] text-red-400">Chargement progressif...</div>,
    exercise: "Entourez un composant fictif 'UserStats' avec un Suspense affichant 'Chargement des stats...'.",
  },
  {
    title: "Gestion d'Erreurs (Error Boundaries)",
    category: "Architecture",
    icon: ShieldCheck,
    color: "text-rose-400",
    course: "Une application professionnelle ne doit jamais 'crasher' totalement. Les Error Boundaries sont des filets de sécurité. Si un petit composant (comme un widget météo) tombe en panne à cause d'un bug, le reste de l'application (le menu, le contenu principal) continue de fonctionner normalement. C'est comme les compartiments étanches d'un sous-marin : si une partie prend l'eau, on la ferme pour sauver le reste du navire. C'est essentiel pour la confiance de vos utilisateurs.",
    code: "<ErrorBoundary fallback={<ErrorUI />}>\n  <Feature />\n</ErrorBoundary>",
    preview: <div className="p-4 bg-slate-900 rounded border border-rose-500/20 text-[10px] text-rose-400 flex items-center gap-2"><X size={14}/> Une erreur est survenue, mais l'app survit !</div>,
    exercise: "Créez un composant simple 'ErrorFallback' qui affiche un message d'excuse et un bouton 'Réessayer'.",
  },
  {
    title: "Portals pour UI Flottante",
    category: "Fondamentaux",
    icon: Share2,
    color: "text-indigo-400",
    course: "Les Portails permettent de 'téléporter' un composant n'importe où dans la page, même s'il est écrit au milieu de votre code. C'est indispensable pour les fenêtres modales, les menus contextuels ou les notifications qui doivent s'afficher par-dessus tout le reste sans être coupés par des problèmes de style (overflow). C'est comme avoir un écran géant mobile que vous pouvez placer n'importe où dans un stade, peu importe où se trouve la régie technique.",
    code: "createPortal(<Modal />, document.getElementById('modal-root'));",
    preview: <div className="p-4 bg-slate-800 rounded-lg shadow-2xl border border-slate-700 text-[10px] text-white font-bold">MODALE TÉLÉPORTÉE</div>,
    exercise: "Expliquez pourquoi on utilise un Portail pour une barre de notification en haut de l'écran.",
  },
  {
    title: "Custom Hooks : Votre Logique Propre",
    category: "Architecture",
    icon: Code2,
    color: "text-emerald-500",
    course: "Les Custom Hooks sont votre super-pouvoir. Ils vous permettent d'extraire une logique complexe (ex: gérer le Bluetooth, vérifier la connexion internet, ou manipuler un formulaire) pour la réutiliser dans 10 projets différents. Au lieu de copier-coller du code, vous créez votre propre outil. C'est comme fabriquer votre propre tournevis électrique sur mesure : une fois créé, vous pouvez l'utiliser pour monter tous vos meubles sans effort supplémentaire.",
    code: "function useOnlineStatus() {\n  const [isOnline, setIsOnline] = useState(true);\n  // ... logique ...\n  return isOnline;\n}",
    preview: <div className="p-4 bg-slate-900 rounded border border-emerald-500/20 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div><span className="text-[10px] text-emerald-400">Statut: Connecté (via Custom Hook)</span></div>,
    exercise: "Créez un hook 'useToggle' qui gère un état vrai/faux simple.",
  },
  {
    title: "Transition API (useTransition)",
    category: "Performance",
    icon: Zap,
    color: "text-yellow-500",
    course: "useTransition permet de dire à React : 'Cette mise à jour n'est pas urgente'. Par exemple, quand un utilisateur tape dans une barre de recherche, l'affichage des lettres est URGENT, mais le filtrage de la liste peut attendre quelques millisecondes. Cela évite que l'interface ne se fige pendant que React travaille. C'est comme un serveur au restaurant qui prend votre commande (urgent) mais qui peut attendre d'avoir fini de vous servir avant de débarrasser la table voisine (non-urgent).",
    code: "const [isPending, startTransition] = useTransition();\n\nstartTransition(() => {\n  setFilter(newValue);\n});",
    preview: <div className="p-4 bg-slate-900 rounded border border-yellow-500/20 text-[10px] text-yellow-400 italic">Interface réactive pendant le calcul...</div>,
    exercise: "Utilisez useTransition pour retarder la mise à jour d'un graphique complexe.",
  },
  {
    title: "Deferred Value (useDeferredValue)",
    category: "Performance",
    icon: Eye,
    color: "text-sky-400",
    course: "Proche de useTransition, ce hook permet de 'remettre à plus tard' la mise à jour d'une valeur spécifique. Si l'utilisateur tape très vite, React utilisera l'ancienne valeur pour les parties lentes de l'écran jusqu'à ce qu'il ait un moment de répit pour mettre à jour la nouvelle. C'est comme un peintre qui finit d'abord les détails importants avant de s'attaquer au décor de fond. Cela garantit que l'utilisateur ne ressent jamais de saccades ou de ralentissements.",
    code: "const deferredSearch = useDeferredValue(searchTerm);",
    preview: <div className="p-4 bg-slate-900 rounded border border-sky-500/20 text-[10px] text-sky-400 italic">Affichage fluide (valeur différée)</div>,
    exercise: "Appliquez useDeferredValue à une liste de résultats de recherche très longue.",
  },
  {
    title: "Data Fetching avec TanStack Query",
    category: "Pratique",
    icon: Globe,
    color: "text-sky-500",
    course: "En 2027, on ne fait plus de fetch manuel dans useEffect. TanStack Query gère tout pour vous : le cache, les tentatives en cas d'erreur, le rafraîchissement automatique des données quand vous changez d'onglet. C'est comme avoir un secrétaire qui s'occupe de tous vos appels téléphoniques et qui ne vous dérange que lorsqu'il a une réponse concrète. Cela réduit votre code de moitié et rend votre application incroyablement stable et rapide.",
    code: "const { data, isLoading } = useQuery(['users'], fetchUsers);",
    preview: <div className="p-4 bg-slate-900 rounded border border-sky-500/20 flex items-center gap-2"><RefreshCw size={14} className="animate-spin text-sky-400" /><span className="text-[10px] text-sky-400">Synchronisation auto active</span></div>,
    exercise: "Expliquez l'avantage du 'caching' pour l'expérience utilisateur.",
  },
  {
    title: "Formulaires & Zod Validation",
    category: "Pratique",
    icon: ShieldCheck,
    color: "text-green-500",
    course: "La validation de formulaires est souvent un cauchemar. Zod permet de définir un 'schéma' (un contrat) que les données doivent respecter. Si l'utilisateur oublie un '@' dans son email, Zod le détecte instantanément. Couplé à React Hook Form, cela donne des formulaires ultra-performants qui ne font pas ramer la page et qui guident l'utilisateur avec des messages d'erreur précis. C'est la garantie d'avoir des données propres avant même qu'elles n'arrivent sur votre serveur.",
    code: "const schema = z.object({ email: z.string().email() });",
    preview: <PreviewForm />,
    exercise: "Créez un schéma Zod pour valider un mot de passe d'au moins 8 caractères.",
  },
  {
    title: "Animations Framer Motion",
    category: "Interactions",
    icon: Sparkles,
    color: "text-pink-400",
    course: "Le design moderne est vivant. Framer Motion permet d'ajouter du mouvement sans effort. Une liste qui apparaît en fondu, un bouton qui rebondit au clic, ou une page qui glisse élégamment. Ces micro-interactions ne sont pas que 'jolies', elles guident l'utilisateur et rendent l'application plus humaine. En 2027, une application sans animation fluide est perçue comme obsolète. Framer Motion gère toute la physique complexe pour vous.",
    code: "<motion.div whileHover={{ scale: 1.1 }} />",
    preview: <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4 }} className="w-8 h-8 bg-pink-500 rounded-lg mx-auto shadow-lg shadow-pink-500/20"></motion.div>,
    exercise: "Faites en sorte qu'un texte apparaisse progressivement (opacity) lors du montage du composant.",
  },
  {
    title: "Testing avec Vitest & RTL",
    category: "Qualité",
    icon: CheckCircle2,
    color: "text-green-600",
    course: "Dormez sur vos deux oreilles grâce aux tests. Vitest permet de vérifier automatiquement que votre code fonctionne toujours après une modification. On utilise React Testing Library (RTL) pour simuler un vrai utilisateur : 'Est-ce que si je clique sur ce bouton, le menu s'ouvre ?'. Ce n'est pas une perte de temps, c'est un gain de sécurité. Une application bien testée est une application qui ne casse pas en production le vendredi soir à 18h.",
    code: "expect(screen.getByText(/connexion/i)).toBeInTheDocument();",
    preview: <div className="p-4 bg-slate-900 rounded border border-green-500/20 flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /><span className="text-[10px] text-green-400">142 tests passés avec succès</span></div>,
    exercise: "Écrivez un test simple pour vérifier qu'un bouton affiche bien le texte 'Envoyer'.",
  },
];

const categories = ["Fondamentaux", "Hooks", "Performance", "Architecture", "Moderne 2027", "Pratique", "Interactions", "Qualité"];

export default function ReactJsResources() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
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
      
      {/* SIDEBAR - STYLE ORIGINAL CONSERVÉ */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-900/30">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1 rounded text-white">
              <FaReact size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">React JS Mastery</span>
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
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-blue-900/20 rounded py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar">
          {categories.map(cat => (
            lessonsByCategory[cat] && lessonsByCategory[cat].length > 0 && (
              <div key={cat} className="mt-2">
                <div className="px-4 py-1.5 text-[10px] font-bold text-blue-400/70 uppercase tracking-widest flex items-center justify-between">
                  <span>{cat}</span>
                </div>
                <ul className="mt-1">
                  {lessonsByCategory[cat].map((lesson) => (
                    <li key={lesson.title}>
                      <button
                        onClick={() => setSelectedLesson(lesson)}
                        className={"w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group " + (selectedLesson?.title === lesson.title ? 'bg-blue-900/50 text-white border-l-2 border-blue-500' : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200')}
                      >
                        {React.createElement(lesson.icon, { size: 14, className: selectedLesson?.title === lesson.title ? 'text-blue-400' : lesson.color })}
                        <span className="truncate flex-1">{lesson.title}</span>
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

      {/* MAIN CONTENT - STYLE ORIGINAL CONSERVÉ AVEC ENRICHISSEMENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative">
        <header className="h-10 border-b border-blue-900/30 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/resourcecourcefrontend')} 
              className="p-1 hover:bg-slate-800 rounded text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              title="Retour au tableau de bord"
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
              <span className="hover:text-blue-400 cursor-pointer transition-colors">React JS</span>
              {selectedLesson && (
                <>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-blue-400 font-bold">{selectedLesson.category}</span>
                  <ChevronRight size={12} className="text-gray-700" />
                  <span className="text-white lowercase">{selectedLesson.title}</span>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12">
          <AnimatePresence mode="wait">
            {selectedLesson ? (
              <motion.article
                key={selectedLesson.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl"
              >
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={"h-12 w-12 rounded bg-blue-950 border border-blue-900/50 flex items-center justify-center " + selectedLesson.color}>
                      {React.createElement(selectedLesson.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedLesson.title}</h1>
                      <p className="text-xs text-blue-400 font-mono mt-1">module: {selectedLesson.category.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* SECTION THÉORIE ENRICHIE */}
                  <section>
                    <h2 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <BookOpen size={18} /> Théorie & Cas Concrets
                    </h2>
                    <div className="text-gray-400 leading-relaxed text-sm space-y-4">
                      {selectedLesson.course.split('. ').map((sentence, i) => (
                        <p key={i}>{sentence}.</p>
                      ))}
                    </div>
                  </section>

                  {/* DOUBLE SECTION : CODE + RENDU VISUEL */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <section>
                      <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2 uppercase tracking-widest">
                        <Terminal size={16} className="text-blue-400" /> Code Source
                      </h2>
                      <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300 min-h-[150px]">
                        <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2 uppercase tracking-widest">
                        <Monitor size={16} className="text-indigo-400" /> Rendu Visuel
                      </h2>
                      <div className="bg-slate-950/50 border border-blue-900/20 rounded p-4 flex items-center justify-center min-h-[150px]">
                        {selectedLesson.preview}
                      </div>
                    </section>
                  </div>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Code2 size={18} className="text-blue-300" /> Exercice Pratique
                    </h2>
                    <div className="bg-gray-950/50 border border-blue-900/20 p-4 rounded text-xs text-gray-300 leading-relaxed">
                      {selectedLesson.exercise}
                    </div>
                  </section>
                </div>
              </motion.article>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-blue-900/30 flex items-center justify-center mb-6">
                  <FaReact size={40} className="text-blue-500/50 animate-spin-slow" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">React JS Essentials 2027</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Maîtrisez les 20 concepts fondamentaux de React pour devenir un expert. Sélectionnez un module pour commencer.
                </p>
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}} />
    </div>
  );
}
