document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los elementos necesarios
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('lightbox-modal');
    const modalImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;

    // Función para abrir el modal
    function openModal(index) {
        currentIndex = index;
        modalImage.src = galleryImages[currentIndex].src;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura el scroll
    }

    // Función para mostrar la imagen anterior
    function showPrevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        modalImage.src = galleryImages[currentIndex].src;
    }

    // Función para mostrar la imagen siguiente
    function showNextImage() {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        modalImage.src = galleryImages[currentIndex].src;
    }

    // --- Event Listeners ---

    // Abrir modal al hacer clic en una imagen
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            openModal(index);
        });
    });

    // Cerrar modal con el botón 'x'
    closeBtn.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navegación con flechas
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Navegación con teclado (flechas y Escape)
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
});
