import { Link } from "react-router-dom";
import "./Test.css";

const Test = () => {
    return (
        <main className="tests-main">
            <section className="tests-intro">
                <h1>Tests Disponibles</h1>
                <p>Explora nuestros tests: selecciona el que más te interese.</p>
            </section>

            <section className="tests-lista" aria-label="Lista de tests">
                <article className="test-card">
                    <img src="./img/autoestima.jpg" alt="" className="test-img" />
                    <h2>Test de Autoestima</h2>
                    <p className="test-desc">
                        Reflexiona sobre cómo reconoces tus cualidades y te tratas en distintas situaciones.
                    </p>
                    <div className="test-actions">
                        <Link className="test-btn" to="/autoestima">
                            Iniciar Test
                        </Link>
                    </div>
                </article>

                <article className="test-card">
                    <img src="./img/actitud.jpg" alt="" className="test-img" />
                    <h2>Test de Actitud</h2>
                    <p className="test-desc">
                        Reflexiona sobre cómo enfrentas retos, colaboras y te organizas en diferentes actividades.
                    </p>
                    <div className="test-actions">
                        <Link className="test-btn" to="/actitud">
                            Iniciar Test
                        </Link>
                    </div>
                </article>

                <article className="test-card">
                    <img src="./img/aptitud.jpg" alt="" className="test-img" />
                    <h2>Test de Aptitud</h2>
                    <p className="test-desc">
                        Resuelve ejercicios breves de razonamiento verbal, numérico y lógico.
                    </p>
                    <div className="test-actions">
                        <Link className="test-btn" to="/aptitud">
                            Iniciar Test
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Test;