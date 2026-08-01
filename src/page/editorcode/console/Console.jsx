import { useState } from "react";
import {
  Terminal,
  Bug,
  CheckCircle,
  Keyboard,
} from "lucide-react";

import Output from "./Output";
import ErrorPanel from "./ErrorPanel";
import TestCases from "./TestCases";
import CustomInput from "./CustomInput";


export default function Console() {

  const [activeTab, setActiveTab] = useState("output");


  const tabs = [
    {
      id: "output",
      name: "Output",
      icon: Terminal,
    },
    {
      id: "tests",
      name: "Test Cases",
      icon: CheckCircle,
    },
    {
      id: "errors",
      name: "Errors",
      icon: Bug,
    },
    {
      id: "input",
      name: "Custom Input",
      icon: Keyboard,
    },
  ];


  return (

    <div
      className="
        h-full
        flex
        flex-col
        bg-[#111827]
        border-t
        border-gray-800
      "
    >


      {/* Tabs */}
      <div
        className="
          h-12
          flex
          items-center
          gap-2
          px-4
          border-b
          border-gray-800
        "
      >

        {
          tabs.map((tab)=>{

            const Icon = tab.icon;


            return (

              <button
                key={tab.id}

                onClick={()=>setActiveTab(tab.id)}

                className={`
                  flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  transition

                  ${
                    activeTab === tab.id

                    ?

                    "bg-yellow-500 text-black font-semibold"

                    :

                    "text-gray-400 hover:text-white hover:bg-gray-800"

                  }
                `}
              >

                <Icon size={15}/>

                {tab.name}

              </button>

            )

          })
        }

      </div>



      {/* Content */}

      <div
        className="
          flex-1
          overflow-auto
          p-4
        "
      >

        {
          activeTab === "output" && (

            <Output />

          )
        }


        {
          activeTab === "tests" && (

            <TestCases />

          )
        }


        {
          activeTab === "errors" && (

            <ErrorPanel />

          )
        }


        {
          activeTab === "input" && (

            <CustomInput />

          )
        }


      </div>


    </div>

  );

}