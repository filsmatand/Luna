import { Palette, ChevronDown } from "lucide-react";

const THEMES = [
  {
    id: "DevSchool",
    name: "DevSchool Dark",
  },
  {
    id: "vs-dark",
    name: "VS Code Dark",
  },
  {
    id: "vs",
    name: "VS Code Light",
  },
  {
    id: "hc-black",
    name: "High Contrast",
  },
];

export default function ThemeSelector({
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
          rounded-lg
          h-10
          pl-10
          pr-10
          text-white
          text-sm
          outline-none
          cursor-pointer
          hover:border-yellow-500
          transition
        "
      >
        {THEMES.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>

      <Palette
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />

      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}