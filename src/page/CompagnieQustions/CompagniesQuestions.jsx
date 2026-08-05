import React from "react";
import { Link, useNavigate } from "react-router-dom";


import img2 from "../../assets/ent2.png";
import img4 from "../../assets/ent4.png";
import img6 from "../../assets/ent6.png";
import img7 from "../../assets/ent7.png";
import img8 from "../../assets/ent8.png";
import img9 from "../../assets/ent9.png";

const companies = [
  { name: "Google", logo: img4, path: "google" },
  { name: "Amazon", logo: img2, path: "amazon" },
  { name: "Meta", logo: img6, path: "meta" },
  { name: "Microsoft", logo: img7, path: "microsoft" },
   { name: "Apple", logo: img8, path: "apple" },
  { name: "Netflix", logo: img9, path: "netflix" },

];

export default function CompanyQuestionsSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
           Les Questions Spécifiques Des Entreprises 
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {companies.map((company, index) => (

            <div
              key={index}
              onClick={() => navigate("/payment", { state: { from: company.path } })}
              className="group cursor-pointer"
            >

              <div
                className="
                flex items-center p-4 
                bg-[#1A202C] 
                rounded-lg 
                border border-white/5
                transition-all duration-300
                hover:border-blue-500/50
                hover:bg-[#202938]
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-blue-500/10
                "
              >

                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-8 h-8 rounded-full mr-3 object-cover"
                />


                <span className="text-lg font-medium group-hover:text-blue-400 transition">
                  {company.name}
                </span>

              </div>

            </div>

          ))}

        </div>


        <div className="flex items-center gap-3 mt-8 justify-center">

          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />

          <Link
            to="/"
            className="
            text-[10px] 
            font-black 
            uppercase 
            tracking-[0.2em] 
            text-blue-400
            hover:text-blue-300
            transition
            "
          >
            Passez Directement vous exercer
          </Link>

        </div>

      </div>

    </section>
  );
} 