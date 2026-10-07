import "./Comparador.css";
import { useEffect, useState } from "react";
import { obtenerCarreras } from "../../services/carreraService";

const Comparador = () => {

    const [carreras, setCarreras] = useState([]);
    const [carreraA, setCarreraA] = useState("");
    const [carreraB, setCarreraB] = useState("");
    const [carreraC, setCarreraC] = useState("");

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const cargarCarreras = async () => {

            try {

                const datos = await obtenerCarreras();

                setCarreras(datos);

            } catch (error) {

                setError("No se pudieron cargar las carreras");

            } finally {

                setCargando(false);

            }

        };

        cargarCarreras();

    }, []);


    const comparar = (e) => {

        e.preventDefault();

        console.log("Carrera A:", carreraA);
        console.log("Carrera B:", carreraB);
        console.log("Carrera C:", carreraC);

    };


    const restablecer = () => {

        setCarreraA("");
        setCarreraB("");
        setCarreraC("");

    };


    if (cargando) {

        return (
            <main className="comparador-main">
                <p>Cargando carreras...</p>
            </main>
        );

    }


    if (error) {

        return (
            <main className="comparador-main">
                <p>{error}</p>
            </main>
        );

    }


    return (

        <main className="comparador-main">

            <section className="comparador-intro">

                <h1>Comparador de Carreras</h1>

                <p>
                    Selecciona hasta tres carreras en los menús desplegables.
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


                        {/* CARRERA A */}

                        <div className="selector-group">

                            <label htmlFor="selectA">
                                Carrera A
                            </label>

                            <select
                                id="selectA"
                                name="carreraA"
                                value={carreraA}
                                onChange={(e) => setCarreraA(e.target.value)}
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


                        {/* CARRERA B */}

                        <div className="selector-group">

                            <label htmlFor="selectB">
                                Carrera B
                            </label>

                            <select
                                id="selectB"
                                name="carreraB"
                                value={carreraB}
                                onChange={(e) => setCarreraB(e.target.value)}
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


                        {/* CARRERA C */}

                        <div className="selector-group">

                            <label htmlFor="selectC">
                                Carrera C (opcional)
                            </label>

                            <select
                                id="selectC"
                                name="carreraC"
                                value={carreraC}
                                onChange={(e) => setCarreraC(e.target.value)}
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


            {/* RESULTADO DE LA COMPARACIÓN */}

            {(carreraA || carreraB || carreraC) && (

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

                                    <h3>
                                        {carrera.nombre}
                                    </h3>

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

