import Navbar from "../components/navbar";
import Parcours from "../page/Parcour"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
   <main className="relative min-h-screen overflow-hidden">

  <div className="absolute inset-0">
    <DotLottieReact
      src="https://lottie.host/5c710e83-3f3b-4dd7-a807-1e6a519d8d48/thdfoN6Ust.json"
      autoplay
      loop
      className="w-[800px] h-full"
    />
  </div>

  <div className="relative z-10">
    <Navbar />
    <Parcours/>
  </div>

</main>
  );
}