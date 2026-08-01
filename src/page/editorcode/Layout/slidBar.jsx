import {
    Home,
    Code2,
    BookOpen,
    Star,
    Settings
} from "lucide-react";

export default function Sidebar(){

    return(

<div className="w-16 bg-[#111827] border-r border-gray-800 flex flex-col items-center py-6 gap-6">

<Home className="text-gray-400 hover:text-white cursor-pointer"/>

<BookOpen className="text-gray-400 hover:text-white cursor-pointer"/>

<Code2 className="text-gray-400 hover:text-white cursor-pointer"/>

<Star className="text-gray-400 hover:text-white cursor-pointer"/>

<Settings className="text-gray-400 hover:text-white cursor-pointer"/>

</div>

    )

}