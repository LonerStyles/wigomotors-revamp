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
        <Route path="/vehiculos" element={<Catalogo />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalle/:id" element={<Details />} />
        <Route path="/comparar" element={<Comparator />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/test-drive" element={<TestDrive />} />
      </Routes>
      <Footer />
    </>
  );
}