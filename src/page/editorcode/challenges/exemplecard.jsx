import { Terminal, CheckCircle2 } from "lucide-react";

export default function ExampleCard({
  number,
  example,
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-gray-800
        bg-[#0f172a]
        overflow-hidden
      "
    >

      {/* Header */}
      <div
        className="
          flex
          items-center
          gap-2
          px-4
          py-3
          border-b
          border-gray-800
          bg-[#111827]
        "
      >
        <Terminal
          size={17}
          className="text-yellow-400"
        />

        <h3 className="font-semibold text-white">
          Example {number}
        </h3>

      </div>


      {/* Content */}
      <div className="p-4 space-y-4">


        {/* Input */}
        <div>

          <p className="
            text-sm
            font-semibold
            text-gray-400
            mb-2
          ">
            Input
          </p>


          <div
            className="
              rounded-lg
              bg-black/30
              border
              border-gray-800
              p-3
              font-mono
              text-sm
              text-green-400
              whitespace-pre-wrap
            "
          >
            {example.input}
          </div>

        </div>



        {/* Output */}
        <div>

          <p className="
            text-sm
            font-semibold
            text-gray-400
            mb-2
          ">
            Output
          </p>


          <div
            className="
              rounded-lg
              bg-black/30
              border
              border-gray-800
              p-3
              font-mono
              text-sm
              text-blue-400
            "
          >
            {example.output}
          </div>

        </div>




        {/* Explanation */}
        {
          example.explanation && (

            <div>

              <p className="
                text-sm
                font-semibold
                text-gray-400
                mb-2
              ">
                Explanation
              </p>


              <div
                className="
                  flex
                  gap-2
                  text-gray-300
                  text-sm
                  leading-6
                "
              >

                <CheckCircle2
                  size={16}
                  className="text-green-400 mt-1 shrink-0"
                />


                <p>
                  {example.explanation}
                </p>

              </div>


            </div>

          )
        }


      </div>

    </div>
  );
}