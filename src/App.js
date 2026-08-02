import { Routes, Route } from "react-router-dom";
import Analytics from "./Analytic";

import { useState, useEffect } from "react";

import Layout from "./Layout/Layout";

import ImpactSection from "./page/Home";
import Login from "./page/Login/Login";
import Register from "./page/Login/Register";

import Data from "./page/Parcour";
import ResourceCourceFrontend from "./page/Software_developer/Frontend/ResourceCourceFrontend";
import Fondamentaux from "./page/Software_developer/Frontend/Fondamentaux";
import Intermediaire from "./page/Software_developer/Fullstack/ResourceCourceFullstack";

import Question from "./page/QuestionSectin";
import Quiz from "./page/Software_developer/Frontend/Quiz/QuizFondamentaux";
import HtmlCss from "./page/Software_developer/Frontend/HtmlCss";
import Cours from "./page/Cours"
import Roadmapfrontend from "./page/RoadmapPage/Roadmapfrontend"
import Roadmapbackend from "./page/RoadmapPage/RoadmapBackend"
import Roadmapfullstack from "./page/RoadmapPage/RoadmapFullstack"
import Javascript from "./page/Software_developer/Frontend/JavaScript"
import Github from "./page/Software_developer/Frontend/github"
import Tailwindcss from "./page/Software_developer/Frontend/tailwindRapide"
import IntroBaseDeDonnee from "./page/Software_developer/Frontend/IntroBaseDedonnee"
import ResourceCoursBackend from "./page/Software_developer/Backend/ResourceCoursBackend"
import ResourceCoursFullstack from "./page/Software_developer/Fullstack/ResourceCourceFullstack"
import Google from "./page/CompagnieQustions/google/google"
import Amazon from "./page/CompagnieQustions/Amazon/amazon";
import Meta from "./page/CompagnieQustions/Meta/meta";
import Apple from "./page/CompagnieQustions/Apple/Apple";
import Microsoft from "./page/CompagnieQustions/Microsoft/Microsoft";

import Reactintermediaire from "./page/Software_developer/Frontend/Intermediaire/ReactIntermediare";
import BaseTypeScript from "./page/Software_developer/Frontend/Intermediaire/BaseTypescript";
import NodeJsIntermediare from "./page/Software_developer/Frontend/Intermediaire/Nodejs&Expess";
import CloudawsIntermediare from "./page/Software_developer/Frontend/Intermediaire/cloudaws";

import LunaLoadingScreen from './page/LunaLoadingScreen';




export default function App() {

   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Le chargement s'arrête après 4.5 secondes (temps de l'animation)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LunaLoadingScreen />;
  }

  return (
    <>
      <Analytics />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ImpactSection />} />
          <Route path="/data" element={<Data />} />
          <Route path="/resourcecourcefrontend" element={<ResourceCourceFrontend />} />
          <Route path="/fondamentaux" element={<Fondamentaux />} />
          <Route path="/intermediaire" element={<Intermediaire />} />
          <Route path="question" element={<Question />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="htmlcss" element={<HtmlCss />} />
          <Route path="cours" element = {<Cours />}/>
          <Route path="roadmapfrontend" element ={<Roadmapfrontend/>}/>
          <Route path="roadmapbackend" element ={<Roadmapbackend/>}/>
          <Route path="roadmapfullstack" element ={<Roadmapfullstack/>}/>
          <Route path="javascript" element ={<Javascript/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path ="/github" element = {<Github/>} />
          <Route path ="/tailwindcss" element = {<Tailwindcss/>}/>
          <Route path = "/introbase" element = {<IntroBaseDeDonnee/>}/>
          <Route path = "/resourcecourcesbackend" element = {<ResourceCoursBackend/>}/>
          <Route path = "/resourcecoursfullstack" element = {<ResourceCoursFullstack/>}/>


          <Route path ="/google" element = {<Google/>} />
          <Route path ="/amazon" element = {<Amazon/>} />
          <Route path ="/meta" element = {<Meta/>} />
          <Route path ="/apple" element = {<Apple/>} />
          <Route path ="/microsoft" element = {<Microsoft/>} />

          <Route path ="/reactintermediaire" element = {<Reactintermediaire/>} />
          <Route path ="/basetypescript" element = {<BaseTypeScript/>} />
          <Route path ="/nodejsintermediaire" element = {<NodeJsIntermediare/>} />
          <Route path ="/cloudawsintermediaire" element = {<CloudawsIntermediare/>} />

        </Route>
      </Routes>
    </>
  );
}
