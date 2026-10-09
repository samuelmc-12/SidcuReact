import "./Carreras.css";
import { useEffect, useState } from "react";
import { obtenerCarreras } from "../../services/carreraService";

const Carreras = () => {

    const [carreras, setCarreras] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const cargarCarreras = async () => {
            try {
                const datos = await obtenerCarreras();
                console.log("CARRERAS:", datos);
                setCarreras(datos);
            } catch (error) {
                console.error(error);
                setError("No se pudieron cargar las carreras...");
            } finally {
                setCargando(false);
            }
        };

        cargarCarreras();

    }, []);

    if (cargando) {
        return <p>Cargando carreras...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (

        <main>

            <section className="carreras-intro">
                <h1>Explora Carreras Universitarias en Colombia</h1>

                <p>
                    Encuentra información sobre programas académicos,
                    requisitos, duración y las mejores universidades
                    para cada carrera.
                </p>
            </section>


            <section className="busqueda-carrera">

                <input
                    type="text"
                    placeholder="Buscar una carrera..."
                    className="carrera-busqueda-input"
                />

                <button className="carrera-busqueda-btn">
                    Buscar
                </button>

            </section>


            <section className="areas-carreras">

                <h2>Áreas de Estudio</h2>

                <div className="area-tabs">

                    <button>Ingeniería</button>
                    <button>Salud</button>
                    <button>Ciencias Sociales</button>
                    <button>Arte y Diseño</button>
                    <button>Ciencias Básicas</button>
                    <button>Economía y Negocios</button>
                    <button>Educación</button>

                </div>

            </section>


            <section className="carreras-lista">

                {carreras.map((carrera) => (

                    <div
                        className="carrera-card"
                        key={carrera.id}
                    >

                        <h3>
                            {carrera.nombre}
                        </h3>

                        <p>
                            {carrera.descripcion}
                            <br />

                            <span>
                                Duración: {carrera.duracion}
                            </span>
                        </p>

                        <a
                            href="#"
                            className="ver-detalle"
                        >
                            Ver detalle
                        </a>

                    </div>

                ))}

            </section>

        </main>

    );
};

export default Carreras;

