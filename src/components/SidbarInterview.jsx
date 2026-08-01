import React, { useState } from 'react';

export default function Sidbar (){
    const [view, setView] = useState('list')
     const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
 <aside className={`${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'} hidden lg:block border-r border-slate-800 bg-slate-900/50 h-[calc(100vh-64px)] sticky top-16 transition-all duration-300`}>
          <div className="p-6 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-widest">Coding Interviews</h3>
              <ul className="space-y-1">
                <li><button onClick={() => setView('list')} className={`w-full text-left px-3 py-2 rounded transition ${view === 'list' ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-slate-800 text-slate-300'}`}>Questions</button></li>
                <li><a href="#" className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-300 transition">Par Entreprise</a></li>
                <li><a href="#" className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-300 transition">Cheatsheets</a></li>
                <li><a href="#" className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-300 transition">Quizz</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-widest">Resources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-300 transition">System Design</a></li>
                <li><a href="#" className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-300 transition">Object Oriented Design</a></li>
              </ul>
            </div>
          </div>
        </aside>
    )
}