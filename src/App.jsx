import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Home.jsx";
import Services from "./assets/Service.jsx";
import Gallery from "./assets/Gallery.jsx";
import About from "./assets/About.jsx";
import Contact from "./assets/Contact.jsx";
import Navbar from "./assets/Navbar.jsx";
// import OwnerLogin from "./Components/OwnerLogin.jsx";
// import Dashboard from "./Components/Dashboard.jsx";
// Global styles are imported from main entry (`main.jsx`) so no extra global import here.

function App() {
  return (
    <Router>
      <Navbar />
      {/* <OwnerLogin />
      <Dashboard /> */}
      <main style={{ paddingTop: 72 }}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer style={{ padding: 24, textAlign: 'center', color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Anshika beauty parlour — Professional beauty &amp; bridal services
      </footer>
    </Router>
  );
}

export default App;
