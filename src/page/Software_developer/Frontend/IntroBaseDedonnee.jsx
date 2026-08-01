
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Database, // Icône pour les bases de données
  PlayCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Trophy,
  ArrowLeft,
  ChevronDown,
  BookOpen,
  Table,
  GitBranch // Utilisé pour symboliser les relations ou les graphes
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DatabaseCourses = () => {
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
      title: "Introduction aux Bases de Données",
      topics: [
        {
          id: "db-intro",
          title: "Qu'est-ce qu'une Base de Données ?",
          duration: "20 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>Une <strong>base de données</strong> est une collection organisée d'informations (données) structurées, généralement stockées électroniquement dans un système informatique. Elle est gérée par un Système de Gestion de Base de Données (SGBD).</p>
              <h4 class="text-emerald-400 font-bold mt-4">Pourquoi utiliser une Base de Données ?</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Persistance :</strong> Stockage durable des données.</li>
                <li><strong>Organisation :</strong> Structure les données pour un accès et une gestion efficaces.</li>
                <li><strong>Intégrité :</strong> Assure la cohérence et la validité des données.</li>
                <li><strong>Sécurité :</strong> Contrôle l'accès aux données.</li>
                <li><strong>Concurrence :</strong> Gère l'accès simultané de plusieurs utilisateurs.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Composants Clés</h4>
              <p>Un SGBD (comme MySQL, PostgreSQL, MongoDB) permet de créer, maintenir et interroger des bases de données. Il sert d'interface entre l'utilisateur/application et les données.</p>
            </div>
          `
        },
        {
          id: "db-types",
          title: "Types de Bases de Données (Relationnel vs NoSQL)",
          duration: "25 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Le monde des bases de données se divise principalement en deux grandes catégories : les bases de données relationnelles et les bases de données NoSQL.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Bases de Données Relationnelles (SQL)</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Basées sur le modèle relationnel, organisées en tables avec des lignes et des colonnes.</li>
                <li>Utilisent SQL (Structured Query Language) pour la définition et la manipulation des données.</li>
                <li>Exemples : MySQL, PostgreSQL, Oracle, SQL Server.</li>
                <li>Fortes garanties ACID (Atomicité, Cohérence, Isolation, Durabilité).</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Bases de Données NoSQL (Not Only SQL)</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Conçues pour des modèles de données flexibles et des performances à grande échelle.</li>
                <li>Ne suivent pas le modèle relationnel traditionnel.</li>
                <li>Exemples : MongoDB (Document), Redis (Clé-Valeur), Cassandra (Colonnes), Neo4j (Graphe).</li>
                <li>Souvent basées sur le théorème CAP (Cohérence, Disponibilité, Tolérance aux Partitions).</li>
              </ul>
            </div>
          `
        },
        {
          id: "db-acid-cap",
          title: "Principes ACID et Théorème CAP",
          duration: "30 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>Ces deux concepts sont fondamentaux pour comprendre les compromis dans la conception des bases de données.</p>
              <h4 class="text-emerald-400 font-bold mt-4">ACID (Relationnel)</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Atomicité :</strong> Une transaction est tout ou rien.</li>
                <li><strong>Cohérence :</strong> La base de données passe d'un état valide à un autre.</li>
                <li><strong>Isolation :</strong> Les transactions concurrentes s'exécutent indépendamment.</li>
                <li><strong>Durabilité :</strong> Les modifications validées sont permanentes.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Théorème CAP (NoSQL)</h4>
              <p>Dans un système distribué, il est impossible de garantir simultanément la <strong>Cohérence</strong>, la <strong>Disponibilité</strong> et la <strong>Tolérance aux Partitions</strong>. Il faut en choisir deux.</p>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Cohérence (C) :</strong> Toutes les lectures reçoivent la donnée la plus récente.</li>
                <li><strong>Disponibilité (A) :</strong> Chaque requête reçoit une réponse (succès ou échec).</li>
                <li><strong>Tolérance aux Partitions (P) :</strong> Le système continue de fonctionner malgré les pannes de communication entre les nœuds.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      title: "Bases de Données Relationnelles (SQL)",
      topics: [
        {
          id: "sql-model",
          title: "Modèle Relationnel et Normalisation",
          duration: "40 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Le modèle relationnel organise les données en tables (relations) composées de lignes (enregistrements) et de colonnes (attributs).</p>
              <h4 class="text-emerald-400 font-bold mt-4">Normalisation</h4>
              <p>Processus de structuration des tables pour minimiser la redondance des données et améliorer l'intégrité. Les formes normales (1NF, 2NF, 3NF, BCNF) définissent des règles pour atteindre cet objectif.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Clés Primaires et Étrangères</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Clé Primaire :</strong> Identifiant unique pour chaque ligne d'une table.</li>
                <li><strong>Clé Étrangère :</strong> Établit un lien entre les données de deux tables, assurant l'intégrité référentielle.</li>
              </ul>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>-- Exemple de table avec clé primaire et étrangère
CREATE TABLE Clients (
    client_id INT PRIMARY KEY,
    nom VARCHAR(255)
);

CREATE TABLE Commandes (
    commande_id INT PRIMARY KEY,
    client_id INT,
    FOREIGN KEY (client_id) REFERENCES Clients(client_id)
);</code></pre>
            </div>
          `
        },
        {
          id: "sql-queries",
          title: "Requêtes SQL Fondamentales (SELECT, INSERT, UPDATE, DELETE)",
          duration: "50 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>SQL est le langage standard pour interagir avec les bases de données relationnelles.</p>
              <h4 class="text-emerald-400 font-bold mt-4">SELECT (Récupérer des données)</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>SELECT nom, email FROM Utilisateurs WHERE age > 25 ORDER BY nom DESC;</code></pre>
              <h4 class="text-emerald-400 font-bold mt-4">INSERT (Ajouter des données)</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>INSERT INTO Produits (nom, prix) VALUES ('Ordinateur portable', 1200.00);</code></pre>
              <h4 class="text-emerald-400 font-bold mt-4">UPDATE (Modifier des données)</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>UPDATE Clients SET email = 'nouveau@email.com' WHERE client_id = 1;</code></pre>
              <h4 class="text-emerald-400 font-bold mt-4">DELETE (Supprimer des données)</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>DELETE FROM Commandes WHERE statut = 'annulée';</code></pre>
            </div>
          `
        },
        {
          id: "sql-joins",
          title: "Jointures et Agrégations",
          duration: "45 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>Les jointures permettent de combiner des lignes de deux ou plusieurs tables basées sur une colonne liée entre elles. Les fonctions d'agrégation effectuent un calcul sur un ensemble de lignes et retournent une seule valeur.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Types de Jointures</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>INNER JOIN :</strong> Retourne les lignes quand il y a au moins une correspondance dans les deux tables.</li>
                <li><strong>LEFT JOIN :</strong> Retourne toutes les lignes de la table de gauche, et les lignes correspondantes de la table de droite.</li>
                <li><strong>RIGHT JOIN :</strong> Retourne toutes les lignes de la table de droite, et les lignes correspondantes de la table de gauche.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Fonctions d'Agrégation</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><code>COUNT()</code> : Compte le nombre de lignes.</li>
                <li><code>SUM()</code> : Calcule la somme d'une colonne numérique.</li>
                <li><code>AVG()</code> : Calcule la moyenne.</li>
                <li><code>MAX()</code> / <code>MIN()</code> : Trouve la valeur maximale/minimale.</li>
              </ul>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>SELECT C.nom, COUNT(O.commande_id) AS total_commandes
FROM Clients C
INNER JOIN Commandes O ON C.client_id = O.client_id
GROUP BY C.nom
HAVING COUNT(O.commande_id) > 5;</code></pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Bases de Données NoSQL",
      topics: [
        {
          id: "nosql-doc",
          title: "Bases de Données Document (MongoDB)",
          duration: "35 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>Les bases de données orientées document stockent les données sous forme de documents semi-structurés, souvent au format JSON ou BSON. Elles sont très flexibles et adaptées aux données changeantes.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Caractéristiques</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Schéma flexible :</strong> Pas de schéma fixe, les documents peuvent avoir des structures différentes.</li>
                <li><strong>Évolutivité horizontale :</strong> Facile à distribuer sur plusieurs serveurs.</li>
                <li><strong>Performances :</strong> Accès rapide aux données pour des requêtes complexes sur des documents.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Exemple (MongoDB)</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>// Insertion d'un document
db.users.insertOne({
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  interests: ["coding", "reading"]
});

// Recherche de documents
db.users.find({ age: { $gt: 25 }, "interests": "coding" });</code></pre>
            </div>
          `
        },
        {
          id: "nosql-kv-cf",
          title: "Clé-Valeur (Redis) et Colonnes (Cassandra)",
          duration: "30 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>D'autres types de bases de données NoSQL répondent à des besoins spécifiques de performance et de scalabilité.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Bases de Données Clé-Valeur</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Stockent les données comme une collection de paires clé-valeur.</li>
                <li>Extrêmement rapides pour les opérations de lecture/écriture simples.</li>
                <li>Exemple : <strong>Redis</strong> (souvent utilisé pour le caching, les sessions).</li>
              </ul>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>// Redis CLI
SET user:1:name "Bob"
GET user:1:name</code></pre>
              <h4 class="text-emerald-400 font-bold mt-4">Bases de Données Orientées Colonnes</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Optimisées pour l'agrégation de grandes quantités de données.</li>
                <li>Stockent les données par colonnes plutôt que par lignes.</li>
                <li>Exemple : <strong>Cassandra</strong> (Big Data, IoT, séries temporelles).</li>
              </ul>
            </div>
          `
        },
        {
          id: "nosql-graph",
          title: "Bases de Données Graphe (Neo4j)",
          duration: "25 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>Les bases de données graphe sont conçues pour stocker et naviguer dans des données hautement connectées, où les relations sont aussi importantes que les entités elles-mêmes.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Concepts Clés</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Nœuds :</strong> Représentent les entités (personnes, produits, lieux).</li>
                <li><strong>Relations :</strong> Connectent les nœuds et décrivent leur interaction (ami de, acheté, situé à).</li>
                <li><strong>Propriétés :</strong> Attributs des nœuds et des relations.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Cas d'utilisation</h4>
              <p>Réseaux sociaux, systèmes de recommandation, détection de fraude, gestion des connaissances.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Exemple (Cypher - Neo4j)</h4>
              <pre class="bg-slate-900 p-3 rounded-lg text-sm overflow-x-auto"><code>MATCH (p:Person)-[:FRIENDS_WITH]->(f:Person)
WHERE p.name = 'Alice'
RETURN f.name;</code></pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Conception et Modélisation de Bases de Données",
      topics: [
        {
          id: "db-design-erd",
          title: "Modélisation Entité-Relation (MER)",
          duration: "30 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>La modélisation Entité-Relation (MER) est une approche de haut niveau pour concevoir des bases de données, en représentant les entités (objets du monde réel) et les relations entre elles.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Composants du MER</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Entités :</strong> Objets ou concepts distincts (ex: Client, Produit).</li>
                <li><strong>Attributs :</strong> Propriétés des entités (ex: nom du client, prix du produit).</li>
                <li><strong>Relations :</strong> Associations entre les entités (ex: un Client <em>passe</em> une Commande).</li>
                <li><strong>Cardinalités :</strong> Décrivent le nombre d'instances d'une entité qui peuvent être associées à une instance d'une autre entité (1:1, 1:N, N:M).</li>
              </ul>
              <p>Le diagramme Entité-Relation (DER) est la représentation graphique du MER.</p>
            </div>
          `
        },
        {
          id: "db-schema-design",
          title: "Conception de Schéma (Relationnel et NoSQL)",
          duration: "35 min",
          type: "practice",
          content: `
            <div class="space-y-4">
              <p>La conception de schéma est l'étape où le modèle conceptuel (MER) est traduit en une structure concrète pour la base de données choisie.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Schéma Relationnel</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Application des règles de normalisation pour créer des tables, définir les clés primaires/étrangères, les types de données.</li>
                <li>L'objectif est de minimiser la redondance et d'assurer l'intégrité.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Schéma NoSQL (Ex: Document)</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Plus flexible, mais nécessite une réflexion sur la manière dont les données seront accédées.</li>
                <li><strong>Embarquement (Embedding) :</strong> Stocker les données liées dans un seul document pour des lectures rapides.</li>
                <li><strong>Référencement (Referencing) :</strong> Stocker les données liées dans des documents séparés et utiliser des références pour les lier, pour éviter la duplication ou gérer de grandes collections.</li>
              </ul>
              <p>Le choix dépend des cas d'utilisation et des modèles d'accès aux données.</p>
            </div>
          `
        }
      ]
    },
    {
      title: "Tendances et Écosystème des Bases de Données (2026)",
      topics: [
        {
          id: "db-cloud",
          title: "Bases de Données Cloud et Services Managés",
          duration: "20 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>En 2026, la majorité des nouvelles applications exploitent des bases de données hébergées et gérées dans le cloud, offrant scalabilité, haute disponibilité et maintenance simplifiée.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Avantages</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Scalabilité :</strong> Ajustement facile des ressources (CPU, RAM, stockage) à la demande.</li>
                <li><strong>Haute Disponibilité :</strong> Réplication automatique et basculement pour minimiser les temps d'arrêt.</li>
                <li><strong>Maintenance Réduite :</strong> Le fournisseur gère les mises à jour, les sauvegardes, la sécurité.</li>
                <li><strong>Coût-efficacité :</strong> Paiement à l'usage, pas d'investissement initial lourd.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Exemples de Services</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>AWS RDS, Aurora, DynamoDB</li>
                <li>Google Cloud SQL, Firestore, Bigtable</li>
                <li>Azure SQL Database, Cosmos DB</li>
              </ul>
            </div>
          `
        },
        {
          id: "db-bigdata-dw",
          title: "Big Data, Data Warehousing et Data Lakes",
          duration: "25 min",
          type: "theory",
          content: `
            <div class="space-y-4">
              <p>La gestion de volumes massifs de données (Big Data) est un défi majeur, menant à l'émergence de solutions spécialisées pour l'analyse et le stockage.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Big Data</h4>
              <p>Désigne des ensembles de données si volumineux et complexes que les outils traditionnels de traitement de données ne suffisent plus. Caractérisé par les 3 V : Volume, Vélocité, Variété.</p>
              <h4 class="text-emerald-400 font-bold mt-4">Data Warehousing</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Système de stockage de données optimisé pour l'analyse et le reporting.</li>
                <li>Les données sont structurées, nettoyées et agrégées à partir de diverses sources opérationnelles.</li>
                <li>Exemples : Snowflake, Google BigQuery, AWS Redshift.</li>
              </ul>
              <h4 class="text-emerald-400 font-bold mt-4">Data Lakes</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li>Stockent de grandes quantités de données brutes dans leur format natif.</li>
                <li>Permettent une analyse flexible et l'application de techniques d'apprentissage automatique.</li>
                <li>Exemples : AWS S3, Google Cloud Storage, Azure Data Lake Storage.</li>
              </ul>
            </div>
          `
        },
        {
          id: "db-security",
          title: "Sécurité et Conformité des Données",
          duration: "20 min",
          type: "essential",
          content: `
            <div class="space-y-4">
              <p>La sécurité des bases de données est primordiale pour protéger les informations sensibles et assurer la conformité réglementaire (RGPD, HIPAA, etc.).</p>
              <h4 class="text-emerald-400 font-bold mt-4">Aspects Clés de la Sécurité</h4>
              <ul class="list-disc ml-5 space-y-1">
                <li><strong>Authentification et Autorisation :</strong> Contrôle qui peut accéder aux données et ce qu'il peut faire.</li>
                <li><strong>Chiffrement :</strong> Protection des données au repos (stockées) et en transit (lors des transferts).</li>
                <li><strong>Audit et Journalisation :</strong> Suivi des accès et des modifications pour détecter les activités suspectes.</li>
                <li><strong>Sauvegardes et Récupération :</strong> Plans de reprise après sinistre pour éviter la perte de données.</li>
                <li><strong>Masquage/Anonymisation :</strong> Protection des données sensibles dans les environnements de test ou d'analyse.</li>
              </ul>
              <p>Une approche multicouche est nécessaire pour une sécurité robuste des bases de données.</p>
            </div>
          `
        }
      ]
    }
  ];

  const totalTopics = courseSections.reduce((acc, section) => acc + section.topics.length, 0);
  const progress = Math.round((completedTopics.size / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Top Progress Bar */}
      <div className="sticky top-0 z-50 w-full h-1.5 bg-slate-900">
        <motion.div
          className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
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
            <div className="p-3 rounded-2xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
              <Database size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Bases de Données <span className="text-emerald-500">Fondamentaux</span>
              </h1>
              <p className="text-slate-400 font-medium mt-1">Comprendre le cœur de la persistance des données.</p>
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
              <div className="text-2xl font-black text-white">~7h</div>
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
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-600/20 z-10">
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
                          : 'bg-slate-900/40 border-white/5 hover:border-emerald-500/50 hover:bg-slate-900/60'}
                        ${expandedTopic === topic.id ? 'border-emerald-500/50 bg-slate-900/60 rounded-b-none' : ''}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <button
                          onClick={(e) => toggleTopic(topic.id, e)}
                          className={`
                            w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                            ${completedTopics.has(topic.id)
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-slate-700 group-hover:border-emerald-500'}
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
                        <div className={`p-2 rounded-xl bg-white/5 text-slate-400 transition-all ${expandedTopic === topic.id ? 'rotate-180 text-emerald-500' : ''}`}>
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
                          className="overflow-hidden bg-slate-900/60 border-x border-b border-emerald-500/50 rounded-b-2xl"
                        >
                          <div className="p-6 pt-2 text-slate-300 leading-relaxed text-sm">
                            <div className="flex items-center gap-2 mb-4 text-emerald-400">
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
                                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20'}
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
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-emerald-600/20 to-teal-600/10 border border-emerald-500/20 text-center relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Trophy size={200} />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Prêt pour la suite ?</h3>
          <p className="text-slate-400 max-w-md mx-auto mb-8 font-medium">
            Vous avez maintenant les bases solides pour concevoir, gérer et interroger des bases de données modernes.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2 mx-auto">
            Explorer des Projets Data <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatabaseCourses;
