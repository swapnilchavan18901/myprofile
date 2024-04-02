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
import LoadAvatar from "./components/loadavatar";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/experience";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Sliderprjcts />} />
        <Route path="/contact" element={<Contactuspage />} />
        <Route path="/avatar" element={<LoadAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
