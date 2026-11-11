const API_URL = "https://yanethm-taquilla-api.fly.dev/api/v1";

export async function apiGet(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error?.mensaje || "Error al consultar la API"
    );
  }

  return data;
}
