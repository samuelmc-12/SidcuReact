import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestCuestionario.css";

const preguntas = [
    { texto: "Me resulta fácil reconocer algo que hago bien.", inversa: false },
    { texto: "Cuando cometo un error, puedo tratarme con comprensión.", inversa: false },
    { texto: "Me cuesta aceptar los cumplidos de otras personas.", inversa: true },
    { texto: "Siento que mi opinión merece ser escuchada.", inversa: false },
    { texto: "Me comparo con otras personas y termino sintiéndome menos.", inversa: true },
    { texto: "Puedo pedir ayuda cuando la necesito.", inversa: false },
    { texto: "A menudo pienso que no soy capaz, incluso antes de intentarlo.", inversa: true },
    { texto: "Puedo nombrar cualidades que valoro de mí.", inversa: false },
];

const opciones = [
    { texto: "Nunca", valor: 1 },
    { texto: "A veces", valor: 2 },
    { texto: "Casi siempre", valor: 3 },
    { texto: "Siempre", valor: 4 },
];

function interpretar(respuestas) {
    const puntaje = respuestas.reduce((total, respuesta, indice) => {
        const valorAjustado = preguntas[indice].inversa
            ? 5 - respuesta
            : respuesta;

        return total + valorAjustado;
    }, 0);

    if (puntaje <= 16) {
        return "Tus respuestas pueden ser una invitación a tratarte con más amabilidad y reconocer tus pequeños logros. Si esto te preocupa, considera conversarlo con alguien de confianza.";
    }

    if (puntaje <= 24) {
        return "Tus respuestas reflejan una mezcla de fortalezas y aspectos que podrías seguir explorando. Puedes pensar qué situaciones te ayudan a sentirte más seguro/a.";
    }

    return "Tus respuestas indican que sueles reconocer varias cualidades propias. Recuerda tratarte con respeto también cuando cometas errores o enfrentes retos.";
}

export default function TestAutoestima() {
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

    return (
        <main className="cuestionario-main">
            <section className="cuestionario" aria-live="polite">
                <Link className="volver-tests" to="/test">
                    ← Volver a los tests
                </Link>

                <h1>Test de Autoestima</h1>

                <p className="nota-test">
                    Este ejercicio es una guía de reflexión personal; no es una
                    evaluación clínica ni un diagnóstico.
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

                        <h2>{preguntas[indice].texto}</h2>

                        <p className="instruccion-test">
                            Elige la opción que mejor describa cómo te has
                            sentido últimamente.
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
                        <h2>Tu reflexión</h2>
                        <p>{interpretar(respuestas)}</p>

                        <button
                            type="button"
                            className="test-btn"
                            onClick={reiniciar}
                        >
                            Volver a realizarlo
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}