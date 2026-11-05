import "./Login.css";

const Login = () => {
    return (
        <main className="login-main">
            <div className="login-container">

                <div id="tituloLogin">
                    <h2>LOGIN</h2>
                </div>

                <div id="formularioLogin">

                    <label htmlFor="usuarioLogin">
                        USUARIO
                    </label>

                    <input
                        id="usuarioLogin"
                        type="text"
                        placeholder="Ingresa tu usuario"
                    />

                    <label htmlFor="contraseñaLogin">
                        CONTRASEÑA
                    </label>

                    <input
                        id="contraseñaLogin"
                        type="password"
                        placeholder="Ingresa la contraseña"
                    />

                    <button id="botonLogin">
                        INGRESAR
                    </button>

                    <p>
                        ¿No tienes cuenta?{" "}
                        <a href="/registro">
                            Regístrate aquí
                        </a>
                    </p>

                </div>
            </div>
        </main>
    );
};

export default Login;
