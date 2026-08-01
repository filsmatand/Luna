import { ListChecks } from "lucide-react";

export default function Constraints({
  constraints = [],
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-gray-800
        bg-[#0f172a]
        p-5
      "
    >

      {/* Header */}
      <div
        className="
          flex
          items-center
          gap-2
          mb-4
        "
      >
        <ListChecks
          size={18}
          className="text-yellow-400"
        />

        <h3
          className="
            text-white
            font-semibold
          "
        >
          Constraints
        </h3>

      </div>

      {/* Liste des contraintes */}
      <ul
        className="
          space-y-3
          text-gray-300
          text-sm
        "
      >

        {
          constraints.map(
            (constraint, index) => (

              <li
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                <span
                  className="
                    mt-2
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-yellow-500
                    shrink-0
                  "
                />


                <code
                  className="
                    font-mono
                    text-gray-200
                  "
                >
                  {constraint}
                </code>


              </li>

            )
          )
        }

      </ul>


    </div>
  );
}