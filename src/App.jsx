import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import "./index.css"
import Footer from "./components/layout/footer/footer";


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
