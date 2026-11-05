import "./Carreras.css";

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
    }
];

const Carreras = () => {

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

