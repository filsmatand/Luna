import { BookOpen, Trophy, Code2, User } from "lucide-react";

export default function NavbarChallenge() {
  return (
    <header className="h-16 bg-[#111827] border-b border-gray-800 flex items-center justify-between px-6">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center font-bold text-black">
          D
        </div>

        <h1 className="font-bold text-xl text-white">
          DevSchool
        </h1>

      </div>

      <nav className="flex gap-8">

        <button className="flex items-center gap-2 text-gray-300 hover:text-white">

          <Code2 size={18} />

          Challenges

        </button>

        <button className="flex items-center gap-2 text-gray-300 hover:text-white">

          <BookOpen size={18} />

          Cours

        </button>

        <button className="flex items-center gap-2 text-gray-300 hover:text-white">

          <Trophy size={18} />

          Classement

        </button>

      </nav>

      <button className="flex items-center gap-2 text-white">

        <User />

        Profil

      </button>

    </header>
  );
}