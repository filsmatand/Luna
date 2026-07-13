import { Routes, Route } from "react-router-dom";

import Layout from "../src/Layout/Layout";

import ImpactSection from "../src/page/Home";
import Software from "../src/page/Software_developer/software";
import Data from "../src/page/Parcour";
import Debutant from "../src/page/Software_developer/Debutant"
import Fondamentaux from "./page/Software_developer/Fondamentaux";
import Intermediaire from "./page/Software_developer/Intermediaire";
import Expert from "../src/page/Software_developer/Expert"


export default function App(){

return (

<Routes>
    <Route element={<Layout/>}>
    <Route path="/"element={<ImpactSection/>}/>
    <Route path="/software"element={<Software/>}/>
    <Route path="/data"element={<Data/>}/>
    <Route path ="/debutant" element={<Debutant/>}/>
    <Route path = "/fondamentaux" element = {<Fondamentaux/>}/>
    <Route path="/intermediaire" element = {<Intermediaire/>}/>
    <Route path="/expert" element = {<Expert/>}/>

  </Route>
</Routes>

)}