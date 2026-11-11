import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postApiData } from "../../services/api";
import "./Login.css";

const Login = () => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();

    const iniciarSesion = async (event) => {
        event.preventDefault();
        setError("");
        setCargando(true);

        try {
            const usuario = await postApiData("/api/auth/login", {
                correo: correo.trim(),
                contrasena,
            });

            // El backend responde con id, nombre, correo y tipo.
            localStorage.setItem("usuario", JSON.stringify(usuario));
            navigate("/home");
        } catch (errorSolicitud) {
            if (errorSolicitud.message.includes("No fue posible conectar")) {
                setError(errorSolicitud.message);
            } else {
                setError("Correo o contraseña incorrectos.");
            }
        } finally {
            setCargando(false);
        }
    };

    return (
        <main className="login-main">
            <div className="login-container">
                <div id="tituloLogin">
                    <h2>INICIAR SESIÓN</h2>
                </div>

                <form id="formularioLogin" onSubmit={iniciarSesion}>
                    <label htmlFor="correoLogin">CORREO ELECTRÓNICO</label>
                    <input
                        id="correoLogin"
                        type="email"
                        placeholder="Ingresa tu correo"
                        autoComplete="email"
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)}
                        required
                    />

                    <label htmlFor="contrasenaLogin">CONTRASEÑA</label>
                    <input
                        id="contrasenaLogin"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        autoComplete="current-password"
                        value={contrasena}
                        onChange={(event) => setContrasena(event.target.value)}
                        required
                    />

                    {error && <p role="alert">{error}</p>}

                    <button id="botonLogin" type="submit" disabled={cargando}>
                        {cargando ? "INGRESANDO..." : "INGRESAR"}
                    </button>

                    <p>
                        ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;