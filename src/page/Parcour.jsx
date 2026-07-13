import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/ecolier.png"
import img2 from "../assets/ecolier2.png"
import img3 from "../assets/ecolier3.png"

export default function ImpactSection() {
  const navigate = useNavigate();

 const handleLogin = () => {
  navigate("/software");
};
  return (
   
    <section className="overflow-hidden bg-stone-50 py-16 sm:py-10">
      <div className="mx-auto grid max-w-7xl max-h-4xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]">
            <div className="absolute inset-0 rounded-full border border-dashed border-stone-300" />

            <img
              src={img1}
              alt=""
              className="absolute left-[15%] top-[12%] h-40 w-40 rounded-full object-cover shadow-xl sm:h-56 sm:w-56"
            />

            <img
              src={img3}
              alt=""
              className="absolute right-0 top-[15%] h-20 w-20 rounded-full object-cover shadow-lg sm:h-28 sm:w-28"
            />

            <img
              src={img2}
              alt=""
              className="absolute bottom-6 left-0 h-16 w-16 rounded-full object-cover shadow-lg sm:h-20 sm:w-20"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Qu'est ce que tu doit Apprendre
          </span>

          <h2 className="mt-4 text-3xl font-serif font-bold text-stone-900 sm:text-4xl lg:text-5xl">
            Apprentissage structuré
          </h2>

          <p className="mt-6 text-base leading-relaxed text-stone-600">
            quel metier je choisis ?
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button onClick={handleLogin}
             className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
              Software Development
            </button>
            
            <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
              Data Science / Analytics
            </button>

            <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
              Le Design 
            </button>
            

            {/* <button className="flex items-center gap-3 rounded-full border border-stone-200 bg-white px-5 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Watch Video
            </button> */}


          </div>
        </motion.div>
      </div>
    </section>
  );
}