import ChallengeHeader from "./ChallengeHeader";
import ExampleCard from "./exemplecard";
import Constraints from "./constriants";

export default function ProblemDescription({
  challenge,
}) {
  return (
    <div className="
      h-full
      overflow-y-auto
      bg-[#111827]
      text-gray-200
    ">

      {/* Header du challenge */}
      <ChallengeHeader challenge={challenge} />


      <div className="p-6 space-y-8">

        {/* Description */}
        <section>
          <h2 className="
            text-lg
            font-bold
            text-white
            mb-3
          ">
            Description
          </h2>

          <p className="
            text-gray-300
            leading-7
            whitespace-pre-line
          ">
            {challenge.description}
          </p>
        </section>



        {/* Examples */}
        <section>

          <h2 className="
            text-lg
            font-bold
            text-white
            mb-4
          ">
            Examples
          </h2>


          <div className="space-y-4">

            {challenge.examples?.map(
              (example, index) => (

                <ExampleCard
                  key={index}
                  number={index + 1}
                  example={example}
                />

              )
            )}

          </div>

        </section>



        {/* Contraintes */}
        <section>

          <h2 className="
            text-lg
            font-bold
            text-white
            mb-3
          ">
            Constraints
          </h2>


          <Constraints
            constraints={challenge.constraints}
          />

        </section>


        {/* Hints */}
        {
          challenge.hints && (

            <section>

              <h2 className="
                text-lg
                font-bold
                text-white
                mb-3
              ">
                Hint
              </h2>


              <div className="
                rounded-lg
                bg-[#0f172a]
                border
                border-gray-800
                p-4
                text-gray-300
              ">

                {challenge.hints}

              </div>

            </section>

          )
        }


      </div>

    </div>
  );
}