import { useState } from "react";
import {
  RotateCcw,
  Settings,
  Save,
} from "lucide-react";


import LanguageSelector from "./langageselectoe";
import ThemeSelector from "./themeselector";

import RunButton from "./runbouton";
import SubmitButton from "./submitbouton";



export default function EditorToolbar({

  onLanguageChange,
  onThemeChange,
  onRun,
  onSubmit,
  onReset,

}) {


  const [language,setLanguage] = useState("javascript");

  const [theme,setTheme] = useState("DevSchool");


  function handleLanguage(value){

    setLanguage(value);

    if(onLanguageChange){

      onLanguageChange(value);

    }

  }



  function handleTheme(value){

    setTheme(value);


    if(onThemeChange){

      onThemeChange(value);

    }

  }




  return (

    <div

      className="
        h-14
        px-4
        flex
        items-center
        justify-between
        bg-[#111827]
        border-b
        border-gray-800
      "

    >


      {/* Gauche */}

      <div

        className="
          flex
          items-center
          gap-3
        "

      >


        <LanguageSelector

          value={language}

          onChange={handleLanguage}

        />



        <ThemeSelector

          value={theme}

          onChange={handleTheme}

        />



      </div>





      {/* Centre */}

      <div

        className="
          flex
          items-center
          gap-3
        "

      >



        <RunButton

          onClick={onRun}

        />



        <SubmitButton

          onClick={onSubmit}

        />



      </div>






      {/* Droite */}

      <div

        className="
          flex
          items-center
          gap-2
        "

      >



        <button

          onClick={onReset}

          className="
            flex
            items-center
            gap-2
            px-3
            h-10
            rounded-lg
            bg-[#0f172a]
            border
            border-gray-700
            text-gray-300
            hover:text-white
            hover:border-yellow-500
            transition
          "

        >

          <RotateCcw size={16}/>

          Reset


        </button>





        <button

          className="
            flex
            items-center
            gap-2
            px-3
            h-10
            rounded-lg
            bg-[#0f172a]
            border
            border-gray-700
            text-gray-300
            hover:text-white
            hover:border-yellow-500
            transition
          "

        >

          <Save size={16}/>

          Save


        </button>





        <button

          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-lg
            bg-[#0f172a]
            border
            border-gray-700
            text-gray-400
            hover:text-white
            hover:border-yellow-500
            transition
          "

        >

          <Settings size={18}/>


        </button>




      </div>



    </div>

  );

}