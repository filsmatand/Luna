import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Play, Pause, RotateCcw, Eye, EyeOff, Send, 
  Clock, Code, CheckCircle2, Copy, Check,Layout,Users,ShieldCheck,Share2
} from 'lucide-react';


const DashboardGoogle = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      title: "Add Binary",
      difficulty: "Easy",
      category: "Algorithms",
      description: "Étant donné deux chaînes binaires a et b, retournez leur somme sous forme de chaîne binaire.",
      example: "Input: a = \"11\", b = \"1\"\nOutput: \"100\"",
      constraints: ["1 <= a.length, b.length <= 10^4", "a et b ne contiennent que '0' ou '1'"],
      solution: `def addBinary(a: str, b: str) -> str:
    result = []
    carry = 0
    i, j = len(a) - 1, len(b) - 1
    
    while i >= 0 or j >= 0 or carry:
        total = carry
        if i >= 0:
            total += int(a[i])
            i -= 1
        if j >= 0:
            total += int(b[j])
            j -= 1
        result.append(str(total % 2))
        carry = total // 2
    
    return "".join(result[::-1])`,
      explanation: "Parcourez les deux chaînes de droite à gauche en gérant une retenue (carry). À chaque étape, additionnez les bits correspondants plus la retenue."
    },
    {
      id: 2,
      title: "Valid Mountain Array",
      difficulty: "Easy",
      category: "Algorithms",
      description: "Vérifiez si un tableau est une 'montagne' : il croît strictement jusqu'à un sommet puis décroît strictement.",
      example: "Input: arr = [0,3,2,1]\nOutput: true",
      constraints: ["1 <= arr.length <= 10^4"],
      solution: `def validMountainArray(arr: list[int]) -> bool:
    n = len(arr)
    if n < 3:
        return False
    
    i = 0
    # Montée
    while i + 1 < n and arr[i] < arr[i + 1]:
        i += 1
    
    # Le sommet ne peut pas être au début ou à la fin
    if i == 0 or i == n - 1:
        return False
    
    # Descente
    while i + 1 < n and arr[i] > arr[i + 1]:
        i += 1
    
    return i == n - 1`,
      explanation: "Trouvez le sommet en montant. Vérifiez que le sommet n'est pas aux extrémités. Vérifiez que la descente atteint la fin."
    },
    {
      id: 3,
      title: "Set Mismatch",
      difficulty: "Easy",
      category: "Algorithms",
      description: "Dans un ensemble de 1 à n, un nombre est dupliqué et un autre manque. Trouvez les deux.",
      example: "Input: nums = [1,2,2,4]\nOutput: [2,3]",
      constraints: ["1 <= nums.length <= 10^4"],
      solution: `def findErrorNums(nums: list[int]) -> list[int]:
    n = len(nums)
    s = sum(set(nums))
    duplicate = sum(nums) - s
    missing = (n * (n + 1) // 2) - s
    return [duplicate, missing]`,
      explanation: "Calculez la somme attendue (n*(n+1)/2). La différence entre la somme réelle et la somme des uniques vous donne le doublon."
    },
    {
      id: 4,
      title: "Why Google?",
      difficulty: "Medium",
      category: "Behavioral",
      description: "Pourquoi voulez-vous rejoindre Google ? Comment vos valeurs s'alignent-elles avec notre mission ?",
      example: "Réponse attendue : Mentionnez l'innovation, l'impact global, la mission d'organiser l'information.",
      constraints: ["Réponse personnalisée", "Mentionner des produits Google spécifiques"],
      solution: `Réponse suggérée :
"Je suis attiré par Google pour plusieurs raisons. D'abord, la mission de l'entreprise - organiser l'information mondiale 
et la rendre universellement accessible - résonne profondément avec mes valeurs. J'admire particulièrement [produit spécifique] 
et comment il impacte des millions d'utilisateurs. Deuxièmement, la culture d'innovation et l'accent mis sur la 'Googleyness' 
- curiosité, humilité et collaboration - correspondent à ma philosophie de travail. Enfin, j'ai étudié [domaine pertinent] 
et je vois chez Google une opportunité de contribuer à des problèmes techniques complexes à grande échelle."`,
      explanation: "Soyez spécifique, personnel et aligné avec les valeurs de Google. Montrez que vous avez fait vos recherches."
    },
    {
      id: 5,
      title: "Conflict Management",
      difficulty: "Medium",
      category: "Behavioral",
      description: "Décrivez un conflit avec un collègue. Comment l'avez-vous résolu ?",
      example: "Situation : Désaccord sur l'approche technique.",
      constraints: ["Utilisez la méthode STAR", "Montrez l'écoute active"],
      solution: `Réponse suggérée (STAR) :
Situation : "J'étais en charge d'une fonctionnalité avec un collègue qui préférait une approche différente."
Tâche : "Nous devions trouver un consensus pour respecter la deadline."
Action : "J'ai écouté activement ses préoccupations, créé un prototype pour démontrer les avantages de mon approche, 
et proposé un compromis combinant les meilleures idées des deux."
Résultat : "Nous avons livré une solution robuste et le collègue a reconnu la valeur de la collaboration."`,
      explanation: "Montrez votre intelligence émotionnelle, votre capacité à écouter et à trouver des solutions gagnant-gagnant."
    },
    {
      id: 6,
      title: "Number of Islands",
      difficulty: "Medium",
      category: "Algorithms",
      description: "Comptez le nombre d'îles dans une grille 2D (1=terre, 0=eau).",
      example: "Input: grid = [[1,1,0],[0,1,0],[1,0,1]]\nOutput: 3",
      constraints: ["m == grid.length", "n == grid[i].length"],
      solution: `def numIslands(grid: list[list[str]]) -> int:
    if not grid:
        return 0
    
    def dfs(i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
            return
        grid[i][j] = '0'  # Marquer comme visité
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    
    return count`,
      explanation: "Utilisez DFS pour explorer chaque île. Marquez les cellules visitées pour ne pas les recompter."
    },
    {
      id: 7,
      title: "LRU Cache",
      difficulty: "Medium",
      category: "Algorithms",
      description: "Concevez et implémentez une structure de données pour un cache LRU (Least Recently Used).",
      example: "LRUCache cache = new LRUCache(2);\ncache.put(1, 1);\ncache.get(1); // returns 1",
      constraints: ["1 <= capacity <= 10^4"],
      solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
      explanation: "Utilisez OrderedDict pour maintenir l'ordre d'accès. Déplacez les éléments accédés à la fin et supprimez le premier si la capacité est dépassée."
    },
    {
      id: 8,
      title: "Word Ladder",
      difficulty: "Hard",
      category: "Algorithms",
      description: "Trouvez la longueur du plus court chemin de transformation d'un mot début à un mot fin.",
      example: "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\nOutput: 5",
      constraints: ["1 <= beginWord.length <= 10"],
      solution: `from collections import deque

def ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:
    if endWord not in wordList:
        return 0
    
    wordSet = set(wordList)
    queue = deque([(beginWord, 1)])
    visited = {beginWord}
    
    while queue:
        word, length = queue.popleft()
        
        if word == endWord:
            return length
        
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                newWord = word[:i] + c + word[i+1:]
                if newWord in wordSet and newWord not in visited:
                    visited.add(newWord)
                    queue.append((newWord, length + 1))
    
    return 0`,
      explanation: "Utilisez BFS pour trouver le plus court chemin. À chaque étape, générez tous les mots possibles en changeant une lettre."
    },
    {
      id: 9,
      title: "Design Autocomplete",
      difficulty: "Medium",
      category: "System Design",
      description: "Concevez un système d'autocomplétion pour un moteur de recherche.",
      example: "Utilisateur tape 'py' → suggestions : ['python', 'pygame', 'pycharm']",
      constraints: ["Haute performance", "Millions de requêtes"],
      solution: `Architecture suggérée :
1. Trie (Prefix Tree) pour le stockage des mots
2. Cache Redis pour les top recherches
3. Debouncing côté client pour réduire les requêtes
4. Ranking basé sur la fréquence et la récence

Composants :
- Frontend : Debounce les entrées utilisateur
- Backend : Trie pour les suggestions + Redis pour le cache
- Database : Stockage persistant des recherches`,
      explanation: "Combinez plusieurs techniques pour optimiser la performance et réduire la latence."
    },
    {
      id: 10,
      title: "Maximum Path Sum",
      difficulty: "Hard",
      category: "Algorithms",
      description: "Trouvez la somme maximale d'un chemin dans un arbre binaire.",
      example: "Input: root = [1,2,3]\nOutput: 6",
      constraints: ["Le nombre de nœuds est dans la plage [1, 3*10^4]"],
      solution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxPathSum(root: TreeNode) -> int:
    max_sum = float('-inf')
    
    def dfs(node):
        nonlocal max_sum
        if not node:
            return 0
        
        # Gain max du sous-arbre gauche (au moins 0)
        left_gain = max(0, dfs(node.left))
        # Gain max du sous-arbre droit (au moins 0)
        right_gain = max(0, dfs(node.right))
        
        # Somme passant par ce nœud
        current_sum = node.val + left_gain + right_gain
        max_sum = max(max_sum, current_sum)
        
        # Retourner le gain max pour le parent
        return node.val + max(left_gain, right_gain)
    
    dfs(root)
    return max_sum`,
      explanation: "Utilisez la récursion post-ordre. Pour chaque nœud, calculez le gain maximum qu'il peut apporter à un chemin."
    },
    {
      id: 11,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Algorithms",
      description: "Vérifiez si une chaîne de parenthèses (), [], {} est valide.",
      example: "Input: s = \"()\"\nOutput: true",
      constraints: ["1 <= s.length <= 10^4"],
      solution: `def isValid(s: str) -> bool:
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in mapping:
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
        else:
            stack.append(char)
    
    return len(stack) == 0`,
      explanation: "Utilisez une pile. Poussez les parenthèses ouvrantes et vérifiez la correspondance lors des fermantes."
    },
    {
      id: 12,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      category: "Algorithms",
      description: "Fusionnez k listes chaînées triées en une seule liste triée.",
      example: "lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,1,3,4,4,5,6]",
      constraints: ["k == lists.length"],
      solution: `import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists: list[ListNode]) -> ListNode:
    heap = []
    
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
    
    dummy = ListNode(0)
    current = dummy
    
    while heap:
        val, i, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    
    return dummy.next`,
      explanation: "Utilisez un Min-Heap pour comparer les têtes des k listes. Complexité : O(N log k)."
    },
    {
      id: 13,
      title: "Search in Rotated Sorted Array",
      difficulty: "Medium",
      category: "Algorithms",
      description: "Recherchez un élément dans un tableau trié qui a été pivoté.",
      example: "nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4",
      constraints: ["1 <= nums.length <= 5000"],
      solution: `def search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        
        # Déterminez quelle moitié est triée
        if nums[left] <= nums[mid]:
            # Moitié gauche est triée
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            # Moitié droite est triée
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1`,
      explanation: "Recherche binaire modifiée : déterminez quelle moitié est triée et si la cible s'y trouve."
    },
    {
      id: 14,
      title: "Course Schedule",
      difficulty: "Medium",
      category: "Algorithms",
      description: "Déterminez s'il est possible de terminer tous les cours (détection de cycle).",
      example: "numCourses = 2, prerequisites = [[1,0]]\nOutput: true",
      constraints: ["1 <= numCourses <= 2000"],
      solution: `def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:
    from collections import defaultdict, deque
    
    graph = defaultdict(list)
    in_degree = [0] * numCourses
    
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        in_degree[course] += 1
    
    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
    count = 0
    
    while queue:
        course = queue.popleft()
        count += 1
        
        for next_course in graph[course]:
            in_degree[next_course] -= 1
            if in_degree[next_course] == 0:
                queue.append(next_course)
    
    return count == numCourses`,
      explanation: "Utilisez le tri topologique (Kahn's algorithm) pour détecter les cycles."
    },
    {
      id: 15,
      title: "Kth Largest Element",
      difficulty: "Medium",
      category: "Algorithms",
      description: "Trouvez le k-ième plus grand élément dans un tableau non trié.",
      example: "nums = [3,2,1,5,6,4], k = 2\nOutput: 5",
      constraints: ["1 <= k <= len(nums)"],
      solution: `import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    # Approche 1 : Min-Heap de taille k
    heap = []
    for num in nums:
        if len(heap) < k:
            heapq.heappush(heap, num)
        elif num > heap[0]:
            heapq.heapreplace(heap, num)
    
    return heap[0]

# Approche 2 : Quickselect (O(N) moyen)
def findKthLargestQuickSelect(nums: list[int], k: int) -> int:
    def quickSelect(left, right, k_smallest):
        if left == right:
            return nums[left]
        
        pivot_index = partition(left, right)
        
        if k_smallest == pivot_index:
            return nums[k_smallest]
        elif k_smallest < pivot_index:
            return quickSelect(left, pivot_index - 1, k_smallest)
        else:
            return quickSelect(pivot_index + 1, right, k_smallest)
    
    def partition(left, right):
        pivot = nums[right]
        i = left
        for j in range(left, right):
            if nums[j] <= pivot:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        nums[i], nums[right] = nums[right], nums[i]
        return i
    
    return quickSelect(0, len(nums) - 1, len(nums) - k)`,
      explanation: "Utilisez un Min-Heap de taille k pour O(N log k) ou Quickselect pour O(N) moyen."
    },
    {
      id: 16,
      title: "Binary Tree Zigzag",
      difficulty: "Medium",
      category: "Algorithms",
      description: "Parcours d'arbre par niveau en alternant l'ordre.",
      example: "root = [3,9,20,null,null,15,7]\nOutput: [[3],[20,9],[15,7]]",
      constraints: ["0 <= Node.val <= 100"],
      solution: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def zigzagLevelOrder(root: TreeNode) -> list[list[int]]:
    if not root:
        return []
    
    result = []
    queue = deque([root])
    left_to_right = True
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        if not left_to_right:
            level.reverse()
        
        result.append(level)
        left_to_right = not left_to_right
    
    return result`,
      explanation: "Utilisez BFS avec un drapeau pour alterner l'ordre de chaque niveau."
    },
    {
      id: 17,
      title: "Trapping Rain Water",
      difficulty: "Hard",
      category: "Algorithms",
      description: "Calculez la quantité d'eau piégée entre les barres.",
      example: "height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6",
      constraints: ["n == height.length"],
      solution: `def trap(height: list[int]) -> int:
    if not height:
        return 0
    
    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
    water = 0
    
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    
    return water`,
      explanation: "Approche à deux pointeurs : maintenez les hauteurs max vues de chaque côté."
    },
    {
      id: 18,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      category: "Algorithms",
      description: "Trouvez la plus longue sous-chaîne palindromique.",
      example: "s = \"babad\"\nOutput: \"bab\" ou \"aba\"",
      constraints: ["1 <= s.length <= 1000"],
      solution: `def longestPalindrome(s: str) -> str:
    if not s:
        return ""
    
    def expandAroundCenter(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]
    
    longest = ""
    for i in range(len(s)):
        # Cas impair (centre unique)
        palindrome1 = expandAroundCenter(i, i)
        if len(palindrome1) > len(longest):
            longest = palindrome1
        
        # Cas pair (deux centres)
        palindrome2 = expandAroundCenter(i, i + 1)
        if len(palindrome2) > len(longest):
            longest = palindrome2
    
    return longest`,
      explanation: "Expansion autour du centre : pour chaque position, développez-vous autour du centre jusqu'à ne plus avoir de palindrome."
    },
    {
      id: 19,
      title: "Design TinyURL",
      difficulty: "Medium",
      category: "System Design",
      description: "Concevez un service de raccourcissement d'URL.",
      example: "encode('https://leetcode.com/problems/design-tinyurl')\nreturn 'http://tinyurl.com/4e9iAk'",
      constraints: ["Millions d'URLs"],
      solution: `import random
import string

class Codec:
    def __init__(self):
        self.url_map = {}
        self.short_map = {}
        self.base = "http://tinyurl.com/"
        self.chars = string.ascii_letters + string.digits
    
    def encode(self, longUrl: str) -> str:
        if longUrl in self.url_map:
            return self.url_map[longUrl]
        
        short_code = ''.join(random.choice(self.chars) for _ in range(6))
        short_url = self.base + short_code
        
        self.url_map[longUrl] = short_url
        self.short_map[short_url] = longUrl
        
        return short_url
    
    def decode(self, shortUrl: str) -> str:
        return self.short_map.get(shortUrl, "")`,
      explanation: "Utilisez l'encodage Base62 pour générer des codes courts uniques."
    },
    {
      id: 20,
      title: "JavaScript Event Loop",
      difficulty: "Medium",
      category: "JavaScript",
      description: "Expliquez comment fonctionne l'Event Loop en JavaScript.",
      example: "console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
      constraints: ["Comprendre Call Stack, Task Queue, Microtask Queue"],
      solution: `Exécution :
1. console.log(1) → Affiche 1 (Call Stack)
2. setTimeout(...) → Envoyé à la Task Queue
3. Promise.then(...) → Envoyé à la Microtask Queue
4. console.log(4) → Affiche 4 (Call Stack)
5. Microtask Queue vide → Affiche 3 (Promise)
6. Task Queue vide → Affiche 2 (setTimeout)

Résultat : 1, 4, 3, 2

Ordre de priorité :
1. Call Stack (code synchrone)
2. Microtask Queue (Promises, async/await)
3. Task Queue (setTimeout, setInterval)`,
      explanation: "L'Event Loop traite d'abord le code synchrone, puis les microtâches, puis les macrotâches."
    },
    {
      id: 21,
      title: "Debounce Implementation",
      difficulty: "Medium",
      category: "JavaScript",
      description: "Implémentez une fonction debounce en JavaScript.",
      example: "const debounced = debounce(search, 300);\ninput.addEventListener('input', debounced);",
      constraints: ["Délai configurable"],
      solution: `function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Exemple d'utilisation
const search = (query) => console.log('Searching for:', query);
const debouncedSearch = debounce(search, 500);

// Chaque fois que l'utilisateur tape, le délai de 500ms est réinitialisé
document.getElementById('input').addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});`,
      explanation: "Debounce retarde l'exécution d'une fonction jusqu'à ce qu'il y ait une pause dans les appels."
    },
    {
      id: 22,
      title: "React Hooks: useEffect vs useMemo",
      difficulty: "Easy",
      category: "Front-end",
      description: "Quelle est la différence entre useEffect et useMemo ?",
      example: "useEffect(() => { /* side effects */ }, [deps]);\nconst memoized = useMemo(() => expensiveCalculation(), [deps]);",
      constraints: ["Comprendre les dépendances"],
      solution: `// useEffect : Pour les effets de bord
useEffect(() => {
    // S'exécute après le rendu
    console.log('Component mounted or deps changed');
    
    return () => {
        // Cleanup
        console.log('Component unmounted or cleanup');
    };
}, [dependency]); // Dépendances

// useMemo : Pour la mémoïsation de calculs
const expensiveValue = useMemo(() => {
    // S'exécute pendant le rendu
    return complexCalculation(a, b);
}, [a, b]); // Dépendances

// Différences clés :
// useEffect : Effets de bord, asynchrone, après le rendu
// useMemo : Optimisation de performance, synchrone, pendant le rendu`,
      explanation: "useEffect pour les side effects, useMemo pour les calculs coûteux."
    },
    {
      id: 23,
      title: "CSS Flexbox vs Grid",
      difficulty: "Easy",
      category: "CSS",
      description: "Quand utiliser Flexbox par rapport à CSS Grid ?",
      example: "display: flex; /* 1D layout */\ndisplay: grid; /* 2D layout */",
      constraints: ["Comprendre les cas d'usage"],
      solution: `/* Flexbox : Mises en page unidimensionnelles */
.container {
    display: flex;
    flex-direction: row; /* ou column */
    justify-content: center; /* Alignement horizontal */
    align-items: center; /* Alignement vertical */
    gap: 10px;
}

/* Grid : Mises en page bidimensionnelles */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;
}

/* Quand utiliser quoi :
Flexbox :
- Barres de navigation
- Listes d'éléments
- Alignement simple

Grid :
- Layouts de page
- Galeries d'images
- Dashboards complexes */`,
      explanation: "Flexbox pour 1D, Grid pour 2D."
    },
    {
      id: 24,
      title: "Web Accessibility (A11y)",
      difficulty: "Medium",
      category: "Front-end",
      description: "Comment rendez-vous un site web accessible ?",
      example: "<button aria-label=\"Close menu\">×</button>",
      constraints: ["WCAG guidelines"],
      solution: `<!-- HTML Sémantique -->
<header>
    <nav>
        <ul>
            <li><a href="#main">Aller au contenu</a></li>
        </ul>
    </nav>
</header>

<main id="main" role="main">
    <article>
        <h1>Titre</h1>
        <p>Contenu</p>
    </article>
</main>

<!-- ARIA Labels -->
<button aria-label="Ouvrir le menu">☰</button>
<img src="image.jpg" alt="Description de l'image">

<!-- Contraste et Focus -->
.button {
    background-color: #0066cc; /* Contraste suffisant */
    color: white;
}

.button:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
}

<!-- Clavier Navigation -->
- Tous les éléments interactifs doivent être accessibles au clavier
- Ordre de tabulation logique
- Indicateurs de focus visibles`,
      explanation: "Utilisez HTML sémantique, ARIA, contraste et navigation au clavier."
    },
    {
      id: 25,
      title: "Security: XSS Prevention",
      difficulty: "Medium",
      category: "Security",
      description: "Comment prévenir les attaques Cross-Site Scripting (XSS) ?",
      example: "<!-- Mauvais -->\n<div>{userInput}</div>\n<!-- Bon -->\n<div>{escapeHtml(userInput)}</div>",
      constraints: ["OWASP guidelines"],
      solution: `// 1. Échappement des données
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// 2. Sanitization (utiliser une bibliothèque)
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);

// 3. Content Security Policy (CSP)
// Dans le header HTTP :
// Content-Security-Policy: default-src 'self'; script-src 'self' trusted-cdn.com

// 4. React (échappe automatiquement)
<div>{userInput}</div> // Safe par défaut

// 5. Éviter
<div dangerouslySetInnerHTML={{__html: userInput}} /> // Dangereux !`,
      explanation: "Échappez les données, utilisez CSP et évitez dangerouslySetInnerHTML."
    },
    {
      id: 26,
      title: "Database Indexing",
      difficulty: "Medium",
      category: "Databases",
      description: "Comment les index améliorent-ils les performances ?",
      example: "CREATE INDEX idx_email ON users(email);",
      constraints: ["Comprendre B-Trees"],
      solution: `-- Créer un index
CREATE INDEX idx_email ON users(email);

-- Index composé
CREATE INDEX idx_name_email ON users(first_name, last_name);

-- Vérifier les index
SHOW INDEX FROM users;

-- Avantages :
-- Recherche : O(log N)
-- Tri : Plus rapide
-- Jointures : Optimisées

-- Inconvénients :
-- Espace disque supplémentaire
-- Ralentit les INSERT/UPDATE/DELETE
-- Maintenance requise

-- Quand utiliser :
-- Colonnes fréquemment recherchées
-- Colonnes utilisées dans les JOINs
-- Colonnes triées souvent
-- Pas sur les petites tables`,
      explanation: "Les index créent des structures B-Tree permettant des recherches en O(log N)."
    },
    {
      id: 27,
      title: "REST vs GraphQL",
      difficulty: "Medium",
      category: "API",
      description: "Quels sont les avantages de GraphQL par rapport à REST ?",
      example: "REST: GET /users/1\nGraphQL: query { user(id: 1) { name email } }",
      constraints: ["Comprendre les trade-offs"],
      solution: `// REST
GET /users/1 → Retourne tout l'utilisateur
GET /users/1/posts → Requête séparée pour les posts
// Problème : Overfetching et Underfetching

// GraphQL
query {
    user(id: 1) {
        name
        email
        posts {
            title
        }
    }
}
// Solution : Récupérez exactement ce dont vous avez besoin

// Avantages de GraphQL :
// 1. Pas d'overfetching
// 2. Pas d'underfetching
// 3. Typage fort
// 4. Une seule requête pour plusieurs ressources
// 5. Versionning implicite

// Avantages de REST :
// 1. Simplicité
// 2. Caching HTTP natif
// 3. Moins de courbe d'apprentissage
// 4. Mieux pour les APIs publiques`,
      explanation: "GraphQL évite l'overfetching, REST est plus simple."
    },
    {
      id: 28,
      title: "Microservices Architecture",
      difficulty: "Medium",
      category: "Architecture",
      description: "Quels sont les principaux défis des microservices ?",
      example: "Service1 → Service2 → Service3 (communication réseau)",
      constraints: ["Comprendre la complexité distribuée"],
      solution: `Défis des Microservices :

1. Complexité du Déploiement
   - Orchestration (Kubernetes)
   - Gestion des versions
   - Rollback complexe

2. Cohérence des Données
   - Transactions distribuées
   - Saga pattern
   - Eventual consistency

3. Latence Réseau
   - Appels inter-services lents
   - Timeouts et retries
   - Circuit breakers

4. Observabilité
   - Logs distribués
   - Tracing (Jaeger, Zipkin)
   - Monitoring

5. Gestion des Erreurs
   - Cascading failures
   - Resilience patterns
   - Fallbacks

Solutions :
- Service mesh (Istio)
- Message queues (RabbitMQ, Kafka)
- API Gateway
- Caching (Redis)
- Monitoring et alerting`,
      explanation: "Les microservices offrent la scalabilité mais augmentent la complexité."
    },
    {
      id: 29,
      title: "Googleyness: Handling Ambiguity",
      difficulty: "Hard",
      category: "Behavioral",
      description: "Donnez un exemple où vous avez dû travailler avec des informations incomplètes.",
      example: "Situation : Spécifications floues pour une nouvelle fonctionnalité.",
      constraints: ["Montrez votre initiative"],
      solution: `Réponse suggérée :
"J'ai travaillé sur un projet où les spécifications étaient vagues. Au lieu d'attendre des clarifications, 
j'ai pris l'initiative de :

1. Clarifier les besoins en parlant directement aux stakeholders
2. Créer un prototype pour valider mes hypothèses
3. Documenter mes décisions et les partager avec l'équipe
4. Itérer rapidement basé sur le feedback

Résultat : Nous avons livré une solution qui dépassait les attentes et nous avons établi un processus 
plus clair pour les futurs projets."

Points clés :
- Initiative (ne pas attendre)
- Communication (clarifier les ambiguïtés)
- Itération (valider rapidement)
- Documentation (partager les décisions)`,
      explanation: "Montrez votre capacité à naviguer l'incertitude avec initiative et communication."
    },
    {
      id: 30,
      title: "Binary Search Implementation",
      difficulty: "Easy",
      category: "Algorithms",
      description: "Implémentez une recherche binaire classique.",
      example: "nums = [-1,0,3,5,9,12], target = 9\nOutput: 4",
      constraints: ["O(log N) time complexity"],
      solution: `def binarySearch(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Pas trouvé

# Récursif
def binarySearchRecursive(nums: list[int], target: int, left: int = 0, right: int = None) -> int:
    if right is None:
        right = len(nums) - 1
    
    if left > right:
        return -1
    
    mid = (left + right) // 2
    
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        return binarySearchRecursive(nums, target, mid + 1, right)
    else:
        return binarySearchRecursive(nums, target, left, mid - 1)`,
      explanation: "Divisez l'espace de recherche par deux à chaque étape. Complexité : O(log N)."
    }
  ];

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setIsRunning(false);
  };

  if (selectedQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 font-sans px-4 sm:px-6 lg:px-24">
        {/* Header */}
        <header className="border-b border-slate-800 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <button 
              onClick={() => {
                setSelectedQuestion(null);
                setUserCode('');
                setShowSolution(false);
                setTimer(0);
                setIsRunning(false);
                setSubmitted(false);
              }}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-bold text-sm sm:text-base"
            >
              <ArrowLeft size={20} /> Retour
            </button>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 sm:px-4 py-2 rounded-lg border border-slate-700">
                <Clock size={18} className={isRunning ? "text-green-500 animate-pulse" : "text-slate-500"} />
                <span className="font-mono font-bold text-base sm:text-lg">{formatTime(timer)}</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsRunning(!isRunning)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
                >
                  {isRunning ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button 
                  onClick={() => setTimer(0)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Panel - Question */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 sm:p-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{selectedQuestion.title}</h1>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    selectedQuestion.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    selectedQuestion.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {selectedQuestion.difficulty}
                  </span>
                </div>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Description</h3>
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">{selectedQuestion.description}</p>
                  </section>

                  <section>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Exemple</h3>
                    <pre className="bg-slate-950 border border-slate-800 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-blue-300 overflow-x-auto">
                      {selectedQuestion.example}
                    </pre>
                  </section>

                  <section>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Contraintes</h3>
                    <ul className="space-y-2">
                      {selectedQuestion.constraints.map((constraint, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm sm:text-base">
                          <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                          <span>{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>

            {/* Right Panel - Code Editor */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800/50 border-b border-slate-800 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <h3 className="font-bold text-slate-300 text-sm sm:text-base">Votre Solution</h3>
                  <button 
                    onClick={() => copyToClipboard(userCode)}
                    className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition whitespace-nowrap"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copié' : 'Copier'}
                  </button>
                </div>
                <textarea 
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  placeholder="Écrivez votre code ici..."
                  className="w-full h-64 sm:h-96 bg-slate-950 text-blue-300 font-mono text-xs sm:text-sm p-4 sm:p-6 focus:outline-none resize-none"
                />

                {/* <CodeEditor/> */}
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black rounded-xl hover:from-blue-500 hover:to-blue-400 transition shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={18} /> Soumettre ma réponse
              </button>

              {submitted && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm sm:text-base">
                    <CheckCircle2 size={20} />
                    Réponse enregistrée !
                  </div>
                  <button 
                    onClick={() => setShowSolution(!showSolution)}
                    className="w-full py-2 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {showSolution ? <EyeOff size={18} /> : <Eye size={18} />}
                    {showSolution ? 'Masquer' : 'Afficher'} la solution
                  </button>

                  {showSolution && (
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-6 space-y-4">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Solution Optimale</h4>
                        <pre className="text-xs sm:text-sm text-green-300 overflow-x-auto">
                          {selectedQuestion.solution}
                        </pre>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Explication</h4>
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{selectedQuestion.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 font-sans px-4 sm:px-6">
      {/* Header */}
      <header className="flex flex-col gap-6 sm:gap-4 pt-6 sm:pt-10">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Préparez votre entretien Google</h1>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
            Maîtrisez les 45+ questions les plus fréquentes chez Meta : Algorithmes, Comportemental et System Design.
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

      <div className="pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: 'Arrays & Strings', icon: Layout, color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'Trees & Graphs', icon: Share2, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { label: 'System Design', icon: ShieldCheck, color: 'text-green-400', bg: 'bg-green-400/10' },
          { label: 'Behavioral', icon: Users, color: 'text-orange-400', bg: 'bg-orange-400/10' }
        ].map((item, i) => (
          <div key={i} className={`${item.bg} p-3 sm:p-4 rounded-2xl border border-gray-800/50 flex items-center gap-3 sm:gap-4 hover:scale-[1.02] transition-transform cursor-pointer`}>
            <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 ${item.color}`} />
            <span className="font-bold text-gray-200 text-sm sm:text-base">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {questions.map((question) => (
            <button
              key={question.id}
              onClick={() => setSelectedQuestion(question)}
              className="group bg-slate-900/30 border border-slate-800/50 p-4 sm:p-6 rounded-2xl text-left hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-all"></div>
              
              <div className="relative space-y-4">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-blue-400 transition line-clamp-2">{question.title}</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{question.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold whitespace-nowrap flex-shrink-0 ${
                    question.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    question.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {question.difficulty}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">{question.description}</p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Code size={14} />
                    Résoudre
                  </div>
                  <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition">→</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardGoogle;
