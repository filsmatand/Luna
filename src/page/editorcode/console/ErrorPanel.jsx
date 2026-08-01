import {
  AlertTriangle,
  Bug,
  FileWarning,
} from "lucide-react";


export default function ErrorPanel({

  error = null

}) {


  return (

    <div
      className="
        h-full
      "
    >

      {
        error ?

        (

          <div
            className="
              rounded-xl
              border
              border-red-500/30
              bg-red-500/10
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
                border-red-500/20
                text-red-400
              "
            >

              <AlertTriangle size={18}/>

              <span
                className="
                  font-semibold
                "
              >
                Error
              </span>


            </div>


            {/* Error content */}

            <div
              className="
                p-4
                space-y-3
              "
            >


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-white
                  font-semibold
                "
              >

                <Bug size={16}/>

                {error.type || "Runtime Error"}

              </div>



              <pre
                className="
                  rounded-lg
                  bg-black/30
                  border
                  border-red-500/20
                  p-4
                  text-sm
                  text-red-300
                  font-mono
                  whitespace-pre-wrap
                "
              >

{error.message}


              </pre>



              {
                error.line && (

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-400
                    "
                  >

                    <FileWarning size={15}/>

                    Line {error.line}

                  </div>

                )
              }


            </div>


          </div>

        )


        :


        (

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              h-full
              text-gray-500
              gap-3
            "
          >

            <Bug size={32}/>

            <p>
              No errors detected
            </p>


          </div>

        )

      }


    </div>

  );

}