import { Routes, Route } from "react-router-dom";
import Analytics from "./Analytic";

import Layout from "./Layout/Layout";

import ImpactSection from "./page/Home";
import Software from "./page/Software_developer/software";
import Data from "./page/Parcour";
import Debutant from "./page/Software_developer/Debutant";
import Fondamentaux from "./page/Software_developer/Fondamentaux";
import Intermediaire from "./page/Software_developer/Intermediaire";
import Expert from "./page/Software_developer/Expert";

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
        </Route>
      </Routes>
    </>
  );
}