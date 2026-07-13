import { motion } from "framer-motion";
import Button from "../components/bouton";
import img from "../assets/af5.png";


export default function Hero() {

  return (

    <section className="max-w-7xl mx-auto px-6 mt-16 sm:px-8 lg:px-10">

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-5 items-center">

        {/* TEXT */}

        <motion.div

          initial={{ opacity:0, x:-50 }}
          animate={{ opacity:1, x:0 }}

          transition={{ duration:.8 }}>
          <h1 className="text-4xl text-bold sm:text-5xl md:text-4xl lg:text-6xl font-serif leading-tight">
            L'Innovation De Demain Commence Ici En Afrique.
          </h1>

          <p className=" mt-6 lg:mt-8 text-gray-500 max-w-md text-base md:text-lg">

            Apprenez l’essentiel sur la technologie, du niveau débutant à expert, et découvrez comment utiliser l’intelligence artificielle pour créer plus vite et mieux.

          </p>
          <div className="mt-8 lg:mt-10">
            <Button />
          </div>
        </motion.div>

        {/* IMAGE */}

        <motion.div

          initial={{ opacity:0,y:20}}
            animate={{opacity:1,y:0}}transition={{duration:.5}}

          className="flex justify-center lg:justify-end">

          <img src={img} alt="Justice illustration" className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"/>

        </motion.div>

      </div>
    </section>

  );

}