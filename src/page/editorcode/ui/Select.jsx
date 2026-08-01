// src/components/ui/Select.jsx

import {
ChevronDown
} from "lucide-react";


export default function Select({

value,

onChange,

options=[],

placeholder="Select"

}) {


return (

<div
className="
relative
"
>


<select

value={value}

onChange={(e)=>onChange(e.target.value)}

className="
appearance-none
bg-[#111827]
border
border-gray-700
text-white
rounded-lg
px-4
pr-10
h-10
outline-none
cursor-pointer
hover:border-yellow-500
"

>


<option value="">

{placeholder}

</option>


{

options.map((option)=>(

<option

key={option.value}

value={option.value}

>

{option.label}


</option>

))

}


</select>


<ChevronDown

size={16}

className="
absolute
right-3
top-1/2
-translate-y-1/2
text-gray-400
pointer-events-none
"

/>


</div>

);


}