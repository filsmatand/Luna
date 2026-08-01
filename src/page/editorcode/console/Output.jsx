import {
  Terminal,
  Clock,
  Cpu,
  CheckCircle2,
} from "lucide-react";


export default function Output({

  output = "Aucun résultat pour le moment.",

  status = "success",

  runtime = "0 ms",

  memory = "0 MB"

}) {


  return (

    <div
      className="
        h-full
        space-y-4
      "
    >


      {/* Status */}
      <div
        className="
          flex
          items-center
          justify-between
          rounded-lg
          border
          border-gray-800
          bg-[#0f172a]
          px-4
          py-3
        "
      >


        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <CheckCircle2
            size={18}
            className={
              status === "success"
              ?
              "text-green-400"
              :
              "text-red-400"
            }
          />


          <span
            className="
              text-white
              font-semibold
            "
          >

            {
              status === "success"
              ?
              "Accepted"
              :
              "Failed"
            }

          </span>


        </div>



        <div
          className="
            flex
            items-center
            gap-5
            text-sm
            text-gray-400
          "
        >

          <span
            className="
              flex
              items-center
              gap-1
            "
          >

            <Clock size={14}/>

            {runtime}

          </span>



          <span
            className="
              flex
              items-center
              gap-1
            "
          >

            <Cpu size={14}/>

            {memory}

          </span>


        </div>


      </div>



      {/* Output Console */}

      <div
        className="
          rounded-lg
          border
          border-gray-800
          bg-black/30
          overflow-hidden
        "
      >


        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            border-b
            border-gray-800
            bg-[#111827]
          "
        >

          <Terminal
            size={16}
            className="text-yellow-400"
          />


          <span
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Output
          </span>


        </div>



        <pre
          className="
            p-4
            text-sm
            text-green-400
            font-mono
            whitespace-pre-wrap
            min-h-24
          "
        >

          {output}

        </pre>


      </div>


    </div>

  );

}