const API_BASE_URL = (
    import.meta.env.VITE_API_URL || "https://sidcu-2.onrender.com"
).replace(/\/+$/, "");

async function leerRespuesta(response) {
    const texto = await response.text();

    if (!texto) {
        return null;
    }

    try {
        return JSON.parse(texto);
    } catch {
        return texto;
    }
}

function obtenerMensajeError(data, status) {
    if (typeof data === "string" && data.trim()) {
        return data;
    }

    if (data && typeof data === "object") {
        if (typeof data.detail === "string") return data.detail;
        if (typeof data.message === "string") return data.message;
        if (typeof data.error === "string") return data.error;
        if (typeof data.title === "string") return data.title;
    }

    return `El backend respondió con el estado ${status}.`;
}

async function enviarSolicitud(path, options = {}) {
    let response;

    try {
        response = await fetch(`${API_BASE_URL}${path}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
        });
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error(
                "No fue posible conectar con el backend. Verifica que esté activo y que permita solicitudes desde este sitio.",
                { cause: error }
            );
        }

        throw error;
    }

    const data = await leerRespuesta(response);

    if (!response.ok) {
        throw new Error(obtenerMensajeError(data, response.status));
    }

    return data;
}

export function getApiData(path) {
    return enviarSolicitud(path);
}

export function postApiData(path, data) {
    return enviarSolicitud(path, {
        method: "POST",
        body: JSON.stringify(data),
    });
}