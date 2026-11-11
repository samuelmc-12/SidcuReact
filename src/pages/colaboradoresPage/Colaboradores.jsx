import { useEffect, useState } from "react";
import "./Colaboradores.css";
import { obtenerUniversidades } from "../../services/universidadService";

const imagenesUniversidad = {
  "Universidad de los Andes": "/img/andes.jpg",
  "Pontificia Universidad Javeriana": "/img/javeriana.jpg",
  "Universidad Nacional de Colombia - Sede Medellín": "/img/nacional.jpg",
  "Universidad EAFIT": "/img/eafit.jpg",
  "Universidad del Valle": "/img/uvalle.jpg",
  "CESDE": "/img/cesde.jpg",
  "Universidad de Antioquia": "/img/unidantioquia.jpg",
  "Instituto Tecnológico Metropolitano": "/img/itm.jpg",
};

const obtenerLogoUniversidad = (nombre) => {
  const clave = String(nombre ?? "").trim();
  return imagenesUniversidad[clave] ?? "/img/unilogo.jpg";
};

const Colaboradores = () => {
  const [universidades, setUniversidades] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarUniversidades = async () => {
      try {
        const datos = await obtenerUniversidades();
        setUniversidades(datos);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las universidades.");
      } finally {
        setCargando(false);
      }
    };

    cargarUniversidades();
  }, []);

  if (cargando) {
    return (
      <main>
        <p>Cargando universidades...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main>
      <section className="colaboradores-intro">
        <h1>Universidades Colaboradoras de SIDCU</h1>
        <p>
          Nos enorgullece contar con el apoyo y la colaboración de importantes
          instituciones educativas de Colombia. Juntos construimos mejores
          oportunidades académicas para los jóvenes.
        </p>
      </section>

      <section className="universidades-lista">
        {universidades.map((universidad) => (
          <div className="universidad" key={universidad.id}>
            <img
              src={obtenerLogoUniversidad(universidad.nombre)}
              alt={`Logo de ${universidad.nombre}`}
            />

            <h2>{universidad.nombre}</h2>
            <p>{universidad.ciudad}</p>

            {universidad.tipo && <p>{universidad.tipo}</p>}

            {universidad.ubicacion?.direccion && (
              <p>{universidad.ubicacion.direccion}</p>
            )}

            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                universidad.nombre
              )}`}
              target="_blank"
              rel="noreferrer"
              className="ver-mas"
            >
              Ver más
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Colaboradores;