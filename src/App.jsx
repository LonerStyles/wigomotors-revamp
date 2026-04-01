import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Favoritos from "./pages/Favoritos";
import Details from "./pages/Details";
import Comparator from "./pages/Comparator";
import Contacto from "./pages/Contacto";
import TestDrive from "./pages/TestDrive";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Comparator" element={<Comparator />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/TestDrive" element={<TestDrive />} />
      </Routes>
      <Footer />
    </>
  );
}
