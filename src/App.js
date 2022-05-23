import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
