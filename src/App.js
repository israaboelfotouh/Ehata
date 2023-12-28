import "./App.css";
import "./contacts.css";
import "./services.css";
import "./form.css";
import "./yourService.css";
import "./navbar.css";
import "./departments.css";
import "./vission.css";
import "./orderservices.css";
import "./footer.css";
import "./MediaQuery/Medianav.css";
import "./about.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import About from "./About";
import Contacts from "./Contacts";
import Services from "./Services";
import YourService from "./YourService";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/yourservices" element={<YourService />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
