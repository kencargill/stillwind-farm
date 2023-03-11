import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import CsaPage from './pages/csaPage';
import HomePage from './pages/homePage';
import MarketCardPage from './pages/marketCardPage';
import AboutPage from './pages/aboutPage';
import ContactPage from "./pages/contactPage";
import ShopPage from "./pages/shopPage";
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from "./components/footer";

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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
