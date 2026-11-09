# 🌿 Proyecto Web "Comunidad Limpia"
> **Autora:** Gracia Milagros  
> **Programa:** +ChicasTec — Taller Integrado  
> **Objetivo:** Educar a la comunidad, solucionar la acumulación de basura y promover el reciclaje activo en el vecindario.

---

## 🌟 Descripción General
**Comunidad Limpia** es una plataforma web moderna, interactiva y de diseño responsivo (adaptable a celulares, tablets y computadoras). Su propósito es ser una herramienta comunitaria sencilla y atractiva para que cualquier vecino pueda consultar horarios de recojo, aprender a separar sus residuos, reportar puntos de acumulación de basura en tiempo real y adoptar hábitos ecológicos sostenibles.

---

## 🎨 Paleta de Color y Diseño
- **Verdes ecológicos (`#15803d`, `#22c55e`, `#f0fdf4`):** Representan la naturaleza, la esperanza y el reciclaje.
- **Azules agua y cielo (`#0284c7`, `#38bdf8`, `#f0f9ff`):** Simbolizan el agua limpia, la salud pública y el aire puro.
- **Blancos y grises claros (`#ffffff`, `#f8fafc`):** Aportan frescura, orden, limpieza y legibilidad óptima.
- **Tipografías:** `Poppins` para títulos atractivos e `Inter` para una lectura fluida.
- **Iconografía:** Íconos de alta calidad de FontAwesome 6 Free.

---

## 🚀 Características Implementadas

### 1. Página de Inicio (Hero Section)
- **Título llamativo:** *"¡Juntos por una comunidad limpia y saludable!"*.
- Explicación empática sobre la importancia de cuidar el medio ambiente y evitar focos infecciosos.
- Llamados a la acción directos (*Call to Action*): botones para ir a reciclar, ver horarios y reportar.
- Métricas comunitarias (100% compromiso vecinal, 4 zonas de cobertura, meta de basura cero).
- Ilustración e imagen representativa de acción ciudadana.

### 2. Horarios de Recojo de Basura (Sección Interactiva)
- **Selector dinámico de zonas:** Consulta por Zona Norte, Centro, Sur o Este.
- Detalle específico de:
  - Turno de recolección (horas exactas de la mañana, tarde o noche).
  - Días de recojo para residuos orgánicos/comunes.
  - Días exclusivos para reciclaje aprovechable (papel, plástico, vidrio, cartón).
  - Identificación de la unidad recolectora municipal.
- Indicador automático en vivo del día actual (*"Hoy es [Día]: ¡Revisa si corresponde sacar tus residuos!"*).
- Las **4 Reglas de Oro** para sacar la basura (30 minutos antes, bolsa anudada, empaquetar vidrios rotos).

### 3. Aprende a Reciclar (Educativa y Práctica)
- **Los 3 Pasos Clave:** Limpia, Seca y Compacta.
- **Guía de colores de tachos oficiales:**
  - 🟤 **Marrón:** Residuos orgánicos (cáscaras, café, poda).
  - 🟡 **Amarillo:** Plásticos, latas y envases (PET, conservas).
  - 🔵 **Azul:** Papel y cartón secos.
  - 🟢 **Verde:** Botellas y frascos de vidrio.
- **Buscador interactivo "¿En qué tacho va este residuo?":**
  - Barra de búsqueda en tiempo real.
  - Filtros por categoría de residuo con conteo dinámico.
  - Fichas explicativas con instrucciones precisas para cada tipo de residuo (evitar contaminar el lote reciclable).

### 4. Reportar Contaminación (Formulario y Tablero Comunitario)
- **Formulario vecinal completo:**
  - Nombre o alias del vecino (permite anonimato).
  - Selección de zona o sector.
  - Dirección exacta o punto de referencia.
  - Tipo de problema (acumulación en vereda, contenedor desbordado, desmonte, etc.).
  - Nivel de urgencia (Baja, Media, Alta, Urgente).
  - **Carga de fotografía con previsualización en tiempo real**.
  - Campo de observaciones o detalles adicionales.
- **Tablero de Reportes Ciudadanos en Vivo:**
  - Los reportes se almacenan en el navegador (`localStorage`) y se publican automáticamente con un código único (`#REP-XXXX`).
  - Badges de estado (*En proceso*, *Atendido*, *Programado*).
  - Modal emergente de confirmación instantánea.

### 5. Consejos Ambientales & Calculadora Verde
- 4 grandes áreas con recomendaciones prácticas:
  1. 💧 Ahorro y cuidado inteligente del agua.
  2. 🚯 Calles y veredas limpias (bolsillo ecológico, mascotas).
  3. 🛍️ Menos plástico de un solo uso (bolsas de tela, tomatodos).
  4. 🌿 Huertos, áreas verdes y compostaje casero.
- **Herramienta interactiva "Calcula tu Huella Verde del Día":**
  - Checklist con 5 hábitos ecológicos diarios.
  - Barra de progreso porcentual dinámica (0% a 100%).
  - Medalla y mensaje de felicitación según el compromiso alcanzado.

### 6. Contacto y Sugerencias Vecinales
- Formulario de contacto directo con validación para proponer ideas o unirse como voluntario.
- Canales directos: WhatsApp vecinal 24/7, correo electrónico y dirección del local de la junta vecinal.
- Preguntas frecuentes y botón flotante de retorno rápido al inicio (*Scroll to Top*).

---

## 📁 Estructura del Proyecto
```text
Gracia Milagros/
├── index.html       # Estructura semántica, secciones y componentes visuales
├── css/
│   └── styles.css   # Estilos propios, efectos glassmorphism, animaciones y badges
├── js/
│   └── app.js       # Base de datos de residuos, selector de horarios, reportes con localStorage y calculadora
└── README.md        # Documentación oficial del proyecto
```

---

## 💻 ¿Cómo abrir y probar la página web?
1. Haz doble clic en el archivo `index.html` para abrirlo directamente en tu navegador favorito (Chrome, Edge, Firefox, Safari).
2. No requiere instalar servidores ni librerías adicionales: todos los recursos se cargan automáticamente vía CDN seguro.
3. Puedes probar la página desde cualquier celular o redimensionando la ventana del navegador.

