import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestCuestionario.css";

const preguntas = [
    "Cuando aparece un problema, intento buscar una solución antes de rendirme.",
    "Me siento cómodo/a colaborando con otras personas para alcanzar una meta.",
    "Si recibo una crítica, trato de analizarla y aprender de ella.",
    "Puedo organizar mis tareas para cumplir con mis responsabilidades.",
    "Me animo a participar aunque la actividad sea nueva para mí.",
    "Cuando algo no sale como esperaba, puedo volver a intentarlo.",
    "Escucho las ideas de otras personas aunque sean distintas a las mías.",
    "Pido ayuda cuando la necesito para avanzar en una tarea.",
];

const opciones = [
    { texto: "Casi nunca", valor: 1 },
    { texto: "A veces", valor: 2 },
    { texto: "Casi siempre", valor: 3 },
    { texto: "Siempre", valor: 4 },
];

function interpretar(puntaje) {
    if (puntaje <= 16) {
        return "Podrías explorar estrategias para afrontar retos paso a paso, pedir apoyo y reconocer tus avances. Las actitudes pueden cambiar según la situación y desarrollarse con práctica.";
    }

    if (puntaje <= 24) {
        return "Tus respuestas muestran algunas estrategias que ya utilizas y otras que podrías fortalecer. Piensa en qué entornos te ayudan a colaborar, organizarte y perseverar.";
    }

    return "Tus respuestas reflejan varias actitudes útiles para afrontar actividades y retos. Recuerda que estas habilidades también se desarrollan.";
}

export default function TestActitud() {
    const [indice, setIndice] = useState(0);
    const [respuestas, setRespuestas] = useState([]);
    const [terminado, setTerminado] = useState(false);

    function responder(valor) {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[indice] = valor;
        setRespuestas(nuevasRespuestas);

        if (indice === preguntas.length - 1) {
            setTerminado(true);
        } else {
            setIndice(indice + 1);
        }
    }

    function reiniciar() {
        setIndice(0);
        setRespuestas([]);
        setTerminado(false);
    }

    const puntaje = respuestas.reduce((total, valor) => total + valor, 0);

    return (
        <main className="cuestionario-main">
            <section className="cuestionario" aria-live="polite">
                <Link className="volver-tests" to="/test">
                    ← Volver a los tests
                </Link>

                <h1>Test de Actitud</h1>

                <p className="nota-test">
                    Ejercicio de reflexión personal. No es una evaluación psicológica ni un diagnóstico.
                </p>

                {!terminado ? (
                    <>
                        <p className="progreso-test">
                            Pregunta {indice + 1} de {preguntas.length}
                        </p>

                        <progress
                            value={indice + 1}
                            max={preguntas.length}
                            aria-label={`Pregunta ${indice + 1} de ${preguntas.length}`}
                        />

                        <h2>{preguntas[indice]}</h2>
                        <p className="instruccion-test">
                            Piensa en cómo sueles actuar y elige una respuesta.
                        </p>

                        <div className="opciones-test">
                            {opciones.map((opcion) => (
                                <button
                                    key={opcion.valor}
                                    type="button"
                                    className="opcion-test"
                                    onClick={() => responder(opcion.valor)}
                                >
                                    {opcion.texto}
                                </button>
                            ))}
                        </div>

                        {indice > 0 && (
                            <button
                                type="button"
                                className="boton-secundario"
                                onClick={() => setIndice(indice - 1)}
                            >
                                Volver a la pregunta anterior
                            </button>
                        )}
                    </>
                ) : (
                    <div className="resultado-test">
                        <h2>Resultado orientativo</h2>
                        <p>{interpretar(puntaje)}</p>
                        <button type="button" className="test-btn" onClick={reiniciar}>
                            Realizar de nuevo
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}