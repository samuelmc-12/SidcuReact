import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ()=> {
    return (
        <header>
            <nav class="navbar">
                <h1 class="logo">
                    <Link to="/home"><span class="bold">SID</span><span class="purple">CU</span></Link>
                </h1>
                <ul class="nav-links">
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