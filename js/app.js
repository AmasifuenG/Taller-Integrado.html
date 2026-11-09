/**
 * Comunidad Limpia - Lógica Interactiva
 * Autora: Gracia Milagros - Proyecto ChicasTec
 */

// Base de datos de residuos para el buscador interactivo
const residuosData = [
  {
    nombre: "Botellas de plástico (gaseosa, agua)",
    categoria: "plastico",
    tacho: "Amarillo (Plásticos y Envases)",
    icono: "fa-bottle-water",
    badgeClass: "badge-plastico",
    color: "#eab308",
    instrucciones: "Vaciar el líquido, enjuagar levemente, aplastar para reducir volumen y colocar la tapa."
  },
  {
    nombre: "Cáscaras de frutas y verduras",
    categoria: "organico",
    tacho: "Marrón (Residuos Orgánicos)",
    icono: "fa-apple-whole",
    badgeClass: "badge-organico",
    color: "#d97706",
    instrucciones: "Depositar sin bolsas de plástico. Son perfectas para elaborar abono casero (compost)."
  },
  {
    nombre: "Periódicos, cuadernos y revistas",
    categoria: "papel",
    tacho: "Azul (Papel y Cartón)",
    icono: "fa-newspaper",
    badgeClass: "badge-papel",
    color: "#0284c7",
    instrucciones: "Deben estar secos y limpios. Retirar clips, grapas metálicas o cintas plásticas adhesivas."
  },
  {
    nombre: "Cajas de cartón corrugado",
    categoria: "papel",
    tacho: "Azul (Papel y Cartón)",
    icono: "fa-box",
    badgeClass: "badge-papel",
    color: "#0284c7",
    instrucciones: "Desarmar y doblar completamente las cajas para que ocupen el menor espacio posible."
  },
  {
    nombre: "Frascos y botellas de vidrio",
    categoria: "vidrio",
    tacho: "Verde (Vidrios)",
    icono: "fa-wine-bottle",
    badgeClass: "badge-vidrio",
    color: "#16a34a",
    instrucciones: "Enjuagar el interior, retirar la tapa metálica o de plástico. No incluir cerámicas ni focos."
  },
  {
    nombre: "Latas de atún, conservas y leche",
    categoria: "plastico",
    tacho: "Amarillo (Metales y Latas)",
    icono: "fa-drum",
    badgeClass: "badge-plastico",
    color: "#eab308",
    instrucciones: "Lavar para eliminar restos orgánicos y evitar malos olores o insectos. Introducir la tapa dentro de la lata."
  },
  {
    nombre: "Caja de pizza manchada con grasa",
    categoria: "no-aprovechable",
    tacho: "Gris / Negro (No aprovechable)",
    icono: "fa-pizza-slice",
    badgeClass: "badge-no-aprovechable",
    color: "#64748b",
    instrucciones: "El cartón con grasa NO se puede reciclar. Si la tapa superior está limpia, córtala y recíclala en papel."
  },
  {
    nombre: "Papel higiénico, servilletas y toallitas",
    categoria: "no-aprovechable",
    tacho: "Gris / Negro (No aprovechable)",
    icono: "fa-toilet-paper",
    badgeClass: "badge-no-aprovechable",
    color: "#64748b",
    instrucciones: "Residuos sanitarios contaminados. Depositar en bolsa bien amarrada para recojo municipal común."
  },
  {
    nombre: "Pilas alcalinas y baterías de celular",
    categoria: "peligroso",
    tacho: "Rojo (Residuos Peligrosos)",
    icono: "fa-battery-full",
    badgeClass: "badge-peligroso",
    color: "#ef4444",
    instrucciones: "¡Peligro! Contienen metales pesados. Depositar en botellones de acopio o contenedores municipales rojos."
  },
  {
    nombre: "Focos incandescentes o fluorescentes",
    categoria: "peligroso",
    tacho: "Rojo (Residuos Peligrosos)",
    icono: "fa-lightbulb",
    badgeClass: "badge-peligroso",
    color: "#ef4444",
    instrucciones: "No mezclar con vidrio común porque contienen mercurio y gases. Llevar a puntos de reciclaje de RAEE."
  },
  {
    nombre: "Envases de Tetra Pak (leche, jugos)",
    categoria: "papel",
    tacho: "Azul / Reciclaje Especial",
    icono: "fa-cube",
    badgeClass: "badge-papel",
    color: "#0284c7",
    instrucciones: "Desplegar las esquinas, enjuagar con un poco de agua, aplanar e introducir la bombilla si la tiene."
  },
  {
    nombre: "Restos de café y bolsitas de té",
    categoria: "organico",
    tacho: "Marrón (Residuos Orgánicos)",
    icono: "fa-mug-hot",
    badgeClass: "badge-organico",
    color: "#d97706",
    instrucciones: "El café es un excelente abono natural para las plantas y ayuda a repeler plagas en macetas."
  },
  {
    nombre: "Espejos rotos o vidrios planos de ventana",
    categoria: "no-aprovechable",
    tacho: "Gris / No aprovechable (Protegido)",
    icono: "fa-shapes",
    badgeClass: "badge-no-aprovechable",
    color: "#64748b",
    instrucciones: "Tienen componentes químicos diferentes a las botellas. Envolver en papel grueso o cartón para no cortar al recolector."
  },
  {
    nombre: "Tapas plásticas de botellas",
    categoria: "plastico",
    tacho: "Amarillo (Plástico) / Donaciones",
    icono: "fa-circle-dot",
    badgeClass: "badge-plastico",
    color: "#eab308",
    instrucciones: "Puedes juntarlas en un bidón y donarlas a campañas solidarias de salud y albergues de animales."
  }
];

// Datos de horarios por zona
const horariosZonas = {
  norte: {
    nombre: "Zona Norte (Los Pinos, Sauces y Los Álamos)",
    turnos: "Turno Mañana: 07:00 a.m. - 09:30 a.m.",
    diasOrganicos: "Lunes, Miércoles y Viernes",
    diasReciclaje: "Martes y Sábados (Tachos de colores)",
    diasNoAprovechables: "Jueves",
    camion: "Unidad Recolectora Móvil #03",
    alerta: "Saca tus bolsas cerradas a las 06:30 a.m."
  },
  centro: {
    nombre: "Zona Centro (Plaza Principal, Av. Central y Mercado)",
    turnos: "Turno Noche: 08:00 p.m. - 10:30 p.m.",
    diasOrganicos: "Diario de Lunes a Domingo",
    diasReciclaje: "Miércoles y Sábados por la mañana (09:00 a.m.)",
    diasNoAprovechables: "Lunes y Jueves",
    camion: "Unidad Recolectora Móvil #01 (Compensador)",
    alerta: "El camión hace sonar la campana 10 minutos antes."
  },
  sur: {
    nombre: "Zona Sur (Villa Jardín, Las Flores y Urb. El Sol)",
    turnos: "Turno Tarde: 02:00 p.m. - 04:30 p.m.",
    diasOrganicos: "Martes, Jueves y Sábados",
    diasReciclaje: "Viernes (Programa Vecino Verde)",
    diasNoAprovechables: "Lunes",
    camion: "Unidad Recolectora Móvil #05",
    alerta: "Evita dejar residuos en las esquinas fuera de este horario."
  },
  este: {
    nombre: "Zona Este (Parques Industriales y Caseríos)",
    turnos: "Turno Mañana: 06:00 a.m. - 08:30 a.m.",
    diasOrganicos: "Lunes, Miércoles y Viernes",
    diasReciclaje: "Jueves ecológico",
    diasNoAprovechables: "Martes y Sábados",
    camion: "Unidad Recolectora Móvil #02",
    alerta: "Ayúdanos manteniendo las veredas libres para el paso del personal."
  }
};

// Reportes iniciales precargados para demostración comunitaria
const reportesIniciales = [
  {
    id: "REP-1042",
    vecino: "Rosa Mendoza",
    ubicacion: "Esquina Av. Los Rosales con Calle 4",
    zona: "Zona Norte",
    tipo: "Acumulación de bolsas en vereda",
    urgencia: "Media",
    fecha: "Hoy hace 2 horas",
    estado: "En proceso",
    estadoClass: "bg-amber-100 text-amber-800 border-amber-300",
    comentario: "Personas de otros lados dejaron bolsas rotas en la esquina del parque infantil.",
    fotoUrl: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "REP-1041",
    vecino: "Carlos Vega",
    ubicacion: "Frente al Mercado Municipal, Puesto 12",
    zona: "Zona Centro",
    tipo: "Contenedor de basura desbordado",
    urgencia: "Alta",
    fecha: "Ayer por la tarde",
    estado: "Atendido",
    estadoClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    comentario: "El contenedor verde ya estaba lleno. Se coordinó con la cuadrilla de limpieza y ya fue vaciado.",
    fotoUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "REP-1040",
    vecino: "Comité Vecinal Las Flores",
    ubicacion: "Pasaje Los Sauces cuadra 2",
    zona: "Zona Sur",
    tipo: "Desmonte y ramas secas acumuladas",
    urgencia: "Baja",
    fecha: "Hace 2 días",
    estado: "Programado",
    estadoClass: "bg-blue-100 text-blue-800 border-blue-300",
    comentario: "Restos de poda comunitaria listos para el camión de residuos de jardinería.",
    fotoUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=500&q=80"
  }
];

// INICIALIZACIÓN AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initRecycleSearch();
  initHorarios();
  initReportForm();
  initReportBoard();
  initEcoHabits();
  initContactForm();
  initScrollTop();
  updateTodayBadge();
});

// 1. Menú Móvil
function initMobileNav() {
  const btnToggle = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!btnToggle || !mobileMenu) return;

  btnToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const isExpanded = !mobileMenu.classList.contains("hidden");
    btnToggle.setAttribute("aria-expanded", isExpanded);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// 2. Buscador y Filtros de Reciclaje
function initRecycleSearch() {
  const searchInput = document.getElementById("input-search-waste");
  const filterButtons = document.querySelectorAll(".btn-waste-filter");
  const container = document.getElementById("waste-results-grid");
  const countBadge = document.getElementById("waste-count");

  let currentCategory = "todos";
  let searchQuery = "";

  function renderWasteItems() {
    container.innerHTML = "";
    const filtered = residuosData.filter(item => {
      const matchCat = (currentCategory === "todos" || item.categoria === currentCategory);
      const matchSearch = item.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tacho.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.instrucciones.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} residuos encontrados`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center bg-emerald-50/50 rounded-2xl border border-dashed border-emerald-200">
          <i class="fa-solid fa-leaf text-4xl text-emerald-400 mb-3 block"></i>
          <p class="text-slate-700 font-semibold text-lg">¿No encuentras el residuo que buscas?</p>
          <p class="text-slate-500 text-sm max-w-md mx-auto mt-1">Prueba escribiendo otra palabra como "botella", "cáscara", "papel", o escríbenos en la sección de contacto para agregarlo.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "waste-item bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between";
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeClass}">
              <i class="fa-solid ${item.icono}"></i>
              ${item.tacho}
            </span>
          </div>
          <h4 class="font-bold text-slate-800 text-base mb-2 flex items-start gap-2">
            <i class="fa-solid fa-recycle text-emerald-600 mt-1 text-sm"></i>
            ${item.nombre}
          </h4>
          <p class="text-slate-600 text-sm leading-relaxed mb-4">
            ${item.instrucciones}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span><i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> Acción recomendada</span>
          <span class="font-medium text-emerald-700">Comunidad Limpia</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Eventos de filtro
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-emerald-600", "text-white");
        b.classList.add("bg-white", "text-slate-700", "border-slate-200");
      });
      btn.classList.add("bg-emerald-600", "text-white");
      btn.classList.remove("bg-white", "text-slate-700", "border-slate-200");

      currentCategory = btn.getAttribute("data-category");
      renderWasteItems();
    });
  });

  // Evento de búsqueda
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderWasteItems();
    });
  }

  // Render inicial
  renderWasteItems();
}

// 3. Horarios de Recojo de Basura
function initHorarios() {
  const zoneSelect = document.getElementById("select-zona");
  const zoneName = document.getElementById("zona-nombre");
  const zoneTurno = document.getElementById("zona-turno");
  const zoneOrganicos = document.getElementById("zona-organicos");
  const zoneReciclaje = document.getElementById("zona-reciclaje");
  const zoneNoAprov = document.getElementById("zona-no-aprov");
  const zoneCamion = document.getElementById("zona-camion");
  const zoneAlerta = document.getElementById("zona-alerta");

  if (!zoneSelect) return;

  function updateZoneData(key) {
    const data = horariosZonas[key] || horariosZonas.norte;
    zoneName.textContent = data.nombre;
    zoneTurno.textContent = data.turnos;
    zoneOrganicos.textContent = data.diasOrganicos;
    zoneReciclaje.textContent = data.diasReciclaje;
    zoneNoAprov.textContent = data.diasNoAprovechables;
    zoneCamion.textContent = data.camion;
    zoneAlerta.textContent = data.alerta;
  }

  zoneSelect.addEventListener("change", (e) => {
    updateZoneData(e.target.value);
  });

  // Carga inicial
  updateZoneData(zoneSelect.value);
}

// Muestra qué día es hoy y da un consejo en vivo
function updateTodayBadge() {
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const today = new Date();
  const dayName = days[today.getDay()];
  const badge = document.getElementById("today-day-indicator");
  if (badge) {
    badge.textContent = `Hoy es ${dayName}: ¡Revisa si corresponde sacar tus residuos hoy!`;
  }
}

// 4. Formulario de Reportes de Contaminación
function initReportForm() {
  const form = document.getElementById("form-reportar");
  const photoInput = document.getElementById("report-photo");
  const photoPreview = document.getElementById("photo-preview-container");
  const photoImg = document.getElementById("photo-preview-img");
  const removePhotoBtn = document.getElementById("btn-remove-photo");

  let photoBase64 = null;

  // Previsualización de imagen
  if (photoInput) {
    photoInput.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          alert("La imagen es muy pesada. Por favor sube una foto menor a 5MB.");
          photoInput.value = "";
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          photoBase64 = evt.target.result;
          photoImg.src = photoBase64;
          photoPreview.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (removePhotoBtn) {
    removePhotoBtn.addEventListener("click", () => {
      photoInput.value = "";
      photoBase64 = null;
      photoPreview.classList.add("hidden");
    });
  }

  // Envío del formulario
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const vecino = document.getElementById("report-nombre").value.trim() || "Vecino Anónimo";
      const ubicacion = document.getElementById("report-ubicacion").value.trim();
      const zona = document.getElementById("report-zona").value;
      const tipo = document.getElementById("report-tipo").value;
      const urgencia = document.getElementById("report-urgencia").value;
      const comentario = document.getElementById("report-comentario").value.trim();

      if (!ubicacion) {
        alert("Por favor ingresa la dirección o punto de referencia del problema.");
        return;
      }

      const nuevoId = "REP-" + Math.floor(1000 + Math.random() * 9000);

      // Foto por defecto si el usuario no subió una
      const defaultPhotos = [
        "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=500&q=80"
      ];
      const finalPhoto = photoBase64 || defaultPhotos[Math.floor(Math.random() * defaultPhotos.length)];

      const nuevoReporte = {
        id: nuevoId,
        vecino: vecino,
        ubicacion: ubicacion,
        zona: zona,
        tipo: tipo,
        urgencia: urgencia,
        fecha: "Recién registrado",
        estado: "En proceso",
        estadoClass: "bg-amber-100 text-amber-800 border-amber-300",
        comentario: comentario || "Reporte generado por vecino para inspección municipal y comunitaria.",
        fotoUrl: finalPhoto
      };

      // Guardar en localStorage
      const reportesGuardados = getStoredReports();
      reportesGuardados.unshift(nuevoReporte);
      localStorage.setItem("comunidadLimpia_reportes", JSON.stringify(reportesGuardados));

      // Mostrar modal de éxito
      showSuccessModal(nuevoId, ubicacion);

      // Resetear formulario
      form.reset();
      photoBase64 = null;
      if (photoPreview) photoPreview.classList.add("hidden");

      // Actualizar vista del tablero
      renderReportsBoard();
    });
  }
}

// Obtener reportes almacenados o iniciales
function getStoredReports() {
  const local = localStorage.getItem("comunidadLimpia_reportes");
  if (local) {
    try {
      return JSON.parse(local);
    } catch (e) {
      return [...reportesIniciales];
    }
  }
  return [...reportesIniciales];
}

// 5. Tablero de Reportes Comunitarios en Vivo
function initReportBoard() {
  renderReportsBoard();

  const resetBtn = document.getElementById("btn-reset-demo-reports");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("¿Deseas reiniciar los reportes al estado de demostración?")) {
        localStorage.removeItem("comunidadLimpia_reportes");
        renderReportsBoard();
      }
    });
  }
}

function renderReportsBoard() {
  const container = document.getElementById("community-reports-container");
  if (!container) return;

  const reportes = getStoredReports();
  container.innerHTML = "";

  if (reportes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-10 text-slate-500">
        <i class="fa-solid fa-circle-check text-4xl text-emerald-500 mb-2"></i>
        <p>No hay reportes pendientes. ¡Nuestras calles se mantienen limpias!</p>
      </div>
    `;
    return;
  }

  reportes.forEach(rep => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="relative h-44 overflow-hidden bg-slate-100">
          <img src="${rep.fotoUrl}" alt="Foto de reporte" class="w-full h-full object-cover transition duration-300 hover:scale-105" loading="lazy">
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
            #${rep.id}
          </span>
          <span class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${rep.estadoClass}">
            <i class="fa-solid fa-clock mr-1"></i>${rep.estado}
          </span>
        </div>
        <div class="p-5">
          <div class="flex items-center gap-2 text-xs text-emerald-700 font-semibold uppercase tracking-wider mb-1">
            <i class="fa-solid fa-map-pin"></i> ${rep.zona}
          </div>
          <h4 class="font-bold text-slate-900 text-base leading-snug mb-2">
            ${rep.tipo}
          </h4>
          <p class="text-xs text-slate-500 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot text-slate-400"></i> ${rep.ubicacion}
          </p>
          <p class="text-slate-600 text-sm line-clamp-3 mb-4">
            "${rep.comentario}"
          </p>
        </div>
      </div>
      <div class="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Reportado por: <strong>${rep.vecino}</strong></span>
        <span>${rep.fecha}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Modal de éxito al reportar
function showSuccessModal(id, ubicacion) {
  const modal = document.getElementById("modal-report-success");
  const modalId = document.getElementById("modal-report-id");
  const modalLoc = document.getElementById("modal-report-loc");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  if (modalId) modalId.textContent = `#${id}`;
  if (modalLoc) modalLoc.textContent = ubicacion;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}

// 6. Consejos y Calculadora de Hábitos Verdes
function initEcoHabits() {
  const checkboxes = document.querySelectorAll(".eco-habit-checkbox");
  const scoreText = document.getElementById("eco-score-text");
  const progressBar = document.getElementById("eco-progress-bar");
  const badgeTitle = document.getElementById("eco-badge-title");

  if (!checkboxes.length || !progressBar) return;

  function updateScore() {
    const total = checkboxes.length;
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / total) * 100);
    progressBar.style.width = `${percent}%`;

    if (scoreText) {
      scoreText.textContent = `${percent}%`;
    }

    if (badgeTitle) {
      if (percent === 100) {
        badgeTitle.textContent = "🏆 ¡Guardián Ambiental Diamante! Eres un ejemplo comunitario.";
        badgeTitle.className = "text-emerald-700 font-bold text-sm";
      } else if (percent >= 60) {
        badgeTitle.textContent = "🌱 ¡Vecino Comprometido! Vas por excelente camino.";
        badgeTitle.className = "text-emerald-600 font-semibold text-sm";
      } else if (percent > 0) {
        badgeTitle.textContent = "✨ Buen comienzo. Marca más hábitos para mejorar tu impacto.";
        badgeTitle.className = "text-blue-600 font-medium text-sm";
      } else {
        badgeTitle.textContent = "Haz clic en las acciones para calcular tu huella positiva hoy.";
        badgeTitle.className = "text-slate-500 text-sm";
      }
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateScore);
  });
}

// 7. Formulario de Contacto y Sugerencias
function initContactForm() {
  const form = document.getElementById("form-contacto");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("contact-nombre").value;
    alert(`¡Muchas gracias ${nombre}! Hemos recibido tu mensaje y sugerencia para el equipo de Comunidad Limpia. Juntos hacemos la diferencia.`);
    form.reset();
  });
}

// 8. Botón Scroll Top
function initScrollTop() {
  const btn = document.getElementById("btn-scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.remove("hidden-btn");
      btn.classList.add("visible-btn");
    } else {
      btn.classList.add("hidden-btn");
      btn.classList.remove("visible-btn");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

