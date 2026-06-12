const BASE_URL = 'https://valorant-api.com/v1/weapons'

export async function apiGet(path) {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const json = await res.json();
    return json.data;
}