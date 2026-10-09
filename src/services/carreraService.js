import API_URL from "./api";

export const obtenerCarreras = async () => {
    const respuesta = await fetch(`${API_URL}/carreras`);

    if (!respuesta.ok) {
        throw new Error("Error al obtener las carreras");
    }

    return await respuesta.json();
};