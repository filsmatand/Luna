import { ChevronDown, Code2 } from "lucide-react";

const LANGUAGES = [
  {
    id: "javascript",
    name: "JavaScript",
    version: "Node.js 22",
    color: "bg-yellow-500",
  },
  {
    id: "typescript",
    name: "TypeScript",
    version: "TS 5.8",
    color: "bg-blue-500",
  },
  {
    id: "python",
    name: "Python",
    version: "3.12",
    color: "bg-green-500",
  },
  {
    id: "java",
    name: "Java",
    version: "21",
    color: "bg-orange-500",
  },
  {
    id: "cpp",
    name: "C++",
    version: "GCC 13",
    color: "bg-sky-500",
  },
  {
    id: "c",
    name: "C",
    version: "GCC 13",
    color: "bg-gray-500",
  },
  {
    id: "csharp",
    name: "C#",
    version: ".NET 9",
    color: "bg-purple-500",
  },
  {
    id: "go",
    name: "Go",
    version: "1.24",
    color: "bg-cyan-500",
  },
  {
    id: "rust",
    name: "Rust",
    version: "1.88",
    color: "bg-amber-700",
  },
  {
    id: "php",
    name: "PHP",
    version: "8.4",
    color: "bg-indigo-500",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    version: "2.2",
    color: "bg-pink-500",
  },
  {
    id: "swift",
    name: "Swift",
    version: "6",
    color: "bg-red-500",
  },
];

export default function LanguageSelector({
  value,
  onChange,
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          appearance-none
          bg-[#111827]
          border
          border-gray-700
          text-white
          rounded-lg
          h-10
          pl-10
          pr-10
          text-sm
          cursor-pointer
          outline-none
          hover:border-yellow-500
          transition
        "
      >
        {LANGUAGES.map((language) => (
          <option key={language.id} value={language.id}>
            {language.name} • {language.version}
          </option>
        ))}
      </select>

      <Code2
        size={17}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />

      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}