// src/components/ui/Badge.jsx

export default function Badge({

  children,

  variant="default"

}) {


const styles={

default:
"bg-gray-800 text-gray-300 border-gray-700",


success:
"bg-green-500/10 text-green-400 border-green-500/30",


warning:
"bg-yellow-500/10 text-yellow-400 border-yellow-500/30",


danger:
"bg-red-500/10 text-red-400 border-red-500/30",


info:
"bg-blue-500/10 text-blue-400 border-blue-500/30"

};


return (

<span

className={`
px-3
py-1
rounded-full
border
text-xs
font-semibold

${styles[variant]}

`}

>

{children}

</span>

);

}