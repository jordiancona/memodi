# Memodi – Código Base Frontend (Características)

Este proyecto contiene el código base frontend descargado, limpiado y optimizado de la página web oficial de **Memodi Inc**:  
🔗 **[https://memodi.memodiapp.com/caracteristicas/](https://memodi.memodiapp.com/caracteristicas/)**

---

## 🚀 Inicio Rápido

Tienes dos formas sencillas de trabajar con este frontend:

### Opción 1: Con Servidor de Desarrollo Rápido (Recomendada con Hot Reload)
1. Abre tu terminal en esta carpeta (`/memodi`).
2. Ejecuta el servidor local:
   ```bash
   npm run dev
   ```
3. Abre en tu navegador la URL que muestra la terminal (por defecto: `http://localhost:5173/`).
   - Cualquier cambio que hagas en el código se actualizará al instante en pantalla sin recargar manualmente.

### Opción 2: Sin dependencias (Doble clic)
- Puedes abrir directamente el archivo `index.html` en cualquier navegador web (Chrome, Safari, Edge, Firefox). ¡Funciona de inmediato sin necesidad de instalar nada!

---

## 📁 Estructura del Proyecto

```text
memodi/
├── index.html                   # Página principal (Características de Memodi)
├── redes.html                   # Panel de Redes y Soporte ("Escríbenos a la hora que sea...")
├── vite.config.js               # Configuración multi-página de Vite
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos personalizados, gradientes y animaciones
│   └── images/
│       ├── icono-memodi.png    # Logotipo oficial de Memodi
│       ├── guias-bg.jpg        # Imagen de fondo local (Tarjeta Guías)
│       ├── feedback-bg.jpg     # Imagen de fondo local (Tarjeta Retroalimentación)
│       └── social/             # Iconos oficiales en alta resolución (WhatsApp, Telegram, etc.)
├── js/
│   └── main.js                 # Lógica interactiva (Modo oscuro, copiado al portapapeles, filtros)
├── original_source/
│   └── caracteristicas_wp_raw.html  # Respaldo original descargado de WordPress
├── package.json                # Scripts de desarrollo y dependencias
└── README.md                   # Esta guía
```

---

## 🛠️ Cómo hacer cambios en el Frontend

### 1. Modificar Textos o Títulos
En `index.html`:
- El título principal y subtítulo están en la sección `<main id="caracteristicas">`:
  ```html
  <h1 class="text-4xl ...">Características de Memodi</h1>
  <p class="text-lg ...">La herramienta definitiva para...</p>
  ```
- Cada una de las **9 tarjetas** está comentada individualmente:
  - `Card 1`: Biblioteca de Contenido (+2,500 Tarjetas de Puntos Clave)
  - `Card 2`: Sincronización en la Nube (Contenido Siempre Actualizado)
  - `Card 3`: Experiencia (Creado por Médicos)
  - `Card 4`: Guías Internacionales (2026, Guías Internacionales)
  - `Card 5`: Retroalimentación (Revisión constante)
  - `Card 6`: Microaprendizaje (< 1 Minuto por Tarjeta)
  - `Card 7`: Rendimiento (92% Retención de Contenido)
  - `Card 8`: Algoritmo (Repetición Espaciada)
  - `Card 9`: Rutina Diaria (Solo Minutos al Día)

### 2. Modificar Colores y Gradientes
En `assets/css/styles.css` puedes modificar o crear nuevos gradientes:
```css
.gradient-orange {
  background: linear-gradient(135deg, #FF6B4A 0%, #FF8E3C 50%, #FFA827 100%);
}
.gradient-blue {
  background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
}
.gradient-teal {
  background: linear-gradient(135deg, #059669 0%, #10B981 100%);
}
```

### 3. Cambiar Enlaces de Botones o Redes Sociales
- Los botones de cada tarjeta tienen enlaces directos (por ejemplo a la Play Store, temas, o métodos). Puedes cambiarlos editando el atributo `href="..."` de cada enlace `<a>`.
- En el pie de página (`<footer>`) se encuentran los enlaces a Instagram, X, Facebook, TikTok, WhatsApp, correo y Telegram.

### 4. Modo Oscuro / Modo Claro
El proyecto incluye un botón para alternar entre modo oscuro y claro en la esquina superior derecha, que recuerda la preferencia del usuario mediante `localStorage` y respeta la configuración del sistema operativo.

---

## 📦 Compilación para Producción

Si deseas empaquetar los archivos optimizados para subirlos a producción (Hosting estático, Vercel, Netlify, AWS S3, etc.):

```bash
npm run build
```

Esto generará la carpeta `dist/` con todos los recursos minificados y optimizados.
