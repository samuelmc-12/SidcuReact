import './Home.css';
import Actualizaciones from './Actualizaciones.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <h1 id="tituloPrincipal">
                Encuentra la mejor opción para estudiar
            </h1>

            <div className="botones">
                <button>PreGrado</button>
                <button>PostGrado</button>
                <button>Técnico</button>
            </div>

            <div className="buscador">
                <input type="text" placeholder="Buscar una carrera" />
                <button className="buscar">Buscar</button>
            </div>

            <div className="registro">
                <Link to="login"><button className="iniciarsesion">Iniciar sesión</button></Link>
                <Link to="registro"><button className="registrarse">Registrarse</button></Link>
            </div>

            <Actualizaciones />

            <section className="suscripcion">
                <h3>Sé el primero en enterarte</h3>

                <p>
                    ¿Deseas que te informemos por correo sobre oportunidades
                    de carreras o universidades que guardaste en la búsqueda?
                </p>

                <div className="suscripcion-form">
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                    />
                    <button className="suscribirse">Suscribirse</button>
                </div>
            </section>
        </main>
    );
};

export default Home;
