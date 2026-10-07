import "./Test.css"

const Test = ()=> {
    return(
        <main class="tests-main">
            <section class="tests-intro">
            <h1>Tests Disponibles</h1>
            <p>Explora nuestros tests: selecciona el que más te interese.</p>
            </section>

            <section class="tests-lista" aria-label="Lista de tests">
            <article class="test-card">
                <img src="./img/autoestima.jpg" alt="Icono Test Autoestima" class="test-img" />
                <h2>Test de Autoestima</h2>
                <p class="test-desc">
                Evalúa cómo te percibes a ti mismo, tu confianza y aspectos emocionales relacionados con la elección vocacional.
                </p>
                <div class="test-actions">
                <button class="test-btn" disabled aria-disabled="true" title="Test de Autoestima (no funcional)">Iniciar Test</button>
                <a href="#" class="test-info" aria-disabled="true" tabindex="-1">Ver guía</a>
                </div>
            </article>

            <article class="test-card">
                <img src="./img/actitud.jpg" alt="Icono Test Actitud" class="test-img" />
                <h2>Test de Actitud</h2>
                <p class="test-desc">
                Mide tu disposición hacia diferentes tareas (trabajo en equipo, liderazgo, resiliencia) para orientar áreas afines.
                </p>
                <div class="test-actions">
                <button class="test-btn" disabled aria-disabled="true" title="Test de Actitud (no funcional)">Iniciar Test</button>
                <a href="#" class="test-info" aria-disabled="true" tabindex="-1">Ver guía</a>
                </div>
            </article>

            <article class="test-card">
                <img src="./img/aptitud.jpg" alt="Icono Test Aptitud" class="test-img" />
                <h2>Test de Aptitud</h2>
                <p class="test-desc">
                Revisa tus habilidades técnicas y cognitivas (numéricas, verbales, espaciales) para identificar carreras compatibles.
                </p>
                <div class="test-actions">
                <button class="test-btn" disabled aria-disabled="true" title="Test de Aptitud (no funcional)">Iniciar Test</button>
                <a href="#" class="test-info" aria-disabled="true" tabindex="-1">Ver guía</a>
                </div>
            </article>
            </section>
        </main>
    );
};

export default Test;