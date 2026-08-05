import React, { useState, useRef } from 'react';
import { 
  User, Mail, Lock, Eye, EyeOff, ArrowRight, 
  CheckCircle2, ShieldCheck, Sparkles, AlertCircle, Camera, Upload
} from 'lucide-react';
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError('L\'image est trop lourde (max 2Mo)');
        return;
      }
      setFormData(prev => ({ ...prev, profilePicture: file }));
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    }
  };

  const validateForm = () => {
    if (!formData.profilePicture) {
      setError('La photo de profil est obligatoire.');
      return false;
    }
    if (!formData.fullName.trim()) {
      setError('Le nom complet est obligatoire.');
      return false;
    }
    if (!formData.email.trim()) {
      setError('L\'email est obligatoire.');
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return false;
    }
    if (!formData.agreeTerms) {
      setError('Vous devez accepter les conditions.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setLoading(true);

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('profilePicture', formData.profilePicture);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || 'Erreur lors de l\'inscription.');
        return;
      }

      // --- REDIRECTION INSTANTANÉE ---
      localStorage.setItem('user', JSON.stringify(result.user));
      window.location.href = '/'; 
      // -------------------------------

    } catch (err) {
      setError('Erreur de connexion au serveur.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] text-gray-100 font-sans flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-[#18191a] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-2xl relative z-10">
        
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#1c1e21] to-[#060606] border-r border-gray-800">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Rejoignez l'élite
            </div>
            <h2 className="text-5xl font-black text-white leading-tight">
              Propulsez votre carrière chez <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Meta & Microsoft</span>.
            </h2>
          </div>
        </div>

        <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white mb-2">Créer un compte</h1>
            <p className="text-gray-500 font-medium">
              Déjà inscrit ? <a href="/login" className="text-blue-500 hover:text-blue-400 font-bold transition-colors">Se connecter</a>
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col items-center justify-center mb-6">
              <div 
                onClick={() => fileInputRef.current.click()}
                className="relative w-24 h-24 rounded-full border-2 border-dashed border-gray-700 hover:border-blue-500 cursor-pointer overflow-hidden group transition-all bg-[#242526]"
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500 group-hover:text-blue-500">
                    <Camera className="w-8 h-8 mb-1" />
                    <span className="text-[8px] font-black uppercase">Photo</span>
                  </div>
                )}
              </div>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Nom complet</label>
              <input 
                type="text" name="fullName" placeholder="Jean Dupont" value={formData.fullName} onChange={handleInputChange}
                className="w-full bg-[#242526] border border-gray-800 rounded-2xl py-4 px-4 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email</label>
              <input 
                type="email" name="email" placeholder="jean@email.com" value={formData.email} onChange={handleInputChange}
                className="w-full bg-[#242526] border border-gray-800 rounded-2xl py-4 px-4 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input 
                type={showPassword ? "text" : "password"} name="password" placeholder="Mot de passe" value={formData.password} onChange={handleInputChange}
                className="w-full bg-[#242526] border border-gray-800 rounded-2xl py-4 px-4 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                required
              />
              <input 
                type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirmer" value={formData.confirmPassword} onChange={handleInputChange}
                className="w-full bg-[#242526] border border-gray-800 rounded-2xl py-4 px-4 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                required
              />
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-black py-4 rounded-2xl shadow-xl transition-all transform active:scale-[0.98]"
            >
              {loading ? 'Création...' : 'Créer mon compte'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
