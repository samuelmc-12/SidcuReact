import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>
                    &copy; SIDCU - Simulador De Carreras Universitarias
                </p>
                <div className="footer-links">
                    <Link to="">Política de privacidad</Link>
                    <span>|</span>
                    <Link to="">Términos de uso</Link>
                    <span>|</span>
                    <Link to="">Contacto</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;