import "./Carreras.css";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getApiData } from "../../services/api";
import { carreras as informacionLocal } from "../informacionCarrerasPage/CarrerasData";

const normalizar = (texto = "") =>
    texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

const buscarInformacionLocal = (nombreCarrera) =>
    Object.entries(informacionLocal).find(
        ([, informacion]) =>
            normalizar(informacion.nombre) === normalizar(nombreCarrera)
    );

const Carreras = () => {
    const [searchParams] = useSearchParams();
    const [busqueda, setBusqueda] = useState(searchParams.get("buscar") || "");
    const [carreras, setCarreras] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setBusqueda(searchParams.get("buscar") || "");
    }, [searchParams]);

    useEffect(() => {
        getApiData("/api/carreras")
            .then(setCarreras)
            .catch((error) => {
                console.error("Error al cargar carreras:", error);
                setError("No se pudieron cargar las carreras.");
            })
            .finally(() => setCargando(false));
    }, []);

    const carrerasFiltradas = carreras.filter((carrera) =>
        carrera.nombre?.toLowerCase().includes(busqueda.toLowerCase())
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
                {cargando ? (
                    <p>Cargando carreras...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : carrerasFiltradas.length > 0 ? (
                    carrerasFiltradas.map((carrera) => {
                        const [codigo, detalleLocal] =
                            buscarInformacionLocal(carrera.nombre) || [];

                        return (
                            <div className="carrera-card" key={carrera.id}>
                                <img
                                    src={detalleLocal?.imagen || "/img/vocacional.jpg"}
                                    alt={carrera.nombre}
                                />

                                <h3>{carrera.nombre}</h3>

                                <p>
                                    {detalleLocal?.descripcion ||
                                        `Área: ${carrera.area || "No especificada"}. Nivel: ${carrera.nivel || "No especificado"}.`}
                                    <br />
                                    <span>
                                        Duración:{" "}
                                        {detalleLocal?.duracion || "No especificada"}
                                    </span>
                                </p>

                                <Link
                                    to={`/informacion?carrera=${encodeURIComponent(
                                        codigo || carrera.id
                                    )}`}
                                    className="ver-detalle"
                                >
                                    Ver detalle
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <p>No se encontraron carreras.</p>
                )}
            </section>
        </main>
    );
};

export default Carreras;