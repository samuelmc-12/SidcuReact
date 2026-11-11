
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

function App() {
    const { pathname } = useLocation();
    const ocultarLayout = ["/login", "/registro"].includes(pathname);

    return (
        <div>
            <ScrollToTop />

            {!ocultarLayout && <Navbar />}
            <Outlet />
            {!ocultarLayout && <Footer />}
        </div>
    );
}

export default App;
