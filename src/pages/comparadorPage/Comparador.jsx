
import "./Comparador.css";
import { useState } from "react";

const carreras = [
    {
        id: 1,
        nombre: "Ingeniería de Sistemas",
        descripcion: "Desarrollo de software, aplicaciones y sistemas informáticos.",
        duracion: "5 años"
    },
    {
        id: 2,
        nombre: "Medicina",
        descripcion: "Estudio de la salud humana y el diagnóstico de enfermedades.",
        duracion: "6 años"
    },
    {
        id: 3,
        nombre: "Psicología",
        descripcion: "Estudio del comportamiento y los procesos mentales.",
        duracion: "5 años"
    },
    {
        id: 4,
        nombre: "Administración de Empresas",
        descripcion: "Gestión y dirección de organizaciones y negocios.",
        duracion: "4 años"
    },
    {
        id: 5,
        nombre: "Diseño Gráfico",
        descripcion: "Creación de piezas visuales y comunicación gráfica.",
        duracion: "4 años"
    },
    {
        id: 6,
        nombre: "Economía",
        descripcion: "Estudio de los recursos, mercados y actividades económicas.",
        duracion: "4 años"
    }
];

const Comparador = () => {

    const [carreraA, setCarreraA] = useState("");
    const [carreraB, setCarreraB] = useState("");
    const [carreraC, setCarreraC] = useState("");

    const [mostrarResultado, setMostrarResultado] = useState(false);

    const comparar = (e) => {
        e.preventDefault();

        if (!carreraA || !carreraB) {
            alert("Selecciona al menos dos carreras para comparar.");
            return;
        }

        if (
            carreraA === carreraB ||
            carreraA === carreraC ||
            (carreraB === carreraC && carreraC !== "")
        ) {
            alert("Selecciona carreras diferentes.");
            return;
        }

        setMostrarResultado(true);
    };

    const restablecer = () => {
        setCarreraA("");
        setCarreraB("");
        setCarreraC("");
        setMostrarResultado(false);
    };

    return (
        <main className="comparador-main">

            <section className="comparador-intro">
                <h1>Comparador de Carreras</h1>

                <p>
                    Selecciona hasta tres carreras en los menús
                    desplegables.
                </p>
            </section>

            <section
                className="comparador-controls"
                aria-label="Seleccionar carreras para comparar"
            >

                <form
                    className="comparador-form"
                    onSubmit={comparar}
                    noValidate
                >

                    <div className="selector-row">

                        <div className="selector-group">
                            <label htmlFor="selectA">
                                Carrera A
                            </label>

                            <select
                                id="selectA"
                                value={carreraA}
                                onChange={(e) => {
                                    setCarreraA(e.target.value);
                                    setMostrarResultado(false);
                                }}
                            >
                                <option value="">
                                    -- Seleccionar carrera --
                                </option>

                                {carreras.map((carrera) => (
                                    <option
                                        key={carrera.id}
                                        value={carrera.id}
                                    >
                                        {carrera.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="selector-group">
                            <label htmlFor="selectB">
                                Carrera B
                            </label>

                            <select
                                id="selectB"
                                value={carreraB}
                                onChange={(e) => {
                                    setCarreraB(e.target.value);
                                    setMostrarResultado(false);
                                }}
                            >
                                <option value="">
                                    -- Seleccionar carrera --
                                </option>

                                {carreras.map((carrera) => (
                                    <option
                                        key={carrera.id}
                                        value={carrera.id}
                                    >
                                        {carrera.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="selector-group">
                            <label htmlFor="selectC">
                                Carrera C (opcional)
                            </label>

                            <select
                                id="selectC"
                                value={carreraC}
                                onChange={(e) => {
                                    setCarreraC(e.target.value);
                                    setMostrarResultado(false);
                                }}
                            >
                                <option value="">
                                    -- Seleccionar carrera --
                                </option>

                                {carreras.map((carrera) => (
                                    <option
                                        key={carrera.id}
                                        value={carrera.id}
                                    >
                                        {carrera.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="form-actions">

                        <button
                            type="submit"
                            className="comparar-button"
                        >
                            Comparar
                        </button>

                        <button
                            type="button"
                            className="reset-button"
                            onClick={restablecer}
                        >
                            Restablecer
                        </button>

                    </div>

                </form>

            </section>

            {mostrarResultado && (

                <section className="resultado-comparador">

                    <h2>Carreras seleccionadas</h2>

                    <div className="resultado-lista">

                        {carreras
                            .filter((carrera) =>
                                carrera.id == carreraA ||
                                carrera.id == carreraB ||
                                carrera.id == carreraC
                            )
                            .map((carrera) => (

                                <div
                                    className="carrera-comparada"
                                    key={carrera.id}
                                >

                                    <h3>{carrera.nombre}</h3>

                                    <p>
                                        <strong>Descripción:</strong>{" "}
                                        {carrera.descripcion}
                                    </p>

                                    <p>
                                        <strong>Duración:</strong>{" "}
                                        {carrera.duracion}
                                    </p>

                                </div>

                            ))}

                    </div>

                </section>

            )}

        </main>
    );
};

export default Comparador;
