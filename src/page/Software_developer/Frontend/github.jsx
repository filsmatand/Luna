
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  PlayCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Trophy,
  ArrowLeft,
  ChevronDown,
  BookOpen,
  GitBranch,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GithubCourses = () => {
  const navigate = useNavigate();
  const [completedTopics, setCompletedTopics] = useState(new Set());
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (id, e) => {
    e.stopPropagation();
    const newSet = new Set(completedTopics);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompletedTopics(newSet);
  };

  const toggleExpand = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  const courseSections = [
    {
      title: "Introduction à Git",
      topics: [
        {
          id: "git-intro",
          title: "Qu'est-ce que Git ?",
          duration: "20 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p><strong>Git</strong> est un système de contrôle de version distribué (DVCS) gratuit et open source, conçu pour gérer de petits à de très grands projets avec rapidité et efficacité.</p>
              <h4 class="text-blue-400 font-bold mt-4">Pourquoi utiliser Git ?</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Suivi des modifications :</strong> Enregistre chaque modification apportée au code.</li>
                <li><strong>Collaboration :</strong> Permet à plusieurs développeurs de travailler sur le même projet sans se marcher sur les pieds.</li>
                <li><strong>Historique :</strong> Accès facile à toutes les versions précédentes du code.</li>
                <li><strong>Branches :</strong> Crée des environnements isolés pour développer de nouvelles fonctionnalités.</li>
              </ul>
              <h4 class="text-blue-400 font-bold mt-4">Git vs. GitHub</h4>
              <p>Git est le logiciel de contrôle de version que vous installez localement. GitHub est une plateforme en ligne qui héberge des dépôts Git et fournit des outils de collaboration supplémentaires.</p>
            </div>
          `
        },
        {
          id: "git-install-config",
          title: "Installation et Configuration",
          duration: "15 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Pour commencer avec Git, vous devez l'installer sur votre système et le configurer avec votre nom et votre adresse e-mail.</p>
              <h4 class="text-blue-400 font-bold mt-4">Installation</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Windows :</strong> Téléchargez l'installateur depuis <a href="https://git-scm.com/download/win" target="_blank" class="text-blue-400 hover:underline">git-scm.com</a>.</li>
                <li><strong>macOS :</strong> Installez via Homebrew (<code>brew install git</code>) ou Xcode Command Line Tools.</li>
                <li><strong>Linux :</strong> Utilisez votre gestionnaire de paquets (ex: <code>sudo apt install git</code> pour Debian/Ubuntu).</li>
              </ul>
              <h4 class="text-blue-400 font-bold mt-4">Configuration Initiale</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>git config --global user.name "Votre Nom"\ngit config --global user.email "votre.email@example.com"</code></pre>
              <p>Ces informations seront associées à vos commits.</p>
            </div>
          `
        },
        {
          id: "git-basic-commands",
          title: "Les Commandes de Base (init, add, commit)",
          duration: "30 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Voici les commandes fondamentales pour initialiser un dépôt et enregistrer vos modifications :</p>
              <ul class="list-disc ml-5 space-y-2">
                <li><strong><code>git init</code> :</strong> Initialise un nouveau dépôt Git vide dans le répertoire courant.</li>
                <li><strong><code>git add &lt;fichier&gt;</code> :</strong> Ajoute un fichier au "staging area" (zone de préparation) pour le prochain commit. Utilisez <code>git add .</code> pour ajouter tous les fichiers modifiés.</li>
                <li><strong><code>git commit -m "Message de commit"</code> :</strong> Enregistre les modifications du staging area dans l'historique du dépôt avec un message descriptif.</li>
              </ul>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>mkdir mon-projet\ncd mon-projet\ngit init\necho "Hello Git!" > README.md\ngit add README.md\ngit commit -m "Initial commit: Add README"</code></pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Travailler avec les Dépôts",
      topics: [
        {
          id: "git-branches-merge",
          title: "Branches et Fusions",
          duration: "45 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Les branches permettent de développer des fonctionnalités ou de corriger des bugs de manière isolée sans affecter la branche principale (souvent <code>main</code> ou <code>master</code>).</p>
              <h4 class="text-blue-400 font-bold mt-4">Commandes Clés</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong><code>git branch &lt;nom-branche&gt;</code> :</strong> Crée une nouvelle branche.</li>
                <li><strong><code>git checkout &lt;nom-branche&gt;</code> :</strong> Bascule vers une branche existante.</li>
                <li><strong><code>git checkout -b &lt;nom-branche&gt;</code> :</strong> Crée et bascule vers une nouvelle branche.</li>
                <li><strong><code>git merge &lt;nom-branche&gt;</code> :</strong> Fusionne la branche spécifiée dans la branche actuelle.</li>
                <li><strong><code>git branch -d &lt;nom-branche&gt;</code> :</strong> Supprime une branche (après fusion).</li>
              </ul>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>git branch feature/nouvelle-fonction\ngit checkout feature/nouvelle-fonction\n// ... travail sur la fonctionnalité ...\ngit add .\ngit commit -m "Ajout de la nouvelle fonctionnalité"\ngit checkout main\ngit merge feature/nouvelle-fonction\ngit branch -d feature/nouvelle-fonction</code></pre>
            </div>
          `
        },
        {
          id: "git-history-undo",
          title: "Historique et Annulation (log, reset, revert)",
          duration: "40 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Git offre de puissants outils pour explorer l'historique et annuler des modifications.</p>
              <h4 class="text-blue-400 font-bold mt-4">Explorer l'Historique</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong><code>git log</code> :</strong> Affiche l'historique des commits.</li>
                <li><strong><code>git log --oneline</code> :</strong> Version condensée de l'historique.</li>
                <li><strong><code>git diff &lt;commit1&gt; &lt;commit2&gt;</code> :</strong> Compare deux commits.</li>
              </ul>
              <h4 class="text-blue-400 font-bold mt-4">Annuler des Modifications</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong><code>git reset --hard &lt;commit-hash&gt;</code> :</strong> Déplace la branche vers un commit précédent, supprimant les commits ultérieurs (à utiliser avec prudence !).</li>
                <li><strong><code>git revert &lt;commit-hash&gt;</code> :</strong> Crée un nouveau commit qui annule les modifications d'un commit précédent (plus sûr pour les dépôts partagés).</li>
                <li><strong><code>git restore &lt;fichier&gt;</code> :</strong> Annule les modifications non validées d'un fichier.</li>
              </ul>
            </div>
          `
        },
        {
          id: "git-ignore",
          title: "Ignorer des Fichiers (.gitignore)",
          duration: "10 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Le fichier <code>.gitignore</code> permet à Git de savoir quels fichiers ou répertoires il doit ignorer et ne pas suivre.</p>
              <h4 class="text-blue-400 font-bold mt-4">Exemples de fichiers à ignorer</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Fichiers de configuration locaux (ex: <code>.env</code>)</li>
                <li>Dépendances de modules (ex: <code>node_modules/</code>, <code>vendor/</code>)</li>
                <li>Fichiers générés automatiquement (ex: fichiers de build, logs)</li>
                <li>Fichiers temporaires du système d'exploitation (ex: <code>.DS_Store</code>)</li>
              </ul>
              <h4 class="text-blue-400 font-bold mt-4">Contenu d'un .gitignore</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code># Ignorer le dossier node_modules\nnode_modules/\n\n# Ignorer les fichiers de log\n*.log\n\n# Ignorer les fichiers de configuration sensibles\n.env\n\n# Ignorer les fichiers macOS\n.DS_Store</code></pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Introduction à GitHub",
      topics: [
        {
          id: "github-intro",
          title: "Qu'est-ce que GitHub ?",
          duration: "20 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p><strong>GitHub</strong> est une plateforme web d'hébergement de dépôts Git. C'est le plus grand service d'hébergement de code source au monde, utilisé pour le développement de logiciels et le contrôle de version.</p>
              <h4 class="text-blue-400 font-bold mt-4">Fonctionnalités Clés</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Hébergement de dépôts :</strong> Stocke vos projets Git en ligne.</li>
                <li><strong>Collaboration :</strong> Facilite le travail d'équipe avec des outils comme les Pull Requests.</li>
                <li><strong>Gestion de projet :</strong> Issues, Projects, Wikis pour organiser le travail.</li>
                <li><strong>Intégration continue :</strong> GitHub Actions pour l'automatisation des workflows.</li>
                <li><strong>Communauté :</strong> Des millions de projets open source et de développeurs.</li>
              </ul>
              <p>GitHub est devenu un standard de l'industrie pour le partage et la collaboration sur le code.</p>
            </div>
          `
        },
        {
          id: "github-create-repo",
          title: "Créer un Dépôt GitHub",
          duration: "15 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Créer un dépôt sur GitHub est la première étape pour partager votre code ou démarrer un nouveau projet en ligne.</p>
              <h4 class="text-blue-400 font-bold mt-4">Étapes pour créer un dépôt</h4>
              <ol class="list-decimal ml-5 space-y-1">
                <li>Connectez-vous à votre compte GitHub.</li>
                <li>Cliquez sur le bouton "New" (Nouveau) dans la barre latérale gauche ou sur l'icône '+' en haut à droite.</li>
                <li>Donnez un nom à votre dépôt (ex: <code>mon-super-projet</code>).</li>
                <li>Ajoutez une description (optionnel).</li>
                <li>Choisissez Public ou Private.</li>
                <li>Vous pouvez initialiser le dépôt avec un README, un .gitignore ou une licence (souvent fait localement).</li>
                <li>Cliquez sur "Create repository".</li>
              </ol>
              <p>Une fois créé, GitHub vous donnera les instructions pour lier votre dépôt local à ce nouveau dépôt distant.</p>
            </div>
          `
        },
        {
          id: "github-clone-push",
          title: "Cloner et Pousser (clone, push)",
          duration: "25 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Pour travailler sur un projet GitHub, vous devez le cloner localement. Une fois vos modifications faites, vous les "poussez" vers GitHub.</p>
              <h4 class="text-blue-400 font-bold mt-4">Cloner un dépôt</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>git clone https://github.com/utilisateur/mon-projet.git</code></pre>
              <p>Cela télécharge une copie complète du dépôt sur votre machine locale.</p>
              <h4 class="text-blue-400 font-bold mt-4">Pousser les modifications</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>git add .\ngit commit -m "Mes dernières modifications"\ngit push origin main</code></pre>
              <p><code>git push origin main</code> envoie vos commits locaux de la branche <code>main</code> vers le dépôt distant nommé <code>origin</code> (par défaut GitHub).</p>
            </div>
          `
        }
      ]
    },
    {
      title: "Collaboration sur GitHub",
      topics: [
        {
          id: "github-pull-requests",
          title: "Pull Requests (PR)",
          duration: "35 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>Une <strong>Pull Request (PR)</strong> est le cœur de la collaboration sur GitHub. C'est une proposition de fusion de vos modifications d'une branche vers une autre (généralement <code>main</code>).</p>
              <h4 class="text-blue-400 font-bold mt-4">Cycle de vie d'une PR</h4>
              <ol class="list-decimal ml-5 space-y-1">
                <li>Vous créez une nouvelle branche pour votre fonctionnalité/correction.</li>
                <li>Vous effectuez vos modifications et les commitez.</li>
                <li>Vous poussez votre branche vers GitHub.</li>
                <li>Vous ouvrez une Pull Request depuis votre branche vers la branche cible.</li>
                <li>D'autres développeurs révisent votre code, commentent et suggèrent des changements.</li>
                <li>Après approbation, la PR est fusionnée dans la branche cible.</li>
              </ol>
              <p>Les PRs sont essentielles pour maintenir la qualité du code et coordonner le travail d'équipe.</p>
            </div>
          `
        },
        {
          id: "github-fork-contribute",
          title: "Forking et Contribution",
          duration: "30 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>Le <strong>forking</strong> est une manière de contribuer à des projets open source sur GitHub. Cela crée une copie personnelle d'un dépôt sur votre compte.</p>
              <h4 class="text-blue-400 font-bold mt-4">Processus de Forking</h4>
              <ol class="list-decimal ml-5 space-y-1">
                <li>Sur la page du dépôt original, cliquez sur le bouton "Fork".</li>
                <li>Cela crée une copie du dépôt sous votre compte GitHub.</li>
                <li>Clonez votre fork localement : <code>git clone https://github.com/votre-utilisateur/projet-forke.git</code>.</li>
                <li>Ajoutez l'original comme "upstream" distant : <code>git remote add upstream https://github.com/original/projet.git</code>.</li>
                <li>Faites vos modifications, commitez et poussez vers votre fork.</li>
                <li>Ouvrez une Pull Request depuis votre fork vers le dépôt original.</li>
              </ol>
              <p>Cela permet de proposer des modifications sans avoir les droits d'écriture directs sur le dépôt original.</p>
            </div>
          `
        },
        {
          id: "github-conflict-resolution",
          title: "Gestion des Conflits",
          duration: "25 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Les conflits de fusion (merge conflicts) se produisent lorsque deux branches ont modifié la même partie d'un fichier de manière incompatible.</p>
              <h4 class="text-blue-400 font-bold mt-4">Résoudre un Conflit</h4>
              <ol class="list-decimal ml-5 space-y-1">
                <li>Git vous indiquera les fichiers en conflit.</li>
                <li>Ouvrez ces fichiers dans votre éditeur. Vous verrez des marqueurs comme <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li>
                <li>Décidez quelle version du code conserver (la vôtre, celle de l'autre, ou une combinaison).</li>
                <li>Supprimez les marqueurs de conflit.</li>
                <li>Enregistrez le fichier.</li>
                <li>Ajoutez le fichier résolu : <code>git add &lt;fichier-resolu&gt;</code>.</li>
                <li>Commitez la résolution : <code>git commit -m "Résolution de conflit"</code>.</li>
              </ol>
              <p>La pratique est essentielle pour maîtriser la résolution de conflits.</p>
            </div>
          `
        }
      ]
    },
    {
      title: "Fonctionnalités Avancées de GitHub",
      topics: [
        {
          id: "github-issues-projects",
          title: "Issues et Projets",
          duration: "20 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>GitHub offre des outils intégrés pour la gestion de projet et le suivi des tâches.</p>
              <h4 class="text-blue-400 font-bold mt-4">Issues (Problèmes)</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Utilisées pour suivre les bugs, les demandes de fonctionnalités, les questions, etc.</li>
                <li>Peuvent être assignées à des membres de l'équipe, étiquetées, et liées à des Pull Requests.</li>
                <li>Un excellent moyen de centraliser la communication autour des tâches spécifiques.</li>
              </ul>
              <h4 class="text-blue-400 font-bold mt-4">Projects (Projets)</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Tableaux Kanban personnalisables pour organiser les Issues et les Pull Requests.</li>
                <li>Permettent de visualiser l'avancement du projet et de gérer les workflows.</li>
                <li>Idéal pour les équipes qui suivent des méthodologies agiles.</li>
              </ul>
            </div>
          `
        },
        {
          id: "github-actions",
          title: "GitHub Actions",
          duration: "25 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p><strong>GitHub Actions</strong> est une plateforme d'intégration continue et de livraison continue (CI/CD) qui vous permet d'automatiser vos workflows de développement directement depuis votre dépôt GitHub.</p>
              <h4 class="text-blue-400 font-bold mt-4">Cas d'utilisation</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Exécuter des tests automatisés à chaque push.</li>
                <li>Déployer votre application sur un serveur.</li>
                <li>Construire et publier des packages.</li>
                <li>Automatiser des tâches de maintenance de dépôt.</li>
              </ul>
              <h4 class="text-blue-400 font-bold mt-4">Fonctionnement</h4>
              <p>Les workflows sont définis dans des fichiers YAML (<code>.github/workflows/mon-workflow.yml</code>) et sont déclenchés par des événements (push, pull request, etc.).</p>
            </div>
          `
        },
        {
          id: "github-pages",
          title: "Pages GitHub",
          duration: "15 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p><strong>GitHub Pages</strong> est un service d'hébergement statique gratuit qui prend les fichiers directement depuis un dépôt GitHub, exécute un processus de build si nécessaire, et publie un site web.</p>
              <h4 class="text-blue-400 font-bold mt-4">Utilisations typiques</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Sites web personnels ou de portfolio.</li>
                <li>Documentation de projets.</li>
                <li>Blogs (avec Jekyll).</li>
                <li>Pages de destination pour des projets open source.</li>
              </ul>
              <h4 class="text-blue-400 font-bold mt-4">Mise en place</h4>
              <ol class="list-decimal ml-5 space-y-1">
                <li>Créez un dépôt nommé <code>votre-utilisateur.github.io</code> pour un site personnel, ou une branche <code>gh-pages</code> pour un site de projet.</li>
                <li>Poussez votre contenu HTML, CSS, JS.</li>
                <li>Votre site sera accessible à <code>https://votre-utilisateur.github.io</code> ou <code>https://votre-utilisateur.github.io/nom-du-depot</code>.</li>
              </ol>
            </div>
          `
        }
      ]
    }
  ];

  const totalTopics = courseSections.reduce((acc, section) => acc + section.topics.length, 0);
  const progress = Math.round((completedTopics.size / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Top Progress Bar */}
      <div className="sticky top-0 z-50 w-full h-1.5 bg-slate-900">
        <motion.div
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Retour aux cours</span>
        </button>

        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-purple-400/10 text-purple-400 border border-purple-400/20">
              <GitBranch size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Git & <span className="text-purple-500">GitHub</span>
              </h1>
              <p className="text-slate-400 font-medium mt-1">Maîtrisez le contrôle de version et la collaboration.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Progression</div>
              <div className="text-2xl font-black text-white">{progress}%</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Modules</div>
              <div className="text-2xl font-black text-white">{courseSections.length}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Durée totale</div>
              <div className="text-2xl font-black text-white">~6h</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Niveau</div>
              <div className="text-2xl font-black text-white">Lvl 1</div>
            </div>
          </div>
        </header>

        {/* Course Roadmap Style */}
        <div className="relative space-y-16">
          {courseSections.map((section, sIdx) => (
            <div key={section.title} className="relative">
              {/* Vertical Path Line */}
              {sIdx !== courseSections.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-800" />
              )}

              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-600/20 z-10">
                  {sIdx + 1}
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">{section.title}</h2>
              </div>

              <div className="ml-6 md:ml-12 space-y-4">
                {section.topics.map((topic) => (
                  <div key={topic.id} className="relative">
                    <motion.div
                      whileHover={{ x: 8 }}
                      onClick={() => toggleExpand(topic.id)}
                      className={`
                        group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer
                        ${completedTopics.has(topic.id)
                          ? 'bg-green-500/5 border-green-500/30'
                          : 'bg-slate-900/40 border-white/5 hover:border-purple-500/50 hover:bg-slate-900/60'}
                        ${expandedTopic === topic.id ? 'border-purple-500/50 bg-slate-900/60 rounded-b-none' : ''}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <button
                          onClick={(e) => toggleTopic(topic.id, e)}
                          className={`
                            w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                            ${completedTopics.has(topic.id)
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-slate-700 group-hover:border-purple-500'}
                          `}
                        >
                          {completedTopics.has(topic.id) && <CheckCircle2 size={14} />}
                        </button>

                        <div>
                          <h3 className={`font-bold transition-colors ${completedTopics.has(topic.id) ? 'text-slate-400 line-through' : 'text-slate-200 group-hover:text-white'}`}>
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                              <Clock size={10} /> {topic.duration}
                            </span>
                            <span className={`text-[9px] px-2 py-0.5 rounded-md font-black uppercase tracking-widest ${
                              topic.type === 'essential' ? 'bg-red-500/10 text-red-400' :
                              topic.type === 'practice' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-500'
                            }`}>
                              {topic.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl bg-white/5 text-slate-400 transition-all ${expandedTopic === topic.id ? 'rotate-180 text-purple-500' : ''}`}>
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Expandable Theory Content */}
                    <AnimatePresence>
                      {expandedTopic === topic.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-slate-900/60 border-x border-b border-purple-500/50 rounded-b-2xl"
                        >
                          <div className="p-6 pt-2 text-slate-300 leading-relaxed text-sm">
                            <div className="flex items-center gap-2 mb-4 text-purple-400">
                              <BookOpen size={16} />
                              <span className="text-[10px] font-black uppercase tracking-widest">Théorie du module</span>
                            </div>
                            <div
                              className="prose prose-invert max-w-none"
                              dangerouslySetInnerHTML={{ __html: topic.content }}
                            />
                            <div className="mt-6 flex justify-end">
                              <button
                                onClick={(e) => toggleTopic(topic.id, e)}
                                className={`
                                  px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2
                                  ${completedTopics.has(topic.id)
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/20'}
                                `}
                              >
                                {completedTopics.has(topic.id) ? (
                                  <><CheckCircle2 size={14} /> Terminé</>
                                ) : (
                                  <><PlayCircle size={14} /> Marquer comme lu</>
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final Achievement */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-purple-500/20 text-center relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Trophy size={200} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Prêt pour la suite ?</h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8 font-medium">
            Vous avez maintenant les bases solides pour contribuer à des projets open source et gérer votre propre code.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2 mx-auto">
            Explorer des Projets <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GithubCourses;
