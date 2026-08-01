
import Parcours from "../page/Parcour"
import Hero from "../components/Hero";

import FeaturesSection from "../page/Imporent";
import CompanyQuestionsSection from "./CompagnieQustions/CompagniesQuestions";



export default function Home() {
  return (
   <main className=" bg-slate-950  overflow-hidden">
    
  <div className=" bg-slate-950 z-10">
    <Hero/>
    <Parcours/>
    <FeaturesSection/>
    <CompanyQuestionsSection/>
  </div>

</main>
  );
}