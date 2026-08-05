import React, { useState } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, 
  LogIn, ShieldCheck, Sparkles, KeyRound, AlertCircle, CheckCircle2
} from 'lucide-react';
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError(''); // Clear error when user starts typing
  };

  // Validate form
  const validateForm = () => {
    if (!formData.email.trim()) {
      setError('L\'email est obligatoire.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Veuillez entrer une adresse email valide.');
      return false;
    }
    if (!formData.password) {
      setError('Le mot de passe est obligatoire.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Erreur lors de la connexion.');
        return;
      }

      // --- LOGIQUE DE REDIRECTION INSTANTANÉE ---
      
      // On stocke les informations de l'utilisateur pour la Home et la Navbar
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Redirection immédiate vers la page d'accueil
      window.location.href = '/'; 
      
      // ------------------------------------------

    } catch (err) {
      setError('Erreur de connexion au serveur. Assurez-vous que le serveur est démarré.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Social Login
  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError('');
    
    try {
      const mockSocialData = {
        fullName: "Utilisateur Test Google",
        email: "test-google@gmail.com",
        provider: provider
      };

      const response = await fetch('http://localhost:5000/api/social-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockSocialData)
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/';
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(`Erreur lors de la connexion avec ${provider}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] text-gray-100 font-sans flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-[#18191a] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-2xl relative z-10">
        
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#1c1e21] to-[#060606] border-r border-gray-800">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Bon retour parmi nous
            </div>
            <h2 className="text-5xl font-black text-white leading-tight">
              Continuez votre préparation <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Meta & Microsoft</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Reprenez là où vous vous étiez arrêté et maîtrisez les concepts clés pour vos prochains entretiens.
            </p>
          </div>

          <div className="bg-black/30 rounded-3xl p-6 border border-gray-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                <KeyRound className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-black text-white text-sm">Session Sécurisée</h4>
                <p className="text-xs text-gray-500">Protection des données de niveau entreprise</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800/50 flex items-center justify-between">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              © 2026 MetaPrep Dashboard
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-white mb-2">Se connecter</h1>
            <p className="text-gray-500 font-medium">
              Pas encore de compte ? <a href="/register" className="text-blue-500 hover:text-blue-400 font-bold transition-colors">S'inscrire gratuitement</a>
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input 
                  type="email" name="email" placeholder="votre@email.com" value={formData.email} onChange={handleInputChange}
                  className="w-full bg-[#242526] border border-gray-800 rounded-2xl py-4 pl-12 pr-4 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Mot de passe</label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} name="password" placeholder="••••••••" value={formData.password} onChange={handleInputChange}
                  className="w-full bg-[#242526] border border-gray-800 rounded-2xl py-4 pl-12 pr-12 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  required
                />
                <button 
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] mt-2"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
              {!loading && <LogIn className="w-5 h-5" />}
            </button>

            <div className="relative py-4 flex items-center gap-4">
              <div className="flex-1 border-t border-gray-800"></div>
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Ou continuer avec</span>
              <div className="flex-1 border-t border-gray-800"></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button type="button" className="flex items-center justify-center py-3 bg-[#242526] border border-gray-800 rounded-xl hover:bg-gray-800 transition-all">
                <FaFacebook className="w-5 h-5 text-[#1877F2]" />
              </button>
              <button 
                type="button" onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center py-3 bg-[#242526] border border-gray-800 rounded-xl hover:bg-gray-800 transition-all"
              >
                <FaGoogle className="w-5 h-5 text-[#EA4335]" />
              </button>
              <button type="button" className="flex items-center justify-center py-3 bg-[#242526] border border-gray-800 rounded-xl hover:bg-gray-800 transition-all">
                <FaMicrosoft className="w-5 h-5 text-[#00A4EF]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
