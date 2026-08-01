import { Play } from "lucide-react";

export default function RunButton({
  onClick,
  loading = false,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className="
        flex
        items-center
        gap-2
        h-10
        px-4
        rounded-lg
        bg-yellow-500
        hover:bg-yellow-400
        text-black
        font-semibold
        transition-all
        duration-200
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          Running...
        </>
      ) : (
        <>
          <Play size={16} />
          Run
        </>
      )}
    </button>
  );
}