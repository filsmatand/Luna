import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Play, Pause, RotateCcw, Eye, EyeOff, Send, 
  Clock, Code, CheckCircle2, AlertCircle, Copy, Check, MessageCircle, Share2, Users, Layout, ShieldCheck
} from 'lucide-react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const DashboardMetaResponsive = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    // --- ALGORITHMES (30) ---
    {
      id: 1,
      title: "Minimum Remove to Make Valid Parentheses",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Supprimez le nombre minimum de parenthèses (entrantes ou sortantes) pour rendre la chaîne de caractères valide.",
      example: "Entrée: s = \"lee(t(c)o)de)\"\nSortie: \"lee(t(c)o)de\"",
      constraints: ["1 <= s.length <= 10^5", "s[i] est '(', ')' ou une lettre minuscule."],
      solution: `def minRemoveToMakeValid(s: str) -> str:
    s = list(s)
    stack = []
    for i, char in enumerate(s):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                s[i] = ""
    while stack:
        s[stack.pop()] = ""
    return "".join(s)`,
      explanation: "Utilisez une pile pour suivre les indices des parenthèses ouvrantes. Si vous trouvez une fermante sans ouvrante correspondante, marquez-la pour suppression. À la fin, marquez toutes les ouvrantes restantes dans la pile."
    },
    {
      id: 2,
      title: "Binary Tree Vertical Order Traversal",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Retournez le parcours par ordre vertical des valeurs des nœuds d'un arbre binaire.",
      example: "Entrée: root = [3,9,20,null,null,15,7]\nSortie: [[9],[3,15],[20],[7]]",
      constraints: ["Nombre de nœuds [0, 100]", "-100 <= Node.val <= 100"],
      solution: `from collections import deque, defaultdict
def verticalOrder(root):
    if not root: return []
    columnTable = defaultdict(list)
    queue = deque([(root, 0)])
    while queue:
        node, col = queue.popleft()
        if node:
            columnTable[col].append(node.val)
            queue.append((node.left, col - 1))
            queue.append((node.right, col + 1))
    return [columnTable[x] for x in sorted(columnTable.keys())]`,
      explanation: "Utilisez un parcours en largeur (BFS) pour garantir l'ordre de haut en bas. Utilisez un dictionnaire pour grouper les nœuds par leur index de colonne (racine = 0, gauche = -1, droite = +1)."
    },
    {
      id: 3,
      title: "Valid Palindrome II",
      difficulty: "Facile",
      category: "Algorithmes",
      description: "Déterminez si une chaîne peut être un palindrome après avoir supprimé au plus un caractère.",
      example: "Entrée: s = \"abca\"\nSortie: true (supprimer 'b' ou 'c')",
      constraints: ["1 <= s.length <= 10^5"],
      solution: `def validPalindrome(s: str) -> bool:
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            skipL, skipR = s[l+1:r+1], s[l:r]
            return (skipL == skipL[::-1] or skipR == skipR[::-1])
        l, r = l + 1, r - 1
    return True`,
      explanation: "Utilisez deux pointeurs. Au premier désaccord, testez si la sous-chaîne restante est un palindrome en ignorant soit le caractère de gauche, soit celui de droite."
    },
    {
      id: 4,
      title: "Subarray Sum Equals K",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Trouvez le nombre total de sous-tableaux dont la somme est égale à 'k'.",
      example: "Entrée: nums = [1,1,1], k = 2\nSortie: 2",
      constraints: ["1 <= nums.length <= 2*10^4", "-1000 <= nums[i] <= 1000"],
      solution: `def subarraySum(nums, k):
    res = 0
    curSum = 0
    prefixSums = { 0 : 1 }
    for n in nums:
        curSum += n
        diff = curSum - k
        res += prefixSums.get(diff, 0)
        prefixSums[curSum] = 1 + prefixSums.get(curSum, 0)
    return res`,
      explanation: "Utilisez une somme préfixe et un dictionnaire pour stocker la fréquence des sommes rencontrées. Si (SommeCourante - k) a été vu auparavant, cela signifie qu'un sous-tableau se terminant ici a une somme de k."
    },
    {
      id: 5,
      title: "Lowest Common Ancestor of a Binary Tree III",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Trouvez l'ancêtre commun le plus proche de deux nœuds p et q dans un arbre où chaque nœud a un pointeur vers son parent.",
      example: "Entrée: p, q (nœuds avec pointeurs parents)\nSortie: LCA Node",
      constraints: ["p != q", "Tous les nœuds sont uniques"],
      solution: `def lowestCommonAncestor(p, q):
    p1, p2 = p, q
    while p1 != p2:
        p1 = p1.parent if p1.parent else q
        p2 = p2.parent if p2.parent else p
    return p1`,
      explanation: "C'est similaire à trouver l'intersection de deux listes chaînées. Parcourez vers le haut ; quand vous atteignez la racine, recommencez à partir de l'autre nœud de départ."
    },
    {
      id: 6,
      title: "Dot Product of Two Sparse Vectors",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Calculez le produit scalaire de deux vecteurs creux (beaucoup de zéros).",
      example: "v1 = [1,0,0,2,3], v2 = [0,3,0,4,0] -> 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8",
      constraints: ["Vecteurs très grands mais peu d'éléments non nuls"],
      solution: `class SparseVector:
    def __init__(self, nums):
        self.map = {i: n for i, n in enumerate(nums) if n != 0}
    def dotProduct(self, vec):
        res = 0
        for i, val in self.map.items():
            if i in vec.map:
                res += val * vec.map[i]
        return res`,
      explanation: "Stockez uniquement les indices et valeurs non nuls dans un dictionnaire. Lors du calcul, parcourez le plus petit dictionnaire pour gagner du temps."
    },
    {
      id: 7,
      title: "Kth Largest Element in an Array",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Trouvez le k-ième plus grand élément dans un tableau non trié.",
      example: "Entrée: [3,2,3,1,2,4,5,5,6], k = 4\nSortie: 4",
      constraints: ["1 <= k <= nums.length <= 10^5"],
      solution: `import heapq
def findKthLargest(nums, k):
    return heapq.nlargest(k, nums)[-1]`,
      explanation: "Utilisez un Min-Heap de taille k pour maintenir les k plus grands éléments, ou utilisez l'algorithme QuickSelect pour une complexité moyenne de O(n)."
    },
    {
      id: 8,
      title: "Range Sum of BST",
      difficulty: "Facile",
      category: "Algorithmes",
      description: "Retournez la somme des valeurs de tous les nœuds d'un BST situés dans l'intervalle [low, high].",
      example: "Entrée: root = [10,5,15,3,7,null,18], low = 7, high = 15\nSortie: 32",
      constraints: ["BST valide"],
      solution: `def rangeSumBST(root, low, high):
    if not root: return 0
    if root.val < low: return rangeSumBST(root.right, low, high)
    if root.val > high: return rangeSumBST(root.left, low, high)
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)`,
      explanation: "Utilisez les propriétés du BST : si la valeur est trop petite, ignorez le sous-arbre gauche ; si elle est trop grande, ignorez le droit."
    },
    {
      id: 9,
      title: "Merge Intervals",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Fusionnez tous les intervalles qui se chevauchent.",
      example: "Entrée: [[1,3],[2,6],[8,10],[15,18]]\nSortie: [[1,6],[8,10],[15,18]]",
      constraints: ["1 <= intervals.length <= 10^4"],
      solution: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
      explanation: "Triez les intervalles par début. Parcourez-les et fusionnez l'actuel avec le précédent s'ils se chevauchent."
    },
    {
      id: 10,
      title: "Custom Sort String",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Triez la chaîne 's' selon l'ordre défini par la chaîne 'order'.",
      example: "order = \"cba\", s = \"abcd\" -> \"cbad\"",
      constraints: ["order est unique"],
      solution: `def customSortString(order, s):
    count = collections.Counter(s)
    res = []
    for char in order:
        res.append(char * count[char])
        count[char] = 0
    for char, cnt in count.items():
        res.append(char * cnt)
    return "".join(res)`,
      explanation: "Comptez les fréquences dans 's'. Parcourez 'order' pour construire le résultat, puis ajoutez les caractères restants qui n'étaient pas dans 'order'."
    },
    {
      id: 11,
      title: "Binary Tree Right Side View",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Imaginez-vous debout à droite d'un arbre binaire, retournez les valeurs des nœuds que vous pouvez voir.",
      example: "Entrée: [1,2,3,null,5,null,4]\nSortie: [1,3,4]",
      constraints: ["Nombre de nœuds [0, 100]"],
      solution: `def rightSideView(root):
    res = []
    def dfs(node, depth):
        if not node: return
        if depth == len(res):
            res.append(node.val)
        dfs(node.right, depth + 1)
        dfs(node.left, depth + 1)
    dfs(root, 0)
    return res`,
      explanation: "Utilisez un DFS en explorant d'abord le côté droit. Ajoutez le premier nœud rencontré à chaque nouveau niveau de profondeur."
    },
    {
      id: 12,
      title: "Simplify Path",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Convertissez un chemin absolu de style Unix en un chemin canonique simplifié.",
      example: "Entrée: \"/home//foo/\"\nSortie: \"/home/foo\"",
      constraints: ["Chemin valide"],
      solution: `def simplifyPath(path):
    stack = []
    for part in path.split("/"):
        if part == "..":
            if stack: stack.pop()
        elif part and part != ".":
            stack.append(part)
    return "/" + "/".join(stack)`,
      explanation: "Divisez par '/' et utilisez une pile. '..' fait un pop, '.' et les chaînes vides sont ignorés, le reste est ajouté à la pile."
    },
    {
      id: 13,
      title: "Merge Sorted Array",
      difficulty: "Facile",
      category: "Algorithmes",
      description: "Fusionnez deux tableaux triés 'nums1' et 'nums2' dans 'nums1' (en place).",
      example: "nums1 = [1,2,3,0,0,0], m=3, nums2 = [2,5,6], n=3 -> [1,2,2,3,5,6]",
      constraints: ["nums1 a assez d'espace à la fin"],
      solution: `def merge(nums1, m, nums2, n):
    last = m + n - 1
    while m > 0 and n > 0:
        if nums1[m-1] > nums2[n-1]:
            nums1[last] = nums1[m-1]
            m -= 1
        else:
            nums1[last] = nums2[n-1]
            n -= 1
        last -= 1
    while n > 0:
        nums1[last] = nums2[n-1]
        n, last = n - 1, last - 1`,
      explanation: "Remplissez le tableau en partant de la fin pour éviter d'écraser les valeurs de nums1."
    },
    {
      id: 14,
      title: "Add Strings",
      difficulty: "Facile",
      category: "Algorithmes",
      description: "Additionnez deux nombres représentés sous forme de chaînes sans utiliser de fonctions intégrées de conversion d'entiers.",
      example: "Entrée: \"11\", \"123\" -> \"134\"",
      constraints: ["Chiffres uniquement"],
      solution: `def addStrings(num1, num2):
    res = []
    carry = 0
    p1, p2 = len(num1)-1, len(num2)-1
    while p1 >= 0 or p2 >= 0 or carry:
        n1 = ord(num1[p1]) - ord('0') if p1 >= 0 else 0
        n2 = ord(num2[p2]) - ord('0') if p2 >= 0 else 0
        val = (n1 + n2 + carry) % 10
        carry = (n1 + n2 + carry) // 10
        res.append(str(val))
        p1, p2 = p1 - 1, p2 - 1
    return "".join(res[::-1])`,
      explanation: "Simulez l'addition manuelle de droite à gauche avec une retenue."
    },
    {
      id: 15,
      title: "Pow(x, n)",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Calculez x puissance n.",
      example: "2.0, 10 -> 1024.0",
      constraints: ["n peut être négatif"],
      solution: `def myPow(x, n):
    def helper(x, n):
        if x == 0: return 0
        if n == 0: return 1
        res = helper(x, n // 2)
        res = res * res
        return x * res if n % 2 else res
    res = helper(x, abs(n))
    return res if n >= 0 else 1 / res`,
      explanation: "Utilisez l'exponentiation rapide (Divide and Conquer) pour une complexité O(log n)."
    },
    {
      id: 16,
      title: "Basic Calculator II",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Évaluez une chaîne d'expression contenant +, -, *, /.",
      example: "\"3+2*2\" -> 7",
      constraints: ["Entiers positifs uniquement"],
      solution: `def calculate(s):
    stack, num, sign = [], 0, "+"
    for i in range(len(s)):
        if s[i].isdigit(): num = num * 10 + int(s[i])
        if s[i] in "+-*/" or i == len(s) - 1:
            if sign == "+": stack.append(num)
            elif sign == "-": stack.append(-num)
            elif sign == "*": stack.append(stack.pop() * num)
            else: stack.append(int(stack.pop() / num))
            sign, num = s[i], 0
    return sum(stack)`,
      explanation: "Utilisez une pile pour gérer la priorité des opérations (* et / sont calculés immédiatement)."
    },
    {
      id: 17,
      title: "Diameter of Binary Tree",
      difficulty: "Facile",
      category: "Algorithmes",
      description: "Trouvez la longueur du plus long chemin entre deux nœuds quelconques d'un arbre.",
      example: "Peut passer ou non par la racine.",
      constraints: ["Nombre de nœuds [1, 10^4]"],
      solution: `def diameterOfBinaryTree(root):
    res = 0
    def dfs(node):
        nonlocal res
        if not node: return 0
        left, right = dfs(node.left), dfs(node.right)
        res = max(res, left + right)
        return 1 + max(left, right)
    dfs(root)
    return res`,
      explanation: "À chaque nœud, calculez la hauteur des sous-arbres gauche et droit. Le diamètre passant par ce nœud est gauche + droite."
    },
    {
      id: 18,
      title: "Group Anagrams",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Regroupez les chaînes qui sont des anagrammes les unes des autres.",
      example: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] -> [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
      constraints: ["O(N * K log K) ou O(N * K)"],
      solution: `def groupAnagrams(strs):
    res = collections.defaultdict(list)
    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1
        res[tuple(count)].append(s)
    return res.values()`,
      explanation: "Utilisez un tableau de comptage de 26 lettres comme clé de dictionnaire pour regrouper les anagrammes."
    },
    {
      id: 19,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Retournez le parcours par niveau des valeurs des nœuds d'un arbre binaire.",
      example: "BFS par niveau.",
      constraints: ["Nombre de nœuds [0, 2000]"],
      solution: `def levelOrder(root):
    if not root: return []
    res, queue = [], collections.deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        res.append(level)
    return res`,
      explanation: "Utilisez une file (Queue) pour un parcours en largeur (BFS), en traitant tous les nœuds d'un niveau avant de passer au suivant."
    },
    {
      id: 20,
      title: "Verifying an Alien Dictionary",
      difficulty: "Facile",
      category: "Algorithmes",
      description: "Vérifiez si une liste de mots est triée selon un ordre alphabétique étranger.",
      example: "words = [\"hello\",\"leetcode\"], order = \"hlabc...\"",
      constraints: ["Ordre donné est une permutation de 26 lettres"],
      solution: `def isAlienSorted(words, order):
    orderIdx = {c: i for i, c in enumerate(order)}
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i+1]
        for j in range(len(w1)):
            if j == len(w2): return False
            if w1[j] != w2[j]:
                if orderIdx[w1[j]] > orderIdx[w2[j]]: return False
                break
    return True`,
      explanation: "Comparez les mots adjacents caractère par caractère en utilisant le dictionnaire de l'ordre étranger."
    },
    {
      id: 21,
      title: "Random Pick with Weight",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Choisissez aléatoirement un index i avec une probabilité proportionnelle à w[i].",
      example: "w = [1, 3] -> Index 0 (25%), Index 1 (75%)",
      constraints: ["1 <= w.length <= 10^4"],
      solution: `class Solution:
    def __init__(self, w):
        self.prefix_sums = []
        cur = 0
        for weight in w:
            cur += weight
            self.prefix_sums.append(cur)
        self.total = cur
    def pickIndex(self):
        target = random.random() * self.total
        return bisect.bisect_left(self.prefix_sums, target)`,
      explanation: "Créez des sommes préfixes. Générez un nombre aléatoire entre 0 et le total, puis utilisez la recherche binaire pour trouver l'index correspondant."
    },
    {
      id: 22,
      title: "String to Integer (atoi)",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Implémentez la fonction qui convertit une chaîne en un entier 32 bits signé.",
      example: "\"   -42\" -> -42",
      constraints: ["Gérer les débordements (Overflow)"],
      solution: `def myAtoi(s):
    s = s.strip()
    if not s: return 0
    sign = -1 if s[0] == "-" else 1
    if s[0] in "+-": s = s[1:]
    res, i = 0, 0
    while i < len(s) and s[i].isdigit():
        res = res * 10 + int(s[i])
        i += 1
    res = max(-2**31, min(sign * res, 2**31 - 1))
    return res`,
      explanation: "Nettoyez les espaces, gérez le signe, convertissez les chiffres et saturez le résultat aux limites de 32 bits."
    },
    {
      id: 23,
      title: "Continuous Subarray Sum",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Trouvez s'il existe un sous-tableau de taille >= 2 dont la somme est un multiple de k.",
      example: "[23, 2, 4, 6, 7], k = 6 -> True (2+4=6)",
      constraints: ["0 <= nums[i]"],
      solution: `def checkSubarraySum(nums, k):
    remainder = {0: -1}
    total = 0
    for i, n in enumerate(nums):
        total += n
        r = total % k
        if r not in remainder:
            remainder[r] = i
        elif i - remainder[r] > 1:
            return True
    return False`,
      explanation: "Utilisez le modulo. Si le même reste apparaît deux fois, la somme entre ces deux indices est un multiple de k."
    },
    {
      id: 24,
      title: "Valid Number",
      difficulty: "Difficile",
      category: "Algorithmes",
      description: "Déterminez si une chaîne est un nombre décimal valide.",
      example: "\"0\", \"-1.1\", \"2e10\" -> True",
      constraints: ["Nombreux cas particuliers"],
      solution: `def isNumber(s):
    digit, dec, exp, sign = False, False, False, False
    for c in s:
        if c.isdigit(): digit = True
        elif c in "+-":
            if sign or digit or dec: return False
            sign = True
        elif c in "eE":
            if exp or not digit: return False
            exp, digit, dec, sign = True, False, False, False
        elif c == ".":
            if dec or exp: return False
            dec = True
        else: return False
    return digit`,
      explanation: "Utilisez des drapeaux pour suivre la présence de chiffres, points décimaux, exposants et signes."
    },
    {
      id: 25,
      title: "Shortest Path in Binary Matrix",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Trouvez le plus court chemin du coin haut-gauche au bas-droite dans une grille de 0 et 1.",
      example: "8 directions autorisées",
      constraints: ["0 est libre, 1 est bloqué"],
      solution: `def shortestPathBinaryMatrix(grid):
    n = len(grid)
    if grid[0][0] or grid[n-1][n-1]: return -1
    q = collections.deque([(0, 0, 1)])
    grid[0][0] = 1
    while q:
        r, c, d = q.popleft()
        if r == n-1 and c == n-1: return d
        for dr in [-1,0,1]:
            for dc in [-1,0,1]:
                nr, nc = r+dr, c+dc
                if 0<=nr<n and 0<=nc<n and not grid[nr][nc]:
                    grid[nr][nc] = 1
                    q.append((nr, nc, d+1))
    return -1`,
      explanation: "Utilisez un parcours en largeur (BFS) pour trouver le chemin le plus court dans un graphe non pondéré."
    },
    {
      id: 26,
      title: "Word Break",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Déterminez si une chaîne peut être segmentée en mots d'un dictionnaire.",
      example: "s = \"leetcode\", dict = [\"leet\", \"code\"] -> true",
      constraints: ["Mots réutilisables"],
      solution: `def wordBreak(s, wordDict):
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for w in wordDict:
            if i >= len(w) and dp[i-len(w)] and s[i-len(w):i] == w:
                dp[i] = True
                break
    return dp[len(s)]`,
      explanation: "Utilisez la programmation dynamique : dp[i] est vrai si la sous-chaîne s[0:i] peut être segmentée."
    },
    {
      id: 27,
      title: "Maximum Swap",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Échangez deux chiffres au plus pour obtenir le nombre maximum possible.",
      example: "2736 -> 7236",
      constraints: ["Entier positif"],
      solution: `def maximumSwap(num):
    s = list(str(num))
    last = {int(x): i for i, x in enumerate(s)}
    for i, x in enumerate(s):
        for d in range(9, int(x), -1):
            if last.get(d, -1) > i:
                s[i], s[last[d]] = s[last[d]], s[i]
                return int("".join(s))
    return num`,
      explanation: "Stockez la dernière position de chaque chiffre. Pour chaque chiffre du nombre, vérifiez s'il existe un chiffre plus grand plus loin à droite."
    },
    {
      id: 28,
      title: "Copy List with Random Pointer",
      difficulty: "Moyen",
      category: "Algorithmes",
      description: "Copiez une liste chaînée où chaque nœud a un pointeur 'random' vers n'importe quel autre nœud.",
      example: "Deep copy nécessaire",
      constraints: ["O(n) temps et espace"],
      solution: `def copyRandomList(head):
    oldToCopy = {None: None}
    curr = head
    while curr:
        oldToCopy[curr] = Node(curr.val)
        curr = curr.next
    curr = head
    while curr:
        copy = oldToCopy[curr]
        copy.next = oldToCopy[curr.next]
        copy.random = oldToCopy[curr.random]
        curr = curr.next
    return oldToCopy[head]`,
      explanation: "Utilisez un dictionnaire pour mapper les anciens nœuds aux nouveaux nœuds copiés."
    },
    {
      id: 29,
      title: "Merge k Sorted Lists",
      difficulty: "Difficile",
      category: "Algorithmes",
      description: "Fusionnez k listes chaînées triées.",
      example: "lists = [[1,4,5],[1,3,4],[2,6]]",
      constraints: ["O(N log k)"],
      solution: `import heapq
def mergeKLists(lists):
    h = []
    for i, l in enumerate(lists):
        if l: heapq.heappush(h, (l.val, i, l))
    dummy = ListNode()
    curr = dummy
    while h:
        val, i, node = heapq.heappop(h)
        curr.next = node
        curr = curr.next
        if node.next: heapq.heappush(h, (node.next.val, i, node.next))
    return dummy.next`,
      explanation: "Utilisez un Min-Heap pour toujours extraire la plus petite tête de liste."
    },
    {
      id: 30,
      title: "Alien Dictionary",
      difficulty: "Difficile",
      category: "Algorithmes",
      description: "Trouvez l'ordre des lettres dans une langue étrangère à partir d'un dictionnaire trié.",
      example: "[\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"] -> \"wertf\"",
      constraints: ["Graphe orienté acyclique"],
      solution: `def alienOrder(words):
    adj = {c: set() for w in words for c in w}
    for i in range(len(words)-1):
        w1, w2 = words[i], words[i+1]
        minLen = min(len(w1), len(w2))
        if len(w1) > len(w2) and w1[:minLen] == w2[:minLen]: return ""
        for j in range(minLen):
            if w1[j] != w2[j]:
                adj[w1[j]].add(w2[j])
                break
    visit, res = {}, []
    def dfs(c):
        if c in visit: return visit[c]
        visit[c] = True
        for neighbor in adj[c]:
            if dfs(neighbor): return True
        visit[c] = False
        res.append(c)
    for c in adj:
        if dfs(c): return ""
    return "".join(res[::-1])`,
      explanation: "Construisez un graphe de dépendances entre les lettres et effectuez un tri topologique."
    },

    // --- BEHAVIORAL (10) ---
    {
      id: 31,
      title: "Why Meta?",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Pourquoi voulez-vous rejoindre Meta ? Qu'est-ce qui vous attire dans notre mission ou nos produits ?",
      example: "Focus sur la connexion mondiale, l'échelle technique, ou l'innovation (Reality Labs).",
      constraints: ["Mentionner un produit spécifique", "Alignement avec la mission"],
      solution: `Réponse suggérée :
"Je suis passionné par la mission de Meta de donner aux gens le pouvoir de construire des communautés. Travailler sur des produits comme [Instagram/WhatsApp] qui connectent des milliards de personnes est un défi technique unique. J'admire la culture 'Move Fast' et l'approche pragmatique de l'ingénierie pour résoudre des problèmes à l'échelle mondiale."`,
      explanation: "Meta cherche des gens qui croient sincèrement en leur mission sociale et qui sont excités par l'impact à grande échelle."
    },
    {
      id: 32,
      title: "Project You're Proud Of",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Décrivez un projet technique complexe dont vous êtes particulièrement fier.",
      example: "Projet avec collaboration cross-fonctionnelle.",
      constraints: ["Détails techniques", "Impact mesurable", "Collaboration"],
      solution: `Réponse suggérée (STAR) :
S : "Nous devions migrer une base de données critique sans interruption."
T : "Je devais coordonner les équipes infra et backend."
A : "J'ai mis en place un système de double écriture et de validation asynchrone."
R : "Migration réussie avec 0ms de downtime et amélioration de 20% de la latence."`,
      explanation: "Focus sur la collaboration cross-fonctionnelle (XFN), car c'est un pilier de la culture Meta."
    },
    {
      id: 33,
      title: "Conflict with a Teammate",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Parlez-moi d'une fois où vous avez eu un désaccord avec un collègue. Comment l'avez-vous résolu ?",
      example: "Désaccord sur une architecture technique.",
      constraints: ["Empathie", "Utilisation de données pour décider", "Commitment"],
      solution: `Réponse suggérée :
"Un collègue préférait une approche plus complexe pour une API. J'ai proposé de prototyper les deux solutions et de mesurer les performances. Les données ont montré que ma solution était plus simple et plus rapide. Nous avons discuté des résultats et il a accepté l'approche. Nous sommes restés en bons termes."`,
      explanation: "Montrez que vous pouvez résoudre les conflits sans autorité hiérarchique, en utilisant des données et le respect."
    },
    {
      id: 34,
      title: "Negative Feedback",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Décrivez une fois où vous avez reçu un feedback négatif. Comment avez-vous réagi ?",
      example: "Feedback sur la communication ou la rapidité.",
      constraints: ["Humilité", "Action corrective", "Résultat"],
      solution: `Réponse suggérée :
"Mon manager m'a dit que mes revues de code étaient trop sèches. J'ai pris cela à cœur, j'ai commencé à inclure plus de contexte et d'encouragements. Lors du cycle suivant, mes collègues ont noté une nette amélioration de la collaboration."`,
      explanation: "Meta valorise le 'Growth Mindset' : la capacité à apprendre et à s'adapter."
    },
    {
      id: 35,
      title: "Tight Deadline",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Parlez d'un projet avec une deadline très serrée. Comment avez-vous géré la pression ?",
      example: "Lancement d'une fonctionnalité pour un événement.",
      constraints: ["Priorisation", "Communication", "Compromis"],
      solution: `Réponse suggérée :
"Pour un lancement majeur, nous étions en retard. J'ai réuni l'équipe pour identifier les fonctionnalités 'Must-have' vs 'Nice-to-have'. Nous avons réduit le scope pour garantir la stabilité du cœur du produit. Nous avons livré à temps avec une qualité élevée."`,
      explanation: "Démontrez votre capacité à prioriser et à rester concentré sur l'impact."
    },
    {
      id: 36,
      title: "Difficult Stakeholder",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Comment gérez-vous un partenaire (PM, Designer) qui a des exigences irréalistes ?",
      example: "Négociation de scope.",
      constraints: ["Influence sans autorité", "Données techniques"],
      solution: `Réponse suggérée :
"Un PM voulait ajouter 3 fonctionnalités en une semaine. J'ai montré le graphique de vélocité de l'équipe et expliqué les risques techniques. J'ai proposé de livrer la plus importante immédiatement et les autres au sprint suivant. Il a compris et nous avons ajusté le plan ensemble."`,
      explanation: "L'influence cross-fonctionnelle est cruciale chez Meta."
    },
    {
      id: 37,
      title: "Ownership of Failure",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Racontez une fois où vous avez échoué ou fait une erreur majeure.",
      example: "Bug en production, retard de livraison.",
      constraints: ["Responsabilité totale", "Analyse post-mortem", "Prévention"],
      solution: `Réponse suggérée :
"J'ai poussé un changement qui a causé une panne de 10 minutes. J'ai immédiatement alerté l'équipe, aidé au rollback, et écrit un post-mortem détaillé. J'ai ensuite implémenté des tests automatisés pour que cette erreur ne se reproduise plus jamais."`,
      explanation: "L'honnêteté intellectuelle et la responsabilité sont très appréciées."
    },
    {
      id: 38,
      title: "Ambiguous Requirements",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Comment travaillez-vous quand les spécifications sont floues ?",
      example: "Nouveau projet exploratoire.",
      constraints: ["Proactivité", "Clarification", "Itération"],
      solution: `Réponse suggérée :
"Sur un projet de recherche, personne ne savait comment implémenter une feature. J'ai créé un document de conception, listé les hypothèses et les questions ouvertes. J'ai organisé des réunions avec les experts pour clarifier les points bloquants et j'ai commencé par un petit prototype."`,
      explanation: "Montrez que vous pouvez créer de l'ordre à partir du chaos."
    },
    {
      id: 39,
      title: "Helping a Teammate",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Décrivez une fois où vous avez aidé un collègue en difficulté.",
      example: "Mentoring, aide sur un bug complexe.",
      constraints: ["Collaboration", "Patience", "Impact d'équipe"],
      solution: `Réponse suggérée :
"Un nouveau développeur avait du mal avec notre système de déploiement. J'ai passé 2 heures avec lui pour lui expliquer les concepts et j'ai créé un petit guide interne. Il est devenu autonome beaucoup plus rapidement."`,
      explanation: "Meta veut des 'Team Players', pas seulement des génies isolés."
    },
    {
      id: 40,
      title: "Adapting to Change",
      difficulty: "Moyen",
      category: "Behavioral",
      description: "Parlez d'une fois où les priorités ont changé brusquement au milieu d'un projet.",
      example: "Changement de direction de l'entreprise.",
      constraints: ["Flexibilité", "Communication positive", "Pivot"],
      solution: `Réponse suggérée :
"Notre projet a été annulé au profit d'une urgence de sécurité. J'ai aidé l'équipe à documenter l'état actuel pour plus tard et je me suis plongé immédiatement dans le nouveau sujet avec enthousiasme. Nous avons résolu la faille en un temps record."`,
      explanation: "La résilience face au changement est indispensable dans la tech."
    },

    // --- SYSTEM DESIGN (5) ---
    {
      id: 41,
      title: "Design Instagram Stories",
      difficulty: "Moyen",
      category: "System Design",
      description: "Concevez un système pour publier et visualiser des Stories qui disparaissent après 24h.",
      example: "Focus sur la latence, l'ordre chronologique, et l'échelle.",
      constraints: ["Disponibilité", "Scalabilité (milliards d'utilisateurs)"],
      solution: `Architecture :
1. Upload : Service de média vers S3 + CDN.
2. Metadata : DynamoDB pour stocker les IDs des stories avec TTL de 24h.
3. Feed : Redis pour mettre en cache les stories actives des amis.
4. Push : WebSocket pour notifier les nouveaux contenus.`,
      explanation: "Question classique chez Meta. Focus sur le stockage temporaire et la distribution rapide aux followers."
    },
    {
      id: 42,
      title: "Design Facebook News Feed",
      difficulty: "Difficile",
      category: "System Design",
      description: "Concevez le flux d'actualités de Facebook.",
      example: "Ranking, pagination, agrégation.",
      constraints: ["Lecture intensive", "Millions de posts/sec"],
      solution: `Architecture :
1. Feed Generation : Fan-out sur écriture (pour les utilisateurs actifs) ou sur lecture (pour les inactifs).
2. Ranking : Service de ML pour ordonner les posts selon l'intérêt.
3. Cache : Cluster Redis massif pour stocker les feeds pré-générés.
4. Database : Cassandra ou Sharded MySQL pour les posts permanents.`,
      explanation: "Focus sur le compromis entre Fan-out on Write vs Fan-out on Read."
    },
    {
      id: 43,
      title: "Design WhatsApp",
      difficulty: "Moyen",
      category: "System Design",
      description: "Concevez une application de messagerie instantanée.",
      example: "Statut en ligne, double check, chiffrement.",
      constraints: ["Temps réel", "Persistance des messages"],
      solution: `Architecture :
1. Connection : WebSocket pour le temps réel.
2. Presence : Service de statut en ligne via Redis.
3. Storage : HBase ou Cassandra pour l'historique des messages.
4. Media : S3 avec des miniatures générées asynchronement.`,
      explanation: "Focus sur la gestion des connexions persistantes et la livraison fiable."
    },
    {
      id: 44,
      title: "Design Typeahead (Search Autocomplete)",
      difficulty: "Moyen",
      category: "System Design",
      description: "Concevez un système de suggestions de recherche en temps réel.",
      example: "Tapez 'fac' -> suggère 'facebook'.",
      constraints: ["Latence < 100ms", "Haute fréquence"],
      solution: `Architecture :
1. Data Structure : Trie (Prefix Tree) stocké en mémoire.
2. Aggregator : MapReduce pour compter les fréquences de recherche.
3. Cache : Browser cache + CDN pour les préfixes populaires.
4. Sampling : Ne pas traiter 100% des logs pour le ranking.`,
      explanation: "Focus sur la structure de données Trie et la mise à jour asynchrone des poids."
    },
    {
      id: 45,
      title: "Design Facebook Live Comments",
      difficulty: "Moyen",
      category: "System Design",
      description: "Concevez un système pour afficher des commentaires en direct sur une vidéo virale.",
      example: "Des millions de spectateurs simultanés.",
      constraints: ["Ordre temporel", "Scalabilité"],
      solution: `Architecture :
1. Ingestion : Service de commentaires avec SQS pour lisser les pics.
2. Distribution : Pub/Sub (Redis ou Kafka) pour envoyer aux spectateurs.
3. Throttling : Limiter le nombre de commentaires affichés par seconde pour ne pas saturer le client.
4. Storage : DynamoDB pour l'archivage permanent.`,
      explanation: "Focus sur la gestion de la charge massive et la distribution en temps réel."
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

  return (
    <div className="min-h-screen bg-[#060606] text-gray-100 font-sans px-4 sm:px-6 md:px-10 lg:px-20">
      
      <main className="max-w-7xl mx-auto py-6 sm:py-10">
        {!selectedQuestion ? (
          <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  Préparez votre entretien Meta
                </h1>
                <p className="text-gray-400 max-w-2xl text-base sm:text-lg">
                  Maîtrisez les 45+ questions les plus fréquentes chez Meta : Algorithmes, Comportemental et System Design.
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-1 sm:flex-none px-4 sm:px-6 py-3 bg-[#18191a] border border-gray-800 rounded-2xl text-center">
                  <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider">Total</div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-500">45</div>
                </div>
                <div className="flex-1 sm:flex-none px-4 sm:px-6 py-3 bg-[#18191a] border border-gray-800 rounded-2xl text-center">
                  <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider">Complétées</div>
                  <div className="text-xl sm:text-2xl font-bold text-green-500">0</div>
                </div>
              </div>
            </header>

            {/* Quick Access Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Arrays & Strings', icon: Layout, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { label: 'Trees & Graphs', icon: Share2, color: 'text-purple-400', bg: 'bg-purple-400/10' },
                { label: 'System Design', icon: ShieldCheck, color: 'text-green-400', bg: 'bg-green-400/10' },
                { label: 'Behavioral', icon: Users, color: 'text-orange-400', bg: 'bg-orange-400/10' }
              ].map((item, i) => (
                <div key={i} className={`${item.bg} p-5 rounded-2xl border border-gray-800/50 flex items-center gap-4 hover:scale-[1.02] transition-transform cursor-pointer group`}>
                  <item.icon className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="font-bold text-gray-200">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Questions Table */}
            <div className="bg-[#18191a] rounded-2xl sm:rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="p-5 sm:p-6 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1c1e21] gap-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                  <h2 className="text-lg sm:text-xl font-bold">Liste des Questions Meta</h2>
                </div>
                <div className="w-full sm:w-auto">
                  <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    className="w-full sm:w-64 bg-[#242526] border-gray-700 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead className="text-[10px] sm:text-xs uppercase text-gray-500 bg-[#1c1e21]">
                    <tr>
                      <th className="px-6 py-4 font-bold">Titre</th>
                      <th className="px-6 py-4 font-bold">Catégorie</th>
                      <th className="px-6 py-4 font-bold">Difficulté</th>
                      <th className="px-6 py-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {questions.map((q) => (
                      <tr key={q.id} className="hover:bg-gray-800/20 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-200 group-hover:text-blue-400 transition-colors text-sm sm:text-base">{q.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-gray-800/50 rounded-full text-[9px] sm:text-[10px] font-bold text-gray-400 border border-gray-700 uppercase tracking-wider whitespace-nowrap">
                            {q.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] sm:text-xs font-extrabold ${
                            q.difficulty === 'Facile' ? 'text-green-400' : 
                            q.difficulty === 'Moyen' ? 'text-blue-400' : 'text-red-400'
                          }`}>
                            {q.difficulty}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => {
                              setSelectedQuestion(q);
                              setUserCode('');
                              setTimer(0);
                              setIsRunning(true);
                            }}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] sm:text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                          >
                            Démarrer
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[calc(100vh-160px)]">
            {/* Description Panel */}
            <div className="bg-[#18191a] rounded-3xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl h-[500px] lg:h-auto">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#1c1e21] shrink-0">
                <button 
                  onClick={() => setSelectedQuestion(null)}
                  className="p-2 hover:bg-gray-800 rounded-xl transition-colors text-gray-400 flex items-center gap-2 text-xs sm:text-sm font-bold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Retour</span>
                </button>
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="px-3 sm:px-4 py-1.5 bg-black rounded-full border border-gray-800 text-blue-500 font-mono text-base sm:text-lg font-bold">
                    {formatTime(timer)}
                  </div>
                  <div className="flex gap-0.5 sm:gap-1">
                    <button onClick={() => setIsRunning(!isRunning)} className="p-2 hover:bg-gray-800 rounded-xl text-gray-400">
                      {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button onClick={() => setTimer(0)} className="p-2 hover:bg-gray-800 rounded-xl text-gray-400">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 custom-scrollbar">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-black rounded-full border border-blue-500/20 uppercase">
                      {selectedQuestion.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${
                      selectedQuestion.difficulty === 'Facile' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                      selectedQuestion.difficulty === 'Moyen' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {selectedQuestion.difficulty}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">{selectedQuestion.title}</h2>
                </div>

                <div className="space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{selectedQuestion.description}</p>
                  </div>
                  
                  <div className="bg-black/50 rounded-2xl p-5 sm:p-6 border border-gray-800 space-y-3">
                    <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-widest">Exemple</h4>
                    <pre className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap">{selectedQuestion.example}</pre>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Contraintes</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedQuestion.constraints.map((c, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-gray-400 bg-gray-800/30 p-3 rounded-xl border border-gray-800/50">
                          <AlertCircle className="w-4 h-4 text-blue-500 shrink-0" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {showSolution && (
                  <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                      <h4 className="text-blue-400 font-black mb-3 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                        Approche Technique
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{selectedQuestion.explanation}</p>
                    </div>
                    <div className="relative group">
                      <button 
                        onClick={handleCopyCode}
                        className="absolute right-4 top-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all border border-gray-700"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                      </button>
                      <pre className="bg-black p-6 sm:p-8 rounded-3xl border border-gray-800 font-mono text-xs sm:text-sm text-blue-100/80 overflow-x-auto shadow-2xl">
                        <code>{selectedQuestion.solution}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Editor Panel */}
            <div className="bg-[#18191a] rounded-3xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl h-[500px] lg:h-auto">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#1c1e21] shrink-0">
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  <Code className="w-4 h-4" />
                  Code Editor
                </div>
                <button 
                  onClick={() => setShowSolution(!showSolution)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold rounded-xl transition-all border ${
                    showSolution ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  Solution
                </button>
              </div>
              
              <div className="flex-1 relative bg-black overflow-hidden">
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  placeholder="// Écrivez votre code ici..."
                  className="w-full h-full bg-transparent p-6 sm:p-8 font-mono text-xs sm:text-sm outline-none resize-none text-blue-100/90 placeholder-gray-800"
                />
              </div>

              <div className="p-5 sm:p-6 border-t border-gray-800 bg-[#1c1e21] flex items-center justify-between shrink-0">
                <div className="text-[9px] sm:text-[10px] text-gray-600 font-bold uppercase tracking-tighter">
                  Prêt pour la revue de code Meta
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={submitted}
                  className={`flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm transition-all transform active:scale-95 ${
                    submitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30'
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      SOUMIS
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SOUMETTRE
                    </>
                  )}
                </button>
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

export default DashboardMetaResponsive;
