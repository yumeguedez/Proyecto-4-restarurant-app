import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ReservaPage from "../pages/ReservaPage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/reserva" element={<ReservaPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
