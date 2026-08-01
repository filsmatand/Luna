// src/components/ui/Button.jsx

import { Loader2 } from "lucide-react";


export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon: Icon,
}) {


  const variants = {

    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400",

    success:
      "bg-green-600 text-white hover:bg-green-500",

    danger:
      "bg-red-600 text-white hover:bg-red-500",

    secondary:
      "bg-gray-800 text-white hover:bg-gray-700",

    ghost:
      "bg-transparent text-gray-300 hover:bg-gray-800"

  };


  const sizes = {

    sm:"px-3 py-1.5 text-sm",

    md:"px-4 py-2",

    lg:"px-6 py-3 text-lg"

  };


  return (

    <button

      onClick={onClick}

      disabled={disabled || loading}

      className={`
        flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-semibold
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed

        ${variants[variant]}

        ${sizes[size]}
      `}

    >

      {
        loading ?

        <Loader2
          size={18}
          className="animate-spin"
        />

        :

        Icon &&

        <Icon size={18}/>

      }


      {children}


    </button>

  );

}