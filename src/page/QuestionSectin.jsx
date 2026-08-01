import { useState } from 'react';
import { ChevronDown, Search, List, Grid3x3 } from 'lucide-react';

export default function QuestionsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'



  

  // Données des questions
  const questions = [
    {
      id: 1,
      title: 'Comment créer une version plate d\'un tableau profondément imbriqué ?',
      subtitle: '[Question d\'entretien de programmation]',
      difficulty: 'Moyen',
      tags: ['Tous les niveaux'],
      likes: 42769,
      views: 34453,
      solved: true,
    },
    {
      id: 2,
      title: 'Comment créer un hook de minuterie personnalisé dans React.js ? | useTimer |',
      subtitle: '[Question d\'entretien JavaScript]',
      difficulty: 'Moyen',
      tags: ['Tous les niveaux'],
      likes: 34453,
      views: 34453,
      solved: true,
    },
    {
      id: 3,
      title: 'Créez un mini clone de Google Agenda View',
      difficulty: 'Difficile',
      tags: ['Tous les niveaux'],
      likes: 25571,
      views: 25571,
      solved: false,
    },
    {
      id: 4,
      title: 'Implémenter la fonction Debounce | Flipkart UI - Questions d\'entretien JavaScript',
      difficulty: 'Moyen',
      tags: ['Tous les niveaux'],
      likes: 23236,
      views: 23236,
      solved: true,
    },
    {
      id: 5,
      title: 'Implémenter le composant Accordéon dans React.js | Question d\'entretien JavaScript',
      difficulty: 'Facile',
      tags: ['Tous les niveaux'],
      likes: 18900,
      views: 18900,
      solved: false,
    },
    {
      id: 6,
      title: 'Comment implémenter Event Emitter en JavaScript ? | Question d\'entretien Facebook',
      difficulty: 'Moyen',
      tags: ['Tous les niveaux'],
      likes: 21500,
      views: 21500,
      solved: true,
    },
  ];

  const filteredQuestions = questions.filter((q) =>
    q.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Facile':
        return 'text-green-400';
      case 'Moyen':
        return 'text-green-400';
      case 'Difficile':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

 

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header avec notification */}
      <div className="border-b border-slate-700 bg-slate-900/50 px-6 py-3">
        <div className="flex items-center gap-3 bg-blue-900/30 border border-blue-700/50 rounded px-4 py-2">
          <span className="text-sm text-blue-300">
            Obtenez un accès à vie au contenu premium.
          </span>
          <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
            ↗
          </a>
        </div>
      </div>

      {/* Barre de contrôle */}
      <div className="border-b border-slate-700 bg-slate-900/30 px-6 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded transition-colors ${viewMode === 'list'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
          >
            <List size={20} />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded transition-colors ${viewMode === 'grid'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
          >
            <Grid3x3 size={20} />
          </button>
        </div>

        {/* Barre de recherche */}
        <div className="flex-1 mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Que voulez-vous rechercher ?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 pl-10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex gap-6 p-6">
        {/* Grille de questions */}
        <div className="flex-1">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredQuestions.map((q) => (
                <div
                  key={q.id}
                  className="border border-slate-700 rounded-lg p-4 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-600 transition-all cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* Titre */}
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {q.title}
                    </h3>

                    {/* Sous-titre */}
                    {q.subtitle && (
                      <p className="text-xs text-slate-400">{q.subtitle}</p>
                    )}

                    {/* Tags et difficulté */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                        {q.tags[0]}
                      </span>
                      <span className={`text-xs font-medium ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <span>👍</span>
                        {q.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>👁️</span>
                        {q.views.toLocaleString()}
                      </span>
                    </div>

                    {/* Bouton */}
                    <button className="mt-4 px-4 py-2 border border-blue-600 text-white rounded hover:bg-blue-600/10 transition-colors text-sm font-medium">
                      Résoudre
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredQuestions.map((q) => (
                <div
                  key={q.id}
                  className="border border-slate-700 rounded-lg p-4 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-600 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {q.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                      <span>{q.tags[0]}</span>
                      <span className={`font-medium ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                      <span>👍 {q.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-green-600 text-green-400 rounded hover:bg-green-600/10 transition-colors text-xs font-medium">
                    Résoudre
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar des filtres */}
        <div className="w-80 space-y-4">
          {/* Filtres */}
          <div className="space-y-4">
            {/* Cadres / Langages */}
            <div className="border border-slate-700 rounded-lg bg-slate-900/50 p-4">
              <button className="w-full flex items-center justify-between text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                <span>Cadres / Langages</span>
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Difficulté */}
            <div className="border border-slate-700 rounded-lg bg-slate-900/50 p-4">
              <button className="w-full flex items-center justify-between text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                <span>Difficulté</span>
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Type de question */}
            <div className="border border-slate-700 rounded-lg bg-slate-900/50 p-4">
              <button className="w-full flex items-center justify-between text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                <span>Type de question</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-medium">
                    PROGRAM...
                  </span>
                  <span className="text-slate-500 cursor-pointer hover:text-slate-400">×</span>
                  <ChevronDown size={18} />
                </div>
              </button>
            </div>

          

            {/* Entreprises */}
            <div className="border border-slate-700 rounded-lg bg-slate-900/50 p-4">
              <button className="w-full flex items-center justify-between text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                <span>Entreprises</span>
                <ChevronDown size={18} />
              </button>
            </div>

        
          
          </div>

          {/* Section séquence */}
          
        </div>
      </div>
    </div>
  );
}
