import './Home.css';
import Actualizaciones from './Actualizaciones';

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
                <button className="iniciarsesion">Iniciar sesión</button>
                <button className="registrarse">Registrarse</button>
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
