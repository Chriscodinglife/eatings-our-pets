import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function App() {
  console.log(import.meta.env.VITE_BACKEND);
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
