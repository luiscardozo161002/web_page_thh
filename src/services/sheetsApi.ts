const BASE_URL = import.meta.env.VITE_APPS_SCRIPT_URL as string;

export interface SheetRow {
  _row: number;
  [key: string]: string | number;
}

export async function getRows(sheet: string, token?: string): Promise<SheetRow[]> {
  // Apps Script devuelve 302 → googleusercontent.com. Usamos redirect:'follow' explícito
  // y pasamos el token como parámetro de URL para evitar preflight CORS
  const tokenParam = token ? `&token=${encodeURIComponent(token)}` : '';
  const url = `${BASE_URL}?action=GET&sheet=${encodeURIComponent(sheet)}${tokenParam}`;

  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} al obtener ${sheet}`);
  }

  const json = await res.json();

  if (!json.data || !Array.isArray(json.data)) {
    throw new Error(`Respuesta inesperada: ${JSON.stringify(json)}`);
  }

  return json.data.map((row: Record<string, unknown>, i: number) => ({
    ...row,
    // Usar _row del servidor si ya lo incluye (nuevo Apps Script), sino calcular
    _row: typeof row._row === 'number' ? row._row : i + 2,
  })) as SheetRow[];
}

export async function addRow(token: string, data: Record<string, string>, sheet: string): Promise<void> {
  const url = `${BASE_URL}?action=POST&sheet=${encodeURIComponent(sheet)}&token=${encodeURIComponent(token)}`;
  // Content-Type: text/plain evita el preflight OPTIONS que Apps Script no maneja
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
    redirect: 'follow',
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error);
}

export async function updateRow(
  token: string,
  row: number,
  data: Record<string, string>,
  sheet: string
): Promise<void> {
  const url = `${BASE_URL}?action=PUT&sheet=${encodeURIComponent(sheet)}&token=${encodeURIComponent(token)}&row=${row}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
    redirect: 'follow',
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error);
}

export async function deleteRow(token: string, row: number, sheet: string): Promise<void> {
  const url = `${BASE_URL}?action=DELETE&sheet=${encodeURIComponent(sheet)}&token=${encodeURIComponent(token)}&row=${row}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: '{}',
    redirect: 'follow',
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error);
}
