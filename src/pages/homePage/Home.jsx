import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Actualizaciones from "./Actualizaciones.jsx";

const Home = () => {
    const [usuario, setUsuario] = useState(() => localStorage.getItem("usuario"));

    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        setUsuario(null);
    };

    return (
        <main>
            <h1 id="tituloPrincipal">
                {usuario
                    ? `¡Bienvenido, ${usuario}! Encuentra la mejor opción para estudiar`
                    : "Encuentra la mejor opción para estudiar"}
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
                {usuario ? (
                    <button
                        className="registrarse"
                        type="button"
                        onClick={cerrarSesion}
                    >
                        Cerrar sesión
                    </button>
                ) : (
                    <>
                        <Link to="/login" className="iniciarsesion">
                            Iniciar sesión
                        </Link>
                        <Link to="/registro" className="registrarse">
                            Registrarse
                        </Link>
                    </>
                )}
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
