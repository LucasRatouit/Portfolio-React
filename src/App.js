import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home/Home.js";
import Resume from "./components/Resume/Resume.js";
import CV from "./components/CV/CV.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Moi" element={<Resume />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Contacter" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
