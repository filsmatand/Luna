import React from "react";
import { Link } from "react-router-dom";
import { Rocket, ListChecks, BookOpen, Film } from "lucide-react";

const features = [
  {
    path: "/question",
    icon: <Rocket size={24} className="text-blue-400" />,
    title: "Trouver Le Boulot de Votre Reve",
    description:
      "Take charge of your future and unlock the door to your dream job with our interview questions.",
  },
  {
    path: "/roadmapfullstack",
    icon: <ListChecks size={24} className="text-blue-400" />,
    title: "Roadmap à Suivre pour devenir un meilleur ingénier ",
    description:
      "Immerse yourself in a handpicked selection of resources crafted with your success in mind.",
  },
  {
    path: "/cours",
    icon: <BookOpen size={24} className="text-blue-400" />,
    title: "Collections Des Cours Essentiels",
    description:
      "Resources picked & crafted for your best experience",
  },
  {
    path: "/tutorials",
    icon: <Film size={24} className="text-blue-400" />,
    title: "Etudier Avec Nos Tutoriels",
    description:
      "Fuel your programming journey with our extensive video resources and take yourself to new heights.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#0B101B] py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
             Augmenter Ton Niveau Rapidement 
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-400 lg:mx-auto">
            Unlock a suite of powerful components designed to accelerate your growth.
          </p>
        </div>


        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">

          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="group block"
            >
              <div
                className="
                p-6 rounded-lg shadow-lg 
                border border-white/5 
                bg-white/5
                transition-all duration-300
                hover:border-blue-500/50
                hover:bg-white/10
                hover:shadow-2xl
                hover:shadow-blue-500/10
                hover:-translate-y-1
                "
              >

                <div className="flex items-center mb-4">

                  <div
                    className="
                    flex h-12 w-12 items-center justify-center 
                    rounded-xl bg-blue-600/10 
                    text-blue-400
                    transition-all duration-300
                    group-hover:bg-blue-600
                    group-hover:text-white
                    "
                  >
                    {feature.icon}
                  </div>


                  <h3 className="ml-4 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                </div>


                <p className="text-gray-400 text-base">
                  {feature.description}
                </p>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}