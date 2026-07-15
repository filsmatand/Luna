
import Parcours from "../page/Parcour"
import Hero from "../components/Hero";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";



export default function Home() {
  return (
   <main className="relative  overflow-hidden">
    
  <div className="relative z-10">
    <Hero/>
    <Parcours/>
  </div>

</main>
  );
}