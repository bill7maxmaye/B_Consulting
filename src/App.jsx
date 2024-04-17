import ScrollToTop from "./pages/ScrollToTop";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import OurServices from "./pages/OurServices";
import Marketing from "./pages/Marketing";
import Investment from "./pages/Investment";
import BusinessConsulting from "./pages/BusinessConsultancy";
import Footer from "./components/Footer";
import EmployeeTraining from "./pages/EmployeeTraining";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/investment" element={<Investment />}></Route>
        <Route path="/business" element={<BusinessConsulting />}></Route>
        <Route path="/employeeTraining" element={<EmployeeTraining />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
