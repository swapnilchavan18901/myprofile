import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Talkwithme from "./components/Talkwithme";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import "animate.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Talkwithme />
      <Projects />
    </div>
  );
}

export default App;
