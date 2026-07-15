import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
// import Hero from "../components/Hero";
import Footer from "../page/Footer"

export default function Layout(){

  return (
    <>
      <Navbar />

      {/* Toujours présent */}
      {/* <Hero /> */}


      {/* Les pages changent ici */}
      <Outlet />

      <Footer/>

    </>
  );
}