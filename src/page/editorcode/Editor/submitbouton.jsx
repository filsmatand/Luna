import { CheckCircle2 } from "lucide-react";

export default function SubmitButton({
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
        bg-emerald-600
        hover:bg-emerald-500
        text-white
        font-semibold
        transition-all
        duration-200
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          <CheckCircle2 size={17} />
          Submit
        </>
      )}
    </button>
  );
}