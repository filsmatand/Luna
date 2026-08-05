import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, Play, Pause, RotateCcw, Eye, EyeOff, Send, 
  Clock, Code, CheckCircle2, Copy, Check, Users, ShieldCheck, Share2
} from 'lucide-react';

const questions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Facile",
    category: "Algorithmes",
    description: "Étant donné un tableau d'entiers 'nums' et un entier 'target', retournez les indices des deux nombres tels qu'ils s'additionnent pour former 'target'.",
    example: "Entrée: nums = [2,7,11,15], target = 9\nSortie: [0,1]\nExplication: nums[0] + nums[1] == 9, donc on retourne [0, 1].",
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Une seule solution existe."],
    solution: `def twoSum(nums: list[int], target: int) -> list[int]:
    prevMap = {} # val : index
    
    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i
    return`,
    explanation: "Utilisez une table de hachage pour stocker les valeurs déjà parcourues et leurs indices. Pour chaque nombre, vérifiez si le complément (target - n) existe déjà dans la table."
  },
  {
    id: 2,
    title: "Customer Obsession",
    difficulty: "Moyen",
    category: "Behavioral (LP)",
    description: "Parlez-moi d'une fois où vous avez dû traiter avec un client difficile. Comment avez-vous géré la situation et quel a été le résultat ?",
    example: "Situation : Un client était mécontent suite à un retard de livraison critique pour son projet.",
    constraints: ["Utilisez la méthode STAR (Situation, Tâche, Action, Résultat)", "Focus sur l'empathie et la résolution de problème"],
    solution: `Réponse suggérée (Méthode STAR) :
Situation : "Un client majeur était furieux car une mise à jour logicielle avait causé un bug dans son système de production."
Tâche : "Mon rôle était de calmer le client tout en coordonnant une correction rapide."
Action : "J'ai d'abord écouté sans interrompre pour comprendre l'impact métier. J'ai pris la responsabilité personnelle du suivi, communiqué des mises à jour toutes les heures, et travaillé avec l'ingénierie pour un hotfix."
Résultat : "Le bug a été corrigé en 4h. Le client a apprécié la transparence et a renouvelé son contrat le mois suivant."`,
    explanation: "Amazon place l'obsession client au-dessus de tout. Montrez que vous allez au-delà des attentes pour gagner la confiance du client."
  },
  {
    id: 3,
    title: "Number of Islands",
    difficulty: "Moyen",
    category: "Algorithmes",
    description: "Étant donné une grille 2D 'grid' représentant une carte de '1' (terre) et de '0' (eau), retournez le nombre d'îles.",
    example: "Entrée: grid = [\n  ['1','1','0','0','0'],\n  ['1','1','0','0','0'],\n  ['0','0','1','0','0'],\n  ['0','0','0','1','1']\n]\nSortie: 3",
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300"],
    solution: `def numIslands(grid: list[list[str]]) -> int:
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    visit = set()
    islands = 0
    
    def bfs(r, c):
        q = collections.deque()
        visit.add((r, c))
        q.append((r, c))
        while q:
            row, col = q.popleft()
            directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            for dr, dc in directions:
                nr, nc = row + dr, col + dc
                if (nr in range(rows) and nc in range(cols) and
                    grid[nr][nc] == "1" and (nr, nc) not in visit):
                    q.append((nr, nc))
                    visit.add((nr, nc))

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1" and (r, c) not in visit:
                bfs(r, c)
                islands += 1
    return islands`,
    explanation: "Utilisez un algorithme de parcours (BFS ou DFS). Pour chaque cellule '1' non visitée, lancez un parcours pour marquer toute l'île et incrémentez le compteur."
  },
  {
    id: 4,
    title: "Ownership & Long Term",
    difficulty: "Moyen",
    category: "Behavioral (LP)",
    description: "Décrivez une situation où vous avez pris une décision qui a sacrifié un gain à court terme pour un bénéfice à long terme.",
    example: "Situation : Choisir de réécrire une dette technique plutôt que de livrer une fonctionnalité mineure demandée immédiatement.",
    constraints: ["Démontrer une vision au-delà de sa propre équipe", "Montrer le sens des responsabilités"],
    solution: `Réponse suggérée :
"Dans mon précédent projet, nous pouvions livrer une fonctionnalité en 2 jours en utilisant un hack rapide, ou en 2 semaines en refactorisant le module de base. J'ai convaincu les parties prenantes de choisir les 2 semaines. Bien que cela ait retardé la livraison immédiate, cela a réduit nos bugs de 40% sur l'année suivante et a permis d'intégrer de futures fonctionnalités beaucoup plus vite. J'ai agi en propriétaire du code sur le long terme."`,
    explanation: "Les leaders ne disent jamais 'ce n'est pas mon travail' et pensent à la pérennité de l'entreprise."
  },
  {
    id: 5,
    title: "LRU Cache",
    difficulty: "Moyen",
    category: "Algorithmes",
    description: "Concevez une structure de données pour un cache LRU (Least Recently Used). Elle doit supporter les opérations 'get' et 'put' en O(1).",
    example: "LRUCache(2) -> put(1, 1), put(2, 2), get(1) -> retourne 1, put(3, 3) -> évince la clé 2.",
    constraints: ["Capacité positive", "Opérations en temps constant O(1)"],
    solution: `class Node:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {} # map key to node
        self.left, self.right = Node(0, 0), Node(0, 0)
        self.left.next, self.right.prev = self.right, self.left

    def remove(self, node):
        prev, nxt = node.prev, node.next
        prev.next, nxt.prev = nxt, prev

    def insert(self, node):
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = node
        node.next, node.prev = nxt, prev

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])
        if len(self.cache) > self.cap:
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]`,
    explanation: "Combinez une table de hachage (pour l'accès O(1)) et une liste doublement chaînée (pour maintenir l'ordre de récence et supprimer en O(1))."
  },
  {
    id: 6,
    title: "Bias for Action",
    difficulty: "Moyen",
    category: "Behavioral (LP)",
    description: "Donnez un exemple d'une fois où vous avez dû prendre une décision rapide sans avoir toutes les données nécessaires.",
    example: "Situation : Une panne système inexpliquée en plein pic de trafic.",
    constraints: ["Expliquer le risque calculé", "Montrer la capacité à agir sous pression"],
    solution: `Réponse suggérée :
"Pendant un événement de vente flash, notre service de paiement a commencé à ralentir. Nous n'avions pas encore identifié la cause exacte, mais j'ai décidé de basculer immédiatement sur notre fournisseur de secours. C'était un risque car le basculement pouvait causer 1 minute d'interruption totale, mais rester ainsi risquait de perdre 50% des transactions. J'ai agi vite, le basculement a réussi et nous avons sauvé la vente."`,
    explanation: "La vitesse compte en affaires. Beaucoup de décisions sont réversibles et ne nécessitent pas une étude approfondie."
  },
  {
    id: 7,
    title: "Merge K Sorted Lists",
    difficulty: "Difficile",
    category: "Algorithmes",
    description: "Fusionnez 'k' listes chaînées triées et retournez-les comme une seule liste chaînée triée.",
    example: "Entrée: lists = [[1,4,5],[1,3,4],[2,6]]\nSortie: [1,1,2,3,4,4,5,6]",
    constraints: ["k == lists.length", "0 <= k <= 10^4", "Complexité attendue : O(N log k)"],
    solution: `import heapq

def mergeKLists(lists):
    minHeap = []
    for i in range(len(lists)):
        if lists[i]:
            heapq.heappush(minHeap, (lists[i].val, i, lists[i]))
    
    dummy = ListNode()
    curr = dummy
    while minHeap:
        val, i, node = heapq.heappop(minHeap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(minHeap, (node.next.val, i, node.next))
    return dummy.next`,
    explanation: "Utilisez un Min-Heap pour toujours extraire la plus petite valeur parmi les têtes des k listes. À chaque extraction, ajoutez l'élément suivant de la liste correspondante dans le tas."
  },
  {
    id: 8,
    title: "Warehouse Management",
    difficulty: "Moyen",
    category: "System Design",
    description: "Concevez un système de gestion d'entrepôt (WMS) pour Amazon qui suit l'inventaire et optimise le picking des articles.",
    example: "Composants : Tracking des robots, placement des stocks, gestion des commandes.",
    constraints: ["Haute disponibilité", "Latence minimale pour les robots"],
    solution: `Architecture suggérée :
1. Microservices : Service d'Inventaire, Service de Localisation (Grille 2D), Service de Picking.
2. Base de données : NoSQL (DynamoDB) pour le tracking temps réel des robots (vitesse), SQL pour l'inventaire (consistance).
3. Messaging : Kinesis ou SQS pour coordonner les tâches entre les robots.
4. Optimisation : Algorithme de chemin (A*) pour les robots.`,
    explanation: "Amazon adore les questions liées à la logistique. Focus sur l'évolutivité et la tolérance aux pannes."
  },
  {
    id: 9,
    title: "Trapping Rain Water",
    difficulty: "Difficile",
    category: "Algorithmes",
    description: "Étant donné 'n' entiers non négatifs représentant une carte d'élévation où la largeur de chaque barre est 1, calculez la quantité d'eau qu'elle peut piéger après la pluie.",
    example: "Entrée: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nSortie: 6",
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4"],
    solution: `def trap(height: list[int]) -> int:
    if not height: return 0
    l, r = 0, len(height) - 1
    leftMax, rightMax = height[l], height[r]
    res = 0
    while l < r:
        if leftMax < rightMax:
            l += 1
            leftMax = max(leftMax, height[l])
            res += leftMax - height[l]
        else:
            r -= 1
            rightMax = max(rightMax, height[r])
            res += rightMax - height[r]
    return res`,
    explanation: "Utilisez deux pointeurs. L'eau piégée à une position dépend du minimum entre le maximum à gauche et le maximum à droite."
  },
  {
    id: 10,
    title: "Have Backbone; Disagree & Commit",
    difficulty: "Moyen",
    category: "Behavioral (LP)",
    description: "Racontez une fois où vous étiez en désaccord avec une décision de votre manager ou de votre équipe. Comment avez-vous exprimé votre désaccord et qu'avez-vous fait ensuite ?",
    example: "Situation : Choix d'une stack technologique inadaptée selon vous.",
    constraints: ["Montrer que vous défendez vos idées avec des données", "Montrer que vous vous engagez une fois la décision prise"],
    solution: `Réponse suggérée :
"Mon équipe voulait utiliser une nouvelle base de données beta pour un projet critique. J'ai présenté des données montrant des risques d'instabilité. Malgré mes arguments, le CTO a décidé de continuer. J'ai dit : 'Je ne suis pas d'accord avec les risques, mais je m'engage à 100% pour que ça marche'. J'ai alors travaillé plus dur pour mettre en place des systèmes de monitoring extra-sensibles. Finalement, nous avons réussi, mais ma préparation a sauvé deux incidents majeurs."`,
    explanation: "Les leaders doivent contester respectueusement les décisions s'ils ne sont pas d'accord, mais une fois la décision prise, ils s'engagent totalement."
  }
];

const DashboardMicrosoftResponsive = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedQuestion.solution);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setIsRunning(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => 
      (activeTab === 'all' || q.category.toLowerCase() === activeTab.toLowerCase()) 
    );
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0f1111] text-gray-100 font-sans px-4 sm:px-6 md:px-10 lg:px-20">
      <main className="max-w-7xl mx-auto py-6 sm:py-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 sm:pt-10">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Préparez votre entretien Amazon
            </h1>
            <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
              Maîtrisez les algorithmes et les 16 Principes de Leadership (LP) d'Amazon avec des questions réelles posées en entretien.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium">
              Statistiques
            </button>
            <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#ff9900] hover:bg-[#e47911] text-black font-bold text-sm transition-all shadow-lg shadow-[#ff9900]/20">
              Passer Premium
            </button>
          </div>
        </header>

        <div className="mt-10 flex flex-wrap gap-2 sm:gap-4 border-b border-gray-800 pb-4 overflow-x-auto no-scrollbar">
          {['all', 'Algorithmes', 'Behavioral (LP)', 'System Design'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-[#ff9900] text-black' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'all' ? 'Toutes les questions' : tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredQuestions.map((q) => (
            <div 
              key={q.id}
              onClick={() => {
                setSelectedQuestion(q);
                setUserCode('');
                setShowSolution(false);
                setTimer(0);
                setIsRunning(true);
              }}
              className="group bg-[#1a1c1c] border border-gray-800 rounded-3xl p-6 sm:p-8 hover:border-[#ff9900]/50 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-5 h-5 text-[#ff9900]" />
              </div>
              
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                  q.difficulty === 'Facile' ? 'bg-green-500/10 text-green-500' :
                  q.difficulty === 'Moyen' ? 'bg-yellow-500/10 text-yellow-500' :
                  'bg-red-500/10 text-red-500'
                }`}>
                  {q.difficulty}
                </span>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{q.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#ff9900] transition-colors line-clamp-2">
                {q.title}
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base line-clamp-3 mb-6 sm:mb-8 leading-relaxed flex-grow">
                {q.description}
              </p>

              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-800/50 mt-auto">
                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-bold">1.2k+ résolus</span>
                </div>
                <div className="flex items-center gap-2 text-[#ff9900]">
                  <span className="text-[10px] font-black uppercase tracking-tighter">Commencer</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedQuestion && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col animate-in fade-in duration-300">
            <nav className="h-16 sm:h-20 border-b border-gray-800 flex items-center justify-between px-4 sm:px-8 bg-[#1a1c1c]/50">
              <button 
                onClick={() => setSelectedQuestion(null)}
                className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-xl group-hover:bg-white/5 transition-all">
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-bold text-sm sm:text-base hidden sm:block">Retour au Dashboard</span>
              </button>

              <div className="flex items-center gap-4 sm:gap-8">
                <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-2.5 bg-black/40 rounded-2xl border border-gray-800">
                  <Clock className={`w-4 h-4 sm:w-5 sm:h-5 ${isRunning ? 'text-[#ff9900] animate-pulse' : 'text-gray-500'}`} />
                  <span className="font-mono text-lg sm:text-xl font-black text-white w-16 sm:w-20 text-center">
                    {formatTime(timer)}
                  </span>
                  <button 
                    onClick={() => setIsRunning(!isRunning)}
                    className="p-1.5 sm:p-2 hover:bg-white/5 rounded-lg transition-all"
                  >
                    {isRunning ? <Pause className="w-4 h-4 text-gray-400" /> : <Play className="w-4 h-4 text-[#ff9900]" />}
                  </button>
                </div>
                
                <div className="hidden md:flex items-center gap-3">
                  <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                    <ShieldCheck className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </nav>

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              <div className="w-full lg:w-1/2 overflow-y-auto p-6 sm:p-8 lg:p-12 custom-scrollbar">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                      selectedQuestion.difficulty === 'Facile' ? 'bg-green-500/10 text-green-500' :
                      selectedQuestion.difficulty === 'Moyen' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {selectedQuestion.difficulty}
                    </span>
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                      {selectedQuestion.category}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-10 tracking-tight leading-tight">
                    {selectedQuestion.title}
                  </h2>

                  <div className="space-y-10 sm:space-y-12">
                    <section>
                      <h4 className="text-xs font-black text-[#ff9900] uppercase tracking-[0.2em] mb-4 sm:mb-6">Description</h4>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                        {selectedQuestion.description}
                      </p>
                    </section>

                    <section className="bg-black/40 rounded-3xl p-6 sm:p-8 border border-gray-800">
                      <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4 sm:mb-6">Exemple</h4>
                      <pre className="text-gray-300 font-mono text-sm sm:text-base whitespace-pre-wrap leading-relaxed">
                        {selectedQuestion.example}
                      </pre>
                    </section>

                    <section>
                      <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-4 sm:mb-6">Contraintes</h4>
                      <ul className="space-y-3 sm:space-y-4">
                        {selectedQuestion.constraints.map((c, i) => (
                          <li key={i} className="flex items-start gap-4 text-gray-400 group">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff9900]/40 group-hover:bg-[#ff9900] transition-colors" />
                            <span className="text-sm sm:text-base font-medium">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 bg-[#0f1111] flex flex-col border-t lg:border-t-0 lg:border-l border-gray-800">
                <div className="h-14 sm:h-16 bg-[#1a1c1c] border-b border-gray-800 flex items-center justify-between px-4 sm:px-6 shrink-0">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ff9900]/10 text-[#ff9900]">
                      <Code className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Python 3</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setShowSolution(!showSolution)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      {showSolution ? "Masquer" : "Voir Solution"}
                    </button>
                    <button 
                      onClick={() => setTimer(0)}
                      className="p-2 text-gray-500 hover:text-white transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 relative group overflow-hidden">
                  <textarea
                    value={showSolution ? selectedQuestion.solution : userCode}
                    onChange={(e) => !showSolution && setUserCode(e.target.value)}
                    placeholder="# Écrivez votre solution ici..."
                    className="w-full h-full bg-[#0f1111] p-6 sm:p-10 font-mono text-sm sm:text-base text-gray-300 outline-none resize-none leading-relaxed placeholder:text-gray-700"
                    spellCheck="false"
                  />
                  
                  {showSolution && (
                    <div className="absolute top-6 sm:top-10 right-6 sm:right-10 flex flex-col gap-3">
                      <button 
                        onClick={handleCopyCode}
                        className="p-3 bg-[#232f3e] hover:bg-[#2d3a4a] rounded-2xl border border-gray-700 text-gray-300 transition-all shadow-2xl"
                      >
                        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  )}

                  {showSolution && (
                    <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 animate-in slide-in-from-bottom-4 duration-500">
                      <div className="bg-[#232f3e]/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[#ff9900]/30 shadow-2xl">
                        <h5 className="text-[#ff9900] text-[10px] font-black uppercase tracking-[0.2em] mb-4">Explication Technique</h5>
                        <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                          {selectedQuestion.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6 border-t border-gray-800 bg-[#232f3e] flex items-center justify-between shrink-0">
                  <div className="hidden sm:block text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                    Ctrl + Enter pour soumettre
                  </div>
                  <div className="sm:hidden text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                    Prêt pour la revue
                  </div>
                  <button 
                    onClick={handleSubmit}
                    disabled={submitted}
                    className={`flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm transition-all transform active:scale-95 ${
                      submitted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-[#ff9900] hover:bg-[#e47911] text-black shadow-xl shadow-[#ff9900]/30'
                    }`}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Soumis !
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Soumettre
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>
    </div>
  );
};

export default DashboardMicrosoftResponsive;
