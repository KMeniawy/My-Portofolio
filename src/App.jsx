import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyServices from "./components/MyServices";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import 'animate.css';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration:1800,
    offset:0,
  });
  return (
    <div className="bg-white text-gray-800">
      <Header/>
      <div className="flex gap-2 flex-col">
      <About/>
      <Resume/>
      <MyServices/>
      <Skills/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
