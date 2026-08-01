import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img2.png"
import img2 from "../assets/ecolier2.png"
import img3 from "../assets/sc2.png"
import {
  Code2,
  Database,
  Layers,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ImpactSection() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const categories = [
    { id: 'frontend', name: 'FrontEnd', icon: <Code2 size={22} />, path: '/resourcecourcefrontend', color: 'blue' },
    { id: 'backend', name: 'Backend', icon: <Database size={22} />, path: '/resourcecourcesbackend', color: 'blue' },
    { id: 'fullstack', name: 'Full Stack', icon: <Layers size={22} />, path: '/resourcecoursfullstack', color: 'blue' },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-10 lg:px-24">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-slate-950/10 blur-[1200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/10 blur-[1400px] rounded-full pointer-events-none" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        
        {/* Left Side: Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
            {/* Orbitals */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]" />
            
            {/* Main Image Container */}
            <div className="absolute left-1/2 top-48 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5">
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-1">
                <img
                  src={img1}
                  alt="Main Visual"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
            </div>

            {/* Floating Avatars */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              
              className="absolute -right-16 top-1/4 h-24 w-24 rounded-2xl border-2 border-slate-900 overflow-hidden shadow-2xl z-10 rotate-12"
            >
              <img src={img3} alt="Student 1" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}      
              className="absolute -left-6 bottom-1/4 h-20 w-20 rounded-full border-2 border-slate-900 overflow-hidden shadow-2xl z-10 -rotate-12"
            >
              <img src={img2} alt="Student 2" className="w-full h-full object-cover" />
            </motion.div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-1 right-1/4 bg-blue-600 text-white p-2 px-6 rounded-2xl shadow-xl z-20 flex items-center gap-3">
              <Sparkles size={20} className="text-blue-200" />
              <div className="text-xs font-black uppercase tracking-tighter">100% Structuré</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
              Curriculum 2026
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Apprentissage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Ultra Structuré
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-lg mb-12 leading-relaxed font-medium">
            Ne perdez plus de temps avec des tutoriels éparpillés. Suivez nos parcours guidés conçus par des experts pour devenir un ingénier logiciel opérationnel rapidement.
          </p>

          <div className="w-full space-y-4 max-w-md lg:max-w-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavigation(cat.path)}
                className="group relative flex w-full items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10 lg:w-[450px]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {cat.icon}
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-black text-white uppercase tracking-wider">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      Parcours Expert
                    </span>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
