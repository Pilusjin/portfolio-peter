import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/home";
import ProjectDetail from "./pages/projectDetails";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other paths as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
