// Lógica del Motor de Búsqueda Simple
function searchHistory() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let info = card.getAttribute('data-info').toLowerCase();
        if (info.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Lógica del Formulario
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('userEmail').value;

    alert(`¡Gracias! Se ha enviado el saludo a: ${email}\n"Eres un gran fan de Breaking Benjamin. ¡Saludos!"`);
    
    // Aquí podrías integrar EmailJS para que el envío sea real.
});