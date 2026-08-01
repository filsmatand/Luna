import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Ici tu connecteras ton système d'authentification
    // Firebase / Supabase / API Backend
  };


  return (

    <main className="min-h-screen flex items-center justify-center bg-[#050505] px-4">


      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.6
        }}

        className="
          w-full 
          max-w-md 
          bg-white/5 
          backdrop-blur-xl 
          border 
          border-white/10 
          rounded-3xl 
          p-8
        "

      >


        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Connexion
        </h1>


        <p className="text-gray-400 text-center mb-8">
          Connecte-toi à ton espace
        </p>



        <form 
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          <input

            type="email"

            name="email"

            placeholder="Adresse email"

            value={formData.email}

            onChange={handleChange}

            className="
              w-full
              bg-white/10
              text-white
              rounded-xl
              px-4
              py-3
              outline-none
              border
              border-white/10
              focus:border-blue-500
            "

          />



          <input

            type="password"

            name="password"

            placeholder="Mot de passe"

            value={formData.password}

            onChange={handleChange}

            className="
              w-full
              bg-white/10
              text-white
              rounded-xl
              px-4
              py-3
              outline-none
              border
              border-white/10
              focus:border-blue-500
            "

          />



          <div className="flex justify-end">

            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Mot de passe oublié ?
            </Link>

          </div>



          <button

            type="submit"

            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "

          >
            Se connecter

          </button>



        </form>




        <div className="flex items-center gap-3 my-6">

          <div className="h-px bg-white/10 flex-1"></div>

          <span className="text-gray-500 text-sm">
            ou
          </span>

          <div className="h-px bg-white/10 flex-1"></div>

        </div>




        <button

          className="
            w-full
            border
            border-white/10
            text-white
            py-3
            rounded-xl
            hover:bg-white/10
            transition
          "

        >
          Continuer avec Google

        </button>




        <p className="text-gray-400 text-center mt-6">

          Pas encore de compte ?{" "}

          <Link

            to="/register"

            className="text-blue-500 hover:underline"

          >
            Inscription

          </Link>

        </p>



      </motion.div>


    </main>

  );
}