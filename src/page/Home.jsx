import Navbar from "../components/navbar";
import Parcours from "../page/Parcour"
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
   <main className="relative overflow-hidden">

  

  <div className="relative z-10">
    <Navbar />
    <Parcours/>
  </div>

</main>
  );
}