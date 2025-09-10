 document.addEventListener('DOMContentLoaded', () => {
    const btnHamburguesa = document.querySelector('.hamburguesa');
    const menu = document.getElementById('menu-principal');

    // Mensajes de ayuda en consola si algo falta
    if (!btnHamburguesa) {
      console.error('No se encontró el botón .hamburguesa');
      return;
    }
    if (!menu) {
      console.error('No se encontró el elemento #menu-principal');
      return;
    }

    // Listener para alternar la clase 'activo' y aria-expanded
    btnHamburguesa.addEventListener('click', () => {
      const activo = menu.classList.toggle('activo'); // true si ahora está abierto
      btnHamburguesa.setAttribute('aria-expanded', activo);
      console.log('Hamburguesa clickeada — menu activo:', activo);
    });
  });