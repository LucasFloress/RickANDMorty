document.addEventListener('DOMContentLoaded', function () {
    const seasonCards = document.querySelectorAll('.season-card');

    seasonCards.forEach(card => {
        card.addEventListener('click', () => {
            // Primero, cerramos cualquier otro resumen que esté abierto
            seasonCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.querySelector('.season-summary').classList.remove('active');
                }
            });

            // Luego, abrimos o cerramos el resumen de la tarjeta clickeada
            const summary = card.querySelector('.season-summary');
            summary.classList.toggle('active');
        });
    });
});