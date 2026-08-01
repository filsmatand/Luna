import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Layout, PenTool, Code, Search, ChevronRight, Menu, X,
  Settings, Info, MessageSquare, BookOpen,
  Terminal, Database, Table, Layers, ShieldCheck, Cloud, BarChart3, HelpCircle
} from "lucide-react";
import { FaGithub, FaDatabase } from "react-icons/fa";

const lessons = [
  // Introduction aux Bases de Données
  {
    title: "Qu'est-ce qu'une Base de Données ?",
    category: "Introduction",
    icon: Database,
    color: "text-blue-500",
    course: "Une base de données est une collection organisée d'informations structurées, stockées électroniquement. Elle permet la persistance, l'organisation et l'intégrité des données via un SGBD (Système de Gestion de Base de Données).",
    code: "// Exemples de SGBD populaires\n// Relationnels : MySQL, PostgreSQL\n// NoSQL : MongoDB, Redis",
    exercise: "Recherchez quel SGBD est utilisé par vos applications préférées (ex: Instagram, Spotify).",
  },
  {
    title: "SQL vs NoSQL",
    category: "Introduction",
    icon: Layers,
    color: "text-indigo-500",
    course: "Les bases SQL sont relationnelles, organisées en tables et suivent les principes ACID. Les bases NoSQL sont plus flexibles (document, clé-valeur, graphe) et optimisées pour la scalabilité horizontale.",
    code: "-- SQL (Table)\nSELECT * FROM Utilisateurs;\n\n// NoSQL (Document)\ndb.users.find();",
    exercise: "Listez deux cas d'usage où une base NoSQL serait préférable à une base SQL.",
  },
  // Bases de Données Relationnelles (SQL)
  {
    title: "Modèle Relationnel et Normalisation",
    category: "Relationnel (SQL)",
    icon: Table,
    color: "text-blue-400",
    course: "La normalisation consiste à structurer les tables pour éviter la redondance. On utilise des clés primaires (ID unique) et des clés étrangères pour lier les tables entre elles.",
    code: "CREATE TABLE Clients (\n    client_id INT PRIMARY KEY,\n    nom VARCHAR(255)\n);\n\nCREATE TABLE Commandes (\n    commande_id INT PRIMARY KEY,\n    client_id INT,\n    FOREIGN KEY (client_id) REFERENCES Clients(client_id)\n);",
    exercise: "Dessinez un schéma simple reliant une table 'Auteurs' et une table 'Livres'.",
  },
  {
    title: "Requêtes Fondamentales",
    category: "Relationnel (SQL)",
    icon: Terminal,
    color: "text-cyan-500",
    course: "Le langage SQL permet de manipuler les données avec quatre opérations de base (CRUD) : SELECT (Lire), INSERT (Créer), UPDATE (Modifier), et DELETE (Supprimer).",
    code: "SELECT nom, prix FROM Produits WHERE prix > 100;\nINSERT INTO Clients (nom) VALUES ('Alice');\nUPDATE Stock SET quantite = 50 WHERE id = 12;",
    exercise: "Écrivez une requête pour récupérer tous les utilisateurs dont l'âge est supérieur à 18 ans.",
  },
  {
    title: "Jointures et Agrégations",
    category: "Relationnel (SQL)",
    icon: Layers,
    color: "text-blue-600",
    course: "Les jointures (INNER, LEFT, RIGHT JOIN) permettent de combiner des données de plusieurs tables. Les fonctions d'agrégation (COUNT, SUM, AVG) effectuent des calculs sur des ensembles de lignes.",
    code: "SELECT C.nom, COUNT(O.id)\nFROM Clients C\nINNER JOIN Commandes O ON C.id = O.client_id\nGROUP BY C.nom;",
    exercise: "Écrivez une requête pour calculer le prix moyen de tous les produits en stock.",
  },
  // Bases de Données NoSQL
  {
    title: "Bases de Données Document (MongoDB)",
    category: "NoSQL",
    icon: Database,
    color: "text-blue-300",
    course: "MongoDB stocke les données dans des documents JSON/BSON. C'est idéal pour les données semi-structurées et les applications nécessitant un développement rapide et flexible.",
    code: "db.users.insertOne({\n  name: \"Alice\",\n  interests: [\"coding\", \"music\"]\n});",
    exercise: "Créez un exemple de document JSON pour représenter un produit électronique.",
  },
  {
    title: "Clé-Valeur et Graphes",
    category: "NoSQL",
    icon: Layers,
    color: "text-indigo-400",
    course: "Redis (Clé-Valeur) est ultra-rapide pour le cache. Neo4j (Graphe) est conçu pour gérer des relations complexes, comme dans les réseaux sociaux.",
    code: "// Redis\nSET session:user:123 \"active\"\n\n// Neo4j (Cypher)\nMATCH (p:Person {name: 'Alice'})-[:FRIEND]->(f)\nRETURN f.name;",
    exercise: "Dans quel scénario utiliseriez-vous une base de données de type Graphe ?",
  },
  // Tendances et Sécurité
  {
    title: "Cloud et Big Data",
    category: "Avancé",
    icon: Cloud,
    color: "text-blue-200",
    course: "Les services cloud (AWS RDS, BigQuery) offrent une scalabilité infinie. Le Big Data gère des volumes massifs (les 3 V : Volume, Vélocité, Variété) via des Data Lakes et Warehouses.",
    code: "// Services Cloud : \n// AWS Aurora, Snowflake, Google BigQuery",
    exercise: "Quelle est la différence principale entre un Data Lake et un Data Warehouse ?",
  },
  {
    title: "Sécurité et Conformité",
    category: "Avancé",
    icon: ShieldCheck,
    color: "text-blue-500",
    course: "La sécurité inclut l'authentification, le chiffrement des données (au repos et en transit) et la conformité aux régulations comme le RGPD.",
    code: "-- Principe du moindre privilège\nGRANT SELECT ON Utilisateurs TO 'analyste';",
    exercise: "Listez trois mesures pour sécuriser une base de données de production.",
  },
];

const categories = [
  "Introduction",
  "Relationnel (SQL)",
  "NoSQL",
  "Avancé"
];

export default function DatabaseResources() {
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
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="flex flex-col border-r border-blue-900/30 bg-slate-900 overflow-hidden relative z-20"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-950 border-b border-blue-900/30">
          <div className="flex items-center gap-2">
            <div className="bg-blue-800 p-1 rounded text-white">
              <FaDatabase size={16} />
            </div>
            <span className="font-bold text-sm tracking-tight uppercase text-blue-400">Database Fundamentals</span>
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
                        className={`w-full text-left px-4 py-1.5 text-xs transition-colors flex items-center gap-3 group ${
                          selectedLesson?.title === lesson.title 
                            ? 'bg-blue-900/50 text-white border-l-2 border-blue-500' 
                            : 'text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                        }`}
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

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950 relative">
        <header className="h-10 border-b border-blue-900/30 flex items-center justify-between px-4 bg-slate-900/30 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 hover:bg-slate-800 rounded text-gray-500 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Bases de Données</span>
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
                className="max-w-3xl"
              >
                <div className="border-b border-blue-900/30 pb-6 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`h-12 w-12 rounded bg-blue-950 border border-blue-900/50 flex items-center justify-center ${selectedLesson.color}`}>
                      {React.createElement(selectedLesson.icon, { size: 24 })}
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white tracking-tight">{selectedLesson.title}</h1>
                      <p className="text-xs text-blue-400 font-mono mt-1">type: {selectedLesson.category.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <BookOpen size={18} /> Concepts Théoriques
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {selectedLesson.course}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Terminal size={18} className="text-blue-400" /> Exemple Pratique
                    </h2>
                    <div className="bg-gray-900 border border-blue-900/30 rounded p-4 font-mono text-[11px] text-gray-300">
                      <pre className="whitespace-pre-wrap">{selectedLesson.code}</pre>
                    </div>
                  </section>

                  <section className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <HelpCircle size={18} className="text-blue-300" /> Exercice d'application
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
                  <FaDatabase size={40} className="text-blue-500/50" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Documentation Bases de Données</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Apprenez à stocker, organiser et manipuler vos données. Sélectionnez un module dans la barre latérale pour commencer l'exploration.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[FaDatabase, Table, Layers, ShieldCheck].map((Icon, i) => (
                    <Icon key={i} className="text-xl text-gray-700 hover:text-blue-400 transition-colors cursor-pointer" />
                  ))}
                </div>
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
      `}} />
    </div>
  );
}
