

import React from 'react';
import { 
  Star, Users, BookOpen, ArrowRight, Sparkles 
} from 'lucide-react';
import { FaTwitter, FaLinkedin,FaGithub, } from "react-icons/fa";

const CollaborateursSection = () => {
  const collaborators = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "UI/UX Design Expert",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.9,
      students: "12.5k",
      courses: 12
    },
    {
      id: 2,
      name: "Marc Dupont",
      role: "Backend Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.8,
      students: "8.2k",
      courses: 15
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Frontend Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.9,
      students: "10.1k",
      courses: 9
    },
    {
      id: 4,
      name: "Thomas Muller",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.7,
      students: "6.4k",
      courses: 20
    }
  ];

  return (
    <section className="min-h-screen bg-[#060606] text-gray-100 font-sans py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Top Rated
          </div>
          
          <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-left space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Rencontrez nos <span className="text-blue-500">Collaborateurs</span> Experts
              </h2>
              <p className="text-gray-400 max-w-xl text-base sm:text-lg">
                Découvrez les instructeurs les plus populaires qui partagent leur expertise pour propulser votre carrière chez Meta et Microsoft.
              </p>
            </div>
            
            <button className="group flex items-center gap-2 px-6 py-3 bg-[#18191a] border border-gray-800 rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all whitespace-nowrap self-start md:self-end">
              Voir tous les collaborateurs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {collaborators.map((person) => (
            <div 
              key={person.id} 
              className="group bg-[#18191a] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-2xl hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Image Container with Social Overlay */}
              <div className="relative aspect-square overflow-hidden m-3 rounded-[2rem]">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-blue-500 transition-colors text-white">
                    <FaTwitter className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-blue-500 transition-colors text-white">
                    <FaLinkedin className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-blue-500 transition-colors text-white">
                    <FaGithub className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 pt-2 text-center space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
                    {person.role}
                  </p>
                </div>

                {/* Stats Footer */}
                <div className="flex items-center justify-center gap-6 pt-2 border-t border-gray-800/50">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-black text-gray-300">{person.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-bold text-gray-400">{person.students}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-bold text-gray-400">{person.courses}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        section {
          background-image: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
        }
      `}</style>
    </section>
  );
};

export default CollaborateursSection;
