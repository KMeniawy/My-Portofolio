import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyServices from "./components/MyServices";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="bg-white text-gray-800">
      {/* header */}
      <Header/>
      {/* about */}
      <About/>
      {/* resume */}
      <Resume/>
      {/* my services */}
      <MyServices/>
      {/* skills */}
      <Skills/>
      {/* contact me */}
      <Contact/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
