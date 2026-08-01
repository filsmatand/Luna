import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Search, Star, Clock, BookOpen, Code, 
  ChevronRight, CheckCircle2, ShoppingCart, Target,
  Users, TrendingUp, Zap, Anchor, Shield, Filter, Database, Server, Layout,MessageSquare
} from 'lucide-react';

export default function DashboardAmazon() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [activeRole, setActiveRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const amazonQuestions = [
    { id: 1, title: "Customer Obsession", category: "LP", difficulty: "Medium", type: "Full-stack", timing: "10-15 min", frequency: "Very High", description: "Racontez une fois où vous avez dû faire face à un client difficile. Comment avez-vous géré la situation ?", answer: "Stratégie : Ne vous plaignez pas du client. Montrez votre empathie. Décrivez une action concrète qui a dépassé ses attentes.", tags: ["Customer Focus", "Behavioral"] },
    { id: 2, title: "Ownership", category: "LP", difficulty: "Medium", type: "Full-stack", timing: "12 min", frequency: "Very High", description: "Parlez-moi d'une fois où vous avez fait quelque chose qui ne faisait pas partie de vos responsabilités directes.", answer: "Points clés : Identifiez un problème que personne ne traitait. Expliquez pourquoi vous avez pris l'initiative. Pensez au long terme.", tags: ["Initiative", "Long-term"] },
    { id: 3, title: "Bias for Action", category: "LP", difficulty: "Hard", type: "Full-stack", timing: "15 min", frequency: "High", description: "Décrivez une situation où vous avez dû prendre une décision importante rapidement sans avoir toutes les données nécessaires.", answer: "Approche : Expliquez le risque calculé. Priorisez l'action plutôt que l'analyse paralysante. Quel a été le résultat ?", tags: ["Speed", "Decisiveness"] },
    { id: 4, title: "Have Backbone; Disagree and Commit", category: "LP", difficulty: "Hard", type: "Full-stack", timing: "15 min", frequency: "High", description: "Racontez une fois où vous étiez en désaccord avec votre manager. Comment avez-vous exprimé votre désaccord ?", answer: "Stratégie : Contestez avec des données et respect. Une fois la décision prise, engagez-vous à 100% pour sa réussite.", tags: ["Conviction", "Commitment"] },
    { id: 5, title: "Dive Deep", category: "LP", difficulty: "Medium", type: "Full-stack", timing: "10 min", frequency: "High", description: "Parlez-moi d'un problème complexe que vous avez résolu en analysant les données en profondeur.", answer: "Focus : Utilisez des chiffres. Expliquez comment vous avez 'creusé' (ex: technique des 5 Pourquoi).", tags: ["Data", "Analysis"] },
    { id: 6, title: "Implement a Like Button", category: "Front-end", difficulty: "Easy", type: "Front-end", timing: "15 min", frequency: "High", description: "Créez un bouton 'Like' fonctionnel avec un compteur en utilisant React ou Vanilla JS.", answer: "Gérez l'état local (useState). Assurez-vous que l'UI est réactive et gère les états cliqués/non-cliqués.", tags: ["React", "UI"] },
    { id: 7, title: "Design an Accordion", category: "Front-end", difficulty: "Easy", type: "Front-end", timing: "15 min", frequency: "Medium", description: "Implémentez un composant accordéon accessible.", answer: "Utilisez les attributs ARIA (aria-expanded). Gérez l'ouverture/fermeture d'un ou plusieurs panneaux.", tags: ["A11y", "CSS"] },
    { id: 8, title: "Data Table with Search", category: "Front-end", difficulty: "Medium", type: "Front-end", timing: "30 min", frequency: "High", description: "Créez un tableau de données avec des fonctionnalités de recherche et de tri.", answer: "Utilisez useMemo pour filtrer et trier les données. Gérez la pagination si nécessaire.", tags: ["React", "Data"] },
    { id: 9, title: "Tic-Tac-Toe", category: "Front-end", difficulty: "Medium", type: "Front-end", timing: "30 min", frequency: "Medium", description: "Implémentez un jeu de Morpion fonctionnel.", answer: "Gérez l'état de la grille (tableau de 9). Calculez le gagnant après chaque coup.", tags: ["Logic", "Games"] },
    { id: 10, title: "Star Rating Widget", category: "Front-end", difficulty: "Easy", type: "Front-end", timing: "15 min", frequency: "High", description: "Créez un widget de notation par étoiles interactif.", answer: "Gérez le survol (hover) et le clic. Utilisez des icônes SVG pour une meilleure qualité visuelle.", tags: ["UI", "UX"] },
    { id: 11, title: "Two Sum", category: "Algorithms", difficulty: "Easy", type: "Back-end", timing: "10 min", frequency: "Very High", description: "Trouvez deux nombres dans un tableau qui s'additionnent pour donner une cible.", answer: "Utilisez une Map pour stocker l'indice de chaque nombre et vérifier le complément.", tags: ["Hash Map", "Arrays"] },
    { id: 12, title: "Reverse Linked List", category: "Algorithms", difficulty: "Easy", type: "Back-end", timing: "15 min", frequency: "High", description: "Inversez une liste chaînée simple.", answer: "Inversez les pointeurs next de chaque nœud de manière itérative.", tags: ["Linked List", "Recursion"] },
    { id: 13, title: "Merge Two Sorted Lists", category: "Algorithms", difficulty: "Easy", type: "Back-end", timing: "15 min", frequency: "High", description: "Fusionnez deux listes chaînées triées.", answer: "Utilisez un nœud factice (dummy) et comparez les têtes des deux listes.", tags: ["Linked List", "Sorting"] },
    { id: 14, title: "Validate Binary Search Tree", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "25 min", frequency: "High", description: "Vérifiez si un arbre binaire est un arbre de recherche binaire valide.", answer: "Utilisez la récursion avec des bornes min et max pour chaque nœud.", tags: ["Trees", "Recursion"] },
    { id: 15, title: "Top K Frequent Elements", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "High", description: "Trouvez les K éléments les plus fréquents dans un tableau.", answer: "Utilisez une table de hachage pour compter les fréquences et un tas (heap) ou bucket sort.", tags: ["Heap", "Hash Map"] },
    { id: 16, title: "Design a Parking Lot", category: "System Design", difficulty: "Medium", type: "Back-end", timing: "45 min", frequency: "Medium", description: "Concevez un système de gestion de parking (orienté objet).", answer: "Définissez les classes : Parking, Level, Spot, Vehicle. Gérez l'attribution des places.", tags: ["OOP", "Design"] },
    { id: 17, title: "Design Amazon.com Cart", category: "System Design", difficulty: "Hard", type: "Full-stack", timing: "45 min", frequency: "High", description: "Comment concevriez-vous le système de panier d'achat d'Amazon ?", answer: "Gérez la persistance (Redis/DB), la synchronisation multi-appareils, et la haute disponibilité.", tags: ["Scalability", "Backend"] },
    { id: 18, title: "Longest Substring Without Repeating Characters", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "High", description: "Trouvez la longueur de la plus longue sous-chaîne sans caractères répétés.", answer: "Utilisez la technique de la fenêtre glissante (sliding window).", tags: ["Sliding Window", "Strings"] },
    { id: 19, title: "Group Anagrams", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "25 min", frequency: "High", description: "Regroupez les anagrammes dans un tableau de chaînes.", answer: "Utilisez une Map avec la chaîne triée comme clé.", tags: ["Hash Map", "Strings"] },
    { id: 20, title: "Maximum Subarray", category: "Algorithms", difficulty: "Easy", type: "Back-end", timing: "15 min", frequency: "High", description: "Trouvez le sous-tableau contigu avec la somme maximale.", answer: "Utilisez l'algorithme de Kadane.", tags: ["DP", "Arrays"] },
    { id: 21, title: "Word Search", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "35 min", frequency: "Medium", description: "Vérifiez si un mot existe dans une grille de caractères 2D.", answer: "Utilisez le backtracking avec DFS.", tags: ["Backtracking", "DFS"] },
    { id: 22, title: "3Sum", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "30 min", frequency: "High", description: "Trouvez tous les triplets uniques dans un tableau qui s'additionnent à zéro.", answer: "Triez le tableau et utilisez deux pointeurs pour chaque élément.", tags: ["Two Pointers", "Sorting"] },
    { id: 23, title: "Lowest Common Ancestor", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "25 min", frequency: "High", description: "Trouvez l'ancêtre commun le plus bas de deux nœuds dans un arbre binaire.", answer: "Utilisez la récursion pour chercher les nœuds dans les sous-arbres gauche et droit.", tags: ["Trees", "Recursion"] },
    { id: 24, title: "Binary Tree Right Side View", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "25 min", frequency: "Medium", description: "Retournez les valeurs des nœuds que vous pouvez voir du côté droit d'un arbre binaire.", answer: "Utilisez BFS et prenez le dernier nœud de chaque niveau.", tags: ["Trees", "BFS"] },
    { id: 25, title: "Course Schedule", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "35 min", frequency: "High", description: "Déterminez si vous pouvez terminer tous les cours étant donné les prérequis.", answer: "Détectez les cycles dans un graphe dirigé (Topological Sort).", tags: ["Graphs", "Topological Sort"] },
    { id: 26, title: "Implement Queue using Stacks", category: "Algorithms", difficulty: "Easy", type: "Back-end", timing: "15 min", frequency: "Medium", description: "Implémentez une file (queue) en utilisant deux piles (stacks).", answer: "Utilisez une pile pour l'entrée et une pour la sortie. Transférez au besoin.", tags: ["Stack", "Queue"] },
    { id: 27, title: "Min Stack", category: "Algorithms", difficulty: "Easy", type: "Back-end", timing: "15 min", frequency: "High", description: "Concevez une pile qui supporte push, pop, top, et la récupération de l'élément minimum en temps constant.", answer: "Utilisez une pile auxiliaire pour stocker les minimums.", tags: ["Stack", "Design"] },
    { id: 28, title: "Reorder List", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "35 min", frequency: "Medium", description: "Réordonnez une liste chaînée selon un motif spécifique.", answer: "Trouvez le milieu, inversez la seconde moitié, puis fusionnez.", tags: ["Linked List", "Two Pointers"] },
    { id: 29, title: "Copy List with Random Pointer", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "35 min", frequency: "Medium", description: "Créez une copie profonde d'une liste chaînée avec des pointeurs aléatoires.", answer: "Utilisez une Map pour mapper les anciens nœuds aux nouveaux.", tags: ["Hash Map", "Linked List"] },
    { id: 30, title: "LRU Cache Implementation", category: "Algorithms", difficulty: "Medium", type: "Back-end", timing: "40 min", frequency: "High", description: "Implémentez un cache LRU.", answer: "Utilisez une combinaison de Doubly Linked List et Hash Map.", tags: ["Design", "Linked List"] },
    { id: 31, title: "Design Messenger App", category: "System Design", difficulty: "Hard", type: "Full-stack", timing: "45 min", frequency: "High", description: "Concevez une application de messagerie en temps réel.", answer: "Utilisez des WebSockets, un stockage distribué (Cassandra), et un service de présence.", tags: ["System Design", "Real-time"] },
    { id: 32, title: "Explain Box Model", category: "Front-end", difficulty: "Easy", type: "Front-end", timing: "10 min", frequency: "Very High", description: "Expliquez le modèle de boîte CSS en détail.", answer: "Content, Padding, Border, Margin. Différence entre content-box et border-box.", tags: ["CSS", "Web"] },
    { id: 33, title: "What is a Closure?", category: "JavaScript", difficulty: "Easy", type: "Front-end", timing: "10 min", frequency: "Very High", description: "Expliquez ce qu'est une fermeture (closure) en JavaScript.", answer: "Une fonction qui garde accès à son scope parent même après l'exécution de ce dernier.", tags: ["JavaScript", "Logic"] },
    { id: 34, title: "Explain Event Delegation", category: "JavaScript", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "High", description: "Qu'est-ce que la délégation d'événements et pourquoi est-elle utile ?", answer: "Attacher un écouteur à un parent pour gérer les événements des enfants via la propagation (bubbling).", tags: ["JavaScript", "Events"] },
    { id: 35, title: "HTTP vs HTTPS", category: "Networking", difficulty: "Easy", type: "Full-stack", timing: "10 min", frequency: "High", description: "Quelle est la différence entre HTTP et HTTPS ?", answer: "HTTPS est HTTP sur TLS/SSL pour le chiffrement et la sécurité.", tags: ["Networking", "Security"] },
    { id: 36, title: "Explain 'this' keyword", category: "JavaScript", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "Very High", description: "Comment fonctionne le mot-clé 'this' dans différents contextes ?", answer: "Dépend de l'appel : Global, Objet, Constructeur, Arrow function, Call/Apply/Bind.", tags: ["JavaScript", "Context"] },
    { id: 37, title: "Semantic HTML", category: "Front-end", difficulty: "Easy", type: "Front-end", timing: "10 min", frequency: "High", description: "Pourquoi est-il important d'utiliser du HTML sémantique ?", answer: "Accessibilité, SEO, et lisibilité du code.", tags: ["HTML", "A11y"] },
    { id: 38, title: "Responsive Design Strategies", category: "CSS", difficulty: "Medium", type: "Front-end", timing: "15 min", frequency: "High", description: "Comment gérez-vous le design adaptatif (responsive) ?", answer: "Media Queries, Mobile First, Flexbox/Grid, unités relatives (rem, em, %).", tags: ["CSS", "Responsive"] },
    { id: 39, title: "Tell me about a time you failed", category: "LP", difficulty: "Hard", type: "Full-stack", timing: "15 min", frequency: "High", description: "Décrivez un échec professionnel et ce que vous en avez appris.", answer: "Soyez vulnérable mais constructif. Montrez comment vous avez rebondi.", tags: ["Behavioral", "Growth"] },
    { id: 40, title: "Are Right, A Lot", category: "LP", difficulty: "Medium", type: "Full-stack", timing: "12 min", frequency: "Medium", description: "Racontez une fois où vous avez dû prendre une décision basée sur votre instinct plutôt que sur les données.", answer: "Montrez votre jugement et comment vous avez validé votre intuition a posteriori.", tags: ["Judgment", "LP"] }
  ];

  const filteredQuestions = useMemo(() => {
    return amazonQuestions.filter(q => 
      (activeTab === 'all' || q.category.toLowerCase() === activeTab.toLowerCase()) &&
      (activeRole === 'all' || q.type.toLowerCase() === activeRole.toLowerCase()) &&
      (q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [activeTab, activeRole, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-orange-50 font-sans selection:bg-orange-500/30">
      <nav className="border-b border-orange-500/20 bg-[#131921] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-6">
              <button onClick={() => navigate(-1)} className="p-2.5 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-orange-500/30">
                <ArrowLeft size={22} className="text-orange-400" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-black text-black text-2xl shadow-[0_0_30px_rgba(249,115,22,0.4)]">a</div>
                <div>
                  <h1 className="text-xl font-black tracking-tight uppercase">Amazon <span className="text-orange-500 font-normal">LPs</span></h1>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">40 Master Questions</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center bg-[#232f3e] border border-white/10 rounded-xl px-5 py-2.5 gap-4 focus-within:border-orange-500/50 transition-all">
              <Search size={20} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search Leadership Principles, roles, or topics..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-96 text-white placeholder:text-slate-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-3 space-y-8">
        

            <section className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Mastery Tabs</h3>
              <div className="space-y-2">
                {['All', 'LP', 'Algorithms', 'System Design', 'Front-end'].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveTab(cat.toLowerCase())}
                    className={`w-full text-left px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === cat.toLowerCase() ? 'text-orange-500 bg-orange-500/10' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-9">
            {selectedQuestion ? (
              <div className="bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden animate-in zoom-in-95 duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="p-12 border-b border-white/5 bg-gradient-to-br from-orange-500/5 to-transparent">
                  <button onClick={() => setSelectedQuestion(null)} className="mb-10 text-xs font-black text-orange-500 flex items-center gap-2 uppercase tracking-[0.2em] hover:gap-3 transition-all">
                    <ArrowLeft size={16} /> Back to dashboard
                  </button>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-orange-500 text-black text-[10px] font-black rounded uppercase tracking-tighter">
                          {selectedQuestion.category}
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-slate-400 border border-white/10 rounded text-[10px] font-black uppercase tracking-tighter">
                          {selectedQuestion.type}
                        </span>
                      </div>
                      <h2 className="text-4xl font-black text-white leading-tight tracking-tight uppercase">{selectedQuestion.title}</h2>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Prep Time</div>
                      <div className="text-3xl font-black text-orange-500">{selectedQuestion.timing}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-12 space-y-12">
                  <section className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-3">
                      <MessageSquare size={18} className="text-orange-500" /> Scenario
                    </h4>
                    <p className="text-2xl text-white leading-relaxed font-medium italic border-l-4 border-orange-500 pl-8 py-2">
                      "{selectedQuestion.description}"
                    </p>
                  </section>

                  <section className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-3">
                      <Shield size={18} className="text-orange-500" /> STAR Strategy
                    </h4>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
                      <p className="text-lg text-slate-300 whitespace-pre-wrap leading-relaxed font-medium">
                        {selectedQuestion.answer}
                      </p>
                    </div>
                  </section>

                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                    {selectedQuestion.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 bg-[#222] text-orange-400/80 rounded-full text-[10px] font-black border border-white/5 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredQuestions.map((q) => (
                  <button 
                    key={q.id}
                    onClick={() => setSelectedQuestion(q)}
                    className="group bg-[#111] border border-white/5 p-10 rounded-3xl text-left hover:border-orange-500/40 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[60px] group-hover:bg-orange-500/10 transition-all"></div>
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-500 shadow-2xl">
                        {q.category === 'LP' ? <Users size={28} /> : <Code size={28} />}
                      </div>
                      <div className="px-4 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-black rounded-full border border-orange-500/20 uppercase tracking-tighter">
                        {q.frequency}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tighter">{q.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-medium mb-10">{q.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                        <Clock size={14} /> {q.timing}
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                        <ChevronRight size={20} className="text-white group-hover:text-black" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
