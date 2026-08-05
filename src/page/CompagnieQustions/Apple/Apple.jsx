import React, { useState, useEffect,useMemo} from 'react';
import { 
  ArrowLeft, Play, Pause, RotateCcw, Eye, EyeOff, Send, 
  Clock, Code, CheckCircle2, AlertCircle, Copy, Check,
  ShoppingBag, Truck, Users, Database,ShieldCheck,Share2,Layout
} from 'lucide-react';

const DashboardApple = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [activeTab, setActiveTab] = useState('all');
  const [activeRole, setActiveRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    }, [activeTab, activeRole, searchQuery]);
  

  return (
    <div className="min-h-screen bg-[#0f1111] text-gray-100 font-sans px-4 sm:px-6">
      {/* Navigation */}
     

      <main className="max-w-7xl mx-auto py-6">

      

             <header className="flex flex-col gap-6 sm:gap-4 pt-6 sm:pt-10">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Préparez votre entretien Amazon</h1>
               <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
                Maîtrisez les algorithmes et les 16 Principes de Leadership (LP) d'Amazon avec des questions réelles posées en entretien.
              </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="px-3 sm:px-4 py-2 bg-[#18191a] border border-gray-800 rounded-xl text-center">
                  <div className="text-xs text-gray-500 uppercase font-bold">Total</div>
                  <div className="text-lg sm:text-xl font-bold text-blue-500">45</div>
                </div>
                <div className="px-3 sm:px-4 py-2 bg-[#18191a] border border-gray-800 rounded-xl text-center">
                  <div className="text-xs text-gray-500 uppercase font-bold">Complétées</div>
                  <div className="text-lg sm:text-xl font-bold text-green-500">0</div>
                </div>
              </div>
            </header>

          <div className="mb-8 sm:mb-10 pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            
              {[
                // { label: 'Arrays & Strings', icon: Layout, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { label: 'Algorithmes', icon: Share2, color: 'text-purple-400', bg: 'bg-purple-400/10' },
                { label: 'System Design', icon: ShieldCheck, color: 'text-green-400', bg: 'bg-green-400/10' },
                { label: 'Behavioral (LP)"', icon: Users, color: 'text-orange-400', bg: 'bg-orange-400/10' }
              ].map((item, cat) => (
                 
                <button 
                 key={cat} 
                 onClick={() => setActiveTab(item.label.toLowerCase())}
                 className={`${item.bg} p-3 sm:p-4 rounded-2xl border border-gray-800/50 flex items-center gap-3 sm:gap-4 hover:scale-[1.02] transition-transform cursor-pointer `}>
                  <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 ${item.color}`} />
                  <span className="font-bold text-gray-200 text-sm sm:text-base">{item.label}</span>
                 
                </button>
              ))}
            </div>

        {!selectedQuestion ? (
          <div className="space-y-6 sm:space-y-8">

          

            <div className="bg-[#1e2329] rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#232f3e]">
                <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#ff9900]" />
                  Banque de Questions Amazon
                </h2>
                <div className="flex gap-2 w-full sm:w-auto">
                  <select className="bg-gray-800 border border-gray-700 rounded-md px-2 sm:px-3 py-1 text-xs sm:text-sm outline-none focus:ring-1 focus:ring-[#ff9900] w-full sm:w-auto">
                    <option>Toutes les difficultés</option>
                    <option>Facile</option>
                    <option>Moyen</option>
                    <option>Difficile</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="uppercase text-gray-500 bg-[#1e2329]">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium">Statut</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium">Titre</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium hidden sm:table-cell">Catégorie</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium hidden md:table-cell">Difficulté</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {questions.map((q) => (
                      <tr key={q.id} className="hover:bg-gray-800/30 transition-colors group">
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-green-500/50 transition-colors" />
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-200 text-xs sm:text-sm">{q.title}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 hidden sm:table-cell">
                          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">{q.category}</span>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 hidden md:table-cell">
                          <span className={`text-xs font-bold ${
                            q.difficulty === 'Facile' ? 'text-green-400' : 
                            q.difficulty === 'Moyen' ? 'text-[#ff9900]' : 'text-red-400'
                          }`}>
                            {q.difficulty}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-right">
                          <button 
                            onClick={() => {
                              setSelectedQuestion(q);
                              setUserCode('');
                              setTimer(0);
                              setIsRunning(true);
                            }}
                            className="text-xs sm:text-sm font-medium bg-orange-400/10 rounded-lg text-[#ff9900] hover:text-[#e47911] transition-colors px-3 sm:px-5 py-1 sm:py-2 whitespace-nowrap">
                            S'entraîner →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 min-h-[calc(100vh-200px)]">
            {/* Left Column: Description */}
            <div className="bg-[#1e2329] rounded-xl border border-gray-800 flex flex-col overflow-hidden">
              <div className="p-3 sm:p-4 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#232f3e]">
                <button 
                  onClick={() => setSelectedQuestion(null)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                  <div className="flex items-center gap-2 text-[#ff9900] font-mono text-base sm:text-lg">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    {formatTime(timer)}
                  </div>
                  <button 
                    onClick={() => setIsRunning(!isRunning)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {isRunning ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                  <button 
                    onClick={() => setTimer(0)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 flex-1 custom-scrollbar">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedQuestion.title}</h2>
                  <span className={`px-2 py-1 rounded text-xs font-bold whitespace-nowrap ${
                    selectedQuestion.difficulty === 'Facile' ? 'bg-green-500/10 text-green-400' : 
                    selectedQuestion.difficulty === 'Moyen' ? 'bg-[#ff9900]/10 text-[#ff9900]' : 'bg-red-500/10 text-red-400'
                  }`}>
                    {selectedQuestion.difficulty}
                  </span>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedQuestion.description}</p>
                  
                  <div className="bg-black/30 rounded-lg p-3 sm:p-4 mt-4 font-mono text-xs sm:text-sm border border-gray-800">
                    <h4 className="text-gray-500 mb-2 uppercase text-xs font-bold tracking-wider">Exemple :</h4>
                    <pre className="text-gray-200 whitespace-pre-wrap text-xs sm:text-sm">{selectedQuestion.example}</pre>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-400 uppercase mb-3 tracking-wider">Contraintes :</h4>
                    <ul className="space-y-2">
                      {selectedQuestion.constraints.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                          <AlertCircle className="w-4 h-4 mt-0.5 text-[#ff9900] shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {showSolution && (
                  <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2 text-sm sm:text-base">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        Explication de la Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300">{selectedQuestion.explanation}</p>
                    </div>
                    <div className="relative group">
                      <div className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10">
                        <button 
                          onClick={handleCopyCode}
                          className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-700"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                        </button>
                      </div>
                      <pre className="bg-black p-3 sm:p-6 rounded-xl border border-gray-800 font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                        <code>{selectedQuestion.solution}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Editor */}
            <div className="bg-[#1e2329] rounded-xl border border-gray-800 flex flex-col overflow-hidden">
              <div className="p-3 sm:p-4 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#232f3e]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400">
                  <Code className="w-4 h-4" />
                  Code Editor
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowSolution(!showSolution)}
                    className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium hover:bg-gray-700 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {showSolution ? 'Masquer' : 'Voir Solution'}
                  </button>
                </div>
              </div>
              
              <div className="flex-1 relative bg-[#0d1117]">
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  placeholder="# Écrivez votre solution ici..."
                  className="w-full h-full bg-transparent p-4 sm:p-6 font-mono text-xs sm:text-sm outline-none resize-none text-gray-300 placeholder-gray-600"
                />
              </div>

              <div className="p-3 sm:p-4 border-t border-gray-800 bg-[#232f3e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-gray-500">
                  Appuyez sur <kbd className="px-1.5 py-0.5 bg-gray-800 rounded border border-gray-700 text-xs">Ctrl + Enter</kbd> pour soumettre
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={submitted}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-bold transition-all whitespace-nowrap text-sm ${
                    submitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#ff9900] hover:bg-[#e47911] text-black shadow-lg shadow-[#ff9900]/20'
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      Soumis !
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Soumettre
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardApple;
