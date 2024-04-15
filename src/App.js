import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "font-awesome/css/font-awesome.css";
import About from "./components/About";
import "./App.css";
import "animate.css";
import Sliderprjcts from "./components/Sliderprjcts";
import Contactuspage from "./components/contactuspage";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/experience";
import Contactuspage2 from "./components/contactuspage2";
import Talkwithme from "./components/Talkwithme";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="myprofile/" element={<Home />} />
        <Route path="myprofile/about" element={<About />} />
        <Route path="myprofile/skills" element={<Skills />} />
        <Route path="myprofile/works" element={<Sliderprjcts />} />
        <Route path="myprofile/contact" element={<Contactuspage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
