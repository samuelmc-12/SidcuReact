import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postApiData } from "../../services/api";
import "./Registro.css";

const Registro = () => {
    const [formulario, setFormulario] = useState({
        documento: "",
        nombre: "",
        apellido: "",
        ciudad: "",
        correo: "",
        contrasena: "",
        confirmarContrasena: "",
    });
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();

    const actualizarCampo = (event) => {
        const { name, value } = event.target;

        setFormulario((actual) => ({
            ...actual,
            [name]: value,
        }));
    };

    const registrar = async (event) => {
        event.preventDefault();
        setError("");

        if (formulario.contrasena !== formulario.confirmarContrasena) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        if (formulario.contrasena.length < 8) {
            setError("La contraseña debe tener mínimo 8 caracteres.");
            return;
        }

        setCargando(true);

        try {
            const usuario = await postApiData("/api/auth/registro", {
                ...formulario,
                documento: formulario.documento.trim(),
                nombre: formulario.nombre.trim(),
                apellido: formulario.apellido.trim(),
                ciudad: formulario.ciudad.trim(),
                correo: formulario.correo.trim(),
            });

            // El registro también devuelve id, nombre, correo y tipo.
            localStorage.setItem("usuario", JSON.stringify(usuario));
            navigate("/home");
        } catch (errorSolicitud) {
            setError(errorSolicitud.message || "No se pudo completar el registro.");
        } finally {
            setCargando(false);
        }
    };

    return (
        <main className="login-main">
            <div className="login-container">
                <div id="tituloRegistro">
                    <h2>REGISTRO</h2>
                </div>

                <form id="formularioRegistro" onSubmit={registrar}>
                    <label htmlFor="documentoRegistro">DOCUMENTO</label>
                    <input
                        id="documentoRegistro"
                        name="documento"
                        type="text"
                        placeholder="Ingresa tu documento"
                        autoComplete="off"
                        value={formulario.documento}
                        onChange={actualizarCampo}
                        maxLength={20}
                        required
                    />

                    <label htmlFor="nombreRegistro">NOMBRE</label>
                    <input
                        id="nombreRegistro"
                        name="nombre"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        autoComplete="given-name"
                        value={formulario.nombre}
                        onChange={actualizarCampo}
                        maxLength={100}
                        required
                    />

                    <label htmlFor="apellidoRegistro">APELLIDO</label>
                    <input
                        id="apellidoRegistro"
                        name="apellido"
                        type="text"
                        placeholder="Ingresa tu apellido"
                        autoComplete="family-name"
                        value={formulario.apellido}
                        onChange={actualizarCampo}
                        maxLength={100}
                        required
                    />

                    <label htmlFor="ciudadRegistro">CIUDAD</label>
                    <input
                        id="ciudadRegistro"
                        name="ciudad"
                        type="text"
                        placeholder="Ingresa tu ciudad"
                        autoComplete="address-level2"
                        value={formulario.ciudad}
                        onChange={actualizarCampo}
                        maxLength={50}
                        required
                    />

                    <label htmlFor="correoRegistro">CORREO ELECTRÓNICO</label>
                    <input
                        id="correoRegistro"
                        name="correo"
                        type="email"
                        placeholder="Ingresa tu correo"
                        autoComplete="email"
                        value={formulario.correo}
                        onChange={actualizarCampo}
                        maxLength={100}
                        required
                    />

                    <label htmlFor="contrasenaRegistro">CONTRASEÑA</label>
                    <input
                        id="contrasenaRegistro"
                        name="contrasena"
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        autoComplete="new-password"
                        value={formulario.contrasena}
                        onChange={actualizarCampo}
                        minLength={8}
                        maxLength={100}
                        required
                    />

                    <label htmlFor="confirmarContrasenaRegistro">
                        CONFIRMAR CONTRASEÑA
                    </label>
                    <input
                        id="confirmarContrasenaRegistro"
                        name="confirmarContrasena"
                        type="password"
                        placeholder="Repite tu contraseña"
                        autoComplete="new-password"
                        value={formulario.confirmarContrasena}
                        onChange={actualizarCampo}
                        required
                    />

                    {error && <p role="alert">{error}</p>}

                    <button id="botonRegistro" type="submit" disabled={cargando}>
                        {cargando ? "REGISTRANDO..." : "REGISTRARSE"}
                    </button>

                    <p>
                        ¿Ya tienes una cuenta? <Link to="/login">Inicia aquí</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Registro;