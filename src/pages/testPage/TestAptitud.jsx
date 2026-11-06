import { useState } from "react";
import { Link } from "react-router-dom";
import "./TestCuestionario.css";

const preguntas = [
    {
        tipo: "Razonamiento numérico",
        texto: "Un cuaderno cuesta $8. ¿Cuánto cuestan 3 cuadernos al mismo precio?",
        opciones: ["$11", "$24", "$32", "$83"],
        correcta: 1,
    },
    {
        tipo: "Razonamiento verbal",
        texto: "¿Cuál palabra significa lo contrario de “aumentar”?",
        opciones: ["Crecer", "Sumar", "Disminuir", "Mejorar"],
        correcta: 2,
    },
    {
        tipo: "Razonamiento lógico",
        texto: "Completa la secuencia: 2, 4, 6, 8, __",
        opciones: ["9", "10", "12", "16"],
        correcta: 1,
    },
    {
        tipo: "Razonamiento numérico",
        texto: "Una clase empieza a las 9:15 y dura 45 minutos. ¿A qué hora termina?",
        opciones: ["9:45", "10:00", "10:15", "10:30"],
        correcta: 1,
    },
    {
        tipo: "Razonamiento verbal",
        texto: "Pájaro es a volar como pez es a…",
        opciones: ["Correr", "Nadar", "Saltar", "Caminar"],
        correcta: 1,
    },
    {
        tipo: "Razonamiento lógico",
        texto: "Si todos los tulipanes son flores, ¿cuál afirmación es segura?",
        opciones: [
            "Todas las flores son tulipanes",
            "Un tulipán es una flor",
            "Ninguna flor es tulipán",
            "Todos los tulipanes son rojos",
        ],
        correcta: 1,
    },
];

function obtenerMensaje(puntaje) {
    if (puntaje <= 2) {
        return "Este resultado solo refleja tus respuestas en estos ejercicios. Puedes practicar con calma los tipos de razonamiento que te resultaron más difíciles.";
    }

    if (puntaje <= 4) {
        return "Respondiste correctamente varios ejercicios. Observa qué tipos de preguntas te resultaron más cómodas y cuáles te gustaría practicar.";
    }

    return "Respondiste correctamente la mayoría de los ejercicios de esta pequeña muestra. Recuerda que no mide todas tus habilidades ni determina qué carrera debes elegir.";
}

export default function TestAptitud() {
    const [indice, setIndice] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [terminado, setTerminado] = useState(false);

    function responder(indiceOpcion) {
        const nuevoPuntaje =
            puntaje + (indiceOpcion === preguntas[indice].correcta ? 1 : 0);

        setPuntaje(nuevoPuntaje);

        if (indice === preguntas.length - 1) {
            setTerminado(true);
        } else {
            setIndice(indice + 1);
        }
    }

    function reiniciar() {
        setIndice(0);
        setPuntaje(0);
        setTerminado(false);
    }

    return (
        <main className="cuestionario-main">
            <section className="cuestionario" aria-live="polite">
                <Link className="volver-tests" to="/test">
                    ← Volver a los tests
                </Link>

                <h1>Test de Aptitud</h1>

                <p className="nota-test">
                    Cuestionario breve de práctica; no es una prueba estandarizada ni determina tus capacidades.
                </p>

                {!terminado ? (
                    <>
                        <p className="progreso-test">
                            {preguntas[indice].tipo} · Pregunta {indice + 1} de {preguntas.length}
                        </p>

                        <progress
                            value={indice + 1}
                            max={preguntas.length}
                            aria-label={`Pregunta ${indice + 1} de ${preguntas.length}`}
                        />

                        <h2>{preguntas[indice].texto}</h2>

                        <div className="opciones-test">
                            {preguntas[indice].opciones.map((opcion, indiceOpcion) => (
                                <button
                                    key={opcion}
                                    type="button"
                                    className="opcion-test"
                                    onClick={() => responder(indiceOpcion)}
                                >
                                    {opcion}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="resultado-test">
                        <h2>
                            Resultado: {puntaje} de {preguntas.length}
                        </h2>
                        <p>{obtenerMensaje(puntaje)}</p>
                        <button type="button" className="test-btn" onClick={reiniciar}>
                            Realizar de nuevo
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}