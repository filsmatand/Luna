import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate()

  const Showlogin = ()=>{
    navigate("/register")
  }
  return (
    <button
      onClick={Showlogin}
      className="px-6 py-2 rounded-tr-full rounded-tl-full rounded-bl-full bg-blue-800 text-white hover:bg-white hover:text-black font-bold text-sm ">
      COMMENCER
    </button>
  );
}