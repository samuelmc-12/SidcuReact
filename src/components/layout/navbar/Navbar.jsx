import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ()=> {
    return (
        <header>
            <nav className="navbar">
                <h1 className="logo">
                    <Link to="/home"><img id="logo1" src="/img/logo1.png" alt="Logo1" /><img id="logo2" src="/img/logo2.png" alt="Logo2" /></Link>
                </h1>
                <ul className="nav-links">
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/colaboradores">Colaboradores</Link></li>
                    <li><Link to="/carreras">Carreras</Link></li>
                    <li><Link to="/comparador">Comparador</Link></li>
                    <li><Link to="/test">Test Vocacional</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;