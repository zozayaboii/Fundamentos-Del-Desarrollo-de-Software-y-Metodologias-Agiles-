// Navegacion SPA (Single Page Application)
function switchView(viewId, element) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    const btnPerfil = document.getElementById('btn-perfil');
    btnPerfil.classList.remove('btn-light', 'text-primary');
    btnPerfil.classList.add('btn-outline-light');
    
    document.getElementById('view-' + viewId).classList.add('active');
    
    if (viewId === 'perfil') {
        btnPerfil.classList.remove('btn-outline-light');
        btnPerfil.classList.add('btn-light', 'text-primary');
    } else if (element) {
        element.classList.add('active');
    }

    if (viewId === 'mapa' && map) {
        setTimeout(() => map.invalidateSize(), 200);
    }

    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
}

// Inicializacion del Mapa Leaflet
var map = L.map('map').setView([-34.4587, -58.9141], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Trazado de ruta teorica para la Linea 510
var route510 = [
    [-34.4560, -58.9120], [-34.4575, -58.9135], 
    [-34.4600, -58.9140], [-34.4620, -58.9120]
];
L.polyline(route510, {
    color: '#1b6ca8', 
    weight: 4, 
    opacity: 0.7, 
    dashArray: '10, 10'
}).addTo(map).bindPopup("Recorrido Troncal 510");

// Marcadores vectoriales de colectivos
var busIcon1 = L.divIcon({
    html: '<div class="bus-marker-icon">510</div>',
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
});

var busIcon2 = L.divIcon({
    html: '<div class="bus-marker-icon bus-marker-warning">520</div>',
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
});

var bus1 = L.marker([-34.4560, -58.9120], {icon: busIcon1}).addTo(map)
    .bindPopup("<b>Linea 510 - Interno 24</b><br>Estado: En Horario<br>Velocidad: 32 km/h");
    
var bus2 = L.marker([-34.4600, -58.9160], {icon: busIcon2}).addTo(map)
    .bindPopup("<b>Linea 520 - Interno 12</b><br>Estado: Con Demora<br>Velocidad: 18 km/h");

// Simulacion GPS en tiempo real
setInterval(function() {
    var lat1 = bus1.getLatLng().lat + (Math.random() - 0.5) * 0.0006;
    var lng1 = bus1.getLatLng().lng + (Math.random() - 0.5) * 0.0006;
    bus1.setLatLng([lat1, lng1]);

    var lat2 = bus2.getLatLng().lat + (Math.random() - 0.5) * 0.0006;
    var lng2 = bus2.getLatLng().lng + (Math.random() - 0.5) * 0.0006;
    bus2.setLatLng([lat2, lng2]);
}, 2500);

// Notificaciones Toast y Badge
function showToast(message) {
    document.getElementById('toastMessage').innerText = message;
    const toast = new bootstrap.Toast(document.getElementById('appToast'));
    toast.show();
}

function clearNotifBadge() {
    const badge = document.getElementById('notif-badge');
    if (badge) badge.style.display = 'none';
}

// Formularios SUBE y Reclamos
function handleSubeRecharge(e) {
    e.preventDefault();
    showToast('Carga de SUBE acreditada con exito. Listo para viajar.');
    e.target.reset();
}

function handleClaimSubmit(e) {
    e.preventDefault();
    const ticketNum = Math.floor(100000 + Math.random() * 900000);
    showToast('Reclamo #' + ticketNum + ' enviado a la Municipalidad.');
    e.target.reset();
}

// Seccion Feedback Beta
function setRating(rating) {
    document.getElementById('feedbackRating').value = rating;
    const stars = document.querySelectorAll('#starContainer .star-rating');
    stars.forEach(star => {
        const val = parseInt(star.getAttribute('data-val'));
        star.classList.toggle('active', val <= rating);
    });
}

function handleFeedbackSubmit(e) {
    e.preventDefault();
    const rating = parseInt(document.getElementById('feedbackRating').value);
    const category = document.getElementById('feedbackCategory').value;
    const comment = document.getElementById('feedbackComment').value;

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        starsHtml += i <= rating ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star"></i>';
    }

    const newItem = document.createElement('div');
    newItem.className = 'p-3 rounded bg-light border';
    newItem.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-1">
            <strong class="small">${category}</strong>
            <span class="text-warning small">${starsHtml}</span>
        </div>
        <p class="mb-1 small text-dark">"${comment}"</p>
        <small class="text-muted">Tu aporte - Recien</small>
    `;

    const list = document.getElementById('feedbackList');
    list.insertBefore(newItem, list.firstChild);

    showToast('Feedback registrado para la proxima Sprint Review.');
    e.target.reset();
    setRating(4);
}

// Seccion Perfil y Favoritos
function toggleFavoriteCard(card) {
    card.classList.toggle('selected');
    const icon = card.querySelector('i');
    if (card.classList.contains('selected')) {
        icon.classList.remove('bi-heart', 'text-secondary');
        icon.classList.add('bi-heart-fill', 'text-danger');
    } else {
        icon.classList.remove('bi-heart-fill', 'text-danger');
        icon.classList.add('bi-heart', 'text-secondary');
    }
}

function updateProfileName() {
    const newName = document.getElementById('profileNameInput').value.trim();
    if (newName) {
        document.getElementById('profileDisplayName').innerText = newName;
        showToast('Datos de perfil actualizados.');
    }
}

function saveProfilePreferences() {
    showToast('Lineas favoritas y alertas Push guardadas.');
}
