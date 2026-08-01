import { useState } from "react";
import {
  Play,
  RotateCcw,
  Keyboard,
} from "lucide-react";


export default function CustomInput({

  onRun

}) {


  const [input, setInput] = useState("");



  function handleRun(){

    if(onRun){
      onRun(input);
    }

  }



  function clearInput(){

    setInput("");

  }



  return (

    <div
      className="
        h-full
        flex
        flex-col
        gap-4
      "
    >


      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            text-white
          "
        >

          <Keyboard
            size={18}
            className="text-yellow-400"
          />


          <h3
            className="
              font-semibold
            "
          >
            Custom Input
          </h3>


        </div>


        <button
          onClick={clearInput}
          className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-400
            hover:text-white
            transition
          "
        >

          <RotateCcw size={15}/>

          Clear

        </button>


      </div>



      {/* Input Editor */}

      <textarea

        value={input}

        onChange={(e)=>setInput(e.target.value)}

        placeholder={`
// Write your custom input here

Example:

[2,7,11,15]
9
`}

        className="
          flex-1
          resize-none
          rounded-xl
          bg-[#0f172a]
          border
          border-gray-800
          p-4
          text-sm
          text-green-400
          font-mono
          outline-none
          focus:border-yellow-500
          placeholder:text-gray-600
        "

      />



      {/* Run button */}

      <button

        onClick={handleRun}

        className="
          flex
          items-center
          justify-center
          gap-2
          h-10
          rounded-lg
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          font-semibold
          transition
        "

      >

        <Play size={17}/>

        Run Test


      </button>


    </div>

  );

}