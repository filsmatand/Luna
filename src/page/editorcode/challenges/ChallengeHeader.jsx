import {
  Clock3,
  Database,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";

import Tags from "./tags";


export default function ChallengeHeader({ challenge }) {


  const difficultyColors = {

    Easy:
    "bg-green-500/15 text-green-400 border-green-500/30",


    Medium:
    "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",


    Hard:
    "bg-red-500/15 text-red-400 border-red-500/30",

  };



  return (


<div

className="
border-b
border-gray-800
bg-[#111827]
px-4
sm:px-6
py-4
sm:py-5
"

>



{/* Header top */}

<div

className="
flex
flex-col
md:flex-row
md:items-start
md:justify-between
gap-4
"

>




{/* Informations challenge */}

<div

className="
min-w-0
"

>


<h1

className="
text-xl
sm:text-2xl
font-bold
text-white
truncate
"

>

{challenge.title}


</h1>





<div

className="
mt-3
flex
flex-wrap
items-center
gap-2
sm:gap-3
"

>



<span

className={`

rounded-full

border

px-2.5
sm:px-3

py-1

text-xs
sm:text-sm

font-semibold

${difficultyColors[challenge.difficulty]}

`}

>

{challenge.difficulty}


</span>







<div

className="
flex
items-center
gap-1.5
text-xs
sm:text-sm
text-gray-400
"

>

<Clock3 size={14}/>

<span>

{challenge.timeLimit}

</span>


</div>







<div

className="
flex
items-center
gap-1.5
text-xs
sm:text-sm
text-gray-400
"

>

<Database size={14}/>

<span>

{challenge.memoryLimit}

</span>


</div>




</div>



</div>









{/* Actions */}

<div

className="
flex
items-center
gap-2
self-start
"

>



<button

className="
rounded-lg
border
border-gray-700
p-2
hover:border-yellow-500
hover:text-yellow-400
text-gray-400
transition
"

>

<Heart size={16}/>

</button>





<button

className="
rounded-lg
border
border-gray-700
p-2
hover:border-yellow-500
hover:text-yellow-400
text-gray-400
transition
"

>

<Bookmark size={16}/>

</button>






<button

className="
rounded-lg
border
border-gray-700
p-2
hover:border-yellow-500
hover:text-yellow-400
text-gray-400
transition
"

>

<Share2 size={16}/>

</button>



</div>





</div>








{/* Tags */}


<div

className="
mt-4
sm:mt-5
overflow-x-auto
"

>


<Tags

tags={challenge.tags}

/>


</div>





</div>


  );

}