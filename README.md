# Transportes Hidro-Hidalguenses — Sitio Web Corporativo

Sitio web oficial de **Transportes Hidro-Hidalguenses S.A. de C.V.**, empresa mexicana especializada en explotación de yacimientos, manejo de materiales pétreos y transporte público de carga para la industria.

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Estilos utilitarios |
| [Framer Motion](https://www.framer.com/motion) | Animaciones |
| [React Router v6](https://reactrouter.com) | Enrutamiento SPA |
| [Firebase Auth](https://firebase.google.com/docs/auth) | Autenticación Google OAuth |
| [Google Apps Script](https://developers.google.com/apps-script) | Backend de Google Sheets |
| [Sonner](https://sonner.emilkowal.ski) | Notificaciones toast |

## Requisitos previos

- **Node.js** ≥ 18
- **pnpm** ≥ 9 (`npm install -g pnpm`)
- Cuenta de **Firebase** con proyecto configurado
- **Google Sheet** con Apps Script desplegado como Web App

## Configuración del entorno

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/web-page-thh.git
   cd web-page-thh
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

3. Crea tu archivo de variables de entorno a partir del ejemplo:
   ```bash
   cp .env.example .env.local
   ```

4. Rellena cada variable en `.env.local` siguiendo los comentarios del archivo.
   Consulta la sección **[Variables de entorno](#variables-de-entorno)** para más detalle.

5. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

## Variables de entorno

| Variable | Descripción | Dónde obtenerla |
|---|---|---|
| `VITE_FIREBASE_API_KEY` | API Key de Firebase | Firebase Console → Project Settings → SDK config |
| `VITE_FIREBASE_AUTH_DOMAIN` | Auth domain del proyecto | Firebase Console → Project Settings |
| `VITE_FIREBASE_PROJECT_ID` | ID del proyecto Firebase | Firebase Console → Project Settings |
| `VITE_FIREBASE_STORAGE_BUCKET` | Bucket de Storage | Firebase Console → Project Settings |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Sender ID de FCM | Firebase Console → Project Settings |
| `VITE_FIREBASE_APP_ID` | App ID de Firebase | Firebase Console → Project Settings |
| `VITE_APPS_SCRIPT_URL` | URL del Web App de Apps Script | Apps Script → Deploy → Manage Deployments |
| `VITE_ADMIN_EMAIL` | Único correo autorizado para el panel admin | Tu correo administrador |

> **Importante:** el archivo `.env.local` nunca debe subirse al repositorio.
> Está incluido en `.gitignore`.

## Scripts disponibles

```bash
pnpm dev        # Servidor de desarrollo en http://localhost:5173
pnpm build      # Build de producción → dist/
pnpm preview    # Vista previa del build de producción
pnpm tsc        # Type-check sin emitir archivos
```

## Estructura del proyecto

```
src/
├── components/
│   ├── admin/          # AdminBar (panel de edición)
│   ├── layout/         # Navbar, Footer, PageHeader
│   ├── sections/       # Secciones reutilizables (JobBoard, NewsSection, ContactSection…)
│   └── ui/             # Componentes base (ButtonMailto…)
├── context/            # ThemeContext (dark/light mode)
├── hooks/              # useAuth (Firebase Auth + control de acceso)
├── pages/              # Una página por ruta
├── routes/             # AppRoutes.tsx
├── services/           # sheetsApi.ts (Google Sheets via Apps Script)
└── main.tsx
```

## Panel de administración

El ícono de engrane (⚙) en la esquina inferior derecha abre el flujo de login con Google.
Solo el correo definido en `VITE_ADMIN_EMAIL` tiene acceso; cualquier otra cuenta es rechazada automáticamente.

Una vez autenticado, el botón **Editar** activa el modo de edición inline para:
- Vacantes de la **Bolsa de Trabajo**
- **Notas / Noticias**

Los cambios se sincronizan automáticamente con Google Sheets.

## Despliegue

El proyecto se despliega automáticamente en **Firebase Hosting** mediante GitHub Actions:

| Evento | Acción |
|---|---|
| Push a `main` | Build + deploy a producción |
| Pull Request | Type-check + build de validación |

Para el deploy manual:
```bash
pnpm build
firebase deploy --only hosting
```

### Secretos requeridos en GitHub

Ve a **Settings → Secrets and variables → Actions** y agrega:

- Todas las variables `VITE_*` del `.env.example`
- `FIREBASE_SERVICE_ACCOUNT` → JSON de cuenta de servicio
  *(Firebase Console → Project Settings → Service accounts → Generate new private key)*

## CI/CD

```
main ────────────────────────────► Firebase Hosting (producción)
  ↑
develop ──── PR ──► CI checks ──► merge
```

- **CI** (`.github/workflows/ci.yml`): type-check + build en cada PR
- **CD** (`.github/workflows/deploy.yml`): deploy automático al hacer merge a `main`

## Licencia

Proyecto privado — © 2026 Transportes Hidro-Hidalguenses S.A. de C.V.
Todos los derechos reservados.
