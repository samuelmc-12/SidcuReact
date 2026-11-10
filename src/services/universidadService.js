const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const obtenerUniversidades = async () => {
  const response = await fetch(`${API_URL}/api/universidades`);

  if (!response.ok) {
    throw new Error("No se pudieron cargar las universidades");
  }

  return response.json();
};