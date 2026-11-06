
import "./Carreras.css";
import { useState } from "react";

const carreras = [
    {
        id: 1,
        codigo: "sis",
        nombre: "Ingeniería de Sistemas",
        descripcion: "Desarrollo de software, aplicaciones y sistemas informáticos.",
        duracion: "5 años"
    },
    {
        id: 2,
        codigo: "med",
        nombre: "Medicina",
        descripcion: "Estudio de la salud humana y el diagnóstico de enfermedades.",
        duracion: "6 años"
    },
    {
        id: 3,
        codigo: "psic",
        nombre: "Psicología",
        descripcion: "Estudio del comportamiento y los procesos mentales.",
        duracion: "5 años"
    },
    {
        id: 4,
        codigo: "eco",
        nombre: "Economía",
        descripcion: "Análisis financiero y económico.",
        duracion: "5 años"
    },
    {
        id: 5,
        codigo: "dis",
        nombre: "Diseño Gráfico",
        descripcion: "Creación de piezas visuales y comunicación gráfica.",
        duracion: "4 años"
    },
    {
        id: 6,
        codigo: "civ",
        nombre: "Ingeniería Civil",
        descripcion: "Diseño, construcción y gestión de infraestructuras.",
        duracion: "5 años"
    },
    {
        id: 7,
        codigo: "edu",
        nombre: "Licenciatura en Educación",
        descripcion: "Formación pedagógica para enseñar.",
        duracion: "5 años"
    }
];

const Carreras = () => {

    const [busqueda, setBusqueda] = useState("");

    const carrerasFiltradas = carreras.filter((carrera) =>
        carrera.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

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
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </section>

            <section className="carreras-lista">

                {carrerasFiltradas.length > 0 ? (

                    carrerasFiltradas.map((carrera) => (
                        <div className="carrera-card" key={carrera.id}>

                            <h3>{carrera.nombre}</h3>

                            <p>
                                {carrera.descripcion}
                                <br />
                                <span>Duración: {carrera.duracion}</span>
                            </p>

                            <a
                                href={`/informacion?carrera=${carrera.codigo}`}
                                className="ver-detalle"
                            >
                                Ver detalle
                            </a>

                        </div>
                    ))

                ) : (

                    <p>No se encontraron carreras.</p>

                )}

            </section>

        </main>
    );
};

export default Carreras;
