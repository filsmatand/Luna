// import React, { useState, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   ArrowLeft, Search, Star, Clock, BookOpen, Code, 
//   ChevronRight, CheckCircle2, Lightbulb, MessageSquare,
//   ShieldCheck, Zap, BarChart, Filter, Layout, Database, Server
// } from 'lucide-react';

// export default function DashboardGoogle() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('all');
//   const [activeRole, setActiveRole] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedQuestion, setSelectedQuestion] = useState(null);

//   const googleQuestions = [
//     { id: 1, title: "Why Google?", category: "Behavioral", difficulty: "Medium", type: "Full-stack", timing: "5-10 min", frequency: "Very High", description: "Pourquoi voulez-vous rejoindre Google en particulier ? Qu'est-ce qui vous attire dans notre culture ou nos produits ?", answer: "Points clés : 1. Citez des produits spécifiques (ex: GKE, Waymo). 2. Parlez de la culture 'Culture Add'. 3. Mentionnez l'innovation (la règle des 20%).", tags: ["Motivation", "Culture"] },
//     { id: 2, title: "Tell me about a time you failed", category: "Behavioral", difficulty: "Hard", type: "Full-stack", timing: "15 min", frequency: "High", description: "Décrivez une situation où vous avez échoué. Comment avez-vous géré l'échec et qu'en avez-vous appris ?", answer: "Utilisez la méthode SPSIL. Soyez honnête sur l'échec. Montrez votre capacité à prendre vos responsabilités (Ownership).", tags: ["Adaptability", "Humility"] },
//     { id: 3, title: "Implement Debounce", category: "Front-end", difficulty: "Medium", type: "Front-end", timing: "20 min", frequency: "Very High", description: "Écrivez une fonction debounce en JavaScript à partir de zéro.", answer: "function debounce(func, wait) { let timeout; return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), wait); }; }", tags: ["JavaScript", "Performance"] },
//     { id: 4, title: "Maximum Path Sum in Binary Tree", category: "Algorithms", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "High", description: "Trouvez la somme maximale d'un chemin dans un arbre binaire.", answer: "Utilisez la récursion. Pour chaque nœud, calculez le gain maximal qu'il peut apporter à son parent. node.val + max(0, gain_gauche, gain_droite).", tags: ["Trees", "Recursion"] },
//     { id: 5, title: "Design a Notification System", category: "System Design", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "High", description: "Concevez une architecture pour un système de notifications gérant des millions de mises à jour en temps réel.", answer: "Utilisez des files de messages (Pub/Sub), des WebSockets pour le temps réel, et une base de données NoSQL pour le stockage.", tags: ["System Design", "Scalability"] },
//     { id: 6, title: "Fix React Double Render", category: "Front-end", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "Medium", description: "Identifiez et corrigez pourquoi un composant React s'affiche deux fois à chaque mise à jour.", answer: "Vérifiez le Strict Mode en développement, l'utilisation incorrecte des hooks ou des dépendances instables dans useEffect.", tags: ["React", "Performance"] },
//     { id: 7, title: "Handle CORS issues", category: "Security", difficulty: "Medium", type: "Full-stack", timing: "10 min", frequency: "Medium", description: "Décrivez comment vous géreriez de manière sécurisée les problèmes de CORS dans une application frontend.", answer: "Configurez les en-têtes Access-Control-Allow-Origin côté serveur, évitez '*' en production, utilisez des cookies HttpOnly.", tags: ["Security", "CORS"] },
//     { id: 8, title: "Find all nodes at distance K", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "Medium", description: "Dans un arbre binaire, trouvez tous les nœuds à une distance K d'un nœud cible donné.", answer: "Convertissez l'arbre en graphe ou utilisez une recherche en profondeur avec suivi des parents.", tags: ["Trees", "BFS"] },
//     { id: 9, title: "Implement Event Emitter", category: "JavaScript", difficulty: "Hard", type: "Front-end", timing: "30 min", frequency: "High", description: "Créez une classe EventEmitter avec les méthodes on, emit et off.", answer: "Utilisez un objet Map pour stocker les callbacks par événement. Gérez les abonnements multiples.", tags: ["JavaScript", "OOP"] },
//     { id: 10, title: "Array.prototype.flat", category: "JavaScript", difficulty: "Easy", type: "Front-end", timing: "15 min", frequency: "Medium", description: "Réimplémentez la méthode Array.prototype.flat manuellement.", answer: "Utilisez Array.prototype.reduce et la récursion pour aplatir le tableau jusqu'à la profondeur spécifiée.", tags: ["JavaScript", "Recursion"] },
//     { id: 11, title: "Number of Islands", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "Very High", description: "Étant donné une grille 2D, comptez le nombre d'îles (groupes de '1' connectés).", answer: "Utilisez DFS ou BFS pour explorer chaque île et marquer les nœuds visités.", tags: ["Graphs", "DFS"] },
//     { id: 12, title: "Merge K Sorted Lists", category: "Algorithms", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "High", description: "Fusionnez K listes chaînées triées en une seule liste triée.", answer: "Utilisez un Min-Heap pour comparer les éléments de tête de chaque liste.", tags: ["Heap", "Linked List"] },
//     { id: 13, title: "Word Ladder", category: "Algorithms", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "Medium", description: "Trouvez la longueur du plus court chemin de transformation d'un mot à un autre.", answer: "Utilisez BFS pour trouver le chemin le plus court dans un graphe de mots.", tags: ["BFS", "Strings"] },
//     { id: 14, title: "Design Autocomplete", category: "System Design", difficulty: "Medium", type: "Full-stack", timing: "40 min", frequency: "High", description: "Concevez un système d'autocomplétion pour un moteur de recherche.", answer: "Utilisez un Trie pour le stockage, un cache (Redis) pour les recherches fréquentes, et gérez la latence avec du debouncing.", tags: ["System Design", "Trie"] },
//     { id: 15, title: "Valid Parentheses", category: "Algorithms", difficulty: "Easy", type: "Full-stack", timing: "10 min", frequency: "Very High", description: "Vérifiez si une chaîne de parenthèses est valide.", answer: "Utilisez une pile (stack) pour suivre les parenthèses ouvrantes.", tags: ["Stack", "Strings"] },
//     { id: 16, title: "Two Sum", category: "Algorithms", difficulty: "Easy", type: "Full-stack", timing: "10 min", frequency: "Very High", description: "Trouvez deux nombres dans un tableau qui s'additionnent pour donner une cible spécifique.", answer: "Utilisez une table de hachage (Map) pour stocker les compléments.", tags: ["Hash Map", "Arrays"] },
//     { id: 17, title: "Trapping Rain Water", category: "Algorithms", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "High", description: "Calculez la quantité d'eau qui peut être piégée entre des barres après la pluie.", answer: "Utilisez deux pointeurs ou une pile pour calculer l'eau retenue.", tags: ["Two Pointers", "Stack"] },
//     { id: 18, title: "LRU Cache", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "40 min", frequency: "High", description: "Concevez et implémentez une structure de données pour un cache LRU (Least Recently Used).", answer: "Combinez une Map et une liste doublement chaînée pour un accès O(1).", tags: ["Design", "Linked List"] },
//     { id: 19, title: "Binary Tree Level Order Traversal", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "20 min", frequency: "High", description: "Parcourez un arbre binaire niveau par niveau.", answer: "Utilisez BFS avec une file (queue).", tags: ["Trees", "BFS"] },
//     { id: 20, title: "Climbing Stairs", category: "Algorithms", difficulty: "Easy", type: "Full-stack", timing: "15 min", frequency: "High", description: "De combien de façons pouvez-vous monter un escalier de N marches ?", answer: "C'est une variante de la suite de Fibonacci. Utilisez la programmation dynamique.", tags: ["DP", "Recursion"] },
//     { id: 21, title: "Longest Palindromic Substring", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "High", description: "Trouvez la plus longue sous-chaîne palindromique dans une chaîne donnée.", answer: "Étendez à partir du centre pour chaque caractère ou utilisez Manacher.", tags: ["Strings", "DP"] },
//     { id: 22, title: "Median of Two Sorted Arrays", category: "Algorithms", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "Medium", description: "Trouvez la médiane de deux tableaux triés.", answer: "Utilisez la recherche binaire sur le plus petit tableau.", tags: ["Binary Search", "Arrays"] },
//     { id: 23, title: "Container With Most Water", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "20 min", frequency: "High", description: "Trouvez deux lignes qui forment un conteneur avec le plus d'eau.", answer: "Utilisez deux pointeurs en commençant par les extrémités.", tags: ["Two Pointers", "Arrays"] },
//     { id: 24, title: "Reverse Linked List", category: "Algorithms", difficulty: "Easy", type: "Back-end", timing: "15 min", frequency: "High", description: "Inversez une liste chaînée simple.", answer: "Utilisez trois pointeurs (prev, curr, next) de manière itérative.", tags: ["Linked List", "Recursion"] },
//     { id: 25, title: "Product of Array Except Self", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "20 min", frequency: "High", description: "Calculez le produit de tous les éléments sauf l'élément courant sans utiliser la division.", answer: "Utilisez deux tableaux pour les produits préfixes et suffixes.", tags: ["Arrays", "Prefix Sum"] },
//     { id: 26, title: "Search in Rotated Sorted Array", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "High", description: "Recherchez un élément dans un tableau trié qui a subi une rotation.", answer: "Utilisez la recherche binaire modifiée.", tags: ["Binary Search", "Arrays"] },
//     { id: 27, title: "Kth Largest Element in an Array", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "25 min", frequency: "High", description: "Trouvez le K-ième plus grand élément dans un tableau non trié.", answer: "Utilisez un Min-Heap ou Quickselect.", tags: ["Heap", "Quickselect"] },
//     { id: 28, title: "Binary Tree Zigzag Level Order Traversal", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "25 min", frequency: "Medium", description: "Parcourez un arbre binaire en zigzag niveau par niveau.", answer: "Utilisez BFS et inversez l'ordre pour les niveaux impairs.", tags: ["Trees", "BFS"] },
//     { id: 29, title: "Serialize and Deserialize Binary Tree", category: "Algorithms", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "Medium", description: "Concevez un algorithme pour sérialiser et désérialiser un arbre binaire.", answer: "Utilisez un parcours pré-ordre avec des marqueurs pour les nœuds nuls.", tags: ["Trees", "Design"] },
//     { id: 30, title: "Implement Trie (Prefix Tree)", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "High", description: "Implémentez un Trie avec les méthodes insert, search et startsWith.", answer: "Chaque nœud contient un dictionnaire d'enfants et un marqueur de fin de mot.", tags: ["Trie", "Strings"] },
//     { id: 31, title: "House Robber", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "20 min", frequency: "High", description: "Calculez le montant maximum que vous pouvez voler sans alerter la police (pas de maisons adjacentes).", answer: "Utilisez la programmation dynamique : dp[i] = max(dp[i-1], dp[i-2] + val[i]).", tags: ["DP", "Recursion"] },
//     { id: 32, title: "Longest Increasing Subsequence", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "Medium", description: "Trouvez la longueur de la plus longue sous-séquence strictement croissante.", answer: "Utilisez DP en O(N^2) ou recherche binaire en O(N log N).", tags: ["DP", "Binary Search"] },
//     { id: 33, title: "Coin Change", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "High", description: "Trouvez le nombre minimum de pièces nécessaires pour obtenir un montant donné.", answer: "Utilisez la programmation dynamique (Bottom-up).", tags: ["DP", "BFS"] },
//     { id: 34, title: "Edit Distance", category: "Algorithms", difficulty: "Hard", type: "Back-end", timing: "45 min", frequency: "Medium", description: "Trouvez le nombre minimum d'opérations pour transformer un mot en un autre.", answer: "Utilisez une matrice DP pour stocker les distances de Levenshtein.", tags: ["DP", "Strings"] },
//     { id: 35, title: "Design TinyURL", category: "System Design", difficulty: "Medium", type: "Back-end", timing: "40 min", frequency: "High", description: "Concevez un service de réduction d'URL comme bit.ly.", answer: "Utilisez le hachage (Base62) et gérez les collisions ou utilisez un compteur global.", tags: ["System Design", "Hashing"] },
//     { id: 36, title: "Explain Event Loop", category: "JavaScript", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "Very High", description: "Expliquez comment fonctionne l'Event Loop en JavaScript.", answer: "Call Stack -> Web APIs -> Task Queue -> Event Loop -> Call Stack. Mentionnez Microtasks (Promises).", tags: ["JavaScript", "Event Loop"] },
//     { id: 37, title: "Prototypes vs Classes", category: "JavaScript", difficulty: "Medium", type: "Front-end", timing: "10 min", frequency: "High", description: "Quelle est la différence entre l'héritage prototypal et les classes ES6 ?", answer: "Les classes sont du sucre syntaxique. L'héritage se fait via __proto__ et prototype.", tags: ["JavaScript", "OOP"] },
//     { id: 38, title: "Web Security: XSS", category: "Security", difficulty: "Hard", type: "Full-stack", timing: "15 min", frequency: "High", description: "Qu'est-ce que le Cross-Site Scripting et comment s'en protéger ?", answer: "Injection de scripts malveillants. Protection : Échappement des données, CSP, utilisation de frameworks sécurisés.", tags: ["Security", "Web"] },
//     { id: 39, title: "Optimizing Web Performance", category: "Performance", difficulty: "Hard", type: "Front-end", timing: "20 min", frequency: "High", description: "Quelles sont vos stratégies pour améliorer le Core Web Vitals d'un site ?", answer: "Lazy loading, optimisation des images (WebP), réduction du JS bloquant, utilisation de CDN.", tags: ["Performance", "SEO"] },
//     { id: 40, title: "CSS Specificity", category: "CSS", difficulty: "Easy", type: "Front-end", timing: "10 min", frequency: "High", description: "Expliquez comment le navigateur calcule la spécificité des sélecteurs CSS.", answer: "Système de poids : Inline (1000), ID (100), Class/Attribute (10), Element (1).", tags: ["CSS", "Web"] },
//     { id: 41, title: "Flexbox vs Grid", category: "CSS", difficulty: "Easy", type: "Front-end", timing: "10 min", frequency: "Medium", description: "Quand utiliser Flexbox plutôt que CSS Grid ?", answer: "Flexbox pour 1D (ligne ou colonne), Grid pour 2D (ligne ET colonne).", tags: ["CSS", "Layout"] },
//     { id: 42, title: "React Lifecycle Hooks", category: "Front-end", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "Very High", description: "Expliquez useEffect et ses différentes dépendances.", answer: "[] pour componentDidMount, [dep] pour mise à jour, return pour componentWillUnmount.", tags: ["React", "Hooks"] },
//     { id: 43, title: "Redux vs Context API", category: "Front-end", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "High", description: "Quand choisir Redux plutôt que l'API Context de React ?", answer: "Redux pour des états complexes, fréquents et globaux. Context pour des données statiques (thème, auth).", tags: ["React", "State"] },
//     { id: 44, title: "TypeScript: Interfaces vs Types", category: "TypeScript", difficulty: "Easy", type: "Full-stack", timing: "10 min", frequency: "High", description: "Quelle est la différence entre une interface et un type en TypeScript ?", answer: "Interfaces supportent le 'declaration merging', les types supportent les unions et intersections complexes.", tags: ["TypeScript", "Full-stack"] },
//     { id: 45, title: "Explain REST vs GraphQL", category: "API Design", difficulty: "Medium", type: "Back-end", timing: "15 min", frequency: "High", description: "Comparez les API REST et GraphQL. Quels sont les avantages de chacun ?", answer: "REST est simple et standard. GraphQL évite l'over-fetching et permet des requêtes flexibles.", tags: ["API", "Backend"] },
//     { id: 46, title: "Database Indexing", category: "Databases", difficulty: "Medium", type: "Back-end", timing: "15 min", frequency: "High", description: "Comment fonctionnent les index dans une base de données SQL ?", answer: "Utilisation de B-Trees pour accélérer les recherches. Coût : ralentit les écritures.", tags: ["SQL", "Performance"] },
//     { id: 47, title: "NoSQL vs SQL", category: "Databases", difficulty: "Medium", type: "Back-end", timing: "15 min", frequency: "High", description: "Quand utiliseriez-vous MongoDB plutôt que PostgreSQL ?", answer: "NoSQL pour des données non structurées et scalabilité horizontale. SQL pour des relations complexes et ACID.", tags: ["Databases", "Backend"] },
//     { id: 48, title: "Docker: Container vs VM", category: "DevOps", difficulty: "Medium", type: "Back-end", timing: "15 min", frequency: "Medium", description: "Quelle est la différence entre un conteneur Docker et une machine virtuelle ?", answer: "Les conteneurs partagent le noyau de l'OS, les VM incluent un OS complet. Docker est plus léger.", tags: ["Docker", "DevOps"] },
//     { id: 49, title: "CI/CD Pipeline", category: "DevOps", difficulty: "Medium", type: "Full-stack", timing: "20 min", frequency: "Medium", description: "Décrivez un pipeline CI/CD typique pour une application web moderne.", answer: "Build -> Test -> Staging -> Approval -> Production. Automatisation via GitHub Actions/Jenkins.", tags: ["CI/CD", "Full-stack"] },
//     { id: 50, title: "Unit Testing vs Integration Testing", category: "Testing", difficulty: "Easy", type: "Full-stack", timing: "10 min", frequency: "High", description: "Expliquez la différence entre les tests unitaires et les tests d'intégration.", answer: "Unitaires : isolés (une fonction). Intégration : interaction entre plusieurs modules.", tags: ["Testing", "QA"] },
//     { id: 51, title: "What is Googleyness?", category: "Behavioral", difficulty: "Medium", type: "Full-stack", timing: "10 min", frequency: "Very High", description: "Comment définiriez-vous la 'Googleyness' ?", answer: "Humilité, curiosité, capacité à aider les autres, et confort dans l'ambiguïté.", tags: ["Culture", "Behavioral"] },
//     { id: 52, title: "Dealing with Ambiguity", category: "Behavioral", difficulty: "Hard", type: "Full-stack", timing: "15 min", frequency: "High", description: "Racontez une fois où vous avez dû travailler sur un projet sans instructions claires.", answer: "Montrez comment vous avez pris l'initiative de clarifier et de définir les étapes.", tags: ["Ambiguity", "Leadership"] },
//     { id: 53, title: "Influence without Authority", category: "Behavioral", difficulty: "Hard", type: "Full-stack", timing: "15 min", frequency: "High", description: "Comment avez-vous convaincu une équipe d'adopter votre idée sans être leur manager ?", answer: "Utilisation de données, de preuves de concept (PoC) et de collaboration.", tags: ["Soft Skills", "Influence"] },
//     { id: 54, title: "Identify false positives in Smiles detection", category: "Product", difficulty: "Hard", type: "Full-stack", timing: "20 min", frequency: "Medium", description: "Vous travaillez sur Google Photos. Comment identifieriez-vous les faux positifs dans une détection de sourires ?", answer: "Analyse des patterns de données, tests A/B, et boucle de rétroaction utilisateur.", tags: ["Product", "Logic"] },
//     { id: 55, title: "Accessibility: Screen Readers", category: "Front-end", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "High", description: "Comment vous assurez-vous que votre application est accessible aux lecteurs d'écran ?", answer: "Utilisation d'ARIA, HTML sémantique, et tests avec VoiceOver/NVDA.", tags: ["A11y", "Front-end"] },
//     { id: 56, title: "JWT vs Session Auth", category: "Security", difficulty: "Medium", type: "Back-end", timing: "15 min", frequency: "High", description: "Quelle est la différence entre l'authentification par JWT et par session ?", answer: "JWT est sans état (stateless), Session est avec état (stateful) stocké sur le serveur.", tags: ["Security", "Auth"] }
//   ];

//   const filteredQuestions = useMemo(() => {
//     return googleQuestions.filter(q => 
//       (activeTab === 'all' || q.category.toLowerCase() === activeTab.toLowerCase()) &&
//       (activeRole === 'all' || q.type.toLowerCase() === activeRole.toLowerCase()) &&
//       (q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.description.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//   }, [activeTab, activeRole, searchQuery]);

//   return (
//     <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
//       <nav className="border-b border-slate-800 bg-slate-900/40 backdrop-blur-2xl sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-6">
//               <button onClick={() => navigate(-1)} className="p-2.5 hover:bg-slate-800 rounded-2xl transition-all border border-transparent hover:border-slate-700">
//                 <ArrowLeft size={22} className="text-blue-400" />
//               </button>
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-xl shadow-blue-500/20">G</div>
//                 <div>
//                   <h1 className="text-xl font-black tracking-tight text-white">Google <span className="text-blue-500">Elite</span></h1>
//                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">56 Professional Questions</p>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden lg:flex items-center bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-2.5 gap-4 focus-within:border-blue-500/50 transition-all shadow-inner">
//               <Search size={20} className="text-slate-500" />
//               <input 
//                 type="text" 
//                 placeholder="Search by topic, keyword, or role..." 
//                 className="bg-transparent border-none focus:ring-0 text-sm w-96 text-slate-200 placeholder:text-slate-600"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
//           <div className="lg:col-span-3 space-y-8">
//             <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-xl">
//               <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
//                 <Filter size={14} /> Filter by Role
//               </h3>
//               <div className="grid grid-cols-1 gap-2">
//                 {['All', 'Front-end', 'Back-end', 'Full-stack'].map(role => (
//                   <button 
//                     key={role}
//                     onClick={() => setActiveRole(role.toLowerCase())}
//                     className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all border ${activeRole === role.toLowerCase() ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-900/40' : 'text-slate-400 border-transparent hover:bg-slate-800 hover:text-slate-200'}`}
//                   >
//                     {role === 'Front-end' && <Layout size={16} />}
//                     {role === 'Back-end' && <Server size={16} />}
//                     {role === 'Full-stack' && <Database size={16} />}
//                     {role}
//                   </button>
//                 ))}
//               </div>
//             </section>

//             <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
//               <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Question Types</h3>
//               <div className="space-y-2">
//                 {['All', 'Algorithms', 'System Design', 'JavaScript', 'Behavioral', 'Performance'].map(cat => (
//                   <button 
//                     key={cat}
//                     onClick={() => setActiveTab(cat.toLowerCase())}
//                     className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === cat.toLowerCase() ? 'text-blue-400 bg-blue-500/10' : 'text-slate-500 hover:text-slate-300'}`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </section>
//           </div>

//           <div className="lg:col-span-9">
//             {selectedQuestion ? (
//               <div className="bg-slate-900/60 border border-slate-800 rounded-[2.5rem] overflow-hidden animate-in fade-in zoom-in-95 duration-500 shadow-2xl">
//                 <div className="p-12 border-b border-slate-800 bg-gradient-to-br from-blue-600/5 to-transparent">
//                   <button onClick={() => setSelectedQuestion(null)} className="mb-10 text-xs font-black text-blue-500 flex items-center gap-2 uppercase tracking-[0.2em] hover:gap-3 transition-all">
//                     <ArrowLeft size={16} /> Back to questions
//                   </button>
//                   <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
//                     <div className="space-y-4">
//                       <div className="flex items-center gap-3">
//                         <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-[10px] font-black uppercase tracking-widest">
//                           {selectedQuestion.category}
//                         </span>
//                         <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-[10px] font-black uppercase tracking-widest">
//                           {selectedQuestion.type}
//                         </span>
//                       </div>
//                       <h2 className="text-4xl font-black text-white tracking-tight">{selectedQuestion.title}</h2>
//                     </div>
//                     <div className="flex items-center gap-6 bg-slate-950/50 p-4 rounded-3xl border border-slate-800">
//                       <div className="text-center px-4 border-r border-slate-800">
//                         <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Timing</p>
//                         <p className="text-sm font-black text-white">{selectedQuestion.timing}</p>
//                       </div>
//                       <div className="text-center px-4">
//                         <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Difficulty</p>
//                         <p className={`text-sm font-black ${selectedQuestion.difficulty === 'Hard' ? 'text-red-500' : 'text-yellow-500'}`}>{selectedQuestion.difficulty}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-12 space-y-12">
//                   <section>
//                     <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
//                       <MessageSquare size={18} className="text-blue-500" /> Interview Question
//                     </h4>
//                     <p className="text-2xl text-slate-200 leading-relaxed font-medium italic pl-8 border-l-4 border-blue-600">
//                       "{selectedQuestion.description}"
//                     </p>
//                   </section>

//                   <section className="bg-slate-950/50 border border-slate-800 rounded-[2rem] p-10">
//                     <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
//                       <ShieldCheck size={18} className="text-green-500" /> Expert Solution Guide
//                     </h4>
//                     <div className="prose prose-invert max-w-none">
//                       <p className="text-lg text-slate-300 whitespace-pre-wrap leading-relaxed font-medium">
//                         {selectedQuestion.answer}
//                       </p>
//                     </div>
//                   </section>

//                   <div className="flex flex-wrap gap-3 pt-6">
//                     {selectedQuestion.tags.map(tag => (
//                       <span key={tag} className="px-5 py-2 bg-slate-800/50 text-slate-400 rounded-2xl text-xs font-bold border border-slate-700">#{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {filteredQuestions.map((q) => (
//                   <button 
//                     key={q.id}
//                     onClick={() => setSelectedQuestion(q)}
//                     className="group bg-slate-900/30 border border-slate-800/50 p-8 rounded-[2rem] text-left hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 relative overflow-hidden"
//                   >
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[50px] group-hover:bg-blue-600/10 transition-all"></div>
//                     <div className="flex justify-between items-start mb-8">
//                       <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg">
//                         {q.category === 'Algorithms' ? <Code size={24} /> : <MessageSquare size={24} />}
//                       </div>
//                       <div className="flex items-center gap-1.5 text-[10px] font-black text-red-500 bg-red-500/5 px-3 py-1 rounded-full border border-red-500/10 uppercase">
//                         <BarChart size={12} /> {q.frequency}
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight">{q.title}</h3>
//                     <p className="text-sm text-slate-500 font-medium line-clamp-2 mb-8 leading-relaxed">{q.description}</p>
//                     <div className="flex items-center justify-between mt-auto">
//                       <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-widest">
//                         <Clock size={12} /> {q.timing}
//                       </div>
//                       <div className="w-10 h-10 rounded-2xl border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
//                         <ChevronRight size={20} className="text-slate-500 group-hover:text-white" />
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


