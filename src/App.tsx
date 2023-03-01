import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import CsaPage from './components/csaPage';
import HomePage from './components/homePage';
import MarketCardPage from './components/marketCardPage';
import AboutPage from './components/aboutPage';
import ContactPage from "./components/contactPage";
import ShopPage from "./components/shopPage";
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/csa" element={<CsaPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/marketcard" element={<MarketCardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
