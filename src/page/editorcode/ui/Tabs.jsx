// src/components/ui/Tabs.jsx

export default function Tabs({

tabs=[],

active,

onChange

}) {


return (

<div

className="
flex
items-center
gap-2
border-b
border-gray-800
"

>


{

tabs.map((tab)=>(


<button

key={tab.id}

onClick={()=>onChange(tab.id)}

className={`
px-4
py-2
text-sm
rounded-t-lg
transition

${

active===tab.id

?

"bg-yellow-500 text-black font-semibold"

:

"text-gray-400 hover:text-white"

}

`}

>


{tab.label}


</button>


))

}


</div>


);


}