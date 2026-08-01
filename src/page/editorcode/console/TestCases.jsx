import {
  CheckCircle2,
  XCircle,
  FlaskConical,
} from "lucide-react";


export default function TestCases({

  tests = []

}) {


  return (

    <div
      className="
        space-y-4
      "
    >


      {
        tests.length === 0 && (

          <div
            className="
              h-full
              flex
              flex-col
              items-center
              justify-center
              text-gray-500
              gap-3
            "
          >

            <FlaskConical size={32}/>

            <p>
              No test cases
            </p>


          </div>

        )
      }



      {
        tests.map((test,index)=>(


          <div
            key={index}

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
                justify-between
                px-4
                py-3
                bg-[#111827]
                border-b
                border-gray-800
              "
            >

              <span
                className="
                  text-white
                  font-semibold
                "
              >

                Test {index + 1}

              </span>



              {
                test.passed ?

                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                :

                <XCircle
                  size={18}
                  className="text-red-400"
                />

              }


            </div>



            {/* Body */}

            <div
              className="
                p-4
                space-y-3
                text-sm
              "
            >


              <div>

                <p className="text-gray-500">
                  Input
                </p>


                <code
                  className="
                    text-gray-200
                    font-mono
                  "
                >
                  {test.input}
                </code>

              </div>




              <div>

                <p className="text-gray-500">
                  Expected
                </p>


                <code
                  className="
                    text-blue-400
                    font-mono
                  "
                >
                  {test.expected}
                </code>

              </div>




              <div>

                <p className="text-gray-500">
                  Output
                </p>


                <code
                  className="
                    text-green-400
                    font-mono
                  "
                >
                  {test.output}
                </code>

              </div>


            </div>


          </div>


        ))
      }


    </div>

  );

}