import { useState } from "react";

import EditorToolbar from "../editorcode/Editor/EditorToolbar";
import Sidebar from "../editorcode/Layout/slidBar";
import SplitLayout from "../editorcode/challenges/splitelayout";
import CodeEditor from "./CodeEditor";

import ProblemDescription from "../editorcode/challenges/ProblemDescription";
import Console from "../editorcode/console/Console";

import { challenges } from "../editorcode/data/challenges";


export default function Challenge(){


const challenge = challenges[0];


const [language,setLanguage] = useState(
    "javascript"
);


const [theme,setTheme] = useState(
    "DevSchool"
);



return(

<div
className="
h-screen
w-full
flex
flex-col
overflow-hidden
bg-[#0B1120]
"
>



{/* Toolbar */}

<div className="shrink-0">

<EditorToolbar

onLanguageChange={setLanguage}

onThemeChange={setTheme}

/>

</div>





{/* Workspace */}

<div

className="
flex
flex-1
min-h-0
overflow-hidden
"

>



{/* Sidebar Desktop */}

<div

className="
hidden
md:block
shrink-0
"

>

<Sidebar/>

</div>





{/* Main */}

<div

className="
flex-1
min-w-0
min-h-0
"

>



<SplitLayout




left={


<div

className="
h-full
bg-[#111827]
overflow-y-auto
"

>

<ProblemDescription

challenge={challenge}

/>


</div>


}





center={


<div

className="
h-full
flex
flex-col
bg-[#0f172a]
min-h-0
"

>



{/* Editor */}

<div

className="
flex-1
min-h-0
"

>


<CodeEditor

language={language}

theme={theme}

/>


</div>





{/* Console */}

<div

className="
h-52
sm:h-64
border-t
border-gray-800
"

>


<Console/>


</div>



</div>


}





right={



<div

className="
h-full
bg-[#111827]
p-4
overflow-y-auto
"

>


<h2

className="
text-white
font-bold
mb-4
"

>

Test Cases

</h2>




{

challenge.tests?.map((test,index)=>(


<div

key={index}

className="
mb-3
p-3
rounded-lg
bg-[#0f172a]
border
border-gray-800
"

>


<p

className="
text-gray-400
text-sm
"

>

Test {index+1}

</p>



<code

className="
text-green-400
text-sm
break-all
"

>

{test.input}


</code>



</div>


))


}



</div>


}



/>

</div>


</div>


</div>


)

}