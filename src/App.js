import { Routes, Route } from "react-router-dom";
import Analytics from "./Analytic";

import Layout from "./Layout/Layout";

import ImpactSection from "./page/Home";
import Software from "./page/Software_developer/software";
import Data from "./page/Parcour";
import Debutant from "./page/Software_developer/Debutant/Debutant";
import Fondamentaux from "./page/Software_developer/Debutant/Fondamentaux";
import Intermediaire from "./page/Software_developer/Intermediaire";
import Expert from "./page/Software_developer/Expert";
import ResourcesGrid from "./page/ResourceGrid";
import Question from "./page/Question"
import Quiz from "./page/Software_developer/Debutant/Quiz/QuizFondamentaux";
import HtmlCss from "./page/Software_developer/Debutant/HtmlCss";



export default function App() {
  return (
    <>
      <Analytics />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ImpactSection />} />
          <Route path="/software" element={<Software />} />
          <Route path="/data" element={<Data />} />
          <Route path="/debutant" element={<Debutant />} />
          <Route path="/fondamentaux" element={<Fondamentaux />} />
          <Route path="/intermediaire" element={<Intermediaire />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/resourcegrid" element = {<ResourcesGrid/>} />
          <Route path="question" element = {<Question/>}/>
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="htmlcss" element = {<HtmlCss/>} />
        </Route>
      </Routes>
    </>
  );
}