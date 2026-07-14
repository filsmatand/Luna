import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png"
import {Menu,X,ChevronDown,User,} from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [niveauOpen, setNiveauOpen] = useState(false);

  const niveauRef = useRef(null);


  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        niveauRef.current &&
        !niveauRef.current.contains(event.target)
      ) {
        setNiveauOpen(false);
      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );


  }, []);



  const menus = [
    "HOME",
    "COURS",
    "PROJETS",
    "CONTACTS",
  ];


  const niveaux = [
    "Débutant",
    "Intermédiaire",
    "Avancé",
    "Expert",
  ];



  return (

        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut",}}
          className="fixed top-0 left-0 w-full z-50">

      <div className="mx-auto  h-16 max-w-full px-8 backdrop-blur-xl   shadow-[0_8px_4px_rgba(0,0,0,0.02)] flex items-center justify-between">
 
        {/* LOGO */}

        <div className="flex items-center gap-3">

          
       <a href="/" className="flex items-center -ml-8 md:ml-8">
        <img
          src={logo}
          alt="Maarifa"
          className=" w-[150px] sm:h-24 md:h-[160px] lg:h-48 xl:h-56 w-auto object-contain transition-transform duration-300 mt-4 mr-16"
           />
        </a>

        </div>

        {/* DESKTOP MENU */}

        <ul className=" hidden text-sm lg:flex items-center gap-8 font-medium">

          {menus.map(menu=>(

            <li key={menu} className=" text-sm relative cursor-pointer text-gray-700 hover:text-yellow-500 transition duration-300 group ">
              {menu} </li>

          ))}

          {/* NIVEAU */}

          <li
            ref={niveauRef}
            className="relative">

            <button onClick={(e)=>{e.stopPropagation();setNiveauOpen(!niveauOpen); }}
             className=" flex items-center gap-2 hover:text-yellow-500">
              NIVEAU
              <motion.div animate={{ rotate:niveauOpen ? 180 : 0 }}>
                <ChevronDown size={18}/>
              </motion.div>
            </button>

            <AnimatePresence>

            {niveauOpen && (<motion.div

               initial={{ y: -80, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 18 }}
               className="absolute top-10 left-0 w-52 bg-white rounded-xl shadow-xl py-3">
                {niveaux.map(niveau=>(
                  <div key={niveau}
                  className=" px-5 py-3 hover:bg-yellow-50 cursor-pointer ">

                    {niveau}

                  </div>
                ))}

              </motion.div>

            )}

            </AnimatePresence>

          </li>

        </ul>


        {/* DESKTOP ACTION */}

        <div className="hidden lg:flex items-center gap-5 ">

          <button> ENGLISH</button>

          <button className="bg-yellow-400 text-white px-6 py-2 rounded-tr-full rounded-tl-full rounded-bl-full hover:bg-yellow-600 transition">
            CONNEXION
          </button>

          <button className=" w-11 h-11 rounded-full bg-gray-100 hover:bg-yellow-500 hover:text-white transition flex items-center justify-center">
              <User size={20}/>
          </button>
        </div>

        {/* MOBILE BUTTON */}

        <button

          className="lg:hidden" onClick={()=>setMenuOpen(!menuOpen)}>

          {menuOpen?<X size={20}/>:<Menu size={20}/>}
        </button>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

      {menuOpen && (

        <motion.div


        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}

          className="lg:hidden bg-white rounded-2xl shadow-xl p-6">
          {menus.map(menu=>(

            <div

              key={menu}

              className="py-3 border-b ">

              {menu}

            </div>

          ))}

          {/* MOBILE NIVEAU */}

          <div className="py-3 ">

            <button

              onClick={()=>setNiveauOpen(!niveauOpen)}

              className=" flex justify-between w-full">
              NIVEAU
              <ChevronDown
                className={` transition ${niveauOpen ? "rotate-180":""} `} />
            </button>
            <AnimatePresence>

            {niveauOpen && (

              <motion.div

              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}

                className="pl-5  space-y-3 overflow-hidden">

                {niveaux.map(niveau=>(

                  <div key={niveau}>

                    {niveau}

                  </div>

                ))}


              </motion.div>

            )}

            </AnimatePresence>

          </div>

          <button className="w-full bg-yellow-500 text-white py-3 rounded-tr-full rounded-tl-full rounded-bl-full mt-4">

            CONNEXION

          </button>

          <button className="flex items-center gap-2 mx-auto mt-4">

            <User/>

          </button>

        </motion.div>

      )}

      </AnimatePresence>

    </motion.nav>

  );

}