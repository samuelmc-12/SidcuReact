import './Home.css';
import Footer from '../../components/layout/footer/footer';


const Home = ()=> {
    return (
        <main>
            <h1 id="tituloPrincipal">Encuentra la mejor opción para estudiar</h1>
            <div class="botones">
                <button>PreGrado</button>
                <button>PostGrado</button>
                <button>Técnico</button>
            </div>
            <div class="buscador">
                <input type="text" placeholder="Buscar una carrera" />
                <button class="buscar">Buscar</button>    
            </div>
            <div class="registro">
                <button class="iniciarsesion">Iniciar sesión</button>
                <button class="registrarse">Registrarse</button>
            </div>
            <section class="actualizaciones">
                <div class="actualizacionestitulo">
                    <h2>Actualizaciones</h2>
                    <button class="vertodasboton">Todas las Actualizaciones ➜</button>
                </div>
                <div class="actualizacionesarrow">
                    <div class="arrow arrow-left">‹</div>
                    <div id="actualizacionescontenedor" class="actualizacionescontenedor"></div>
                        <script src="./js/carrusel.js"></script>                                 
                    <div class="arrow arrow-right">›</div>
                    
                </div>
            </section>
            <section class="info">
                <div class="info-box">
                <h2>¿Quiénes somos?</h2>
                <p>
                    En SIDCU (Simulador de Carreras Universitarias) somos un equipo comprometido con el futuro académico de los jóvenes.
                    Nuestra misión es ayudar a los estudiantes de secundaria a descubrir su vocación mediante una experiencia interactiva,
                    moderna y personalizada. <a href="./nosotros.html">Leer más.</a>
                </p>
                </div>

                <div class="divider"></div>
                <div class="info-box">
                <h2>¿Qué ofrecemos?</h2>
                <p>
                    Explorar diferentes carreras universitarias y conocer sus características principales.  
                    Realizar tests de autoestima y habilidades, para descubrir qué programas se ajustan mejor a tus intereses.  
                    Simular la experiencia universitaria. <a href="./nosotros.html">Leer más.</a>
                </p>
                </div>
            
                <div class="divider"></div>
            
                <div class="info-box">
                <h2>Mejores Oportunidades</h2>
                <p>
                    Nuevas universidades aliadas que ofrecen programas innovadores.  
                    Promociones académicas y becas exclusivas.  
                    Noticias y actualizaciones sobre carreras emergentes y tendencias laborales. <a href="./nosotros.html">Leer más.</a>
                </p>
                </div>
            </section>


            <section class="suscripcion">
            <h3>Sé el primero en enterarte</h3>
            <p>
                ¿Deseas que te informemos por correo sobre oportunidades de carreras o universidades que guardaste en la búsqueda?
            </p>
            
            <div class="suscripcion-form">
                <input type="email" placeholder="Correo Electrónico" />
                <button class="suscribirse">Suscribirse</button>
            </div>
            </section>
        </main>
    );
};

export default Home;

